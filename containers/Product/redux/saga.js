import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'lib/request';
import config from 'config/env';

import {
  loadProductError,
  loadProductSuccess,
  getRelatedSuccess,
  getRelatedError,
  getReviewsSuccess,
  getReviewsError,
  getCrossSellsError,
  getCrossSellsSuccess,
  getUpsellsError,
  getUpsellsSuccess,
} from './actions';

import {
  LOAD_PRODUCT,
  GET_RELATED_REQUEST,
  GET_REVIEWS,
  GET_CROSS_SELLS_REQUEST,
  GET_UPSELLS_REQUEST,
} from './constants';

const { apiUrl } = config;

function* loadProductSaga({ payload }) {
  try {
    const requestURL = `${apiUrl}/products/info/${payload}`;
    const product = yield call(request, requestURL);
    yield put(loadProductSuccess(product));
  } catch (err) {
    yield put(loadProductError(err));
  }
}

function* getRelatedSaga({ payload }) {
  try {
    const requestURL = `${apiUrl}/products/${payload}/related`;
    const product = yield call(request, requestURL);
    yield put(getRelatedSuccess(product));
  } catch (err) {
    yield put(getRelatedError(err));
  }
}

function* getUpsellsSaga({ payload }) {
  try {
    const requestURL = `${apiUrl}/products/${payload}/upsells`;
    const product = yield call(request, requestURL);
    yield put(getUpsellsSuccess(product));
  } catch (err) {
    yield put(getUpsellsError(err));
  }
}

function* getCrossSellsSaga({ payload }) {
  try {
    const requestURL = `${apiUrl}/products/${payload}/crossSells`;
    const product = yield call(request, requestURL);
    yield put(getCrossSellsSuccess(product));
  } catch (err) {
    yield put(getCrossSellsError(err));
  }
}

function* getReviewsSaga({ payload }) {
  try {
    const requestURL = `${apiUrl}/products/${payload}/reviews`;
    const product = yield call(request, requestURL);
    yield put(getReviewsSuccess(product));
  } catch (err) {
    yield put(getReviewsError(err));
  }
}

export default [
  takeLatest(LOAD_PRODUCT, loadProductSaga),
  takeLatest(GET_RELATED_REQUEST, getRelatedSaga),
  takeLatest(GET_UPSELLS_REQUEST, getUpsellsSaga),
  takeLatest(GET_CROSS_SELLS_REQUEST, getCrossSellsSaga),
  takeLatest(GET_REVIEWS, getReviewsSaga),
];
