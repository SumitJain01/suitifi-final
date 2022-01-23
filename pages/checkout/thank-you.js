import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectLoggedIn } from 'containers/Auth/redux/selectors';
import { makeSelectConfirmedOrder } from 'containers/Checkout/redux/selectors';
import { makeConsumableOrderResponse } from 'utils/helpers/checkout/transformers';
import OrderSuccess from 'containers/Checkout/components/OrderSuccess';
import { reinitializeCart } from 'containers/Cart/redux/actions';
import { makeSelectOrderSavings } from 'containers/Cart/redux/selectors';
import { reinitializeCheckout, thankyouPageLoadSuccess } from 'containers/Checkout/redux/actions';
import PropTypes from 'prop-types';
import { noop } from 'ramda-adjunct';
import { trackOrderPaymentSuccess } from 'utils/helpers/checkout/trackOrder';
import axios from 'axios';
import config from 'config/env';
import { skinAssesmentPurchase } from 'lib/analytics/datalayer';

const { apiUrl } = config;

function OrderSuccessPage(props) {
  useEffect(() => {
    props.thankyouPageLoadSuccess();
    reinitializeCart();
    return reinitializeCheckout;
  }, []);

  if (!props.orderInfo) {
    return null;
  }

  useEffect(() => {
    const getOrderCount = async () => {
      let customer_id = JSON.parse(localStorage.getItem('customer_id'))
      let newUrl = `${apiUrl}/carts/orderCount`
      let newUser;
      try {
        let response = await axios.post(newUrl, {
          customerId: customer_id,
        })
        newUser = response.data['success'] === 1 ? true : false;
      } catch (error) {
        console.log('error :>> ', error);
      }
      dataLayer.push({ newUser: newUser })
      let itemIds = JSON.parse(localStorage.getItem('itemIds'))
      let pincodeTransaction = JSON.parse(localStorage.getItem('pincode'))
      let isPurchaseEventFire = true;
      const orderId = JSON.parse(localStorage.getItem('orderId'));
      if (orderId == props.orderInfo.increment_id) {
        isPurchaseEventFire = false;
      }
      else {
        localStorage.setItem('orderId', JSON.stringify(props.orderInfo.increment_id))
      }
      trackOrderPaymentSuccess(props.orderInfo, itemIds, isPurchaseEventFire)
      if (pincodeTransaction) {
        dataLayer.push({
          event: "pincodePurchase",
        })
      }
      localStorage.removeItem("pincode");
    }
    getOrderCount();
  }, [])

  useEffect(() => {
    if (props.orderInfo) {
      const productIds = JSON.parse(localStorage.getItem('regimeProducts'));
      if (productIds) {
        let productCount = 0;
        for (let i in productIds) {
          const orderIds = props.orderInfo.extension_attributes.shipping_assignments[0].items;
          for (let j in orderIds) {
            if (productIds[i] === orderIds[j].product_id) {
              productCount++;
            }
          }
        }
        if(productCount > 0)
        {
          skinAssesmentPurchase();
          localStorage.removeItem("regimeProducts");
        }
      }
    }
  }, [props.orderInfo])

  return (
    <OrderSuccess
      reinitializeCart={props.reinitializeCart}
      reinitializeCheckout={props.reinitializeCheckout}
      orderInfo={makeConsumableOrderResponse(props.orderInfo)}
      cashBackOnCOD={props.cashBack}
    />
  );
}

const mapDispatchToProps = dispatch => ({
  reinitializeCart: bindActionCreators(reinitializeCart, dispatch),
  reinitializeCheckout: bindActionCreators(reinitializeCheckout, dispatch),
  thankyouPageLoadSuccess: bindActionCreators(thankyouPageLoadSuccess, dispatch),
});

const mapStateToProps = createStructuredSelector({
  cashBack: makeSelectOrderSavings('Reward'),
  loggedIn: makeSelectLoggedIn(),
  orderInfo: makeSelectConfirmedOrder(),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderSuccessPage);

OrderSuccess.propTypes = {
  reinitializeCart: PropTypes.func,
  reinitializeCheckout: PropTypes.func,
  thankyouPageLoadSuccess: PropTypes.func,
  loggedIn: PropTypes.bool,
  orderInfo: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
};

OrderSuccess.defaultProps = {
  reinitializeCart: noop,
  reinitializeCheckout: noop,
  thankyouPageLoadSuccess: noop,
  loggedIn: false,
  orderInfo: false,
};
