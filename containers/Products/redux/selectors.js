import { createSelector } from 'reselect';
import { path, prop, pathOr } from 'ramda';
import { filterProductSlugsUsingProductEntities } from 'utils/helpers/products';
import { getCustomAttributeFromProduct } from 'utils/productModule'

const selectProducts = state => state.products;
const selectCurrentProduct = state => state.fetchedProduct;


export const makeSelectDoProductsExist = () => createSelector(
  selectProducts,
  productsState => Boolean(path(['data', 'list', 'result'], productsState))
);

export const makeSelectProductIdentifierList = () => createSelector(
  selectProducts,
  productsState => path(['data', 'list', 'result'], productsState)
);

export const makeSelectLoading = () => createSelector(
  selectProducts,
  productsState => prop('loading', productsState)
);

export const makeSelectSortBy = () => createSelector(
  selectProducts,
  productsState => prop('sortBy', productsState)
);

export const makeSelectFilterBy = () => createSelector(
  selectProducts,
  productsState => prop('filterBy', productsState)
);

export const makeSelectProductsList = () => createSelector(
  selectProducts,
  productsState => path(['data', 'list'], productsState)
);

export const makeSelectProductEntities = () => createSelector(
  selectProducts,
  productsState => path(['data', 'list', 'entities', 'products'], productsState)
);

export const makeSelectInStockData = (id) => createSelector(
  selectProducts,
  productsState => pathOr(false, ['is_in_stockList', id], productsState)
);

export const makeSelectProductCategories = () => createSelector(
  selectProducts,
  productsState => path(['data', 'categories', 'entities', 'categories'], productsState)
);

export const makeSelectProductsWithCustomRecipe = (worker = () => true, filterBy, sortBy) => createSelector(
  makeSelectProductEntities(),
  makeSelectProductIdentifierList(),
  (productEntities = [], slugs = []) => filterProductSlugsUsingProductEntities({
    productEntities,
    worker,
    filterBy, 
    sortBy
  })
);



export const makeSelectCategories = () => createSelector(
  selectProducts,
  productsState => productsState.data.categories
);

export const makeSelectPositionConfig = () => createSelector(
  selectProducts,
  productsState => productsState.data.positionConfig
);


export const makeSelectInStockDataFetching = () => createSelector(
  selectProducts,
  productsState => productsState.is_in_stockListLoading
)

export const makeSelectGetMetaTitle = () => createSelector(
  selectCurrentProduct,
  productsState => {
    const product = pathOr(null, ['data', 'item'], productsState)
    const metaTitle = getCustomAttributeFromProduct("meta_title")(product);
    return metaTitle;
  }
);

export const makeSelectGetAllStock = () => createSelector(
  selectProducts,
  productsState => pathOr(false, ['is_in_stockList'], productsState)
);

