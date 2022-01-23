import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'lib/request';
import config from 'config/env';
import { loadProductsError, loadProductsSuccess, loadIsInStockSuccess, loadIsInStockError } from './actions';
import { loadProductSuccess } from 'containers/Product/redux/actions';
import { LOAD_PRODUCTS, LOAD_IN_STOCK_DATA_REQUEST } from './constants';
const { apiUrl } = config;


function* loadProductsSaga({ payload }) {
  try {
    const requestURL = `${apiUrl}/products`;
    const products = yield call(request, requestURL);
    if (payload) {
      const product = products.list.entities.products[payload];
      if (product) {
        yield put(loadProductSuccess(product));
      }
    }
    yield put(loadProductsSuccess(products));
  } catch (error) {
    yield put(loadProductsError(error));
  }
}

function* loadIsInStockSaga() {
  try {
    const requestURL = `https://sapi.mamaearth.io/api/v1/products/inStock.json`;
    const IsInStockData = yield call(request, requestURL);
    yield put(loadIsInStockSuccess(IsInStockData));
  }
  catch (error) {
    yield put(loadIsInStockError(error));
  }
}

export default [
  takeLatest(LOAD_PRODUCTS, loadProductsSaga),
  takeLatest(LOAD_IN_STOCK_DATA_REQUEST, loadIsInStockSaga)
];
