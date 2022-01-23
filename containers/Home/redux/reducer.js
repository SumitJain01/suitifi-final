/* eslint-disable default-case, no-param-reassign */
import produce from 'immer';
import * as actionTypes from './constants';

export const initialState = {
  loading: false,
  data: {
    homePageCarousels: []  
  },
};

function reducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case actionTypes.HOMEPAGE_CAROUSELS_REQUEST: {
        draft.loading = true;
        break;
      }
      case actionTypes.HOMEPAGE_CAROUSELS_SUCCESS: {
        draft.data.homePageCarousels = action.payload;
        draft.loading = false;
        break;
      }
    }
  });
}

export default reducer;
