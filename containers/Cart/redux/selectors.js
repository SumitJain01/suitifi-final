import { createSelector } from 'reselect';
import {
  pathOr,
  path,
  compose,
  __,
  prop,
  map,
  useWith,
  find,
  propEq,
  reduce,
  add,
  propOr,
  lt,
  identity,
  ifElse,
  includes,
  pathSatisfies,
} from 'ramda';
import { makeSelectTotalSegments } from 'containers/Checkout/redux/selectors';
import { makeSelectProductEntities, makeSelectProductCategories } from 'containers/Products/redux/selectors';
import { magePriceStringToNumber } from 'utils/helpers/products/prices';
export const selectCart = state => state.cart;

export const makeSelectCart = () => createSelector(
  selectCart,
  cartState => cartState
);

export const makeSelectTotalProductQty = () =>
    createSelector(selectCart, cartState => {
      let total_quantity = 0;
      const productIds = cartState.data.ids;
      productIds.forEach(productId => {
          total_quantity += cartState.data.cartMap[productId].qty;
      });
      return total_quantity;
    });

export const makeSelectCartCategoryName = () => createSelector(
  makeSelectCartMap(),
  makeSelectProductCategories(),
  (cartState,productsState)=>{
    if (productsState){

      let bulkCategory = "";
      for (var item in cartState) {
        bulkCategory+= `${giveCategories(cartState[item].categories)} ,`
      }
      function giveCategories(categoriesArray = []){
        let productCategoryName = [];
        categoriesArray.map((category, index) => {
          map((productCat) => {
            if (productCat.id == category) {
              productCategoryName.push(productCat.name)
            }
          }, productsState)
        });
        return productCategoryName.join("|");
      }
      return bulkCategory;
    }
    else{
      return ""
    }
  }
);

export const makeSelectCartOpen = () => createSelector(
  selectCart,
  cartState => Boolean(cartState.open)
);

export const makeSelectCartItemsLength = () => createSelector(
  selectCart,
  cartState => pathOr(0, ['data', 'ids', 'length'])(cartState)
);

export const makeSelectCartLoading = () => createSelector(
  selectCart,
  cartState => cartState.loading
);

export const makeSelectIds = () => createSelector(
  selectCart,
  cartState => cartState.data.ids
);

export const makeSelectCartMap = () => createSelector(
  selectCart,
  cartState => cartState.data.cartMap
);

export const makeSelectAppliedRules = () => createSelector(
  selectCart,
  cartState => cartState.data.appliedRules
);

export const makeSelectCartProductsArray = () => createSelector(
  selectCart,
  cartState => map(prop(__, cartState.data.cartMap), cartState.data.ids).reverse()
);

export const makeSelectMagentoCartId = () => createSelector(
  selectCart,
  cartState => cartState.data.cartId
);

export const makeSelectProductQty = id => createSelector(
  selectCart,
  cartState => path(['data', 'cartMap', id, 'qty'], cartState)
);

export const makeSelectItemId = id => createSelector(
  selectCart,
  cartState => path(['data', 'cartMap', id, 'item_id'], cartState)
);

export const makeSelectWishlist = () => createSelector(
  selectCart,
  cartState => path(['data', 'wishlist'], cartState)
);

export const makeSelectRecentRemovals = () => createSelector(
  selectCart,
  cartState => path(['data', 'recentRemovals'], cartState)
);

export const makeSelectWishlistIdToProductIdMap = () => createSelector(
  selectCart,
  cartState => compose(
    wishlist => wishlist.reduce((acc, item) => {
      acc[item.product_id] = item.wishlist_item_id;
      return acc;
    }, {}),
    path(['data', 'wishlist'], cartState),
  )
);

//returns the Max Price of the Item if Special price is present.
export const makeSelectSpecialPrice = (state, props) => createSelector(
  makeSelectProductEntities(),
  (productEntities) => {
    let MaxPrice = null;
    for (let prod in productEntities) {
      if (productEntities[prod].id == props.item.id && productEntities[prod].special_price)
        MaxPrice = productEntities[prod].price
    }
    return MaxPrice;
  }
)

export const makeSelectSpecialPriceSaving = () => createSelector(
  makeSelectCartMap(),
  makeSelectProductEntities(),
  (cartMap, productEntities) => {
    let totalSavings = 0;
    let OrderTotalWithoutSpecialDiscount = 0;
    for (var prod in productEntities) {
      for (var item in cartMap) {
        if (productEntities[prod].id == item && productEntities[prod].special_price) {
          let delta = (magePriceStringToNumber(productEntities[prod].price) - magePriceStringToNumber(productEntities[prod].special_price)) * cartMap[item].qty;
          totalSavings = totalSavings + delta;
          OrderTotalWithoutSpecialDiscount = OrderTotalWithoutSpecialDiscount + (magePriceStringToNumber(productEntities[prod].price) * cartMap[item].qty);
        }
        else if (productEntities[prod].id == item && productEntities[prod].price) {
          OrderTotalWithoutSpecialDiscount = OrderTotalWithoutSpecialDiscount + (magePriceStringToNumber(productEntities[prod].price) * cartMap[item].qty);
        }
      }
    }
    return { totalSavings, OrderTotalWithoutSpecialDiscount };
  }
)

export const makeSelectOrderSavings = (byType = false) => createSelector(
  state => makeSelectTotalSegments({ isCheckoutPage: true })(state),
  state => makeSelectAppliedRules()(state),
  makeSelectWhetherCartHasFreeStuff(),
  (totalSegments, appliedRules, hasFreeStuff) => byType ?
    reduce((acc, { amount, rule_type }) => {
      // if cart has free stuff dont show cashback
      // if (hasFreeStuff) return 0;
      if (rule_type === byType) {
        if (amount < 0) {
          acc += amount;
        } else {
          acc -= amount;
        }
      }
      return acc;
    }, 0, appliedRules)
    : useWith(add, [
      compose(
        ifElse(lt(__, 0), identity, () => 0),
        propOr(0, 'value'),
        find(propEq('code', 'custom_payment_mutation')) // TODO: remove if COD 5% onlin
      ),
      reduce((acc, { amount }) => {
        if (amount < 0) {
          acc += amount;
        } else {
          acc -= amount;
        }
        return acc;
      }, 0),
    ])(totalSegments, appliedRules)
);

export const makeSelectWhetherCartHasFreeStuff = () => createSelector(
  makeSelectCartMap(),
  cartMap => compose(
    reduce((acc, { price }) => {
      if (parseFloat(price) === 0) {
        return true;
      }
      return false;
    }, false),
    Object.values,
  )(cartMap),
);

export const makeSelectCartProductName = () => createSelector(
  makeSelectCartMap(),
  (cartState)=>{
    let bulkProductName = "";
    for (var item in cartState) {
      bulkProductName+= `${(cartState[item].name)} | `
    }
    return bulkProductName;
  }
);

export const makeSelectIsInert = id => createSelector(
  selectCart,
  pathSatisfies(includes(id), ['data', 'inertProducts']),
);

export const makeSelectCartProductIds = () => createSelector(
  makeSelectCartMap(),
  (cartState)=>{
    let bulkProductID = "";
    for (var item in cartState) {
      bulkProductID+= `${(cartState[item].id)} | `
    }
    return bulkProductID;
  }
);