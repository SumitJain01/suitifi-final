/* eslint-disable default-case */

import produce from 'immer';
import { merge, prop, find, propEq } from 'ramda';
import { isString } from 'ramda-adjunct';
import * as actionTypes from './constants';


export const initialState = {
  loading: false,
  error: false,
  data: {
    item: false,
    related: [],
    upsells: [],
    crossSells: [],
    reviews: false,
    recent: [],
  },
};

function reducer(state = initialState, { type, payload, error }) {
  return produce(state, (draft) => {
    switch (type) {
      case actionTypes.LOAD_PRODUCT_IDLE:
        draft = initialState;
        break;

      case actionTypes.LOAD_PRODUCT:
        draft.loading = true;
        draft.error = false;
        draft.data.item = false;
        break;

      case actionTypes.LOAD_PRODUCT_SUCCESS: {
        const { data } = draft;
        let final = payload;
        try {
          const specialPrice = prop('value')(find(propEq('attribute_code', 'special_price'))(prop('customattributes', payload)) || {});
          const displayTag = prop('value')(find(propEq('attribute_code', 'tags'))(prop('customattributes', payload)) || {});
          const createScarcity = prop('value')(find(propEq('attribute_code', 'create_scarcity'))(prop('customattributes', payload)) || {});
          final = merge({ meta: { specialPrice, displayTag, createScarcity: isString(createScarcity) && Number(createScarcity) } }, payload);
        } catch (e) {
          console.log(e);
        }
        draft.loading = false;
        draft.error = false;
        data.item = final;
        if (!data.recent.includes(payload.slug)) {
          data.recent.unshift(final);
        }
        if (data.recent.length > 10) {
          data.recent.pop();
        }
        break;
      }

      case actionTypes.LOAD_PRODUCT_ERROR:
        draft.loading = false;
        draft.error = error.message;
        draft.data.item = false;
        break;

      case actionTypes.GET_RELATED_REQUEST:
        draft.data.related = false;
        break;

      case actionTypes.GET_RELATED_SUCCESS:
        draft.data.related = payload;
        break;

      case actionTypes.GET_RELATED_ERROR:
        draft.data.related = false;
        break;

      case actionTypes.GET_CROSS_SELLS_REQUEST:
        draft.data.crossSells = false;
        break;

      case actionTypes.GET_CROSS_SELLS_SUCCESS:
        draft.data.crossSells = payload;
        break;

      case actionTypes.GET_CROSS_SELLS_ERROR:
        draft.data.crossSells = false;
        break;

      case actionTypes.GET_UPSELLS_REQUEST:
        draft.data.upsells = false;
        break;

      case actionTypes.GET_UPSELLS_SUCCESS:
        draft.data.upsells = payload;
        break;

      case actionTypes.GET_UPSELLS_ERROR:
        draft.data.upsells = false;
        break;

      case actionTypes.GET_REVIEWS_SUCCESS:
        draft.data.reviews = payload;
        break;

      case actionTypes.GET_REVIEWS_ERROR:
        draft.data.reviews = false;
        break;
    }
  });
}

export default reducer;
