import { put, takeEvery, select } from 'redux-saga/effects';
import {
  UPDATE_LOCAL_CART_DATA,
  SYNC_CART_ERROR,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  EDIT_CART_REQUEST,
} from 'containers/Cart/redux/constants';

import { LOGIN_SUCCESS } from 'containers/Auth/redux/constants';

import {
  APPLY_ADDRESS_DATA_SUCCESS,
  APPLY_COUPON_CODE_SUCCESS,
  APPLY_OR_REMOVE_WALLET_BALANCE_SUCCESS,
  CONFIRM_ORDER_ERROR,
  SET_PAYMENT_METHOD,
  REINITIALIZE_CHECKOUT,
  PLACE_ORDER_ERROR,
} from 'containers/Checkout/redux/constants';

import { makeSelectCartItemsLength } from 'containers/Cart/redux/selectors';
import { getTotalsRequest, reinitializeCheckout } from 'containers/Checkout/redux/actions';
import { makeSelectHasPlacedOrder } from './selectors';


function* updateTotalsObserver(action) {
  const hasPlacedOrder = yield select(makeSelectHasPlacedOrder());
  if (hasPlacedOrder && monitoredActionsForReinitializingCheckout(action)) {
    yield put(reinitializeCheckout({ preserveMeta: true }));
  }
  if (yield select(makeSelectCartItemsLength())) {
    yield put(getTotalsRequest());
  }
}

function* reinitializeCheckoutObserver() {
  const hasPlacedOrder = yield select(makeSelectHasPlacedOrder());
  if (hasPlacedOrder) {
    yield put(reinitializeCheckout({ preserveMeta: true }));
  }
}

function monitoredActionsForUpdatingTotals(action) {
  return [
    UPDATE_LOCAL_CART_DATA,
    SYNC_CART_ERROR,
    APPLY_COUPON_CODE_SUCCESS,
    APPLY_ADDRESS_DATA_SUCCESS,
    APPLY_OR_REMOVE_WALLET_BALANCE_SUCCESS,
    REINITIALIZE_CHECKOUT,
    LOGIN_SUCCESS,
    CONFIRM_ORDER_ERROR,
    SET_PAYMENT_METHOD,
    'refetchCartTotals',
  ].includes(action.type);
}

function monitoredActionsForReinitializingCheckout(action) {
  return [
    APPLY_COUPON_CODE_SUCCESS,
    APPLY_ADDRESS_DATA_SUCCESS,
    APPLY_OR_REMOVE_WALLET_BALANCE_SUCCESS,
    LOGIN_SUCCESS,
    CONFIRM_ORDER_ERROR,
    PLACE_ORDER_ERROR,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    EDIT_CART_REQUEST,
  ].includes(action.type);
}

export default [
  takeEvery(monitoredActionsForUpdatingTotals, updateTotalsObserver),
  takeEvery(monitoredActionsForReinitializingCheckout, reinitializeCheckoutObserver),
];
