import { call, put, takeLatest, select, takeEvery, takeLeading, delay } from 'redux-saga/effects';
import request from 'lib/request';
import config from 'config/env';
import cogoToast from 'lib/toast';
import { isNonEmptyString } from 'ramda-adjunct';
import { makeUTMParams, makeSelectTotals } from 'containers/Checkout/redux/selectors';
import { INIT_APP_STATE } from 'containers/Global/redux/constants';
import { makeSelectUserId, makeSelectLoggedIn, makeSelectUserSignUp } from 'containers/Auth/redux/selectors';
import { makeSelectMagentoCartId, makeSelectTotalProductQty } from 'containers/Cart/redux/selectors';
import makeClevertap from 'lib/makeClevertap';
import { updateLocalCartData } from 'containers/Cart/redux/actions';
import {signupPageRequest,phoneMappingRequest} from './actions';
import {
  signupError,
  loginSuccess,
  loginError,
  refreshTokenError,
  refreshTokenSuccess,
  sendPasswordResetSuccess,
  sendPasswordResetError,
  loadProfileSuccess,
  logoutRequest,
  loadProfileRequest,
  loadProfileError,
  generateOTPSuccess,
  generateOTPError,
  verifyOTPError,
  verifyOTPSuccess,
  logoutSuccess,
} from './actions';
import {
  makeSelectToken,
  makeSelectUserEmail,
  makeSelectOTPState,
} from './selectors';
import {
  LOGIN_SUCCESS,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  LOGIN_REQUEST,
  REFRESH_TOKEN_REQUEST,
  SEND_PASSWORD_RESET_REQUEST,
  LOAD_PROFILE_REQUEST,
  GENERATE_OTP_REQUEST,
  VERIFY_OTP_REQUEST,
  LOGOUT_REQUEST,
  RESET_PASSWORD_REQUEST,
  OTP_GENERATE_EMAIL_REQUEST
} from './constants';

const clevertap = makeClevertap();

function* signupSaga({
  payload,
}) {
  const requestURL = `https://tdc-nd-api.honasa-staging.net/v1/auth/initiateSignup`;
  try {
    const data = yield call(request, requestURL, {
      method: 'POST',
      body: JSON.stringify({
        ...payload,
      }),
    });    
    const newData ={
      ...data,
      "newUser":"true",
    }
    dataLayer.push({
      event : "signupStep1"
    })
    yield put(generateOTPSuccess(newData));
  } catch (error) {
    cogoToast.error(error.message);
    yield put(signupError(error));
  }
}


function* userEmailCheckSaga({
  payload,
}) {
  const reqURL = `https://tdc-nd-api.honasa-staging.net/v1/auth/checkIfUserExistsByEmail/${payload.email}`;
  try {
    const emaildata = yield call(request, reqURL);

    if(!emaildata.status){
    yield* signupSaga({payload});
    }
    else{
      dataLayer.push({
        event : "signupError",
      })
      yield put(phoneMappingRequest(emaildata.phone));

    }
  } catch (error) {
    cogoToast.error(error.message);
    yield put(signupError(error));
  }
}

function* loginSaga({
  payload: {
    email, password, type, token,
  },
}) {
  const guestCartId = yield select(makeSelectMagentoCartId());
  const authType = type || 'login';
  const requestURL = `https://tdc-nd-api.honasa-staging.net/v1/auth/${authType}`;
  let data = {};
  try {
    data = yield call(request, requestURL, {
      method: 'POST',
      body: authType === 'login' ?
        JSON.stringify({
          email,
          password,
          guestCartId,
        })
        : JSON.stringify({
          [type === 'onetap' ? 'id_token' : 'access_token']: token,
          guestCartId,
        }),
    });
    if (authType === 'login') {
      yield saveCredential({
        email,
        password,
        firstName: data.user.firstName || '',
        lastName: data.user.lastName || '',
      });
    }
    yield put(loginSuccess(data));
    yield put(verifyOTPSuccess());
  } catch (error) {
    cogoToast.error(error.message);
    yield put(loginError(error));
  }
}

function* logoutSaga() {
  yield put(logoutSuccess());
}

function* loginWithOTPSaga({
  payload,
}) {
  try {
    const otpState = yield select(makeSelectOTPState());
    const guestCartId = yield select(makeSelectMagentoCartId());
    const newUser = yield select(makeSelectUserSignUp());
    const userSignUpDetails = JSON.parse(localStorage.getItem("userSignUpDetails"));
    const { sessionId, contact ,email} = otpState;
    const otp = payload.otp;
    const userContact = email? 
    {email:email} 
    :
    {contact:contact};

    if(newUser)
    {
      const requestURL = `https://tdc-nd-api.honasa-staging.net/v1/auth/signup`;
      const data = yield call(request, requestURL, {
        method: 'POST',
        body: JSON.stringify({
          otp,
          guestCartId,
          ...userSignUpDetails,
        }),
      });
      dataLayer.push({
        event : "signupSuccess"
      })
      yield put(loginSuccess(data));
    }
    
    else{
      const requestURL = `https://tdc-nd-api.honasa-staging.net/v1/auth/otp`;
      const data = yield call(request, requestURL, {
        method: 'POST',
        body: JSON.stringify({
          ...userContact,
          otp,
          guestCartId,
        }),
      });
      dataLayer.push({
        event : "loginSuccess"
      })
      yield put(loginSuccess(data));
    }
  } 
  
 catch (error) {
    if(!error.message.includes('Incorrect')){
    cogoToast.error(error.message);
    }
    yield put(verifyOTPError(error));
  }
}
function* tokenSaga() {
  const requestURL = `https://tdc-nd-api.honasa-staging.net/v1/auth/refresh-token`;
  const email = yield select(makeSelectUserEmail());
  const token = yield select(makeSelectToken());
  if (token) {
    const { refreshToken } = token;
    let data = false;
    try {
      data = yield call(request, requestURL, {
        method: 'POST',
        body: JSON.stringify({
          email,
          refreshToken,
        }),
      });
      if (data) {
        yield put(refreshTokenSuccess(data));
      }
    } catch (error) {
      yield put(logoutRequest());
      yield put(refreshTokenError(error));
    }
  }
}

function* loadProfileSaga() {
  if (yield select(makeSelectLoggedIn())) {
    try {
      const userId = yield select(makeSelectUserId());
      const requestURL = `https://tdc-nd-api.honasa-staging.net/v1/users/${userId}`;
      const data = yield call(request, requestURL);
      yield put(loadProfileSuccess(data));
    } catch (error) {
      yield put(loadProfileError(error));
    }
  }
}

const popUpDataLayer = () => {
  dataLayer.push({
    event : "welcomePopup",
  })
}

let popUpExist = setInterval(() => {
  if(process.browser){
    if(document.querySelector("#wzrk_wrapper")){
      popUpDataLayer();
    }
  }
  clearInterval(popUpExist);
}, 6500)

function* initAuthStateOnAppLoad() {
  if (yield select(makeSelectLoggedIn())) {
    yield put(loadProfileRequest());
  } 
}

function* generateOTPSagaEmail({
  payload,
}) {
  const requestURL = `https://tdc-nd-api.honasa-staging.net/v1/auth/otp/generateByEmail`;
  try {
    const data = yield call(request, requestURL, {
      method: 'POST',
      body: JSON.stringify({
        ...payload,
      }),
    });
    yield put(generateOTPSuccess(data));
    
  } catch (error) {
   
    cogoToast.error(error.message);
    yield put(generateOTPError(error));
  
  }
}

function* generateOTPSaga({
  payload,
}) {
  localStorage.removeItem("userSignUpDetails");
  const requestURL = `https://tdc-nd-api.honasa-staging.net/v1/auth/otp/generate`;
  try {
    const data = yield call(request, requestURL, {
      method: 'POST',
      body: JSON.stringify({
        ...payload,
      }),
    });
    yield put(generateOTPSuccess(data));
    
  } catch (error) {
    if(error.status === 404){
      yield put(signupPageRequest());  
    }
    else{
    cogoToast.error(error.message);
    yield put(generateOTPError(error));
  }
  }
}

function* loginSuccessSaga({ payload }) {
  localStorage.removeItem("userSignUpDetails");
  cogoToast.success('You are logged in!');
  if (payload.cart) {
    yield put(updateLocalCartData(payload.cart));
  }
  try {
    const user = { payload };
    const userData = user.payload.user;
    const trackingData = yield select(makeUTMParams());
    const total = yield select(makeSelectTotals());
    const quantity = yield select(makeSelectTotalProductQty());
    yield call(() => {
      const phoneObj = {};
      if (isNonEmptyString(userData.phone) && userData.phone.length >= 10) {
        phoneObj.Phone = `+91${(userData.phone).replace('+91', '')}`; // Phone (with the country code)
      }
      clevertap.event.push("login",{
        platform: "mewebsite",
        pageTitle: process.browser ? document.title : "",
        timeStamp: new Date().getTime(),
        ...trackingData,
        userName: `${userData.firstName} ${userData.lastName}`, // String
        email: userData.email,
        phone: phoneObj.Phone,
        gaUserId: userData.id,
        clickSource:"join",
        clickUrl:"/join",
        clickTarget:"my-account",
        quantity,
        cartAmount: total.subtotal_incl_tax,
      })
      clevertap.onUserLogin.push({
        Site: {
          Name: `${user.firstName} ${user.lastName}`, // String
          Email: user.email, // Email address of the user
          ...phoneObj,
          // Gender: 'M', // Can be either M or F
          // DOB: new Date(), // Date of Birth. Date object
          // optional fields. controls whether the user will be sent email, push etc.
          'MSG-email': true, // Disable email notifications
          'MSG-push': true, // Enable push notifications
          'MSG-sms': true, // Enable sms notifications
          'MSG-whatsapp': true, // Enable WhatsApp notifications
        },
      });
    });
  } catch (error) {
    console.log('could not push clevertap login info;');
  }
}

function* sendPasswordResetResetSaga({ payload }) {
  const requestURL = `https://tdc-nd-api.honasa-staging.net/v1/auth/send-password-reset`;
  const { email } = payload;
  let data = false;
  try {
    data = yield call(request, requestURL, {
      method: 'POST',
      body: JSON.stringify({
        email,
      }),
    });
    if (data) {
      yield put(sendPasswordResetSuccess());
      cogoToast.success(data.message);
      Router.pushRoute('/');
    }
  } catch (error) {
    yield put(sendPasswordResetError(error));
  }
}

function* resetPasswordSaga({ payload }) {
  const requestURL = `https://tdc-nd-api.honasa-staging.net/v1/auth/reset-password`;
  let data = false;
  try {
    data = yield call(request, requestURL, {
      method: 'POST',
      body: JSON.stringify(payload),
    });
    if (data) {
      yield put(sendPasswordResetSuccess());
      cogoToast.info(data.message);
      Router.pushRoute('/');
    }
  } catch (error) {
    yield put(sendPasswordResetError(error));
  }
}

export default [
  takeLatest(LOAD_PROFILE_REQUEST, loadProfileSaga),
  takeLatest(LOGIN_REQUEST, loginSaga),
  takeLatest(SIGNUP_REQUEST,userEmailCheckSaga),
  takeLeading(REFRESH_TOKEN_REQUEST, tokenSaga),
  takeLatest(SEND_PASSWORD_RESET_REQUEST, sendPasswordResetResetSaga),
  takeLatest(RESET_PASSWORD_REQUEST, resetPasswordSaga),
  takeLatest(INIT_APP_STATE, initAuthStateOnAppLoad),
  takeEvery(GENERATE_OTP_REQUEST, generateOTPSaga),
  takeEvery(OTP_GENERATE_EMAIL_REQUEST, generateOTPSagaEmail),
  takeLatest(VERIFY_OTP_REQUEST, loginWithOTPSaga),
  takeEvery([LOGIN_SUCCESS, SIGNUP_SUCCESS], loginSuccessSaga),
  takeEvery(LOGOUT_REQUEST, logoutSaga),
];
