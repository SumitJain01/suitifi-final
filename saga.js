/* global fetch */

import { all } from 'redux-saga/effects';
import homeSaga from 'containers/Home/redux/saga';
import productListSagas from 'containers/Products/redux/saga';
import productSagas from 'containers/Product/redux/saga';
import authSagas from 'containers/Auth/redux/saga';
import cartSagas from 'containers/Cart/redux/saga';
import checkoutSagas from 'containers/Checkout/redux/saga';
import accountSagas from 'containers/Account/redux/saga';
import globalSaga from 'containers/Global/redux/saga';

function* rootSaga() {
  yield all([
    ...globalSaga,
    ...homeSaga,
    ...productListSagas,
    ...productSagas,
    ...authSagas,
    ...cartSagas,
    ...checkoutSagas,
    ...accountSagas,
  ]);
}

export default rootSaga;
