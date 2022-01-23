import * as actionTypes from './constants';

export function homePageCarouselsRequest(payload) {
  return {
    type: actionTypes.HOMEPAGE_CAROUSELS_REQUEST,
    payload,
  };
}

export function homePageCarouselsSuccess(payload) {
  return {
    type: actionTypes.HOMEPAGE_CAROUSELS_SUCCESS,
    payload,
  };
}

export function homePageCarouselsError(payload) {
  return {
    type: actionTypes.HOMEPAGE_CAROUSELS_ERROR,
    payload,
  };
}