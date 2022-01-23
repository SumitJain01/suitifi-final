import * as actionTypes from './constants';

export function loadProductRequest(payload) {
  return {
    type: actionTypes.LOAD_PRODUCT,
    payload,
  };
}

export function loadProductSuccess(payload) {
  return {
    type: actionTypes.LOAD_PRODUCT_SUCCESS,
    payload,
  };
}

export function loadProductError(error) {
  return {
    type: actionTypes.LOAD_PRODUCT_ERROR,
    error,
  };
}

export function loadProductIdle() {
  return {
    type: actionTypes.LOAD_PRODUCT_IDLE,
  };
}

export function getReviewsRequest(payload) {
  return {
    type: actionTypes.GET_REVIEWS,
    payload,
  };
}

export function getReviewsSuccess(payload) {
  return {
    type: actionTypes.GET_REVIEWS_SUCCESS,
    payload,
  };
}

export function getReviewsError(payload) {
  return {
    type: actionTypes.GET_REVIEWS_ERROR,
    payload,
  };
}

export function getReviewsIdle() {
  return {
    type: actionTypes.GET_REVIEWS_IDLE,
  };
}

export function getRelatedRequest(payload) {
  return {
    type: actionTypes.GET_RELATED_REQUEST,
    payload,
  };
}

export function getRelatedSuccess(payload) {
  return {
    type: actionTypes.GET_RELATED_SUCCESS,
    payload,
  };
}

export function getRelatedError(payload) {
  return {
    type: actionTypes.GET_RELATED_ERROR,
    payload,
  };
}

export function getRelatedIdle() {
  return {
    type: actionTypes.GET_RELATED_IDLE,
  };
}

export function getUpsellsRequest(payload) {
  return {
    type: actionTypes.GET_UPSELLS_REQUEST,
    payload,
  };
}

export function getUpsellsSuccess(payload) {
  return {
    type: actionTypes.GET_UPSELLS_SUCCESS,
    payload,
  };
}

export function getUpsellsError(payload) {
  return {
    type: actionTypes.GET_UPSELLS_ERROR,
    payload,
  };
}

export function getUpsellsIdle() {
  return {
    type: actionTypes.GET_UPSELLS_IDLE,
  };
}

export function getCrossSellsRequest(payload) {
  return {
    type: actionTypes.GET_CROSS_SELLS_REQUEST,
    payload,
  };
}

export function getCrossSellsSuccess(payload) {
  return {
    type: actionTypes.GET_CROSS_SELLS_SUCCESS,
    payload,
  };
}

export function getCrossSellsError(payload) {
  return {
    type: actionTypes.GET_CROSS_SELLS_ERROR,
    payload,
  };
}

export function getCrossSellsIdle() {
  return {
    type: actionTypes.GET_CROSS_SELLS_IDLE,
  };
}
