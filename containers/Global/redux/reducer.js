/* eslint-disable default-case */
import produce from 'immer';
import nanoid from 'nanoid';
import { noop } from 'ramda-adjunct';
import * as actionTypes from './constants';

export const initialState = {
  loading: false,
  error: false,
  data: {
    size: { width: 0, height: 0 },
    currency: { label: 'INR', value: 1 },
    modals: [],
    showSnackBar: false,
    showSnackBarPDP: false,
    mefe: false,
    appVersion: '0.1alpha',
    isReduxMobile : true
  },
};

function reducer(state = initialState, { type, payload }) {
  return produce(state, (draft) => {
    switch (type) {
      case actionTypes.SET_ME_FE:
        draft.data.mefe = payload;
        break;

      case actionTypes.OPEN_MODAL:
        draft.data.modals = draft.data.modals.concat({
          ...payload,
          id: payload.id || nanoid(),
          onClose: payload.onClose || noop,
          onConfirm: payload.onConfirm || noop,
        });
        break;

      case actionTypes.CLOSE_MODAL:
        draft.data.modals = draft.data.modals.filter(item => item.id !== payload.id);
        break;

      case actionTypes.SHOW_SNACK_BAR:
        draft.data.showSnackBar = true;
        break;
      
      case actionTypes.HIDE_SNACK_BAR:
        draft.data.showSnackBar = false;
        break;

      case actionTypes.SHOW_SNACK_BAR_PDP:
        draft.data.showSnackBarPDP = true;
        break;
      
      case actionTypes.HIDE_SNACK_BAR_PDP:
        draft.data.showSnackBarPDP = false;
        break;
    }
  });
}

export default reducer;
