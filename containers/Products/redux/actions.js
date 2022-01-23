import * as actionTypes from './constants';

export function loadProductsRequest(payload) {
  return {
    type: actionTypes.LOAD_PRODUCTS,
    payload,
  };
}

export function loadProductsSuccess(payload) {
  return {
    type: actionTypes.LOAD_PRODUCTS_SUCCESS,
    payload,
  };
}

export function loadProductsError(error) {
  return {
    type: actionTypes.LOAD_PRODUCTS_ERROR,
    error,
  };
}

export function loadIsInStockRequest() {
  return {
    type: actionTypes.LOAD_IN_STOCK_DATA_REQUEST,
  }
}

export function loadIsInStockSuccess(payload) {
  return {
    type: actionTypes.LOAD_IN_STOCK_DATA_SUCCESS,
    payload
  }
}

export function loadIsInStockError(error) {
  return {
    type: actionTypes.LOAD_IN_STOCK_DATA_ERROR,
    error
  }
}

export function setSortBy(payload) {
  return {
    type: actionTypes.SET_SORT_BY,
    payload,
  };
}

export function resetSortBy(payload) {
  return {
    type: actionTypes.RESET_SORT_BY,
    payload,
  };
}

export function setFilterBy(payload) {
  return {
    type: actionTypes.SET_FILTER_BY,
    payload,
  };
}

export function resetFilterBy(payload) {
  return {
    type: actionTypes.RESET_FILTER_BY,
    payload,
  };
}
