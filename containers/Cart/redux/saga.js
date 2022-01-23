import { call, put, takeLatest, select, takeEvery, fork } from 'redux-saga/effects';
import request from 'lib/request';
import Router from 'next/router';
import config from 'config/env';
import cogoToast from 'lib/toast';
import { compose, propOr } from "ramda";
import { makeSelectLoggedIn, makeSelectUser, makeSelectUserId } from 'containers/Auth/redux/selectors';
import { makeSelectMagentoCartId, makeSelectProductQty, makeSelectItemId, makeSelectTotalProductQty,  makeSelectCartItemsLength } from 'containers/Cart/redux/selectors';
import { makeSelectUserInfo, makeSelectCreditBalance} from "containers/Account/redux/selectors";
import { makeUTMParams, makeSelectTotals, makeSelectAppliedCouponCode} from "containers/Checkout/redux/selectors";
import makeClevertap from "lib/makeClevertap";
import { SIGNUP_SUCCESS, LOGOUT_REQUEST } from 'containers/Auth/redux/constants';
import { INIT_APP_STATE } from 'containers/Global/redux/constants';
import { showSnackBar } from 'containers/Global/redux/actions'
import { DEFAULT_ERROR_MESSAGE , MAX_PRODUCT_ADD_LIMIT} from 'utils/constants'
import { GET_TOTALS_ERROR, SHIPPING_ERROR } from 'containers/Checkout/redux/constants';
import {
  removeFromCart,
  loadCartError,
  syncCartError,
  addToCartError,
  addToCartBeforeSync,
  removeFromCartBeforeSync,
  updateLocalCartData,
  addToWishlistSuccess,
  addToWishlistError,
  removeFromWishlistSuccess,
  removeFromWishlistError,
  getWishlistSuccess,
  getWishlistError,
  reinitializeCart,
  editCartSuccess,
  editCartError,
  closeCart,
  refetchTotals,
  fetchUserCartRequest,
  makeProductInert,
  makeProductInteractive,
} from './actions';
import {
  EDIT_CART_REQUEST,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SYNC_CART_ERROR,
  ADD_TO_WISHLIST_REQUEST,
  REMOVE_FROM_WISHLIST_REQUEST,
  GET_WISHLIST_REQUEST,
  REINITIALIZE_CART,
  ROUTE_TO_STORE,
  FETCH_USER_CART_REQUEST,
} from './constants';
import { apiResponseDataLayerFn } from 'lib/analytics/datalayer';
import detectMobile from 'utils/helpers/mobileDetect';

const { apiUrl } = config;
const clevertap = makeClevertap();
const isMobile = detectMobile();

export function showCogoToastError(err){
  cogoToast.error(DEFAULT_ERROR_MESSAGE);
}

function* _removeFromCartAsUser({ payload }) {
  let url;
  yield put(removeFromCartBeforeSync(payload));
  const mageId = yield select(makeSelectMagentoCartId());
  const productQty = yield select(makeSelectProductQty(payload.id));
  const item_id = yield select(makeSelectItemId(payload.id));
  const expectedQty = productQty - payload.qty;
  if (expectedQty < 1 || payload.removeAll) {
    yield put(makeProductInert(payload.id));
    url = `${apiUrl}/carts/remove`;
  } else {
    url = `${apiUrl}/carts/edit`;
  }
  try {
    const data = yield call(request, url, {
      method: 'POST',
      body: JSON.stringify({
        data: {
          userId: (yield select(makeSelectUser())).id,
        },
        cartId: mageId,
        cartItem: {
          quote_id: mageId,
          sku: payload.sku,
          qty: expectedQty,
          item_id,
        },
      }),
    });
    const cartLength = yield select(makeSelectCartItemsLength());
    if (cartLength == 1) {
      yield put(updateLocalCartData({ items: [], cartId: mageId, appliedRules: [] }));
      yield put(makeProductInteractive(payload.id));
      return;
    }
    else {
      yield put(refetchTotals(data));
    }
    !payload.silentRemove && cogoToast.success('Product has been removed from cart');
    yield put(makeProductInteractive(payload.id));
    // yield put(updateLocalCartData(data));
  } catch (err) {
    yield put(makeProductInteractive(payload.id));
    apiResponseDataLayerFn(err.status, err.response.url)
    yield put(syncCartError(err));
  }
}

function* editCartItem({ payload }) {
  if(payload.qty >  MAX_PRODUCT_ADD_LIMIT ){
    cogoToast.error("You can only buy up to 14 units of this product");
    yield put(editCartSuccess());
  }
  else{
  const {
    qty,
    product,
    product: { id, sku, item_id },
    silentRemove = false,
  } = payload;
  if (payload.qty < 1) {
    yield put(removeFromCart({
      id, qty, sku, removeAll: true, item_id, product, silentRemove
    }));
    return;
  }
  const isLoggedIn = yield select(makeSelectLoggedIn());
  const mageId = yield select(makeSelectMagentoCartId());
  const url = isLoggedIn ? `${apiUrl}/carts/edit` : `${apiUrl}/carts/guestEdit`;
  const userData = isLoggedIn ? {
    data: {
      userId: (yield select(makeSelectUser())).id,
    },
  } : {};
  try {
    const total = yield select(makeSelectTotals());
    const data = yield call(request, url, {
      method: 'POST',
      body: JSON.stringify({
        ...userData,
        cartId: mageId,
        cartItem: {
          quote_id: mageId,
          sku: payload.product.sku,
          qty: payload.qty,
          item_id: payload.product.item_id,
        },
      }),
    });
    yield put(refetchTotals(data));
    yield put(editCartSuccess());
    clevertap.profile.push({
      Site: {
        current_amount_incart: total.subtotal_incl_tax,
      }
    })
    
  } catch (err) {
    yield put(makeProductInteractive(payload.product.id));
    cogoToast.error(`${payload.product && payload.product.name.slice(0,12)}... has gone out of stock. Removing from cart ....`);
    apiResponseDataLayerFn(err.status, err.response.url)
    yield put(removeFromCart({
       id, qty, sku, removeAll: true, item_id, product,
     }));
  }
}
}

function* _removeFromCartAsGuest({ payload }) {
  let url = '';
  const productQty = yield select(makeSelectProductQty(payload.id));
  const mageId = yield select(makeSelectMagentoCartId());
  const item_id = yield select(makeSelectItemId(payload.id));
  const expectedQty = productQty - payload.qty;
  if (expectedQty < 1 || payload.removeAll) {
    yield put(makeProductInert(payload.id));
    url = `${apiUrl}/carts/guestRemove`;
  } else {
    url = `${apiUrl}/carts/guestEdit`;
  }

  yield put(removeFromCartBeforeSync(payload));
  
  try {
    const data = yield call(request, url, {
      method: 'POST',
      body: JSON.stringify({
        cartId: mageId,
        cartItem: {
          quote_id: mageId,
          sku: payload.sku,
          qty: expectedQty,
          item_id,
        },
      }),
    });
    const cartLength = yield select(makeSelectCartItemsLength());
    if (cartLength == 1) {
      yield put(updateLocalCartData({ items: [], cartId: mageId, appliedRules: [] }));
      yield put(makeProductInteractive(payload.id));
      return;
    }
    else {
      yield put(refetchTotals(data));
    }
    yield put(makeProductInteractive(payload.id));
    !payload.silentRemove && cogoToast.success('Product has been removed from cart');
  } catch (err) {
    yield put(makeProductInteractive(payload.id));
    apiResponseDataLayerFn(err.status, err.response.url)
    yield put(syncCartError(err));
  }
}

function* _addToCartAsUser({ payload }) {
  try {
    yield put(addToCartBeforeSync(payload));
    // yield put(showSnackBar());
    if (process.browser && !isMobile) {
      if(!Router.router.pathname.includes("assessment")){
        cogoToast.success('Product has been added to cart');
      }

    }
    const mageId = yield select(makeSelectMagentoCartId());
    const url = `${apiUrl}/carts/add`;
    const data = yield call(request, url, {
      method: 'POST',
      body: JSON.stringify({
        data: {
          userId: (yield select(makeSelectUser())).id,
        },
        cartId: mageId,
        cartItem: {
          quote_id: mageId,
          sku: payload.sku,
          qty: payload.qty,
          product_option: payload.product_option,
        },
      }),
    });
    yield put(refetchTotals(data));
  } catch (err) {
    yield put(makeProductInteractive(payload.id));
    showCogoToastError(err);
    apiResponseDataLayerFn(err.status, err.response.url)
    yield put(addToCartError(err));
  }
}

function* _syncUserCartData({ type, payload }) {
  if (type === REMOVE_FROM_CART) {
    yield* _removeFromCartAsUser({ payload });
  } else if (type === ADD_TO_CART) {
    yield* _addToCartAsUser({ payload });
  }
}

function* _syncGuestCartData({ type, payload }) {
  try {
    const mageId = yield select(makeSelectMagentoCartId());
    if (type === ADD_TO_CART) {
      try{
        yield put(addToCartBeforeSync(payload));
        // yield put(showSnackBar());
        if (process.browser && !isMobile) {
          if(!Router.router.pathname.includes("assessment"))
          {
            cogoToast.success('Product has been added to cart');
          }
        }

        const url = `${apiUrl}/carts/guestAdd/`;
        const data = yield call(request, url, {
          method: 'POST',
          body: JSON.stringify({
            cartId: mageId,
            cartItem: {
              quote_id: mageId,
              sku: payload.sku,
              qty: payload.qty,
              product_option: payload.product_option,
            },
          }),
        });
        yield put(refetchTotals(data));
      }
      catch(err){
        yield put(makeProductInteractive(payload.id));
        showCogoToastError(err);
        apiResponseDataLayerFn(err.status, err.response.url)
        yield put(addToCartError(err));
      }

    } else if (type === REMOVE_FROM_CART) {
      yield* _removeFromCartAsGuest({ payload });
    }
  } catch (err) {
    yield put(syncCartError(err));
  }
}

function* syncCartData({ type, payload }) {
  const qtyCheck = yield select(makeSelectProductQty(payload.id));
  const totalQty = qtyCheck ? (qtyCheck + payload.qty) : payload.qty ;

  if (totalQty >  MAX_PRODUCT_ADD_LIMIT && type === ADD_TO_CART) {
    cogoToast.error("You can only buy up to 14 units of this product");
    yield put(editCartSuccess());
  } else {
    const isLoggedIn = yield select(makeSelectLoggedIn());
    if (type === ADD_TO_CART) {
      yield put(makeProductInert(payload.id));
    }
    if (isLoggedIn) {
      yield* _syncUserCartData({ type, payload });
    } else {
      yield* _syncGuestCartData({ type, payload });
    }
    if (type === ADD_TO_CART) {
      yield put(makeProductInteractive(payload.id));
    }
    const trackingData = yield select(makeUTMParams());
    const user = yield select(makeSelectUser());
    const total = yield select(makeSelectTotals());
    const coupon = yield select(makeSelectAppliedCouponCode());
    const walletBalance = yield select(makeSelectCreditBalance());
    const quantity = yield select(makeSelectTotalProductQty());
    clevertap.profile.push({
      Site: {
        current_amount_incart : total.subtotal_incl_tax,
      }
    })
    clevertap.event.push(
      type === ADD_TO_CART ? "ADD_TO_CART" : "removedFromCart",
      {
          ...trackingData,
          couponName: coupon ? coupon : "No Coupon Applied", 
          quantity,
          couponAmount: Math.abs(total.discount_amount),
          platform: "mewebsite",
          timeStamp: new Date().getTime(),
          productId: payload.id,
          productName:
              type === ADD_TO_CART ? payload.name : payload.product.name,
          productUrl:
              type === ADD_TO_CART ? payload?.slug : payload?.product?.slug,
          productName:
              type === ADD_TO_CART ? payload?.images?.[0] : payload?.product?.images?.[0],
          productShortName:
              type === ADD_TO_CART
                  ? `${payload.name.slice(0, 25)}...`
                  : `${payload.product.name.slice(0, 25)}...`,
          cartAmount: quantity===0 ? 0 : total.subtotal_incl_tax,
          ...(user && {
              userName: user.firstName + " " + user.lastName,
              email: user.email,
              phone: user.phone,
              gaUserId: user.id,
              walletBalance
          }),
          clickSource:window.location.pathname.split("/").slice(-1)[0] == "" ? 'Home' : window.location.pathname.split("/").slice(-1)[0],
          clickTarget:window.location.pathname.split("/").slice(-1)[0] == "" ? 'Home' : window.location.pathname.split("/").slice(-1)[0],
          productPrice: type === ADD_TO_CART ? payload.price : payload.product.price,
        }
      );
    }
}


function* errorSaga({ payload, error }) {
  try {
    const { response: { status } = { status: 503 }, message } = error || payload;
    if (status === 404 && !message.includes('contain item')) {
      yield put(reinitializeCart({ forceGuestReload: true }));
    } else if (status !== 401) {
      yield* fork(fixCart);
    }
  } catch (e) {
    console.log(e);
  }
}

function* addToWishlistSaga({ payload }) {
  const isLoggedIn = yield select(makeSelectLoggedIn());
  const user = yield select(makeSelectUser());
  if (isLoggedIn && user) {
    const url = `${apiUrl}/wishlist`;
    try {
      const data = yield call(request, url, {
        method: 'POST',
        body: JSON.stringify({
          method: 'add',
          data: {
            userId: user.id,
            productId: payload.item_id,
          },
        }),
      });
      yield put(addToWishlistSuccess(data));
    } catch (err) {
      showCogoToastError(err);
      yield put(addToWishlistError(err));
    }
  } else {
    cogoToast.info('Please log in to save to wishlist.');
  }
}

function* removeFromWishlistSaga({ payload }) {
  const isLoggedIn = yield select(makeSelectLoggedIn());
  const user = yield select(makeSelectUser());
  if (isLoggedIn && user) {
    const url = `${apiUrl}/wishlist`;
    try {
      const data = yield call(request, url, {
        method: 'POST',
        body: JSON.stringify({
          method: 'remove',
          data: {
            userId: user.id,
            itemId: payload.item_id,
            qty: payload.qty || 1,
          },
        }),
      });
      yield put(removeFromWishlistSuccess(data));
    } catch (err) {
      showCogoToastError(err);
      yield put(removeFromWishlistError(err));
    }
  }
}

function* getWishlistSaga() {
  const isLoggedIn = yield select(makeSelectLoggedIn());
  const user = yield select(makeSelectUser());
  if (isLoggedIn && user) {
    const url = `${apiUrl}/wishlist`;
    try {
      const data = yield call(request, url, {
        method: 'POST',
        body: JSON.stringify({
          method: 'list',
          data: {
            userId: user.id,
          },
        }),
      });
      yield put(getWishlistSuccess(data));
    } catch (err) {
      cogoToast.error('Couln\'t retrieve wishlist, we\'ll try again.');
      yield put(getWishlistError(err));
    }
  }
}

function* fetchUserCart() {
  try {
    const userId = yield select(makeSelectUserId());
    const cartData = yield call(request, `${apiUrl}/users/fetchCart/${userId}`, { 
      method: "GET",
      cache: "no-store" 
    });
    yield put(updateLocalCartData(cartData));
  } catch (err) {
    showCogoToastError(err);
    apiResponseDataLayerFn(err.status, err.response.url)
    yield put(loadCartError(err));
  }
}

function* fetchGuestCart() {
  try {
    const requestURL = `${apiUrl}/carts/guest/${yield select(makeSelectMagentoCartId())}/items`;
    const cartItems = yield call(request, requestURL);
    yield put(updateLocalCartData(cartItems));
  } catch (err) {
    showCogoToastError(err);
    apiResponseDataLayerFn(err.status, err.response.url)
    yield put(loadCartError(err));
  }
}

function* fixCart() {
  const isLoggedIn = yield select(makeSelectLoggedIn());
  if (isLoggedIn) {
    yield put(fetchUserCartRequest());
  } else {
    yield* initiateStateFromAPI({ forceGuestReload: true });
  }
}

function* putFixCartAction() {
  yield put({ type: 'FIX_CART' });
}

function* initiateStateFromAPI({ payload }) {

  if (process.browser) {
    const isClearState = JSON.parse(sessionStorage.getItem('isClearState'));  
    if (isClearState) {
      sessionStorage.setItem('isClearState', false);
      return;
    }
    
    if (Router.router.pathname === "/checkout/thank-you-redirect") {
      return;
    }
  }


  const isLoggedIn = yield select(makeSelectLoggedIn());
  const mageId = yield select(makeSelectMagentoCartId());
  const userId = yield select(makeSelectUserId());
  if (isLoggedIn) {
    if (payload.forceGuestReload) {
      const requestURL = `${apiUrl}/users/createQuote/${userId}`;
      try {
        const data = yield call(request, requestURL);
        yield put(updateLocalCartData({ cartId: data.cartId, items: data.items }));
      }
      catch (e) {
        console.log(e)
      }
    } else {
      yield put(fetchUserCartRequest());
    }
  } else if (!isLoggedIn && (payload.forceGuestReload || !mageId)) {
    const requestURL = `${apiUrl}/carts/createGuestCart`;
    try {
      // const data = yield call(request, requestURL);
      // yield put(updateLocalCartData(data));
    } catch (err) {
      yield put(loadCartError(err));
    }
  } else if (!isLoggedIn && mageId) {
    yield* fetchGuestCart({});
  }
}

// function* routeToStore() {
//   yield call(() => {
//     Router.pushRoute(shopRedirectLink);
//   });
//   yield put(closeCart());
// }

// TODO IMPORTANT: better scaffold requests and matching success types for Cart module, specially initialising state

export default [
  takeLatest(INIT_APP_STATE, initiateStateFromAPI),
  takeLatest(SIGNUP_SUCCESS, putFixCartAction),
  takeLatest(FETCH_USER_CART_REQUEST, fetchUserCart),
  // takeLatest(INIT_CART_ON_LOGIN_REQUEST, putFixCartAction),
  // takeLatest(LOGIN_SUCCESS, putFixCartAction),
  takeLatest(REINITIALIZE_CART, initiateStateFromAPI),
  takeLatest(LOGOUT_REQUEST, initiateStateFromAPI),
  takeEvery(ADD_TO_CART, syncCartData),
  takeEvery(REMOVE_FROM_CART, syncCartData),
  // takeLatest(UPDATE_LOCAL_CART_DATA, updateLocalCartSaga),
  takeLatest(EDIT_CART_REQUEST, editCartItem),
  takeEvery([SYNC_CART_ERROR, SHIPPING_ERROR], errorSaga),
  takeLatest(ADD_TO_WISHLIST_REQUEST, addToWishlistSaga),
  takeLatest(REMOVE_FROM_WISHLIST_REQUEST, removeFromWishlistSaga),
  takeLatest(GET_WISHLIST_REQUEST, getWishlistSaga),
  takeEvery('FIX_CART', fixCart),
  // takeEvery(ROUTE_TO_STORE, routeToStore),
];
