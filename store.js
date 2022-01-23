import createSagaMiddleware from 'redux-saga';
import { clone, pathOr, mergeDeepRight } from 'ramda';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import homeReducer from 'containers/Home/redux/reducer';
import productReducer from 'containers/Product/redux/reducer';
import productsReducer from 'containers/Products/redux/reducer';
import cartReducer from 'containers/Cart/redux/reducer';
import authReducer, { initialState as initialAuthState } from 'containers/Auth/redux/reducer';
import checkoutReducer, { initialState as initialCheckoutState } from 'containers/Checkout/redux/reducer';
import { initAppState } from 'containers/Global/redux/actions';
import accountReducer from 'containers/Account/redux/reducer';
import globalReducer from 'containers/Global/redux/reducer';
import rootSaga from './saga';
import { loadState, saveState } from './storage';
import { HYDRATE ,createWrapper } from 'next-redux-wrapper';

const persistedState = loadState() || {};

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const combinedReducer = combineReducers({
  home: homeReducer,
  products: productsReducer,
  fetchedProduct: productReducer,
  cart: cartReducer,
  auth: authReducer,
  checkout: checkoutReducer,
  account: accountReducer,
  global: globalReducer,
})

const reducer = (state, action) => {
  if (action.type === HYDRATE) {  
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }

    // Preserve state on client side navigation
    if (state.cart) nextState.cart = state.cart;
    if (state.checkout) nextState.checkout = state.checkout;
    if (state.account) nextState.account = state.account;
    if (state.auth) nextState.auth = state.auth;
    if (state.global) nextState.global = state.global;
    if (state.fetchedProduct) nextState.fetchedProduct = state.fetchedProduct;

    return nextState
  } else {
    return combinedReducer(state, action)
  }
}

export const configureStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  
  const store = createStore(
    reducer,
    mergeDeepRight(initialState, persistedState),
    bindMiddleware([
      sagaMiddleware,
    ]),
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  store.subscribe(() => {
    const state = clone(store.getState());
    saveState({
      products: { ...state.products, loading: false, error: false },
      auth: {
        ...initialAuthState,
        data: {
          user: state.auth.data.user,
          token: state.auth.data.token,
          otp: initialAuthState.data.otp,
        },
      },
      cart: {
        ...state.cart,
        data: {
          ...state.cart.data,
          recentRemovals: [],
        },
        open: false,
        loading: false,
      },
      checkout: {
        ...initialCheckoutState,
        localStorageAddressData: pathOr(false, ['checkout', 'localStorageAddressData'], state),
        data: {
          ...initialCheckoutState.data,
          totals: pathOr(false, ['checkout', 'data', 'totals'], state),
        },
      },
    });
  });
  store.dispatch(initAppState());
  return store;
}

export const wrapper = createWrapper(configureStore);
