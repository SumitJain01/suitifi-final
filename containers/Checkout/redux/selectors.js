/* eslint-disable no-unused-expressions */
import { createSelector } from 'reselect';
import {
  defaultTo,
  path,
  compose,
  prop,
  find,
  propEq,
  propOr,
  ifElse,
  identity,
  equals,
  map,
  propSatisfies,
  assoc,
  pathOr,
  includes,
  both,
  converge,
  hasPath,
  reject,
} from 'ramda';
import { compact } from 'ramda-adjunct';
import { selectCart, makeSelectWhetherCartHasFreeStuff, makeSelectCartMap } from 'containers/Cart/redux/selectors';
import { safePath } from 'utils/ramda-adjunct';
import { makeSelectGetAllStock } from 'containers/Products/redux/selectors'

const selectCheckout = state => state.checkout;
const selectTotals = state => state.checkout.data.totals;
const selectAccount = state => state.account;

export const makeSelectCODAvailability = () => createSelector(
  selectCheckout,
  checkoutState => path(['data', 'isCODAvailable'], checkoutState)
)

export const makeSelectCheckout = () => createSelector(
  selectCheckout,
  checkoutState => checkoutState
);

export const makeSelectWalletChecked = () => createSelector(
  selectCheckout,
  checkoutState => (path(['walletChecked'], checkoutState))
);

export const makeSelectTotals = () => createSelector(
  selectCheckout,
  checkoutState => (path(['data', 'totals'], checkoutState) || 0)
);

export const makeUTMParams = () =>
    createSelector(selectCheckout, checkoutState => {
      const utm_params = {};
      if (checkoutState.meta.trackingData !== "no-campaign") {
        const list = checkoutState.meta.trackingData.toString().split(",");
        list.forEach(element => {
          if (
              element.split(":")[0] === "gclid" ||
              element.split(":")[0] === "fbclid"
          ) {
              utm_params["advertiserId"] = element.split(":")[1];
          } else {
              utm_params[element.split(":")[0]] = element.split(":")[1];
          }
        });
      }
      return utm_params;
    });

export const makeSelectDiscount = () => createSelector(
  selectCheckout,
  checkoutState => (compose(
    defaultTo(false),
    find(propEq('code', 'discount')),
    safePath([])(['data', 'totals', 'total_segments']),
  )(checkoutState))
);

export const makeSelectSubtotal = () => createSelector(
  selectCheckout,
  checkoutState => (path(['data', 'totals', 'subtotal_with_discount'], checkoutState) || 0)
);

export const makeSelectShippingAmount = () => createSelector(
  selectCheckout,
  checkoutState => (path(['data', 'totals', 'shipping_amount'], checkoutState) || 0)
)

export const makeSelectOrderId = () => createSelector(
  selectCheckout,
  checkoutState => path(['data', 'order', 'entity_id'], checkoutState)
);

export const makeSelectCreditDeduction = () => createSelector(
  selectCheckout,
  checkoutState => compose(
    ifElse(equals(0), () => false, identity),
    propOr(false, 'value'),
    defaultTo({}),
    find(propEq('code', 'customerbalance')),
    safePath([])(['data', 'totals', 'total_segments']),
  )(checkoutState)
);


export const makeSelectShippingCost = () => createSelector(
  selectCheckout,
  checkoutState => compose(prop('amount'), find(propEq('carrier_code', 'freeshipping')), path(['data', 'shipping']))(checkoutState)
);

export const makeSelectHasPlacedOrder = () => createSelector(
  selectCheckout,
  checkoutState => hasPath(['data', 'order', 'entity_id'], checkoutState),
);

export const makeSelectOrderInfo = () => createSelector(
  selectCheckout,
  checkoutState => path(['data', 'order'], checkoutState)
);

export const makeSelectTrackingComment = () => createSelector(
  selectCheckout,
  checkoutState => path(['meta', 'trackingData'], checkoutState),
);

export const makeSelectOrderMeta = () => createSelector(
  selectCheckout,
  checkoutState => path(['meta', 'order'], checkoutState),
);

export const makeSelectError = () => createSelector(
  selectCheckout,
  checkoutState => prop('error', checkoutState)
);

export const makeSelectLoading = () => createSelector(
  selectCheckout,
  selectCart,
  selectAccount,
  (checkoutState, cartState, accountState) => prop('loading', checkoutState) || prop('loading', cartState) || prop('loading', accountState)
);
export const makeSelectThankyouPageLoading = () => createSelector(
  selectCheckout,
  (checkoutState) => prop('thankyouPageLoading', checkoutState) 
);
export const makeSelectPlaceOrderLoading = () => createSelector(
  selectCheckout,
  (checkoutState) => prop('placeOrderLoading', checkoutState)
)

export const makeSelectPaymentError = () => createSelector(
  selectCheckout,
  (checkoutState) => prop('paymentFailed', checkoutState)
);

export const makeSelectPaymentErrorMessage = () => createSelector(
  selectCheckout,
  (checkoutState) => prop('paymentError', checkoutState)
);

export const makeSelectOtpLoading = () => createSelector(
  selectCheckout,
  (selectCheckout) => prop('otpLoading', selectCheckout)
);

export const makeSelectpaymentEntity = () => createSelector(
  selectCheckout,
  checkoutState => path(['data', 'paymentEntity'], checkoutState)
);

export const makeSelectIncrementId = () => createSelector(
  selectCheckout,
  checkoutState => path(['data', 'order', 'increment_id'], checkoutState)
);


const makeShippingTextApplicator = (total, hasAddress) => {
  return identity;
  // if (hasAddress) {
  //   return identity;
  // }
  // if (total > 398) {
  //   return assoc('value', 'Free');
  // }
  // return assoc('value', 'To Be Estimated');
};

const makeCheckIfShippingIsApplied = (total, hasAddress) => ifElse(
  both(() => hasAddress, propSatisfies(includes('Custom Shipping'), 'title')),
  assoc('title', 'Shipping'),
  compose(assoc('title', 'Shipping'), makeShippingTextApplicator(total, hasAddress)),
);

const allKeys = ['subtotal', 'shipping', 'discount', 'custom_payment_mutation', 'customerbalance', 'fee',
  'grand_total_adjusted', 'orderTotal', 'itemsDiscount'];
// eslint-disable-next-line
const makeKeysToPickFromTotalSegments = (isCheckoutPage) => {
  return allKeys;
  // let rejector = includes(__, ['shipping', 'custom_payment_mutation', 'grand_total_adjusted', 'customerbalance']);
  // if (isCheckoutPage) {
  //   rejector = equals('grand_total');
  // }
  // return reject(rejector)(allKeys);
};

export const makeSelectTotalSegmentsArray = () => createSelector(
  selectCheckout,
  checkoutState => pathOr([], ['data', 'totals', 'total_segments'], checkoutState)
);

export const makeSelectTotalSegments = options => createSelector(
  selectCheckout,
  (checkoutState) => {
    const isCheckoutPage = prop('isCheckoutPage', options);
    let getTotalSegmentsFromCheckoutState;
    if (!isCheckoutPage) {
      getTotalSegmentsFromCheckoutState = pathOr([], ['data', 'totals', 'total_segments']);
    } else {
      getTotalSegmentsFromCheckoutState = it => pathOr(pathOr([], ['data', 'totals', 'total_segments'], it), ['data', 'order', 'totals', 'total_segments'], it);
    }
    const total = makeSelectGrandTotalFromCheckoutState()(checkoutState);
    const meta = makeSelectOrderMeta()({ checkout: checkoutState });
    const segments = compose(
      map(compose(
        ifElse(
          propEq('code', 'shipping'),
          makeCheckIfShippingIsApplied(total, meta.billingAddress),
          identity
        ),
        ifElse(
          propEq('code', 'fee'),
          assoc('title', 'Free Product Fee'),
          identity
        )
      )),
      compact,
      segs => makeKeysToPickFromTotalSegments(isCheckoutPage).reduce((acc, item) => {
        const segment = segs.find(x => x.code === item);
        // console.log(segment);
        if (segment && !segment.index) {//check added so that this don't override node index.
          switch (segment.code) {
            case "subtotal":
              segment.index = 3;
              break;
            case "discount":
              segment.index = 4;
              break;
            case "shipping":
              segment.index = 5;
              break;
            case "customerbalance":
              segment.index = 6;
              break;
            default:
              segment.index = 100;
          }
        }
        item && acc.push(segment);
        return acc;
      }, []),
      getTotalSegmentsFromCheckoutState,
    )(checkoutState);
    return segments;
  },
);

export const makeSelectAppliedCouponCode = () => createSelector(
  selectTotals,
  propOr(false, 'coupon_code')
);

export const makeSelectCouponError = () => createSelector(
  selectCheckout,
  checkoutState => path(['data', 'couponError'], checkoutState)
)

export const makeSelectShippingCalculationCriteria = () => createSelector(
  state => makeSelectOrderMeta()(state),
  selectTotals,
  makeSelectCartMap(),
  makeSelectAppliedCouponCode(),
  (orderMeta, totalsState, cartMap, couponCode) => {
    const grandTotal = compose(
      prop('value'),
      find(propEq('code', 'grand_total')),
      propOr([], 'total_segments'),
    )(totalsState);
    const categoriesInCart = Array.from(Object.values(cartMap).reduce((acc, item) => {
      item.categories.forEach(cat => acc.add(cat));
      return acc;
    }, new Set()));
    const shippingCurrentlyApplied = propOr(0, 'shipping_amount')(totalsState);
    return {
      shippingCurrentlyApplied: shippingCurrentlyApplied,
      grandTotal,
      coupon: couponCode,
      categoriesInCart,
      paymentType: orderMeta.selectedPaymentMethod,
    };
  }
);

export const makeSelectConfirmedOrder = () => createSelector(
  selectCheckout,
  checkoutState => path(['data', 'confirmedOrder'], checkoutState)
);

export const makeSelectGrandTotalFromCheckoutState = (initialValue = 0) => createSelector(
  checkoutState => pathOr({}, ['data', 'totals'], checkoutState),
  totalsState => propOr(initialValue, 'total_segments')(totalsState)
);

export const makeSelectGrandTotalFromCheckoutStateForSavingStrip = (initialValue = 0) => createSelector(
  checkoutState => pathOr({}, ['checkout', 'data', 'totals'], checkoutState),
  totalsState => propOr(initialValue, 'base_grand_total')(totalsState)
);

export const makeSelectOTPState = () => createSelector(
  selectCheckout,
  checkoutState => path(['data', 'otp'], checkoutState)
);

export const makeSelectSelectedPaymentMethod = () => createSelector(
  selectCheckout,
  checkoutState => path(['meta', 'order', 'selectedPaymentMethod'], checkoutState),
);

export const makeSelectAvailablePaymentMethods = () => createSelector(
  // if you are not geeting COD as options in the array then probably you need to add SKU (Free ones) in the makeSelectWhetherCartHasFreeStuff
  selectCheckout,
  makeSelectWhetherCartHasFreeStuff(),
  makeSelectAppliedCouponCode(),
  (checkoutState, hasFreeStuff) => converge(
    (grandTotal, availablePaymentMethods, couponCode) => {
      let adjustedTotal = grandTotal && grandTotal.find((item) => item.code === "grand_total_adjusted")
      // if its a free order, don't allow paid payments
      if (adjustedTotal.value === 0) {
        return ['free'];
      }

      // if order contains free products don't allow COD, or if coupons list contains coupon
      return hasFreeStuff ? reject(equals('cod'), availablePaymentMethods) : availablePaymentMethods;
    },
    [
      makeSelectGrandTotalFromCheckoutState(false),
      path(['meta', 'order', 'availablePaymentMethods']),
      path(['data', 'totals', 'coupon_code']),
    ]
  )(checkoutState),
);

export const makeSelectIsInStock = () => createSelector(
  makeSelectCartMap(),
  makeSelectGetAllStock(),

  (prodInCart, inStock) => {
    if (prodInCart && inStock) {
      let flag = [];
      for (let cartVal in prodInCart) {
        if (path([cartVal, 'is_in_stock'], inStock)) {
          flag.push(true);
        } else {
          flag.push(false);
        }
      }
      if (flag.includes(false)) {
        return false
      } else {
        return true;
      }
    }
  }
);

export const makeSelectLocalStorageAddressData = () => createSelector(
  selectCheckout,
  checkoutState => path(['localStorageAddressData'],  checkoutState)
)

export const makeSelectIsNewUser = () => createSelector(
  selectCheckout,
  checkoutState => path(['newuser'],  checkoutState)
)


export const makeSelectGrandTotalSegment = () =>
  createSelector(selectTotals, totalsState =>
    compose(
      prop('value'),
      find(propEq('code', 'grand_total_adjusted')),
      propOr([], 'total_segments'),
    )(totalsState),
  );

export const makeSelectOldProductIds = () => createSelector(
  selectCheckout,
  checkoutState => path(['data' , 'old_productId' ] , checkoutState)
)