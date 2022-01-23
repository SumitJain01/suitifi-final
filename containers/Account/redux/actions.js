import cogotoast from 'lib/toast';
import * as actionTypes from './constants';

export function fetchOrderRequestAxn(payload) {
  return {
    type: actionTypes.FETCH_ORDER_REQUEST,
    payload,
  };
}

export function fetchOrderSuccess(payload) {
  return {
    type: actionTypes.FETCH_ORDER_SUCCESS,
    payload,
  };
}

export function fetchOrderError(error) {
  return {
    type: actionTypes.FETCH_ORDER_ERROR,
    error,
  };
}

export function fetchOrderIdle() {
  return {
    type: actionTypes.FETCH_ORDER_IDLE,
  };
}

export function customerPurchasedProductsRequest(payload) {
  return {
    type: actionTypes.CUSTOMER_PURCHASED_PRODUCTS_REQUEST,
    payload,
  }
}

export function customerPurchasedProductsSuccess(payload) {
  return {
    type: actionTypes.CUSTOMER_PURCHASED_PRODUCTS_SUCCESS,
    payload,
  }
}

export function customerPurchasedProductsError(payload) {
  return {
    type: actionTypes.CUSTOMER_PURCHASED_PRODUCTS_ERROR,
    payload,
  }
}

export function listOrdersRequest(payload) {
  return {
    type: actionTypes.LIST_ORDERS_REQUEST,
    payload,
  };
}

export function listOrdersSuccess(payload) {
  return {
    type: actionTypes.LIST_ORDERS_SUCCESS,
    payload,
  };
}

export function listOrdersError(error) {
  return {
    type: actionTypes.LIST_ORDERS_ERROR,
    error,
  };
}

export function listOrdersIdle() {
  return {
    type: actionTypes.LIST_ORDERS_IDLE,
  };
}

export function fetchUserInfoRequest(payload) {
  return {
    type: actionTypes.FETCH_USER_INFO_REQUEST,
    payload,
  };
}

export function fetchUserInfoSuccess(payload) {
  return {
    type: actionTypes.FETCH_USER_INFO_SUCCESS,
    payload,
  };
}

export function fetchUserInfoError(error) {
  return {
    type: actionTypes.FETCH_USER_INFO_ERROR,
    error,
  };
}

export function fetchUserInfoIdle() {
  return {
    type: actionTypes.FETCH_USER_INFO_IDLE,
  };
}

export function editUserInfoRequest(payload) {
  return {
    type: actionTypes.EDIT_USER_INFO_REQUEST,
    payload,
  };
}

export function editUserInfoSuccess(payload) {
  cogotoast.success('Saved.');
  return {
    type: actionTypes.EDIT_USER_INFO_SUCCESS,
    payload,
  };
}

export function editUserInfoError(error) {
  cogotoast.error(error.message);
  return {
    type: actionTypes.EDIT_USER_INFO_ERROR,
    error,
  };
}

export function editUserInfoIdle() {
  return {
    type: actionTypes.EDIT_USER_INFO_IDLE,
  };
}

export function getCreditBalanceRequest(payload) {
  return {
    type: actionTypes.GET_CREDIT_BALANCE_REQUEST,
    payload,
  };
}

export function getCreditBalanceSuccess(payload) {
  return {
    type: actionTypes.GET_CREDIT_BALANCE_SUCCESS,
    payload,
  };
}


export function getCreditBalanceError(error) {
  return {
    type: actionTypes.GET_CREDIT_BALANCE_ERROR,
    error,
  };
}

export function getCreditBalanceIdle() {
  return {
    type: actionTypes.GET_CREDIT_BALANCE_IDLE,
  };
}

export function editUserAddressRequest(payload) {
  return {
    type: actionTypes.EDIT_USER_ADDRESS_REQUEST,
    payload,
  };
}

export function editUserAddressSuccess(payload) {
  cogotoast.success('Saved.');
  return {
    type: actionTypes.EDIT_USER_ADDRESS_SUCCESS,
    payload,
  };
}

export function editUserAddressError(error) {
  return {
    type: actionTypes.EDIT_USER_ADDRESS_ERROR,
    error,
  };
}

export function editUserAddressIdle(payload) {
  return {
    type: actionTypes.EDIT_USER_ADDRESS_IDLE,
    payload,
  };
}

export function deleteUserAddressRequest(payload) {
  return {
    type: actionTypes.DELETE_USER_ADDRESS_REQUEST,
    payload,
  };
}

export function deleteUserAddressSuccess(payload) {
  cogotoast.success('Deleted.');
  return {
    type: actionTypes.DELETE_USER_ADDRESS_SUCCESS,
    payload,
  };
}

export function deleteUserAddressError(error) {
  return {
    type: actionTypes.DELETE_USER_ADDRESS_ERROR,
    error,
  };
}

export function deleteUserAddressIdle(payload) {
  return {
    type: actionTypes.DELETE_USER_ADDRESS_IDLE,
    payload,
  };
}

export function setCOSM(payload) {
  return {
      type: actionTypes.SET_IS_COSM,
      payload, 
  }
}