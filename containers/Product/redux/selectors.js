import { createSelector } from 'reselect';
import { path } from 'ramda';

const selectCurrentProduct = state => state.fetchedProduct;

export const makeSelectProduct = () => createSelector(
  selectCurrentProduct,
  product => path(['data', 'item'], product)
);

export const makeSelectRelatedProducts = () => createSelector(
  selectCurrentProduct,
  product => path(['data', 'related'], product)
);

export const makeSelectCrossSells = () => createSelector(
  selectCurrentProduct,
  product => path(['data', 'crossSells'], product)
);

export const makeSelectUpsells = () => createSelector(
  selectCurrentProduct,
  product => path(['data', 'upsells'], product)
);

export const makeSelectRecentProducts = () => createSelector(
  selectCurrentProduct,
  product => path(['data', 'recent'], product)
);

export const makeSelectProductReviews = () => createSelector(
  selectCurrentProduct,
  product => path(['data', 'reviews'], product)
);