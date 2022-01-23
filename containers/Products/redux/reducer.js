import { compose, groupBy, prop } from 'ramda';
import * as actionTypes from './constants';
import { INIT_APP_STATE } from 'containers/Global/redux/constants';

export const initialState = {
  loading: false,
  error: false,
  sortBy: false,
  filterBy: false,
  is_in_stockList: false,
  is_in_stockListLoading: false,
  is_in_stockListError: false,
  data: {
    list: false,
    clientCache: {
      list: false,
      categories: false,
    },
    categories: false,
  },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS:
      return {
        ...state,
        ...{
          loading: true,
          error: false,
        },
      };

    case actionTypes.LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        ...{
          error: false,
          loading: false,
        },
        data: {
          ...state.data,
          list: action.payload.list,
          categories: action.payload.categories,
          positionConfig: compose(groupBy(prop('category_id')))(action.payload.position || []),
        },
      };

    case actionTypes.LOAD_PRODUCTS_ERROR:
      return {
        ...state,
        ...{
          error: action.error,
          loading: false,
        },
      };

    case actionTypes.LOAD_PRODUCTS_IDLE:
      return {
        ...state,
      };
    case INIT_APP_STATE: {
      if (!state.data.list && state.data.clientCache.list && state.data.clientCache.categories) {
        state.data.list = state.data.clientCache.list;
        state.data.categories = state.data.clientCache.categories;
        state.data.clientCache = false;
      } else if (state.data.list && state.data.clientCache) {
        state.data.clientCache = false;
      }
      return state;
    };
    case actionTypes.SET_SORT_BY:
      return {
        ...state,
        ...{
          sortBy: action.payload
        }
      };
    case actionTypes.RESET_SORT_BY:
      return {
        ...state,
        ... {
          sortBy: false
        }
      };
    case actionTypes.SET_FILTER_BY:
      return {
        ...state,
        ...{
          filterBy: action.payload
        }
      };
    case actionTypes.RESET_FILTER_BY:
      return {
        ...state,
        ...{
          filterBy: false
        }
      };
    case actionTypes.LOAD_IN_STOCK_DATA_SUCCESS:
      return {
        ...state,
        ... {
          is_in_stockList: action.payload,
          is_in_stockListError: false,
          is_in_stockListLoading: false
        }
      };
    case actionTypes.LOAD_IN_STOCK_DATA_ERROR:
      return {
        ...state,
        ... {
          is_in_stockListError: action.error,
          is_in_stockListLoading: false
        }
      };
    default:
      return state;
  }
}

export default reducer;
