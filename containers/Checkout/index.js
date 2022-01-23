import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { reinitializeCheckout } from 'containers/Checkout/redux/actions';
import { makeSelectOtpLoading, makeSelectLoading, makeSelectSelectedPaymentMethod, makeSelectHasPlacedOrder,  makeSelectPlaceOrderLoading ,makeSelectGrandTotalSegment , makeSelectThankyouPageLoading} from 'containers/Checkout/redux/selectors';
import { editCartRequest } from 'containers/Cart/redux/actions';
import { makeSelectCartProductsArray } from 'containers/Cart/redux/selectors';
import { fetchUserInfoRequest } from 'containers/Account/redux/actions';
import { makeSelectLoggedIn } from 'containers/Auth/redux/selectors';
import { hideSnackBar } from 'containers/Global/redux/actions';
import { makeSelectMEFE } from "containers/Global/redux/selectors";
import CheckoutStateController from 'containers/Checkout/components/StateController';
import { showLoginPopUp } from 'containers/Auth/redux/actions';
import CheckoutPage from 'containers/Checkout/components/CheckoutPage';

function CheckoutContainer(props) {
  return (
    <CheckoutStateController>
      <CheckoutPage {...props} />
    </CheckoutStateController>
  );
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      reinitializeCheckout: reinitializeCheckout,
      fetchUserInfo: fetchUserInfoRequest,
      editCartRequest: editCartRequest,
      hideSnackBar: hideSnackBar,
      showLoginPopUp:showLoginPopUp,
    },
    dispatch
  );

const mapStateToProps = createStructuredSelector({
  grandTotalFromSegment: makeSelectGrandTotalSegment(),
  cartProductsArray: makeSelectCartProductsArray(),
  otpLoading: makeSelectOtpLoading(),
  loading: makeSelectLoading(),
  placeOrderLoading: makeSelectPlaceOrderLoading(),
  paymentMethod: makeSelectSelectedPaymentMethod(),
  hasPlacedOrder: makeSelectHasPlacedOrder(),
  isLoggedIn: makeSelectLoggedIn(),
  mefe: makeSelectMEFE(),
  thankyouPageLoading: makeSelectThankyouPageLoading(),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);

