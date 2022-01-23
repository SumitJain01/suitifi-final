import * as actionTypes from "./constants";

export function newPaymentMethod(payload) {
  return {
    type: actionTypes.NEW_PAYMENT_METHOD,
    payload
  };
}

export function setCODAvailability(payload) {
  return {
    type: actionTypes.SET_COD_AVAILABILITY,
    payload
  };
}

export function setPincode(payload) {
  return {
    type: actionTypes.SET_PINCODE,
    payload
  };
}

export function setPaymentMethod(payload) {
  return {
    type: actionTypes.SET_PAYMENT_METHOD,
    payload
  };
}

export function setCustomCheckoutPaymentMethod(payload) {
  return {
    type: actionTypes.SET_CUSTOM_CHECKOUT_PAYMENT_METHOD,
    payload
  }
}

export function setOtpState(payload) {
  return {
    type: actionTypes.SET_OTP_STATE,
    payload
  };
}

export function getTotalsRequest(payload) {
  return {
    type: actionTypes.GET_TOTALS_REQUEST,
    payload
  };
}

export function getTotalsSuccess(payload) {
  return {
    type: actionTypes.GET_TOTALS_SUCCESS,
    payload
  };
}

export function getTotalsError(error) {
  return {
    type: actionTypes.GET_TOTALS_ERROR,
    error
  };
}

export function getTotalsIdle() {
  return {
    type: actionTypes.GET_TOTALS_IDLE
  };
}

export function shippingRequest(payload) {
  return {
    type: actionTypes.SHIPPING_REQUEST,
    payload
  };
}

export function shippingSuccess(payload) {
  return {
    type: actionTypes.SHIPPING_SUCCESS,
    payload
  };
}

export function shippingError(error) {
  return {
    type: actionTypes.SHIPPING_ERROR,
    error
  };
}

export function shippingIdle() {
  return {
    type: actionTypes.SHIPPING_IDLE
  };
}

export function applyOrRemoveWalletBalanceRequest(payload) {
  return {
    type: actionTypes.APPLY_OR_REMOVE_WALLET_BALANCE_REQUEST,
    payload
  };
}

export function applyOrRemoveWalletBalanceSuccess(payload) {
  return {
    type: actionTypes.APPLY_OR_REMOVE_WALLET_BALANCE_SUCCESS,
    payload
  };
}

export function applyOrRemoveWalletBalanceError(error) {
  return {
    type: actionTypes.APPLY_OR_REMOVE_WALLET_BALANCE_ERROR,
    error
  };
}

export function applyOrRemoveWalletBalanceIdle() {
  return {
    type: actionTypes.APPLY_OR_REMOVE_WALLET_BALANCE_IDLE
  };
}

export function applyCouponCodeRequest(payload) {
  return {
    type: actionTypes.APPLY_COUPON_CODE_REQUEST,
    payload
  };
}

export function applyCouponCodeSuccess(payload) {
  return {
    type: actionTypes.APPLY_COUPON_CODE_SUCCESS,
    payload
  };
}

export function applyCouponCodeError(error) {
  return {
    type: actionTypes.APPLY_COUPON_CODE_ERROR,
    error
  };
}

export function applyCouponCodeIdle() {
  return {
    type: actionTypes.APPLY_COUPON_CODE_IDLE
  };
}

export function confirmOrderRequest(payload) {
  return {
    type: actionTypes.CONFIRM_ORDER_REQUEST,
    payload
  };
}
export function thankyouPageLoadRequest(payload) {
  return {
    type: actionTypes.THANKYOU_PAGE_REQUEST,
    payload
  };
}
export function thankyouPageLoadSuccess(payload) {
  return {
    type: actionTypes.THANKYOU_PAGE_SUCCESS,
    payload
  };
}
export function confirmOrderSuccess(payload) {
  // cogoToast.success('Your order has been placed!');
  // Router.pushRoute('checkoutSuccess');
  return {
    type: actionTypes.CONFIRM_ORDER_SUCCESS,
    payload
  };
}

export function confirmOrderError(error) {
  return {
    type: actionTypes.CONFIRM_ORDER_ERROR,
    error
  };
}

export function confirmOrderIdle() {
  return {
    type: actionTypes.CONFIRM_ORDER_IDLE
  };
}

export function reinitializeCheckout(payload) {
  return {
    type: actionTypes.REINITIALIZE_CHECKOUT,
    payload
  };
}

export function applyAddressData(payload) {
  return {
    type: actionTypes.APPLY_ADDRESS_DATA_REQUEST,
    payload
  };
}

export function applyAddressDataSuccess(payload) {
  return {
    type: actionTypes.APPLY_ADDRESS_DATA_SUCCESS,
    payload
  };
}

export function applyAddressDataError(error) {
  return {
    type: actionTypes.APPLY_ADDRESS_DATA_ERROR,
    error
  };
}

export function placeOrderRequest(payload) {
  return {
    type: actionTypes.PLACE_ORDER_REQUEST,
    payload
  };
}

export function placeOrderSuccess(payload) {
  // (pushalertbyiw = window.pushalertbyiw || []).push([
  //   "abandonedCart",
  //   "completed"
  // ]);
  return {
    type: actionTypes.PLACE_ORDER_SUCCESS,
    payload
  };
}

export function placeOrderError(error) {
  return {
    type: actionTypes.PLACE_ORDER_ERROR,
    error
  };
}

export function placeOrderIdle() {
  return {
    type: actionTypes.PLACE_ORDER_IDLE
  };
}

export function paymentSuccess(payload) {
  return {
    type: actionTypes.PAYMENT_SUCCESS,
    payload
  };
}

export function generateOTPRequest(payload) {
  return {
    type: actionTypes.GENERATE_OTP_REQUEST,
    payload
  };
}

export function generateOTPSuccess(payload) {
  return {
    type: actionTypes.GENERATE_OTP_SUCCESS,
    payload
  };
}

export function generateOTPError(error) {
  return {
    type: actionTypes.GENERATE_OTP_ERROR,
    error
  };
}

export function generateOTPIdle(error) {
  return {
    type: actionTypes.GENERATE_OTP_IDLE,
    error
  };
}

export function verifyOTPRequest(payload) {
  return {
    type: actionTypes.VERIFY_OTP_REQUEST,
    payload
  };
}

export function verifyOTPSuccess(payload) {
  return {
    type: actionTypes.VERIFY_OTP_SUCCESS,
    payload
  };
}

export function verifyOTPError(error) {
  return {
    type: actionTypes.VERIFY_OTP_ERROR,
    error
  };
}

export function cancelOrderRequest(payload) {
  return {
    type: actionTypes.CANCEL_ORDER_REQUEST,
    payload
  };
}

export function cancelOrderSuccess(payload) {
  return {
    type: actionTypes.CANCEL_ORDER_SUCCESS,
    payload
  };
}

export function cancelOrderError(payload) {
  return {
    type: actionTypes.CANCEL_ORDER_ERROR,
    payload
  }
}


export function paymentFailed(payload) {
  return {
    type: actionTypes.PAYMENT_FAILED,
    payload
  }
}

export function closePaymentFailed(payload) {
  return {
    type: actionTypes.CLOSE_PAYMENT_FAILED,
    payload
  }
}

export function applylocalStorageAddressData(payload){
  return {
    type: actionTypes.APPLY_LOCAL_STORAGE_DATA,
    payload
  }
}