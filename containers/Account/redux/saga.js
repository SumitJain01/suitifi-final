import {
  call,
  put,
  takeLatest,
  takeEvery,
  select,
} from 'redux-saga/effects';
import request from 'lib/request';
import config from 'config/env';
import {
  isObject,
  isNonEmptyArray,
  renameKeys,
} from 'ramda-adjunct';
import { LOGIN_SUCCESS } from 'containers/Auth/redux/constants';
import { makeSelectUserId, makeSelectLoggedIn } from 'containers/Auth/redux/selectors';
import {
  getCreditBalanceSuccess,
  getCreditBalanceError,
  fetchUserInfoSuccess,
  fetchUserInfoError,
  editUserInfoSuccess,
  editUserInfoError,
  customerPurchasedProductsSuccess,
  customerPurchasedProductsError,
  listOrdersSuccess,
  listOrdersError,
  editUserAddressSuccess,
  editUserAddressError,
  fetchUserInfoRequest,
  deleteUserAddressSuccess,
  deleteUserAddressError,
} from './actions';
import { makeSelectUserInfo } from './selectors';
import {
  FETCH_USER_INFO_REQUEST,
  EDIT_USER_INFO_REQUEST,
  GET_CREDIT_BALANCE_REQUEST,
  EDIT_USER_ADDRESS_REQUEST,
  DELETE_USER_ADDRESS_REQUEST,
  CUSTOMER_PURCHASED_PRODUCTS_REQUEST
} from './constants';
import makeClevertap from "lib/makeClevertap";
import { PAGE_LIMIT } from 'utils/constants';

const clevertap = makeClevertap();

function* dispatchFetchUser() {
  yield put(fetchUserInfoRequest());
}

function* fetchUserSaga() {
  const userId = yield select(makeSelectUserId());
  if (userId) {
    const requestURL = `https://tdc-nd-api.honasa-staging.net/v1/users/info/${userId}`;
    try {
      const data = yield call(request, requestURL);
      if (isNonEmptyArray(data && data.addresses)) {
        data.addresses.forEach((address) => {
          if (isObject(address.region)) {
            address.region = address.region.region;
          }
        });
      }
      yield put(fetchUserInfoSuccess(data));
    } catch (error) {
      yield put(fetchUserInfoError(error));
    }
  }
}

function* editUserSaga({
  payload,
}) {
  const userId = yield select(makeSelectUserId());
  const { custom_attributes } = yield select(makeSelectUserInfo());
  const requestURL = `https://tdc-nd-api.honasa-staging.net/v1/users/info/${userId}`;
  try {
    const data = yield call(request, requestURL, {
      method: 'PUT',
      body: JSON.stringify({ ...payload, custom_attributes }),
    });
    if (isNonEmptyArray(data.account && data.account.addresses)) {
      data.account.addresses.forEach((address) => {
        if (isObject(address.region)) {
          address.region = address.region.region;
        }
      });
    }
    yield put(editUserInfoSuccess(data));
  } catch (error) {
    yield put(editUserInfoError(error));
  }
}

/*
Fetch Orders Logic moved to local component state (modules/account/components/orderList/index.js) 
*/

// function* fetchUserOrdersSaga({ payload: { orderPageNumber } }) {
//   const userId = yield select(makeSelectUserId());
//   const requestURL = `https://tdc-nd-api.honasa-staging.net/v1/users/fetchOrders/${userId}?pagenumber=${orderPageNumber}&pagelimit=${PAGE_LIMIT}`;
//   try {
//     const data = yield call(request, requestURL);
//     if (Array.isArray(data) && !data.length) {
//       yield put(showNoMoreOrders());
//     }
//     yield put(listOrdersSuccess(data));
//   } catch (error) {
//     yield put(listOrdersError(error));
//   }
// }

function* getCreditBalanceSaga() {
  const userId = yield select(makeSelectUserId());
  try {
    const requestURL = `https://tdc-nd-api.honasa-staging.net/v1/users/creditBalance/${userId}`;
    const data = yield call(request, requestURL);
    clevertap.profile.push({
      Site:{
        lastwalletbalance:data.balance,
      }
    })
    yield put(getCreditBalanceSuccess(data));
  } catch (err) {
    yield put(getCreditBalanceError(err));
  }
}

function* editUserAddressSaga({
  payload,
}) {
  const requestURL = `https://tdc-nd-api.honasa-staging.net/v1/users/addresses`;
  try {
    yield call(request, requestURL, {
      method: 'PUT',
      body: JSON.stringify({
        userId: yield select(makeSelectUserId()),
        data: payload,
      }),
    });
    yield put(editUserAddressSuccess(renameKeys({ address_id: 'id' }, payload)));
  } catch (error) {
    yield put(editUserAddressError(error));
  }
}

function* deleteUserAddressSaga({
  payload,
}) {
  const requestURL = `https://tdc-nd-api.honasa-staging.net/v1/users/addresses/${payload.id}`;
  try {
    yield call(request, requestURL, {
      method: 'DELETE',
      body: JSON.stringify({
        userId: yield select(makeSelectUserId()),
        data: payload,
      }),
    });
    yield put(deleteUserAddressSuccess(renameKeys({ address_id: 'id' }, payload)));
  } catch (error) {
    yield put(deleteUserAddressError(error));
  }
}

function* fetchUserOrderedProductsSaga() {
  const userId = yield select(makeSelectUserId());
  const isLoggedIn = yield select(makeSelectLoggedIn());
  const requestURL = `https://tdc-nd-api.honasa-staging.net/v1/users/getCustomerOrderProducts/${userId}`;
  if (isLoggedIn) {
    try {
      const data = yield call(request, requestURL);
      yield put(customerPurchasedProductsSuccess(data));
    }
    catch (error) {
      yield put(customerPurchasedProductsError(error));
    }
  }
}

export default [
  takeLatest(LOGIN_SUCCESS, dispatchFetchUser),
  takeLatest(FETCH_USER_INFO_REQUEST, fetchUserSaga),
  takeEvery(EDIT_USER_INFO_REQUEST, editUserSaga),
  takeLatest(GET_CREDIT_BALANCE_REQUEST, getCreditBalanceSaga),
  takeLatest(CUSTOMER_PURCHASED_PRODUCTS_REQUEST, fetchUserOrderedProductsSaga),
  takeEvery(EDIT_USER_ADDRESS_REQUEST, editUserAddressSaga),
  takeEvery(DELETE_USER_ADDRESS_REQUEST, deleteUserAddressSaga),
];
