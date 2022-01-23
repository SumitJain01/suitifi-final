import { createSelector } from 'reselect';
import { path, compose, prop } from 'ramda';

const selectAuth = state => state.auth;

export const makeSelectAuth = () => createSelector(
  selectAuth,
  authState => authState
);

export const makeSelectLoginPopUp = () => createSelector(
  selectAuth,
  authState => prop('loginPopUp', authState)
);

export const makeSelectOtpLocked = () => createSelector(
  selectAuth,
  authState => prop('otpLocked', authState)
);

export const makeSelectUserSignUp = () => createSelector(
  selectAuth,
  authState => prop('newUser', authState)
);

export const makeSelectLoggedIn = () => createSelector(
  selectAuth,
  authState => compose(Boolean, path(['data', 'user']))(authState)
);

export const makeSelectUser = () => createSelector(
  selectAuth,
  authState => path(['data', 'user'], authState)
);

export const makeSelectUserId = () => createSelector(
  selectAuth,
  authState => path(['data', 'user', 'id'], authState)
);

export const makeSelectUserEmail = () => createSelector(
  selectAuth,
  authState => path(['data', 'user', 'email'], authState)
);

export const makeSelectIsTokenRefreshing = () => createSelector(
  selectAuth,
  authState => path(['meta', 'isTokenRefreshing'], authState)
);

export const makeSelectToken = () => createSelector(
  selectAuth,
  authState => path(['data', 'token'], authState)
);

export const makeSelectResetHash = () => createSelector(
  selectAuth,
  authState => path(['data', 'resetHash'], authState)
);

export const makeSelectLoading = () => createSelector(
  selectAuth,
  authState => prop('loading', authState)
);

export const makeSelectMappedContact = () => createSelector(
  selectAuth,
  authState => prop('mappedContact', authState)
);
export const makeSelectError = () => createSelector(
  selectAuth,
  authState => prop('error', authState)
);

export const makeSelectOTPState = () => createSelector(
  selectAuth,
  authState => path(['data', 'otp'], authState)
);

export const makeSelectSignUp = () => createSelector(
  selectAuth,
  authState => prop('signUp', authState)

);
