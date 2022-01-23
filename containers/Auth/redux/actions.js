import { path } from 'ramda';
import * as actionTypes from './constants';

export function logoutRequest(payload) {
  if (path(['gapi', 'auth2'], window)) {
    const auth2 = window.gapi.auth2.getAuthInstance();
    const isGoogleSignedIn = auth2.isSignedIn.get();
    if (isGoogleSignedIn) {
      auth2.signOut().then(() => {
      });
    }
  }

  return {
    type: actionTypes.LOGOUT_REQUEST,
    payload,
  };
}

export function otpGenerateEmailRequest(payload) {
  return {
    type: actionTypes.OTP_GENERATE_EMAIL_REQUEST,
    payload,
  };
}
export function logoutSuccess(payload) {
  return {
    type: actionTypes.LOGOUT_SUCCESS,
    payload,
  };
}

export function loginRequest(payload) {
  return {
    type: actionTypes.LOGIN_REQUEST,
    payload,
  };
}

export function loginSuccess(payload) {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload,
  };
}

export function loginError(error) {
  return {
    type: actionTypes.LOGIN_ERROR,
    error,
  };
}

export function loginIdle(error) {
  return {
    type: actionTypes.LOGIN_IDLE,
    error,
  };
}

export function signupRequest(payload) {
  return {
    type: actionTypes.SIGNUP_REQUEST,
    payload,
  };
}

export function signupSuccess(payload) {
  return {
    type: actionTypes.SIGNUP_SUCCESS,
    payload,
  };
}

export function signupError(error) {
  return {
    type: actionTypes.SIGNUP_ERROR,
    error,
  };
}

export function signupPageRequest(payload) {
  return {
    type: actionTypes.SIGNUP_PAGE_REQUEST,
    payload,
  };
}


export function signupIdle(error) {
  return {
    type: actionTypes.SIGNUP_IDLE,
    error,
  };
}

export function refreshTokenRequest(payload) {
  return {
    type: actionTypes.REFRESH_TOKEN_REQUEST,
    payload,
  };
}

export function refreshTokenSuccess(payload) {
  return {
    type: actionTypes.REFRESH_TOKEN_SUCCESS,
    payload,
  };
}

export function refreshTokenError(error) {
  return {
    type: actionTypes.REFRESH_TOKEN_ERROR,
    error,
  };
}

export function sendPasswordResetRequest(payload) {
  return {
    type: actionTypes.SEND_PASSWORD_RESET_REQUEST,
    payload,
  };
}

export function sendPasswordResetSuccess(payload) {
  return {
    type: actionTypes.SEND_PASSWORD_RESET_SUCCESS,
    payload,
  };
}

export function sendPasswordResetError(error) {
  return {
    type: actionTypes.SEND_PASSWORD_RESET_ERROR,
    error,
  };
}

export function sendPasswordResetIdle(error) {
  return {
    type: actionTypes.SEND_PASSWORD_RESET_IDLE,
    error,
  };
}

export function resetPasswordRequest(payload) {
  return {
    type: actionTypes.RESET_PASSWORD_REQUEST,
    payload,
  };
}

export function resetPasswordSuccess(payload) {
  return {
    type: actionTypes.RESET_PASSWORD_SUCCESS,
    payload,
  };
}

export function resetPasswordError(error) {
  return {
    type: actionTypes.RESET_PASSWORD_ERROR,
    error,
  };
}

export function resetPasswordIdle(error) {
  return {
    type: actionTypes.RESET_PASSWORD_IDLE,
    error,
  };
}

export function loadProfileRequest(payload) {
  return {
    type: actionTypes.LOAD_PROFILE_REQUEST,
    payload,
  };
}

export function loadProfileSuccess(payload) {
  return {
    type: actionTypes.LOAD_PROFILE_SUCCESS,
    payload,
  };
}

export function loadProfileError(error) {
  return {
    type: actionTypes.LOAD_PROFILE_ERROR,
    error,
  };
}
export function backArrow(payload) {
  return {
    type: actionTypes.BACK_ARROW,
    payload,
  };
}
export function signUpArrow(payload) {
  return {
    type: actionTypes.SIGNUP_ARROW,
    payload,
  };
}
export function phoneMappingRequest(payload) {
  return {
    type: actionTypes.PHONE_MAPPING_REQUEST,
    payload,
  };
}
export function generateOTPRequest(payload) {
  return {
    type: actionTypes.GENERATE_OTP_REQUEST,
    payload,
  };
}

export function generateOTPSuccess(payload) {
  return {
    type: actionTypes.GENERATE_OTP_SUCCESS,
    payload,
  };
}

export function generateOTPError(error) {
  return {
    type: actionTypes.GENERATE_OTP_ERROR,
    error,
  };
}

export function generateOTPIdle(error) {
  return {
    type: actionTypes.GENERATE_OTP_IDLE,
    error,
  };
}

export function verifyOTPRequest(payload) {
  return {
    type: actionTypes.VERIFY_OTP_REQUEST,
    payload,
  };
}

export function verifyOTPSuccess(payload) {
  return {
    type: actionTypes.VERIFY_OTP_SUCCESS,
    payload,
  };
}

export function verifyOTPError(error) {
  return {
    type: actionTypes.VERIFY_OTP_ERROR,
    error,
  };
}

export function phonepeSsoLogin(payload) {
  return {
    type: actionTypes.PHONEPE_SSO_LOGIN,
    payload,
  };
}
export function showLoginPopUp(payload) {
  return {
    type: actionTypes.SHOW_LOGIN_POPUP,
    payload,
  };
}
export function hideLoginPopUp(payload) {
  return {
    type: actionTypes.HIDE_LOGIN_POPUP,
    payload,
  };
}

export function redirectUrl(payload) {
  return {
    type: actionTypes.REDIRECT_URL,
    payload,
  };
}

export function resetRedirectUrl(payload) {
  return {
    type: actionTypes.RESET_REDIRECT_URL,
    payload,
  };
}
