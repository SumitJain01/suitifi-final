/* eslint-disable no-return-await */
import { takeEvery, race, take, put, select } from 'redux-saga/effects';
import { path } from 'ramda';
import config from 'config/env';

import {
  refreshTokenRequest,
  refreshTokenSuccess,
  refreshTokenError,
  logoutRequest,
} from 'containers/Auth/redux/actions';

import { SYNC_CART_ERROR } from 'containers/Cart/redux/constants';

import { makeSelectIsTokenRefreshing } from 'containers/Auth/redux/selectors';

const ignoreActionTypes = ['REFRESH_TOKEN', 'LOGOUT'];

function monitorableAction(action) {
  return (action.type
    .includes('REQUEST')
    || action.type.endsWith('_TO_CART') || action.type.endsWith('_FROM_CART'))
    && ignoreActionTypes.every(fragment => !action.type.includes(fragment));
}

function identifyAction(action) {
  return action.type.split('_').slice(0, -1).join('_');
}

function getSuccessType(action) {
  if (action.type.endsWith('_TO_CART') || action.type.endsWith('_FROM_CART')) {
    return 'refetchCartTotals';
  }
  return `${identifyAction(action)}_SUCCESS`;
}

function getFailType(action) {
  if (action.type.endsWith('_TO_CART') || action.type.endsWith('_FROM_CART')) {
    return SYNC_CART_ERROR;
  }
  return `${identifyAction(action)}_ERROR`;
}

function* tokenRefreshSaga(monitoredAction) {
  const { fail } = yield race({
    success: take(getSuccessType(monitoredAction)),
    fail: take(getFailType(monitoredAction)),
  });
  if (fail) {
    const code = path(['error', 'response', 'status'], fail) || (fail.error && (fail.error.code || fail.error.status));
    const message = path(['error', 'message'], fail);
    if (code === 401) {
      if (message === 'No auth token') {
        yield put(logoutRequest());
      } else {
        if (!(yield select(makeSelectIsTokenRefreshing()))) {
          yield put(refreshTokenRequest());
        }
        const { success } = yield race({
          success: take(refreshTokenSuccess().type),
          fail: take(refreshTokenError().type),
        });
        if (success) {
          // console.log('retrying action after having refreshed token', monitoredAction.type);
          yield put(monitoredAction);
        } else {
          // console.log('token doesn't work, logging user out!', monitoredAction.type);
          yield put(logoutRequest());
        }
      }
    }
  }
}

function* monitor(monitoredAction) {
  // console.log('started monitoring all requests', monitoredAction.type);
  if (yield select(makeSelectIsTokenRefreshing())) {
    const { fail } = yield race({
      success: take(refreshTokenSuccess().type),
      fail: take(refreshTokenError().type),
    });
    if (fail) {
      yield put(() => ({ type: getFailType(monitoredAction) }));
    } else {
      yield put(monitoredAction);
    }
  } else {
    yield* tokenRefreshSaga(monitoredAction);
  }
}

function* errorMonitor({ error, payload }) {
 
}

function errorAction(action) {
  return action.type.includes('_ERROR');
}

export default [
  takeEvery(monitorableAction, monitor),
  takeEvery(errorAction, errorMonitor),
];
