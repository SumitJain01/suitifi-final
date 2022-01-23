/* eslint-disable no-underscore-dangle */
import {
  call,
  put,
  takeLatest,
  select,
  takeEvery,
  debounce,
} from 'redux-saga/effects';
import { pathOr, path } from 'ramda';
import { isNonEmptyString, noop } from 'ramda-adjunct';
import request from 'lib/request';
import cogoToast from 'lib/toast';
import config from 'config/env';
import md5 from 'md5';
import Router from 'next/router';
import makeCleverTap from 'lib/makeClevertap';
import { makeDataForApplyAddressRequest } from 'utils/helpers/checkout';
import { makeSelectMagentoCartId, makeSelectCartItemsLength, selectCart } from 'containers/Cart/redux/selectors';
import { updateLocalCartData } from 'containers/Cart/redux/actions';
import {
  makeSelectUserId,
  makeSelectLoggedIn,
} from 'containers/Auth/redux/selectors';
import { showCogoToastError } from 'containers/Cart/redux/saga'
import { makeSelectUserInfo, makeSelectCreditBalance } from 'containers/Account/redux/selectors';
import { makeUTMParams, makeSelectTotals, makeSelectOldProductIds } from 'containers/Checkout/redux/selectors';
import { makeSelectUser } from 'containers/Auth/redux/selectors';
import { makeSelectTotalProductQty, makeSelectCartCategoryName, makeSelectCartProductName } from 'containers/Cart/redux/selectors';
import {
  applyOrRemoveWalletBalanceSuccess,
  applyOrRemoveWalletBalanceError,
  getTotalsSuccess,
  getTotalsError,
  shippingError,
  shippingSuccess,
  getTotalsRequest,
  applyCouponCodeSuccess,
  applyCouponCodeError,
  applyAddressDataSuccess,
  applyAddressDataError,
  placeOrderSuccess,
  placeOrderError,
  confirmOrderRequest,
  confirmOrderSuccess,
  confirmOrderError,
  generateOTPSuccess,
  generateOTPError,
  verifyOTPSuccess,
  verifyOTPError,
  reinitializeCheckout,
  // newPaymentMethod,
  cancelOrderSuccess,
  cancelOrderError,
  applylocalStorageAddressData,
  thankyouPageLoadRequest,
  // placeOrderRequest
} from './actions';

import {
  APPLY_ADDRESS_DATA_REQUEST,
  SHIPPING_REQUEST,
  GET_TOTALS_REQUEST,
  APPLY_OR_REMOVE_WALLET_BALANCE_REQUEST,
  APPLY_COUPON_CODE_REQUEST,
  PLACE_ORDER_REQUEST,
  CONFIRM_ORDER_REQUEST,
  PLACE_ORDER_SUCCESS,
  PAYMENT_SUCCESS,
  CONFIRM_ORDER_SUCCESS,
  GENERATE_OTP_REQUEST,
  VERIFY_OTP_REQUEST,
  VERIFY_OTP_SUCCESS,
  SET_PAYMENT_METHOD,
  NEW_PAYMENT_METHOD,
  CANCEL_ORDER_REQUEST,
  CANCEL_ORDER_SUCCESS,
  SET_CUSTOM_CHECKOUT_PAYMENT_METHOD
} from './constants';

import {
  makeSelectTrackingComment,
  makeSelectShippingCalculationCriteria,
  makeSelectSelectedPaymentMethod,
  makeSelectOrderMeta,
  makeSelectOrderInfo,
  makeSelectpaymentEntity,
  makeSelectOTPState,
  makeSelectIncrementId,
  makeSelectAppliedCouponCode,
} from './selectors';
import cartMutationObserver from './cartMutationObserver';
import openRazorpayCheckout from 'utils/helpers/checkout/openRazorpayCheckout';
import customCheckoutHelper from 'utils/helpers/checkout/customCheckoutHelper';

const { apiUrl } = config;
const clevertap = makeCleverTap();
import dataLayer from 'lib/gtmDataLayer';
import { apiResponseDataLayerFn } from 'lib/analytics/datalayer';

function getTrackingCookie() {
  let name = "__TD__ME__" + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function* getTotalsSaga() {
  const couponCode = yield select(makeSelectAppliedCouponCode());
  const loggedIn = yield select(makeSelectLoggedIn());
  const userId = yield select(makeSelectUserId());
  const cartId = yield select(makeSelectMagentoCartId()); 
  if (couponCode) {
    try {
      const requestURL = `https://tdc-nd-api.honasa-staging.net/v1/carts/${cartId}/${couponCode ? 'applyCoupon' : 'removeCoupon'}/${couponCode || ''}?type=${loggedIn ? 'user' : 'guest'}`;
      const data = yield call(request, requestURL, {
        method: couponCode ? 'GET' : 'DELETE',
      });
    } catch (err) {
      console.log("Error", err);
    }
  }

  if (yield select(makeSelectCartItemsLength())) {
    const isLoggedIn = yield select(makeSelectLoggedIn());
    const cartId = yield select(makeSelectMagentoCartId());
    const shippingCriteria = yield select(makeSelectShippingCalculationCriteria());
    const {
      shippingAddress, billingAddress,
    } = yield select(makeSelectOrderMeta());
    if (shippingCriteria.categoriesInCart.length) {
      try {
        const requestURL = `${apiUrl}/carts/${isLoggedIn ? 'user' : 'guest'}/${cartId}/totals`;
        const totalsResponse = yield call(request, requestURL, {
          method: 'POST',
          body: JSON.stringify({
            shippingCriteria,
            addressInformation: {
              shipping_address: shippingAddress,
              billing_address: billingAddress,
            },
            userId: yield select(makeSelectUserId()),
          }),
        });
       
        const couponCode = yield select(makeSelectAppliedCouponCode());
        if(isNonEmptyString(couponCode) && totalsResponse.totals.coupon_code==undefined){
          const cartId=yield select(makeSelectMagentoCartId())
          const userId = yield select(makeSelectUserId());
          dataLayer.push({
            event: "couponRemoved",
            autoRemove: 'Yes',
            userId:userId?userId:false,
            cartId,
            couponName: couponCode,
            couponStatus:"Coupon removed successfully",
            cartValue:totalsResponse.totals.subtotal_incl_tax,
            cartProducts:totalsResponse.totals.items.map(item=>item.name)
          })
        }
        yield put(getTotalsSuccess(totalsResponse));
      } catch (err) {
        if (Router.router.pathname === "/checkout") {
          if (err.status === 404) {
            Router.pushRoute('clear-state');
          }
        }
        showCogoToastError(err);
        apiResponseDataLayerFn(err.status, err.response.url)
        yield put(getTotalsError(err));
      }
    }
  }
}

function* estimateShippingSaga({ payload }) {
  const isLoggedIn = yield select(makeSelectLoggedIn());
  const cartId = yield select(makeSelectMagentoCartId());
  try {
    const requestURL = `${apiUrl}/carts/${isLoggedIn ? 'user' : 'guest'}/${cartId}/estimate-shipping`;
    const shippingData = yield call(request, requestURL, {
      method: 'POST',
      body: JSON.stringify({
        ...payload,
      }),
    });
    if (shippingData.shipping.length) {
      yield put(shippingSuccess(shippingData));
    } else {
      cogoToast.error('Error validating address, please verify and try again.');
      throw new Error('Error validating address, please verify and try again.');
    }
  } catch (err) {
    cogoToast.error('Error validating address, please verify and try again.');
    yield put(shippingError(err));
  }
}

function* applyAddressDataSaga({ payload }) {
  try {
    const isLoggedIn = yield select(makeSelectLoggedIn());
    const cartId = yield select(makeSelectMagentoCartId());
    const shippingCriteria = yield select(makeSelectShippingCalculationCriteria());
    const { shippingAddress: address } = makeDataForApplyAddressRequest(payload);
    const walletBalance = yield select(makeSelectCreditBalance());
    const trackingData = yield select(makeUTMParams());
    const user = yield select(makeSelectUser());
    const categoryName = yield select(makeSelectCartCategoryName());
    const productName = yield select(makeSelectCartProductName());
    const total = yield select(makeSelectTotals());
    const quantity = yield select(makeSelectTotalProductQty());
    // const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    // let user_address = userInfo && userInfo.addresses && userInfo.addresses.filter(obj => {
    //     return obj.default_shipping === true;
    // });
    const dataToSend = {
      shippingCriteria,
      addressInformation: {
        shipping_address: address,
        billing_address: address,
      },
    };
    const requestURL = `${apiUrl}/carts/${isLoggedIn ? 'user' : 'guest'}/${cartId}/address-information`;
    const paymentMethodsAndTotals = yield call(request, requestURL, {
      method: 'POST',
      body: JSON.stringify(dataToSend),
    });

    yield put(applylocalStorageAddressData(address));
    yield put(applyAddressDataSuccess(paymentMethodsAndTotals));
    clevertap.event.push("deliveryDetails", {
      ...trackingData,
      platform: "mewebsite",
      userName: `${address.firstname} ${address.lastname}`,
      email: address.email,
      phone: address.telephone,
      quantity,
      ...(user && {
          gaUserId: user.id,
          walletBalance
      }),
      // ...(user_address && {
      //     pincode: Number(user_address[0].postcode),
      //     city: user_address[0].city,
      //     state: user_address[0].region,
      // }),
      ...(total.coupon_code && {
          couponName: total.coupon_code,
          couponAmount: Math.abs(total.discount_amount),
      }),
      categoryName,
      productName,
      clickSource: "checkout",
      clickTarget: "checkout",
      cartAmount: total.subtotal_incl_tax,
      orderAddressCity: address.city,
      orderAddressPin: Number(address.postcode),
      state: address.region,
  });

    yield call(() => {
      try {
        if (isLoggedIn) {
          clevertap.profile.push({
            Site: {
              City: address.city,
              State: address.region,
              Postcode: Number(address.postcode),
            },
          });
        } else {
          const phoneObj = {};
          if (`${address.telephone}`.length) {
            phoneObj.Phone = `+91${(address.telephone || '').replace('+91', '')}`; // Phone (with the country code)
          }
          clevertap.onUserLogin.push({
            Site: {
              Name: `${address.firstname} ${address.lastname}`,
              Email: address.email,
              ...phoneObj,
              City: address.city,
              State: address.region,
              Postcode: Number(address.postcode),
              'MSG-email': true, // Disable email notifications
              'MSG-push': true, // Enable push notifications
              'MSG-sms': true, // Enable sms notifications
              'MSG-whatsapp': true, // Enable WhatsApp notifications
            },
          });
        }
      } catch (e) { }
    });
  } catch (err) {
    console.dir(err);
    cogoToast.error('Error validating address, please verify and try again.');
    yield put(applyAddressDataError(err));
  }
}

function* applyOrRemoveWalletBalanceSaga({ payload }) {
  
  if (yield select(makeSelectLoggedIn())) {
    let requestURL;
    let data;
    let remove = payload.remove;
    try {
      if (remove) {
        // TODO: remove wallet balance endpoint
        requestURL = `https://tdc-nd-api.honasa-staging.net/v1/carts/${yield select(makeSelectMagentoCartId())}/removeWalletBalance/${yield select(makeSelectUserId())}`;
        data = yield call(request, requestURL, { method: 'POST' });

      } else {
        requestURL = `https://tdc-nd-api.honasa-staging.net/v1/carts/${yield select(makeSelectMagentoCartId())}/applyWalletBalance/${yield select(makeSelectUserId())}`;
        data = yield call(request, requestURL);
      }
      yield put(applyOrRemoveWalletBalanceSuccess(data));
      if (yield select(makeSelectCartItemsLength())) {
        yield put(getTotalsRequest());
      }
    } catch (err) {
      yield put(applyOrRemoveWalletBalanceError(err));
    }
  }
}

function* applyCouponCodeSaga({ payload }) {
  try {
    const loggedIn = yield select(makeSelectLoggedIn());
    const userId = yield select(makeSelectUserId());
    const cartId=yield select(makeSelectMagentoCartId())
    const requestURL = `https://tdc-nd-api.honasa-staging.net/v1/carts/${cartId}/${payload ? 'applyCoupon' : 'removeCoupon'}/${payload || ''}?type=${loggedIn ? 'user' : 'guest'}`;
    const data = yield call(request, requestURL, {
      method: payload ? 'GET' : 'DELETE',
    });
    
    const trackingData = yield select(makeUTMParams());
    const user = yield select(makeSelectUser());
    const total = yield select(makeSelectTotals());
    const categoryName = yield select(makeSelectCartCategoryName());

    const walletBalance = yield select(makeSelectCreditBalance());
    const quantity = yield select(makeSelectTotalProductQty());
    yield put(applyCouponCodeSuccess(data));
    // const userInfo = JSON.parse(localStorage.getItem('userInfo'))

    // let address = userInfo && userInfo.addresses && userInfo.addresses.filter(obj => {
    //   return obj.default_shipping === true;
    // });
    if(payload){
      dataLayer.push({
        event: "couponApplied",
        userId:userId?userId:false,
        cartId,
        couponName: payload,
        couponStatus:"Coupon applied successfully on this order",
        cartValue: total.subtotal_incl_tax,
        cartProducts:total.items.map(item=>item.name),
      })
      clevertap.event.push("couponCodeApplied", {
        ...trackingData,
        couponName: payload,
        quantity,
        couponAmount: Math.abs(total.discount_amount),
        platform: "mewebsite",
        timeStamp: new Date().getTime(),
        cartAmount: total.subtotal_incl_tax,
        ...(user && {
            userName: user.firstName + " " + user.lastName,
            email: user.email,
            phone: user.phone,
            gaUserId: user.id,
            walletBalance,
        }),
        categoryName,
        // ...(address && {
        //     pincode: Number(address[0].postcode),
        //     city: address[0].city,
        // }),
        infoMessage: "Coupon applied successfully on this order",
      });
    }
  } catch (err) {
    // cogoToast.error(err.message, { hideAfter: 1 });
    const userId = yield select(makeSelectUserId());
    const cartId=yield select(makeSelectMagentoCartId())
    const total = yield select(makeSelectTotals());
    if(payload){
      dataLayer.push({
        event: "couponApplied",
        userId:userId?userId:false,
        cartId,
        couponName: payload,
        couponStatus: err.error,
        cartValue:total.subtotal_incl_tax,
        cartProducts:total.items.map(item=>item.name),
      });
    }else{
      const couponCode = yield select(makeSelectAppliedCouponCode());
      dataLayer.push({
        event: "couponRemoved",
        autoRemove: 'No',
        userId:userId?userId:false,
        cartId,
        couponName: couponCode,
        couponStatus: 'Unable to remove coupon',
        cartValue:total.subtotal_incl_tax,
        cartProducts:total.items.map(item=>item.name),
      });
      
    }
    yield put(applyCouponCodeError(err));
  }
}

// function* undoSaga(monitorableAction) {
//   if (monitorableAction.type === REMOVE_FROM_CART) {
//     const { payload: { product } } = monitorableAction;
//     const { success } = yield race({
//       success: take('refetchCartTotals'),
//       fail: take(SYNC_CART_ERROR),
//     });

//     if (success) {
//       yield put(saveToRecentRemovals(product));
//       const { undo } = yield race({
//         undo: take(action => action.type === UNDO_CART_REMOVAL && action.payload === product.id),
//         timeup: delay(7500),
//       });

//       // hide undo UI element, the race condition has an answer
//       yield put(removeFromRecentRemovals(product.id));

//       if (undo) {
//         // revert thread to previous state
//         yield put(addToCart(product));
//       }
//     }
//   }
// }

function* prepareOrderWithPaymentEntityAndClonedCart({
  isLoggedIn,
  userId,
  trackingData,
  orderMeta,
  cartId,
  selectedPaymentMethod,
  resolve = noop,
  reject = noop,
}) {
  const authStateBasedRequestData = isLoggedIn ? { userId } : { email: orderMeta.billingAddress.email };
  const coupon = yield select(makeSelectAppliedCouponCode());
  const { billingAddress: address } = makeDataForApplyAddressRequest(orderMeta.billingAddress);
  const email = orderMeta.billingAddress.email;
  const phone = orderMeta.billingAddress.telephone;
  const checkoutType = JSON.parse(localStorage.getItem('newCheckout')) ? 'newCheckout' : 'oldCheckout'
  const shippingCriteria = yield select(makeSelectShippingCalculationCriteria());
  const postcode = orderMeta && orderMeta.shippingAddress && orderMeta.shippingAddress.postcode && orderMeta.shippingAddress.postcode;

  if (postcode && String(postcode).length === 6) {
    try {
      const data = yield call(request, `https://tdc-nd-api.honasa-staging.net/v1/carts/pincode/${postcode}`);
      if (data.delivery !== 1) {
        localStorage.setItem('isPincodeServiceable', false);
        cogoToast.error('Your area is no longer serviceable');
        window.location.reload();
        return;
      }
    } catch (e) {
      if ([400, 404].includes(path(['response', 'status'], e))) {
        localStorage.setItem('isPincodeServiceable', false);
        cogoToast.error('Your area is no longer serviceable');
        window.location.reload();
        return;
      }
    }
  }
  
  try {
    const requestURL = `${apiUrl}/carts/${isLoggedIn ? 'user' : 'guest'}/createOrder`;
    let response = yield call(request, requestURL, {
      method: 'POST',
      body: JSON.stringify({
        data: {
          ...authStateBasedRequestData,
          cartId,
          trackingData,
          paymentMethod: selectedPaymentMethod ? selectedPaymentMethod : "cod",
          comment: `${orderMeta.comment};${checkoutType}` || `placed;${checkoutType}`, // # is used as seperator
          coupon: coupon,
          email: email,
          phone: phone,
          shippingCriteria,
          addressInformation: {
            shipping_address: address,
            billing_address: address,
          },
        },
      }),
    });
    resolve({
      orderId: response.order.entity_id,
      total: response.order.grand_total,
      incrementId: response.order.increment_id
    });
    localStorage.setItem('customer_id', JSON.stringify(response.order.customer_id))
    localStorage.setItem('coupon', JSON.stringify(coupon))
    yield put(placeOrderSuccess(response));
  } catch (e) {
    yield put(placeOrderError(e));
    // TODO: what the hell Shivam!? Have to get the message for sample product changed on Magento!
    const errorMessage = e.error || e.message || 'Could not place order, please refresh and try again.';
    cogoToast.error(errorMessage);
    reject(new Error(errorMessage));
    apiResponseDataLayerFn(e.status, e.response.url)
    yield put(reinitializeCheckout({ preserveMeta: true }));
  }
}

function* placeOrderSaga({
  payload: imperativePromise = {
    resolve: noop,
    reject: noop,
  },
}) {
  const orderInfo = (yield select(makeSelectOrderInfo()));
  const selectedPaymentMethod = yield select(makeSelectSelectedPaymentMethod());
  const paymentEntity = yield select(makeSelectpaymentEntity());
  const total = yield select(makeSelectTotals());
  const orderMeta = yield select(makeSelectOrderMeta());
  const walletBalance = yield select(makeSelectCreditBalance());
  const quantity = yield select(makeSelectTotalProductQty());
  const categoryName = yield select(makeSelectCartCategoryName());
  const productName = yield select(makeSelectCartProductName());
  const userInfo = yield select(makeSelectUser());
  const trackingData = yield select(makeUTMParams());

  if (paymentEntity !== false) {
    clevertap.event.push("retriedPayment", {
      Email: orderMeta.billingAddress.email,
      Phone: orderMeta.billingAddress.telephone,
      City: orderMeta.billingAddress.city,
      State: orderMeta.billingAddress.region,
      Postcode: Number(orderMeta.billingAddress.postcode),
      PaymentMethod: selectedPaymentMethod,
    });
  }
  clevertap.event.push("paymentInitiated", {
    platform: "mewebsite",
    timeStamp: new Date().getTime(),
    ...(userInfo && {gaUserId: userInfo.id,walletBalance}),
    userName: `${orderMeta.billingAddress.firstname} ${orderMeta.billingAddress.lastname}`,
    email: orderMeta.billingAddress.email,
    phone: orderMeta.billingAddress.telephone,
    categoryName,
    ...(total.coupon_code && {
        couponName: total?.coupon_code,
        couponAmount: Math.abs(total.discount_amount),
    }),
    quantity,
    productName,
    clickSource: "checkout",
    clickTarget: "thank-you-redirect",
    clickURL: "checkout/thank-you-redirect",
    cartAmount: total.subtotal_incl_tax,
    orderAddressCity: orderMeta.billingAddress.city,
    orderAddressPin: Number(orderMeta.billingAddress.postcode),
    paymentAmount: total.base_grand_total,
    paymentMode: selectedPaymentMethod,
    ...trackingData,
  });

  if (!orderMeta.shippingAddress) {
    if (window.appliedAddress) {
      yield* applyAddressDataSaga({ payload: window.appliedAddress });
    }
  }

  const { resolve, reject } = imperativePromise;
  /** If orderInfo already exists, i.e. user is re-trying Rzp payment, simulate order creation with pre-existing details
      this simulation is not there to redundantly add data but is a workaround to make sure the loading state etc
      are as expected after a successful order is placed. */
  if (orderInfo) {
    resolve({
      orderId: orderInfo.entity_id,
      total: orderInfo.grand_total,
      incrementId: orderInfo.increment_id
    });
    yield put(placeOrderSuccess({
      order: orderInfo,
      method:imperativePromise.method,
      paymentEntity,
    }));
  } else {
    const isLoggedIn = yield select(makeSelectLoggedIn());
    const userId = yield select(makeSelectUserId());
    // const trackingData = yield select(makeSelectTrackingComment());
    const trackingData = getTrackingCookie();
    const cartId = yield select(makeSelectMagentoCartId());
    yield* prepareOrderWithPaymentEntityAndClonedCart({
      isLoggedIn, userId, trackingData, orderMeta, cartId, selectedPaymentMethod, resolve, reject,
    });
  }
}

function* placeOrderSuccessSaga({ payload = { userClosedPaymentScreen: false } }) {// expects { order, paymentEntity }

  const selectedPaymentMethod = yield select(makeSelectSelectedPaymentMethod());
  if (selectedPaymentMethod !== "free") {
    yield put(updateLocalCartData(payload.cartData));
  }
  const userID = path(['order', 'customer_id'], payload)
  dataLayer.push({ moengage_userid: userID })
  if (payload.userClosedPaymentScreen) {
    const userInfo = yield select(makeSelectUserInfo());
    const orderMeta = yield select(makeSelectOrderMeta());
    const orderInfo = (yield select(makeSelectOrderInfo()));
    const selectedPaymentMethod = yield select(makeSelectSelectedPaymentMethod());
    const trackingData = yield select(makeUTMParams());
    const total = yield select(makeSelectTotals());
    const makePayment = yield select(makeSelectCreditBalance());
    const quantity = yield select(makeSelectTotalProductQty());
    clevertap.event.push("paymentFailure", {
      userName: `${orderMeta.billingAddress.firstname} ${orderMeta.billingAddress.lastname}`,
      phone: orderMeta.billingAddress.telephone,
      email: orderMeta.billingAddress.email,
      // state: orderMeta.billingAddress.region,
      price: Number(orderInfo.base_grand_total),
      platform: "mewebsite",
      timeStamp: new Date().getTime(),
      gaUserId: userInfo && userInfo.id,
      ...(total && total.coupon_code && {
          couponName: total.coupon_code ? total.coupon_code : "No Coupon",
          couponAmount: Math.abs(total.discount_amount),
      }),
      quantity,
      makePayment,
      cartAmount: total.subtotal_incl_tax,
      orderAddressCity: orderMeta.billingAddress.city,
      orderAddressPin: Number(orderMeta.billingAddress.postcode),
      paymentAmount: total.base_grand_total,
      paymentMode: selectedPaymentMethod,
      ...(orderInfo && {
        purchaseDate: orderInfo.created_at,
      }),
      ...trackingData,
  });
  }
  if (!payload.userClosedPaymentScreen) {
    const orderMeta = yield select(makeSelectOrderMeta());
    const selectedPaymentMethod = yield select(makeSelectSelectedPaymentMethod());
    const cartId = yield select(makeSelectMagentoCartId());
    const incrementId = yield select(makeSelectIncrementId());
    if (selectedPaymentMethod === 'razorpay') {
      yield call(window.newCheckout ? customCheckoutHelper : openRazorpayCheckout, {
        orderId: payload.paymentEntity.id,
        amount: payload.order.grand_total,
        name: `${orderMeta.billingAddress.firstname} ${orderMeta.billingAddress.lastname}`,
        email: orderMeta.billingAddress.email,
        contact: orderMeta.billingAddress.telephone,
        magentoOrderId: pathOr('', ['order', 'entity_id'], payload),
        cartId: cartId,
        method: orderMeta.payMethod,
        methodFields: orderMeta.methodFields,
        incrementId: incrementId,
        newuser: payload.newuser
      });
    }

    if (selectedPaymentMethod === 'free' && payload.confirm) {
      yield put(confirmOrderRequest({
        type: 'free',
        data: {
          orderId: payload.order.entity_id,
        },
      }));
    }
  }
  if (path(['order', 'payment', 'method'], payload) == "cashondelivery") {
    yield put({ type: VERIFY_OTP_SUCCESS })
    return;
  }
  if (path(['phonepe'], payload)) {
    window.location = path(['phonepe','redirectUrl'], payload)
  }
}

function* generateOrderOTPSaga({ payload: { contact = false } }) {
  try {
    const { contact: contactFromStore } = yield select(makeSelectOTPState());
    const requestURL = `${apiUrl}/carts/OTP/generate`;
    const response = yield call(request, requestURL, {
      method: 'POST',
      body: JSON.stringify({
        contact: contact || contactFromStore,
      }),
    });
    yield put(generateOTPSuccess(response));
  } catch (e) {
    cogoToast.error('Could not send code, please try again.');
    yield put(generateOTPError(e));
  }
}

function* verifyOrderOTPSaga({ payload: { otp } }) {
  try {
    const { sessionId } = yield select(makeSelectOTPState());
    const requestURL = `${apiUrl}/auth/OTP/verify`;
    const response = yield call(request, requestURL, {
      method: 'POST',
      body: JSON.stringify({
        otp,
        sessionId,
      }),
    });
    yield put(verifyOTPSuccess(response));
  } catch (e) {
    cogoToast.error('Incorrect OTP, try again.');
    yield put(verifyOTPError(e));
  }
}

function* paymentSuccessSaga({ payload }) {
  yield put(confirmOrderRequest(payload));
}

function* verifyOTPSuccessSaga() {
  yield put(confirmOrderRequest({
    type: 'cod',
    data: {
      orderId: (yield select(makeSelectOrderInfo())).entity_id,
    },
  }));
}

function* confirmOrderSaga({ payload }) { // expects { type, data }
  const requestURL = `${apiUrl}/carts/confirmOrder`;
  const order = yield select(makeSelectOrderInfo());
  const cartId = yield select(makeSelectMagentoCartId());
  const userId = yield select(makeSelectUserId());
  const itemIds = yield select(makeSelectOldProductIds())
  
  try {
    const response = yield call(request, requestURL, {
      method: 'POST',
      body: JSON.stringify({
        data: {
          userId,
          cartId,
          orderId: order.entity_id,
          paymentMethod: payload.type,
          checkoutType: JSON.parse(localStorage.getItem('newCheckout')) ? 'newCheckout' : 'oldCheckout'
        },
        payment: payload,
      }),
    });
    yield put(confirmOrderSuccess(response));
    // commented from here bcz this method is moved into trackOrder paymentSuccess method.
    // if uncomment from here then this will be called two times if redirect=false in checkout. otherwise work fine.

    // clevertap.event.push("Charged", {
    //   id: order.increment_id,
    //   revenue: Number(parseFloat(order.payment.amount_ordered).toFixed(2)),
    //   grandTotal: Number(order.grand_total),
    //   email: order.billing_address.email,
    //   customer_name: `${order.billing_address.firstname} ${order.billing_address.lastname}`,
    //   phone: order.billing_address.telephone,
    //   Items: order.items.map((item, key) => {
    //     return (
    //       {
    //         ItemName: item.name,
    //         ItemPrice: Number(item.price_incl_tax)
    //       }
    //     );
    //   }),
    //   shipping: order.payment.shipping_amount,
    //   Date: new Date()
    // });
  } catch (e) {
    showCogoToastError(e);
    yield put(confirmOrderError(e));
  }
}

function* confirmOrderSuccessSaga({ payload }) {
  if (payload.cartId) {
    yield put(thankyouPageLoadRequest(payload));
    yield put(updateLocalCartData(payload));
  }
  Router.push('/checkout/thank-you');
  cogoToast.success('Order Successful');

}

function* cancelOrderRequestSaga({ payload }) {
  const isLoggedIn = yield select(makeSelectLoggedIn());
  const requestURL = `${apiUrl}/carts/${isLoggedIn ? 'cancelOrder' : 'cancelOrderNonLoggedUsers'}`;
  const entityId = (yield select(makeSelectOrderInfo())).entity_id;
  const orderDetails = (yield select(makeSelectOrderInfo()));
  const { created_at, customer_email, entity_id, grand_total } = orderDetails;
  const protectCode = md5(created_at + customer_email + entity_id + grand_total);
  const userId = yield select(makeSelectUserId());
  try {
    const response = yield call(request, requestURL, {
      method: 'POST',
      body: isLoggedIn ?
        JSON.stringify({
          entityId: entityId,
          userId: userId
        }) :
        JSON.stringify({
          entityId: entityId,
          userId: userId,
          protectCode
        })
    });
    yield put(cancelOrderSuccess(response))
  }
  catch (e) {
    console.log(e);
    yield put(cancelOrderError())
  }
}


function* setPaymentMethod({ payload }) {
}

function* setCustomPaymentMethodSaga(payload) {
  if (payload.payload.name == "paypal" && payload.payload.previousPaymentMethod == "cod") {
    yield put(getTotalsRequest());
  }
  else if (payload.payload.name == "razorpay" && payload.payload.previousPaymentMethod == "cod") {
    yield put(getTotalsRequest());
  }
  else if (payload.payload.name == "paypal" && payload.payload.previousPaymentMethod == "free") {
    yield put(getTotalsRequest());
  }
  else if (payload.payload.name == "razorpay" && payload.payload.previousPaymentMethod == "free") {
    yield put(getTotalsRequest());
  }

  //payment method is already set using reducer and total is called due to change in payment method
  // yield* getTotalsSaga();
  //yield put(placeOrderRequest());
}


export default [
  takeLatest(SHIPPING_REQUEST, estimateShippingSaga),
  takeLatest(GET_TOTALS_REQUEST, getTotalsSaga),
  takeEvery(APPLY_OR_REMOVE_WALLET_BALANCE_REQUEST, applyOrRemoveWalletBalanceSaga),
  takeEvery(APPLY_COUPON_CODE_REQUEST, applyCouponCodeSaga),
  debounce(800, APPLY_ADDRESS_DATA_REQUEST, applyAddressDataSaga),
  // takeEvery(monitoredActionsForUndoing, undoSaga),
  takeLatest(PLACE_ORDER_REQUEST, placeOrderSaga),
  takeEvery(PLACE_ORDER_SUCCESS, placeOrderSuccessSaga),
  takeEvery(PAYMENT_SUCCESS, paymentSuccessSaga),
  takeEvery(CONFIRM_ORDER_REQUEST, confirmOrderSaga),
  takeEvery(CONFIRM_ORDER_SUCCESS, confirmOrderSuccessSaga),
  takeEvery(GENERATE_OTP_REQUEST, generateOrderOTPSaga),
  takeEvery(VERIFY_OTP_REQUEST, verifyOrderOTPSaga),
  takeEvery(VERIFY_OTP_SUCCESS, verifyOTPSuccessSaga),
  takeEvery(SET_PAYMENT_METHOD, setPaymentMethod),
  takeEvery(CANCEL_ORDER_REQUEST, cancelOrderRequestSaga),
  //takeEvery(NEW_PAYMENT_METHOD, newPaymentMethodSaga),
  takeEvery(SET_CUSTOM_CHECKOUT_PAYMENT_METHOD, setCustomPaymentMethodSaga),
  ...cartMutationObserver,
];


// function monitoredActionsForUndoing(action) {
//   return [
//     REMOVE_FROM_CART,
//     UPDATE_LOCAL_CART_DATA,
//     UNDO_CART_REMOVAL,
//     SYNC_CART_ERROR,
//   ].includes(action.type);
// }
