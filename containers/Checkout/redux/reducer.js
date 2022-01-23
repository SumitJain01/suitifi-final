/* eslint-disable default-case, no-param-reassign */
import produce from 'immer';
import parse from 'url-parse';
import { clone, path, reject, equals } from 'ramda';
import { hasPath } from 'ramda-adjunct';
import { INIT_APP_STATE } from 'containers/Global/redux/constants';
import { LOGOUT_REQUEST } from 'containers/Auth/redux/constants';
import { UPDATE_LOCAL_CART_DATA } from 'containers/Cart/redux/constants';
import * as actionTypes from './constants';
import { getTrackingDataFromQuery } from 'utils/helpers/checkout/transformers';

const allMethods = [
  'razorpay', 'paypal', 'cod',
];

export const initialState = {
  walletChecked: false,
  otpLoading: false,
  loading: false,
  thankyouPageLoading: false,
  placeOrderLoading: false,
  paymentFailed: false,
  paymentError: "",
  error: false,
  localStorageAddressData: false,
  data: {
    isCODAvailable: true,
    shipping: false,
    totals: false,
    order: false,
    confirmedOrder: false,
    paymentEntity: false,
    paymentMethods: false,
    old_productId: [],
    couponError: false,
    otp: {
      contact: false,
      sessionId: false,
    },
  },
  meta: {
    trackingData: false,
    order: {
      comment: '',
      payMethod: '',
      methodFields: {},
      billingAddress: false,
      shippingAddress: false,
      selectedPaymentMethod: process.browser ? (/phonepe/i.test(window.navigator.userAgent) ? 'phonepe' : 'razorpay') : 'razorpay',
      availablePaymentMethods: [...allMethods],
    },
  },
  newuser: false,
};

function reducer(state = clone(initialState), action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case INIT_APP_STATE: {
        const query = process.browser && parse(window.location, true).query;
        const trackingData = getTrackingDataFromQuery(query ? query : []);
        if (trackingData == "no-campaign") {
          // No write
        }
        else {
          let d = new Date();
          d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
          let expires = `expires=${d.toUTCString()}`;
          document.cookie = `__TD__ME__=${trackingData};${expires};path=/`;
        }
        draft.meta.trackingData = getTrackingDataFromQuery(query ? query : []);
        break;
      }
      case actionTypes.NEW_PAYMENT_METHOD: {
        if (action.payload.method === "upi") {
          draft.meta.order.payMethod = action.payload.method;
          draft.meta.order.methodFields.push(action.payload.vpa);
        }
        //else-if for other payment methods
      }
      case actionTypes.SET_COD_AVAILABILITY: {
        draft.data.isCODAvailable = action.payload;
      }
      case actionTypes.SET_PINCODE: {
        if (action.payload.cod === 0) {
          draft.meta.order.availablePaymentMethods = reject(equals('cod'), [...allMethods]);
        } else {
          draft.meta.order.availablePaymentMethods = allMethods;
        }
        break;
      }
      
      case actionTypes.SET_PAYMENT_METHOD: {
        draft.meta.order.selectedPaymentMethod = action.payload;
        draft.paymentFailed = false;
        draft.paymentError = "";
        break;
      }
      case actionTypes.SET_CUSTOM_CHECKOUT_PAYMENT_METHOD: {
        // draft.loading = true;
        draft.meta.order.selectedPaymentMethod = action.payload.name;
        draft.paymentFailed = false;
        draft.paymentError = "";
        break;
      }
      case actionTypes.SHIPPING_REQUEST: {
        draft.loading = true;
        draft.error = false;
        draft.data.shipping = false;
        break;
      }
      case actionTypes.SHIPPING_SUCCESS: {
        draft.loading = false;
        draft.error = false;
        draft.data.shipping = action.payload.shipping;
        break;
      }
      case actionTypes.SHIPPING_ERROR: {
        draft.loading = false;
        draft.error = action.error.message;
        draft.data.shipping = false;
        break;
      }

      case actionTypes.APPLY_ADDRESS_DATA_REQUEST: {
        draft.loading = true;
        draft.error = false;
        draft.data.paymentMethods = false;
        draft.meta.order.comment = action.payload.notes;
        draft.meta.order.billingAddress = action.payload;
        draft.meta.order.shippingAddress = action.payload;
        draft.localStorageAddressData = action.payload;
        break;
      }
      case actionTypes.APPLY_ADDRESS_DATA_SUCCESS: {
        draft.loading = false;
        draft.error = false;
        draft.data.paymentMethods = action.payload.payment_methods;
        // draft.data.totals = action.payload.totals;
        break;
      }

      case actionTypes.APPLY_ADDRESS_DATA_ERROR: {
        draft.loading = false;
        draft.error = action.error.message;
        draft.data.paymentMethods = false;
        break;
      }

      case actionTypes.APPLY_OR_REMOVE_WALLET_BALANCE_REQUEST: {
        draft.walletChecked = action.payload.remove ? true : false
      }

      case actionTypes.APPLY_OR_REMOVE_WALLET_BALANCE_SUCCESS: {
        draft.walletChecked = action.payload.success ? draft.walletChecked : !draft.walletChecked
      }

      case actionTypes.GET_TOTALS_REQUEST:
      case actionTypes.APPLY_COUPON_CODE_REQUEST: {
        draft.loading = true;
        draft.error = false;
        break;
      }
      case UPDATE_LOCAL_CART_DATA: {
        if (action.payload.totals) {
          draft.data.totals = action.payload.totals;
        }
        break;
      }
      case actionTypes.GET_TOTALS_SUCCESS:
      case actionTypes.APPLY_COUPON_CODE_SUCCESS: {
        draft.loading = false;
        draft.data.couponError = false;
        draft.error = false;
        draft.data.totals = action.payload.totals;
        break;
      }
      case actionTypes.GET_TOTALS_ERROR: {
        draft.loading = false;
        draft.error = action.error.message;
        break;
      }
      case actionTypes.APPLY_COUPON_CODE_ERROR: {
        draft.loading = false;
        draft.data.couponError = action.error.error;
        draft.error = action.error.message;
        break;
      }
      case LOGOUT_REQUEST:
      case actionTypes.REINITIALIZE_CHECKOUT: {
        draft.walletChecked = false;
        draft.data = initialState.data;
        if (!path(['payload', 'preserveMeta'], action)) {
          draft.meta.order = initialState.meta.order;
        }
        draft.loading = false;
        draft.error = false;
        break;
      }

      case actionTypes.PLACE_ORDER_REQUEST: {
        draft.placeOrderLoading = true
        //draft.loading = true;
        draft.error = false;
        if (action.payload) {
          draft.meta.order.payMethod = action.payload.method;
          draft.meta.order.methodFields = action.payload.methodFields;
        }
        break;
      }

      case actionTypes.PLACE_ORDER_SUCCESS: {
        draft.placeOrderLoading = false;
        //draft.loading = false;  
        draft.error = false;
        if (action.payload.cartData) {
          const dataItems = action.payload.cartData.items;
          dataItems.map((item) => {
            draft.data.old_productId.push(item.old_productid)

          })
          localStorage.setItem('itemIds' , JSON.stringify(draft.data.old_productId))

        }
        if (action.payload) {
          if (action.payload.order) {
            draft.data.order = action.payload.order;
            localStorage.setItem('orderDetails' , JSON.stringify(draft.data.order))
            draft.data.order.totals = draft.data.totals;
          }
          if (action.payload.paymentEntity) {
            draft.data.paymentEntity = action.payload.paymentEntity;
          }
        }
        if (hasPath(['newuser'], action.payload)) {
          draft.newuser = action.payload.newuser;
        }
        break;
      }
      // TODO: fix cart on placeordererror
      case actionTypes.PLACE_ORDER_ERROR: {
        draft.placeOrderLoading = false;
        draft.loading = false;
        draft.error = action.error;
        break;
      }
      case actionTypes.THANKYOU_PAGE_REQUEST: {
        draft.thankyouPageLoading = true;
        break;
      }
      case actionTypes.THANKYOU_PAGE_SUCCESS: {
        draft.thankyouPageLoading = false;
        break;
      }
      // case actionTypes.CANCEL_ORDER_REQUEST: {
      //   draft.loading = true;
      //   draft.placeOrderLoading = true;
      //   break;
      // }

      // case actionTypes.CANCEL_ORDER_SUCCESS: {
      //   draft.loading = false;
      //   draft.placeOrderLoading = false;
      //   break;
      // }

      // case actionTypes.CANCEL_ORDER_ERROR: {
      //   draft.loading = false;
      //   draft.placeOrderLoading = false;
      //   break;
      // }

      case actionTypes.SET_OTP_STATE: {
        if (action.payload.otp) {
          draft.data.otp.otp = action.payload.otp;
        }
        if (action.payload.contact) {
          draft.data.otp.contact = action.payload.contact;
        }
        break;
      }
      case actionTypes.CONFIRM_ORDER_REQUEST: {
        draft.loading = true;
        break;
      }
      case actionTypes.CONFIRM_ORDER_SUCCESS: {
        const placedOrder = clone(draft.data.order);
        draft.paymentFailed = false;
        draft.paymentError = "";
        draft.otpLoading = false;
        draft.loading = false;
        draft.error = false;
        draft.data = initialState.data;
        draft.meta = initialState.meta;
        draft.data.confirmedOrder = placedOrder;
        break;
      }
      case actionTypes.CONFIRM_ORDER_ERROR: {
        // TODO: figure out what needs to be done post order confirmation error for a seamless experience
        draft.loading = false;
        draft.error = action.error.message;
        draft.data = initialState.data;
        break;
      }
      case actionTypes.GENERATE_OTP_REQUEST: {
        draft.loading = true;
        if (!path(['payload', 'retainPreviousSessionId'], action)) {
          draft.data.otp.contact = action.payload.contact;
        }
        if (!path(['payload', 'retainPreviousSessionId'], action)) {
          draft.data.otp.sessionId = false;
        }
        break;
      }
      case actionTypes.GENERATE_OTP_SUCCESS: {
        draft.loading = false;
        draft.data.otp.sessionId = action.payload.sessionId;
        break;
      }
      case actionTypes.GENERATE_OTP_ERROR: {
        draft.loading = false;
        draft.data.otp.sessionId = false;
        break;
      }
      case actionTypes.GENERATE_OTP_IDLE: {
        draft.loading = false;
        draft.data.otp = initialState.data.otp;
        break;
      }
      case actionTypes.VERIFY_OTP_REQUEST: {
        draft.loading = true;
        break;
      }
      case actionTypes.VERIFY_OTP_SUCCESS: {
        draft.otpLoading = true
        draft.loading = false;
        draft.data.otp.sessionId = false;
        break;
      }
      case actionTypes.VERIFY_OTP_ERROR: {
        draft.loading = false;
        break;
      }
      case 'SET_CHECKOUT_LOADING_FALSE': {
        draft.loading = false;
        break;
      }
      case actionTypes.PAYMENT_FAILED: {
        draft.paymentFailed = true;
        draft.paymentError = action.payload;
        break;
      }
      case actionTypes.CLOSE_PAYMENT_FAILED: {
        draft.paymentFailed = false;
        draft.paymentError = "";
        break;
      }
      case actionTypes.APPLY_LOCAL_STORAGE_DATA: {
        draft.localStorageAddressData = action.payload;
      }
    }
  });
}

export default reducer;
