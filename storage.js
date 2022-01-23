import { clone, filter } from 'ramda';

const { localStorage } = typeof window !== 'undefined' ? window : {
  localStorage: {
    getItem: () => null,
  },
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('pwaState');
    if (serializedState === null) {
      return undefined;
    }
    const state = JSON.parse(serializedState);
    state.cart.data.cartMap = filter(hasItemId, state.cart.data.cartMap);
    state.cart.data.ids = filter(containsItem(state.cart.data.cartMap), state.cart.data.ids);

    return state;
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  if (state && typeof window !== 'undefined') {
    try {
      state.products = undefined
      const serializedState = JSON.stringify(state);
	
      localStorage.setItem('pwaState', serializedState);
    } catch (err) {
      console.log(err);
    }
  }
};

function hasItemId(cartItem) {
  return Boolean(cartItem.item_id);
}

function containsItem(object) {
  return item => Object.keys(object).includes(`${item}`);
}
