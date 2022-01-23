/* eslint-disable default-case, no-param-reassign */
import produce from 'immer';
import { clone, reject, equals } from 'ramda';
import { isNonEmptyArray } from 'ramda-adjunct';

import { LOGOUT_SUCCESS } from 'containers/Auth/redux/constants';
import { GET_TOTALS_SUCCESS, GET_TOTALS_ERROR } from 'containers/Checkout/redux/constants';
import * as actionTypes from './constants';

export const initialState = {
  loading: false,
  error: false,
  data: {
    cartId:false,
    ids: [],
    cartMap: {},
    recentRemovals: [],
    appliedRules: [],
    wishlist: [],
    inertProducts: [],
  },
  open: false,
};

function reducer(state = clone(initialState), action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case actionTypes.OPEN_CART: {
        draft.open = action.payload;
        history.pushState(null, null, null)
        break;
      }
      case actionTypes.OPEN_WISHLIST: {
        draft.open = 'wishlist';
        break;
      }
      case actionTypes.OPEN_CART_EXPLICITLY: {
        draft.open = 'cart'
        break;
      }
      case actionTypes.CLOSE_CART: {
        draft.open = false;
        break;
      }
      case actionTypes.CLOSE_CART_EXPLICITLY: {
        draft.open = false;
        break;
      }
      case actionTypes.ADD_TO_CART: {
        draft.loading = true;
        break;
      }
      case actionTypes.EDIT_CART_REQUEST:
      case actionTypes.REMOVE_FROM_CART: {
        draft.loading = true;
        break;
      }
      case actionTypes.EDIT_CART_SUCCESS: {
        draft.loading = false;
        break;
      }
      case actionTypes.ADD_TO_CART_SYNC: {
        // draft.loading = false;
        const {
          id, qty,
        } = action.payload;
        const {
          ids, cartMap,
        } = draft.data;
        if (ids.includes(id)) {
          // product is in cart
          cartMap[id].qty += qty;
          // TODO: Make sure addToCart in PDP checks existing cart qty before firing action
        } else {
          // product is not in cart
          ids.push(id);
          cartMap[id] = action.payload;
        }
        break;
      }
      case actionTypes.REMOVE_FROM_CART_SYNC: {
        const {
          id, qty, removeAll,
        } = action.payload;
        const {
          ids, cartMap,
        } = draft.data;
        const stringId = `${id}`;
        if (ids.includes(stringId)) {
          // product is in cart
          if (qty) {
            cartMap[id].qty -= qty;
          }
          if (cartMap[id].qty < 1 || removeAll) {
            draft.data.ids = reject(equals(stringId), ids);
            if (!ids.includes(stringId)) {
              delete cartMap[id];
            }
          }
        }
        break;
      }

      case GET_TOTALS_SUCCESS:
      case actionTypes.UPDATE_LOCAL_CART_DATA: {
        const { payload: { items, cartId, appliedRules } } = action;
        console.log(`payload`, action.payload)
        draft.loading = false;
        draft.error = false;
        if (cartId) {
          draft.data.cartId = cartId;
        }

        if (appliedRules) {
          draft.data.appliedRules = appliedRules;
        }
        if (!items?.length) {
          draft.data.ids = [];
          draft.data.cartMap = {};
          break;
        }

        const transformed = isNonEmptyArray(items) ? items.reduce((map, item) => {
          map[item.id] = item;
          return map;
        }, {}) : {};

        draft.data.ids = items.map(item => item.id);
        draft.data.cartMap = transformed;
        break;
      }
      
      case actionTypes.ADD_TO_CART_ERROR:
      case GET_TOTALS_ERROR:
      case actionTypes.EDIT_CART_ERROR:
      case actionTypes.SYNC_CART_ERROR: {
        draft.loading = false;
        break;
      }
      case actionTypes.ADD_TO_WISHLIST_REQUEST: {
        draft.loading = true;
        draft.error = false;
        break;
      }
      case actionTypes.ADD_TO_WISHLIST_SUCCESS: {
        draft.loading = false;
        draft.error = false;
        draft.data.wishlist = action.payload;
        break;
      }
      case actionTypes.ADD_TO_WISHLIST_ERROR: {
        draft.loading = false;
        draft.error = action.payload;
        break;
      }
      case actionTypes.REMOVE_FROM_WISHLIST_REQUEST: {
        draft.loading = true;
        draft.error = false;
        break;
      }
      case actionTypes.REMOVE_FROM_WISHLIST_SUCCESS: {
        draft.loading = false;
        draft.error = false;
        draft.data.wishlist = action.payload;
        break;
      }
      case actionTypes.REMOVE_FROM_WISHLIST_ERROR: {
        draft.loading = false;
        draft.error = action.payload;
        break;
      }
      case actionTypes.GET_WISHLIST_REQUEST: {
        draft.loading = true;
        draft.error = false;
        break;
      }
      case actionTypes.GET_WISHLIST_SUCCESS: {
        draft.loading = false;
        draft.error = false;
        draft.data.wishlist = action.payload;
        break;
      }
      case actionTypes.GET_WISHLIST_ERROR: {
        draft.loading = false;
        draft.error = action.payload;
        break;
      }
      case LOGOUT_SUCCESS:
      case actionTypes.REINITIALIZE_CART: {
        draft.data = initialState.data;
        draft.open = false;
        draft.error = false;
        draft.loading = false;
        break;
      }
      case actionTypes.SAVE_TO_RECENT_REMOVALS: {
        draft.data.recentRemovals.push(action.payload);
        break;
      }
      case actionTypes.REMOVE_FROM_RECENT_REMOVALS: {
        draft.data.recentRemovals = draft.data.recentRemovals.filter(item => item.id !== action.payload);
        break;
      }
      case actionTypes.MAKE_PRODUCT_INERT: {
        draft.data.inertProducts.push(action.payload);
        break;
      }
      case actionTypes.MAKE_PRODUCT_INTERACTIVE: {
        draft.data.inertProducts = draft.data.inertProducts.filter(i => i !== action.payload);
        break;
      }
    }
  });
}

export default reducer;
