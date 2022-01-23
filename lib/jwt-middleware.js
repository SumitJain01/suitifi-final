import { makeSelectLoggedIn, makeSelectToken, makeSelectLoading as makeSelectAuthLoading } from 'containers/Auth/redux/selectors';
import { Router } from 'namespace/router';
import { path } from 'ramda';
import { refreshTokenRequest, logoutRequest } from 'containers/Auth/redux/actions';
import { LOGOUT_REQUEST, REFRESH_TOKEN_REQUEST, REFRESH_TOKEN_ERROR } from 'containers/Auth/redux/constants';

function jwt({ getState, dispatch }) {
  return next => (action) => {
    const state = getState();
    const loggedIn = makeSelectLoggedIn()(state);
    const loading = makeSelectAuthLoading()(state);
    const token = loggedIn && makeSelectToken()(state);
    let shouldRefresh = false;
    if (token) {
      const { expiresIn } = token;
      const diff = new Date(expiresIn) - (new Date());
      shouldRefresh = Math.floor(diff / 1e3) < 120;
    }

    if (!shouldRefresh) {
      return next(action);
    }

    if (action.error) {
      const code = path(['error', 'response', 'status'], action) || action.error.code || action.error.status;
      if ((code === 401 || code === 403) && action.error.message !== 'jwt expired') {
        Router.pushRoute('/');
        return next(logoutRequest());
      }
    }

    if (action.type !== REFRESH_TOKEN_REQUEST && action.type !== REFRESH_TOKEN_ERROR && action.type !== LOGOUT_REQUEST && !loading) {
      dispatch(refreshTokenRequest());
      return next(action);
    }

    return next(action);
  };
}

export default jwt;
