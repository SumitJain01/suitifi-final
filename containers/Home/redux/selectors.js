import { createSelector } from 'reselect';
import { pathOr } from 'ramda';

export const selectHome = state => state.home;

export const makeSelectHomePageCarousels = () => createSelector(
  selectHome,
  homeState => pathOr([], ['data', 'homePageCarousels'])(homeState)
);