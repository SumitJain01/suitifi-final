import React, { useMemo } from 'react';
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { 
  makeSelectAppliedCouponCode, 
  makeSelectTotals, 
  makeSelectTotalSegments,
  makeSelectLoading, 
  makeUTMParams 
} from "containers/Checkout/redux/selectors";
import { openCart, closeCart, closeCartExplicitly} from 'containers/Cart/redux/actions';
import {
  makeSelectIds,
  makeSelectCartItemsLength,
  makeSelectOrderSavings,
  makeSelectTotalProductQty,
  makeSelectCartProductName,
  makeSelectCartCategoryName
} from 'containers/Cart/redux/selectors';
import { makeSelectUser } from "containers/Auth/redux/selectors";
import { makeSelectUserInfo, makeSelectCreditBalance} from 'containers/Account/redux/selectors';
import { compose, propOr } from 'ramda';
import Modal from './components/CartPortal';
import Overlay from 'shared/components/Overlay';
import ScrollLock from 'shared/components/ScrollLock';
import CartDrawer from './components/Drawer';

function Cart({ productId, coupon, totals, user, ...props } = props) {
  const cart = useMemo(() => <CartDrawer {...props} />, [Object.values(props)]);
  return (
    <Modal>
      {cart}
      <Overlay open={props.open} onClick={props.clickHandler} />
      {props.open && <ScrollLock />}
    </Modal>
  );
}

const mapStateToProps = createStructuredSelector({
  productId: makeSelectIds(),
  coupon: makeSelectAppliedCouponCode(),
  cashBack: makeSelectOrderSavings("Reward"),
  loading: makeSelectLoading(),
  cartItemsLength: makeSelectCartItemsLength(),
  user: makeSelectUser(),
  addresses: compose(propOr(false, 'addresses'), makeSelectUserInfo()),
  trackingData: makeUTMParams(),
  total: makeSelectTotals(),
  totalSegments: makeSelectTotalSegments(),
  walletBalance: makeSelectCreditBalance(),
  quantity: makeSelectTotalProductQty(),
  productName:makeSelectCartProductName(),
  categoryName:makeSelectCartCategoryName(),
});

const mapDispatchToProps = dispatch => ({
  openCart: bindActionCreators(openCart, dispatch),
  closeCart: bindActionCreators(closeCart, dispatch),
  closeCartExplicitly: bindActionCreators(closeCartExplicitly, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

