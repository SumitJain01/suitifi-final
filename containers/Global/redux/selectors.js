import { createSelector } from 'reselect';
import { path } from 'ramda';

const selectGlobal = state => state.global;

export const makeSelectCurrency = () => createSelector(
  selectGlobal,
  globalState => path(['data', 'currency'], globalState)
);

export const makeSelectAppModals = () => createSelector(
  selectGlobal,
  globalState => path(['data', 'modals'], globalState),
);

export const makeSelectMEFE = () => createSelector(
  selectGlobal,
  globalState => path(['data', 'mefe'], globalState)
);

export const makeSelectShowSnackBar = () => createSelector(
  selectGlobal,
  globalState => path(['data', 'showSnackBar'], globalState)
);

export const makeSelectShowSnackBarPDP = () => createSelector(
  selectGlobal,
  globalState => path(['data', 'showSnackBarPDP'], globalState)
);