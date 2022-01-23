/* eslint-disable default-case, no-param-reassign */
import produce from 'immer';
import { clone } from 'ramda';
import { EDIT_USER_INFO_SUCCESS } from 'containers/Account/redux/constants';
import * as actionTypes from './constants';

export const initialState = {
  loading: false,
  error: false,
  loginPopUp: false,
  signUp: false,
  newUser:false,
  redirectUrl: false,
  mappedContact:'',
  otpLocked:false,
  data: {
    user: false,
    token: false,
    otp: {
      contact: false,
      email:false,
      sessionId: false,
    },
  },
  meta: {
    isTokenRefreshing: false,
  },
};

function authReducer(state = clone(initialState), { type, payload, error }) {
  return produce(state, (draft) => {
    switch (type) {
      case actionTypes.REDIRECT_URL: {
        draft.redirectUrl = payload.url;
        break;
      }
      case actionTypes.RESET_REDIRECT_URL: {
        draft.redirectUrl = false;
        break;
      }
      case actionTypes.SHOW_LOGIN_POPUP: {
        draft.loginPopUp = true;
        break;
      }
      case actionTypes.HIDE_LOGIN_POPUP: {
        draft.loginPopUp= false;
        draft.signUp = false;
        break;
      }
      case actionTypes.SIGNUP_REQUEST: {
        draft.loading = true;
        draft.error = false;
        draft.mappedContact = '';
        break;
      }
      case actionTypes.SIGNUP_SUCCESS: {
        draft.loading = false;
        draft.error = false;
        draft.signUp = false;
        draft.data.user = payload.user;
        draft.data.token = payload.token;
        draft.mappedContact = '';
        break;
      }
      case actionTypes.SIGNUP_ERROR: {
        draft.loading = false;
        draft.error = payload;
        draft.data = initialState.data; 
        break;
      }
      case actionTypes.SIGNUP_PAGE_REQUEST: {
        draft.loading = false;
        draft.signUp = true;
        draft.newUser =true;
        draft.mappedContact = '';

        break;
      }
     
      case actionTypes. PHONE_MAPPING_REQUEST: {
        draft.loading = false;
        draft.mappedContact = payload;
        break;
      }


      case actionTypes.LOGIN_REQUEST: {
        draft.loading = true;
        draft.error = false;
        draft.data = initialState.data;
        break;
      }
      case actionTypes.LOGIN_SUCCESS: {
        draft.loading = false;
        draft.error = false;
        draft.data.user = payload.user;
        draft.data.token = payload.token;
        draft.newUser = false;
        draft.loginPopUp= false;
        draft.signUp = false;
        break;
      }
      case actionTypes.LOGIN_ERROR: {
        draft.loading = false;
        draft.error = error;
        draft.data = initialState.data;
        break;
      }

      case actionTypes.BACK_ARROW: {
        draft.data.otp.sessionId = false;
        draft.data.otp.contact = false;
        draft.data.otp.email = false;
        draft.signUp = false;
        draft.newUser =false;

        break;
      }
      case actionTypes.SIGNUP_ARROW: {
        draft.data.otp.sessionId = false;
        draft.signUp = true;
        draft.newUser =true;
        break;
      }
      
      case actionTypes.LOGOUT_REQUEST: {
        draft.loading = true;
        draft.error = false;
        draft.data = initialState.data;
        draft.loginPopUp = false;
        break;
      }
      case actionTypes.LOGOUT_SUCCESS: {
        draft.loading = false;
        draft.error = false;
        draft.data = initialState.data;
        break;
      }
      
      case actionTypes.REFRESH_TOKEN_REQUEST: {
        draft.meta.isTokenRefreshing = true;
        break;
      }
      case actionTypes.REFRESH_TOKEN_SUCCESS: {
        draft.loading = false;
        draft.error = false;
        draft.meta.isTokenRefreshing = false;
        draft.data.token = payload;
        break;
      }
      case actionTypes.REFRESH_TOKEN_ERROR: {
        draft.loading = false;
        draft.meta.isTokenRefreshing = false;
        draft.error = error;
        break;
      }
      case actionTypes.OTP_GENERATE_EMAIL_REQUEST: {
        draft.loading = true;
        draft.error= false;
        draft.data.otp.email = payload.email;
        draft.newUser = false;
        draft.otpLocked = false;
        break;
      }
      
      case actionTypes.GENERATE_OTP_REQUEST: {
        draft.loading = true;
        draft.error= false;
        draft.otpLocked = false;
        draft.data.otp.contact = payload.contact;
        break;
      }
      case actionTypes.GENERATE_OTP_SUCCESS: {
        draft.signUp = false;
        draft.loading = false;
        draft.data.otp.sessionId = payload.sessionId;
        if(payload.newUser){
          draft.newUser = true;
        }
        break;
      }
      case actionTypes.GENERATE_OTP_ERROR: {
        draft.loading = false;
        draft.error = error;
        if (error.message.includes("reached")) {
          draft.otpLocked = true;
          }
        break;
      }
      case actionTypes.GENERATE_OTP_IDLE: {
        draft.data.otp = initialState.data.otp;
        break;
      }


      case actionTypes.VERIFY_OTP_REQUEST: {
        draft.loading = true;
        break;
      }
      case actionTypes.VERIFY_OTP_SUCCESS: {
        draft.loading = false;
        draft.data.otp = initialState.data.otp;
        draft.error = false;
        draft.data.otp.email = false;

        break;
      }
      case actionTypes.VERIFY_OTP_ERROR: {
        draft.loading = false;
        draft.error = error.message;
        draft.data.otp.email = false;
        break;
      }


      case actionTypes.LOAD_PROFILE_SUCCESS: {
        draft.loading = false;
        draft.error = false;
        draft.data.user = payload;
        break;
      }
      case actionTypes.LOAD_PROFILE_ERROR: {
        draft.loading = false;
        draft.error = error;
        break;
      }
      case EDIT_USER_INFO_SUCCESS: {
        draft.loading = false;
        draft.error = false;
        draft.data.user = payload.auth;
        break;
      }
    }
  });
}

export default authReducer;
