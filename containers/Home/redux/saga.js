import config from 'config/env';
import request from 'lib/request';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { homePageCarouselsSuccess } from './actions';
import { HOMEPAGE_CAROUSELS_REQUEST } from "./constants";
const { apiUrl } = config;

function* fetchHomePageProducts(category) {
  const data = yield call(request, `${apiUrl}/categories/${category.id}/products`);
  const filteredProductList = Object.values(data.list.entities.products).filter((item) => {
    if (item.slug.substring(item.slug.length - 2) !== "-1" && Number(item.price) !== 0 && item.is_in_stock && item.qty) {
      return item;
    }
  });
  return filteredProductList;
}

function* fetchHomePageCarouselsSaga() {
  let homePageCarousels = [];
  let homePageCarouselData = [];

  try {

  } catch (err) {
    console.log(`err`, err)
  }


  yield all(homePageCarouselData.map(function* (category) {
    let productList = yield* fetchHomePageProducts(category);
    let carouselData = {};
    carouselData.title = category.name;
    carouselData.products = productList;
    carouselData.description = category.description || 'Temp Description';
    carouselData.shopLink = category.url_key ? `/product-category/${category.url_key}` : '/products';
    carouselData.position = category.position;
    homePageCarousels.push(carouselData);
  }))

  yield put(homePageCarouselsSuccess(homePageCarousels));
}

export default [
  takeLatest(HOMEPAGE_CAROUSELS_REQUEST, fetchHomePageCarouselsSaga),
];