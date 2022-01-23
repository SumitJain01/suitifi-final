import dataLayer from 'lib/gtmDataLayer';
import cogoToast from 'lib/toast';
import config from 'config/env';
import { getCustomAttributeFromProduct } from 'utils/productModule';
import { makePriceForDataLayer } from 'utils/helpers/trackingHelpers';
import { showCogoToastError } from 'containers/Cart/redux/saga'
import * as actionTypes from './constants';

export function refetchTotals(payload) {
  return {
    type: 'refetchCartTotals',
    payload,
  };
}

export function routeToStore(payload) {
  return {
    type: actionTypes.ROUTE_TO_STORE,
    payload,
  };
}

export function saveToRecentRemovals(payload) {
  return {
    type: actionTypes.SAVE_TO_RECENT_REMOVALS,
    payload,
  };
}

export function removeFromRecentRemovals(payload) {
  return {
    type: actionTypes.REMOVE_FROM_RECENT_REMOVALS,
    payload,
  };
}

export function undoCartRemoval(payload) {
  return {
    type: actionTypes.UNDO_CART_REMOVAL,
    payload,
  };
}

export function updateLocalCartData(payload) {
  return {
    type: actionTypes.UPDATE_LOCAL_CART_DATA,
    payload,
  };
}

export function applyUpdatesToLocalCart(payload) {
  return {
    type: actionTypes.APPLY_LOCAL_CART_UPDATES,
    payload,
  };
}

export function initCartOnLoginRequest() {
  return {
    type: actionTypes.INIT_CART_ON_LOGIN_REQUEST,
  };
}

export function reinitializeCart(payload) {
  return {
    type: actionTypes.REINITIALIZE_CART,
    payload,
  };
}

export function addToCart(payload) {
  return {
    type: actionTypes.ADD_TO_CART,
    payload,
  };
}


export function removeFromCart(payload) {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload,
  };
}

export function addToCartBeforeSync(payload) {
  return {
    type: actionTypes.ADD_TO_CART_SYNC,
    payload,
  };
}

export function removeFromCartBeforeSync(payload) {
  return {
    type: actionTypes.REMOVE_FROM_CART_SYNC,
    payload,
  };
}

export function openCart(payload) {
  return {
    type: actionTypes.OPEN_CART,
    payload,
  };
}

export function closeCart(payload) {
  return {
    type: actionTypes.CLOSE_CART,
    payload,
  };
}

export function openCartExplicitly(payload) {
  return {
    type: actionTypes.OPEN_CART_EXPLICITLY,
    payload
  }
}

export function closeCartExplicitly(payload) {
  return {
    type: actionTypes.CLOSE_CART_EXPLICITLY,
    payload
  }
}

export function getWishlistRequest(payload) {
  return {
    type: actionTypes.GET_WISHLIST_REQUEST,
    payload,
  };
}

export function getWishlistSuccess(payload) {
  return {
    type: actionTypes.GET_WISHLIST_SUCCESS,
    payload,
  };
}

export function getWishlistError(error) {
  return {
    type: actionTypes.GET_WISHLIST_ERROR,
    error,
  };
}

export function getWishlistIdle() {
  return {
    type: actionTypes.GET_WISHLIST_IDLE,
  };
}

export function loadCartRequest(payload) {
  return {
    type: actionTypes.LOAD_CART_REQUEST,
    payload,
  };
}

export function loadCartSuccess(payload) {
  return {
    type: actionTypes.LOAD_CART_SUCCESS,
    payload,
  };
}

export function loadCartError(error) {
  return {
    type: actionTypes.LOAD_CART_ERROR,
    error,
  };
}


export function editCartRequest(payload) {
  const {
    name, price, qty, sku, categories, old_productid: oldId, id,special_price,position
  } = payload.product;
  try {
    const isAdd = payload.qty > qty;
    const event = isAdd ? "addToCart" : "removeFromCart";
    const key = isAdd ? 'add' : 'remove';
    const quantity = isAdd ? payload.qty - qty : qty - payload.qty;
    dataLayer.push({
      event,
      ecommerce: {
        currencyCode: 'INR',
        [key]: {
          products: [{
            id: sku,
            name,
            price:makePriceForDataLayer(price),
            brand: config.brandTitle,
            quantity,
          }],
        },
      },
    });
  } catch (error) {
    return {
      type: actionTypes.EDIT_CART_REQUEST,
      payload,
      meta: {
        error,
      },
    };
  }
  return {
    type: actionTypes.EDIT_CART_REQUEST,
    payload,
  };
}

export function editCartSuccess(payload) {
  return {
    type: actionTypes.EDIT_CART_SUCCESS,
    payload,
  };
}

export function editCartError(error) {
  return {
    type: actionTypes.EDIT_CART_ERROR,
    error,
  };
}


export function syncCartError(error) {
  showCogoToastError(error)
  return {
    type: actionTypes.SYNC_CART_ERROR,
    error,
  };
}

export function addToWishlist(payload) {

  return {
    type: actionTypes.ADD_TO_WISHLIST_REQUEST,
    payload,
  };
}

export function addToWishlistSuccess(payload) {
  return {
    type: actionTypes.ADD_TO_WISHLIST_SUCCESS,
    payload,
  };
}

export function addToWishlistError(payload) {
  return {
    type: actionTypes.ADD_TO_WISHLIST_ERROR,
    payload,
  };
}

export function removeFromWishlist(payload) {

  return {
    type: actionTypes.REMOVE_FROM_WISHLIST_REQUEST,
    payload,
  };
}

export function removeFromWishlistSuccess(payload) {
  return {
    type: actionTypes.REMOVE_FROM_WISHLIST_SUCCESS,
    payload,
  };
}

export function removeFromWishlistError(payload) {
  return {
    type: actionTypes.REMOVE_FROM_WISHLIST_ERROR,
    payload,
  };
}

export function moveToCart(payload) {
  return {
    type: actionTypes.MOVE_TO_CART,
    payload,
  };
}

export function fetchUserCartRequest(payload) {
  return {
    type: actionTypes.FETCH_USER_CART_REQUEST,
    payload,
  };
}

export function fetchUserCartSuccess(payload) {
  return {
    type: actionTypes.FETCH_USER_CART_SUCCESS,
    payload,
  };
}

export function fetchUserCartError(error) {
  return {
    type: actionTypes.FETCH_USER_CART_ERROR,
    error,
  };
}

export function makeProductInert(payload) {
  return {
    type: actionTypes.MAKE_PRODUCT_INERT,
    payload,
  };
}

export function makeProductInteractive(payload) {
  return {
    type: actionTypes.MAKE_PRODUCT_INTERACTIVE,
    payload,
  };
}

export function addToCartError(payload) {
  return {
    type: actionTypes.ADD_TO_CART_ERROR,
    payload
  };
}
