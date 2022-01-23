import { createSelector } from 'reselect';
import { pathOr, path } from 'ramda';

const selectAccount = state => state.account;

export const makeSelectAccount = () => createSelector(
  selectAccount,
  accountState => accountState
);

export const makeSelectUserInfo = () => createSelector(
  selectAccount,
  accountState => pathOr({}, ['data', 'userInfo'], accountState)
);

export const makeSelectOrderedProducts = () => createSelector(
  selectAccount,
  accountState => pathOr([], ['data', 'orderedProducts'], accountState)
);

export const makeSelectOrderPageNumber = () => createSelector(
  selectAccount,
  accountState => path(['data', 'orderPageNumber'], accountState)
);

export const makeSelectNoMoreOrders = () => createSelector(
  selectAccount,
  accountState => path(['data', 'noMoreOrders'], accountState)
);

export const makeSelectOrderList = () => createSelector(
  selectAccount,
  accountState => pathOr([], ['data', 'orderList'], accountState)
);

export const makeSelectCreditBalance = () => createSelector(
  selectAccount,
  accountState => (pathOr(false, ['data', 'balance', 'balance'], accountState))
);

export const makeSelectCreditHistory = () => createSelector(
  selectAccount,
  accountState => (pathOr([], ['data', 'balance', 'balance_history'], accountState))
);

export const makeSelectLoading = () => createSelector(
  selectAccount,
  accountState => accountState.loading,
);

export const makeSelectAccountError = () => createSelector(
  selectAccount,
  accountState => accountState.error,
);

export const makeSelectIsCOSM = () => createSelector(
  selectAccount,
  accountState => accountState.isCOSM,

);