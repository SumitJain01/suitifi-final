import { OPEN_MODAL, CLOSE_MODAL, INIT_APP_STATE, SET_CURRENCY, SET_EXCHANGE_RATES, SET_APP_WIDTH , SET_ME_FE, SHOW_SNACK_BAR, HIDE_SNACK_BAR  ,SHOW_SNACK_BAR_PDP, HIDE_SNACK_BAR_PDP } from './constants';

export function initAppState(payload = {}) {
  return {
    type: INIT_APP_STATE,
    payload,
  };
}

export function openModal(payload) {
  return {
    type: OPEN_MODAL,
    payload,
  };
}

export function setMEFE(payload) {
  return {
    type: SET_ME_FE,
    payload
  }
}

export function closeModal(payload) {
  return {
    type: CLOSE_MODAL,
    payload,
  };
}

export function showSnackBar(payload) {
  return {
    type: SHOW_SNACK_BAR,
    payload,
  };
}

export function hideSnackBar(payload) {
  return {
    type: HIDE_SNACK_BAR,
    payload,
  };
}
export function showSnackBarPDP(payload) {
  return {
    type: SHOW_SNACK_BAR_PDP,
    payload,
  };
}

export function hideSnackBarPDP(payload) {
  return {
    type: HIDE_SNACK_BAR_PDP,
    payload,
  };
}
