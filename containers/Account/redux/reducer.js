/* eslint-disable default-case, no-param-reassign */
import produce from 'immer';
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from 'containers/Auth/redux/constants';
import { clone } from 'ramda';

import * as actionTypes from './constants';

export const initialState = {
  loading: false,
  error: false,
  isCOSM: false,
  data: {
    userInfo: false,
    orderList: [],
    balance: false,
    orderedProducts: false,
  },
};

function accountReducer(state = clone(initialState), { type, payload, error }) {
  return produce(state, (draft) => {
    switch (type) {
      case actionTypes.FETCH_USER_INFO_REQUEST: {
        draft.loading = true;
        draft.error = false;
        break;
      }
      case actionTypes.FETCH_USER_INFO_SUCCESS: {
        draft.loading = false;
        draft.error = false;
        draft.data.userInfo = payload;
        break;
      }
      case actionTypes.FETCH_USER_INFO_ERROR: {
        draft.loading = false;
        draft.error = error;
        draft.data.userInfo = false;
        break;
      }
      case actionTypes.CUSTOMER_PURCHASED_PRODUCTS_REQUEST: {
        draft.loading = false;
        draft.error = false;
        draft.data.orderedProducts = false;
        break;
      }
      case actionTypes.CUSTOMER_PURCHASED_PRODUCTS_SUCCESS: {
        draft.loading = false;
        draft.error = false;
        draft.data.orderedProducts = payload.slice(0,5);
        break;
      }
      case actionTypes.CUSTOMER_PURCHASED_PRODUCTS_ERROR: {
        draft.loading = false;
        draft.error = false;
        draft.data.orderedProducts = false;
        break;
      }
      case actionTypes.LIST_ORDERS_REQUEST: {
        draft.loading = true;
        draft.error = false;
        break;
      }
      case actionTypes.LIST_ORDERS_SUCCESS: {
        draft.loading = false;
        draft.error = false;
        /* commented for future reference */
        // draft.data.orderItems = map(makeConsumableOrderResponse, payload);
        draft.data.orderList.push(...payload);
        break;
      }
      case actionTypes.LIST_ORDERS_ERROR: {
        draft.loading = false;
        draft.error = error;
        draft.data.orderList = [];
        break;
      }
      case actionTypes.EDIT_USER_INFO_SUCCESS: {
        draft.loading = false;
        draft.error = false;
        draft.data.userInfo = payload.account;
        break;
      }
      case actionTypes.GET_CREDIT_BALANCE_REQUEST: {
        draft.loading = true;
        break;
      }
      case actionTypes.GET_CREDIT_BALANCE_SUCCESS: {
        draft.loading = false;
        draft.error = false;
        draft.data.balance = payload;
        break;
      }
      case actionTypes.GET_CREDIT_BALANCE_ERROR: {
        draft.loading = false;
        draft.error = error.message;
        break;
      }
      case actionTypes.SET_IS_COSM: {
        draft.isCOSM = payload;
        break;
      }
      case actionTypes.EDIT_USER_ADDRESS_SUCCESS: {
        const inx = draft.data.userInfo.addresses.findIndex(a => a.id === payload.id);
        draft.data.userInfo.addresses[inx] = {
          ...draft.data.userInfo.addresses[inx],
          ...payload,
        };
        break;
      }
      case actionTypes.DELETE_USER_ADDRESS_SUCCESS: {
        draft.data.userInfo.addresses = draft.data.userInfo.addresses.filter(a => a.id !== payload.id);
        break;
      }
      case LOGIN_SUCCESS:
      case LOGOUT_SUCCESS: {
        draft.loading = false;
        draft.error = false;
        draft.data = initialState.data;
        break;
      }
    }
  });
}

export default accountReducer;
