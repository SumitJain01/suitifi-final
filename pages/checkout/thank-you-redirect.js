import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, propOr } from 'ramda';
import { createStructuredSelector } from 'reselect';
import { makeSelectLoggedIn, makeSelectUserId, makeSelectUser } from 'containers/Auth/redux/selectors';
import { makeSelectConfirmedOrder, makeUTMParams } from 'containers/Checkout/redux/selectors';
import { makeSelectMagentoCartId, makeSelectTotalProductQty, makeSelectCartCategoryName, makeSelectCartProductName } from 'containers/Cart/redux/selectors';
import { makeSelectCreditBalance, makeSelectUserInfo } from 'containers/Account/redux/selectors';
import OrderSuccess from 'containers/Checkout/components/OrderSuccess';
import { reinitializeCart, updateLocalCartData, loadCartError } from 'containers/Cart/redux/actions';
import { reinitializeCheckout, confirmOrderSuccess, confirmOrderRequest } from 'containers/Checkout/redux/actions';
import { trackOrderPaymentSuccess } from 'utils/helpers/checkout/trackOrder';
import PropTypes from 'prop-types';
import { noop } from 'ramda-adjunct';
import { useRouter } from 'next/router';
import axios from 'axios';
import config from 'config/env';
import { authHeader } from 'lib/request';
import { skinAssesmentPurchase } from 'lib/analytics/datalayer';

const { apiUrl } = config;

function OrderSuccessPage(props) {

  const router = useRouter();
  let routePath = router.asPath;
  routePath = routePath.split("?");
  let status = routePath[1] && routePath[1];

  let params = new URLSearchParams(status);

  let success = params.get("success")
  let orderId = params.get("orderId")
  let code = params.get("code");
  let newuser = params.get("newuser");

  const [orderDetails, setOrderdetails] = useState(null)

  useEffect(() => {
    async function fetchquoteIdForLoggedInUsers() {
      const requestURL = `https://tdc-nd-api.honasa-staging.net/v1/users/createQuote/${props.UserId}`;
      try {
        const { data } = await axios.get(
          requestURL, {
          headers: authHeader()
        });
        props.updateLocalCartData({ cartId: data.cartId, items: data.items });
      }
      catch (e) {
        console.log(e)
      }
    }

    async function getNewCartId() {
      const requestURL = `https://tdc-nd-api.honasa-staging.net/v1/carts/createGuestCart`;
      try {
        const response = await axios.get(requestURL);
        props.updateLocalCartData({ cartId: response.data.cartId, items: response.data.items });
      } catch (err) {
        props.loadCartError(err);
      }
    }

    if (props.loggedIn) {
      fetchquoteIdForLoggedInUsers();
    } else {
      getNewCartId();
    }
  }, [])

  useEffect(() => {
    async function fetchData() {
      const requestURL = `https://tdc-nd-api.honasa-staging.net/v1/users/getUserOrderDetails`;
      let items = JSON.parse(localStorage.getItem('itemIds'))
      try {
        const { data } = await axios.post(requestURL, { "orderId": orderId, "code": code });
        if (data.statusCode == 400) {
          router.push("/")
        } else {
          setOrderdetails(data);
          let pincodeTransaction = JSON.parse(localStorage.getItem('pincode'))
          let isPurchaseEventFire = true;
          const orderId = JSON.parse(localStorage.getItem('orderId'));
          if (orderId == data.increment_id) {
            isPurchaseEventFire = false;
          }
          else {
            localStorage.setItem('orderId', JSON.stringify(data.increment_id))
          }
          trackOrderPaymentSuccess(data, items, isPurchaseEventFire);
          if (pincodeTransaction) {
            dataLayer.push({
              event: "pincodePurchase",
            })
          }
          localStorage.removeItem("pincode");
        }
      }
      catch (e) {
        console.log(e)
      }
    }
    fetchData()
  }, [])

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
    }
    getOrderCount();
  }, [])

  useEffect(() => {
    if (orderDetails) {
      const productIds = JSON.parse(localStorage.getItem('regimeProducts'));
      if (productIds) {
        let productCount = 0;
        for (let i in productIds) {
          const orderIds = orderDetails.extension_attributes.shipping_assignments[0].items;
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
  }, [orderDetails])

  if (!orderDetails) {
    return null;
  }

  return (
    <OrderSuccess
      reinitializeCart={props.reinitializeCart}
      reinitializeCheckout={props.reinitializeCheckout}
      orderInfo={orderDetails}
    />
  );
}


const mapDispatchToProps = dispatch => ({
  reinitializeCart: bindActionCreators(reinitializeCart, dispatch),
  reinitializeCheckout: bindActionCreators(reinitializeCheckout, dispatch),
  confirmOrderSuccess: bindActionCreators(confirmOrderSuccess, dispatch),
  confirmOrderRequest: bindActionCreators(confirmOrderRequest, dispatch),
  updateLocalCartData: bindActionCreators(updateLocalCartData, dispatch),
  loadCartError: bindActionCreators(loadCartError, dispatch)
});

const mapStateToProps = createStructuredSelector({
  loggedIn: makeSelectLoggedIn(),
  orderInfo: makeSelectConfirmedOrder(),
  magentoCartId: makeSelectMagentoCartId(),
  UserId: makeSelectUserId(),
  user: makeSelectUser(),
  addresses: compose(propOr(false, "addresses"), makeSelectUserInfo()),
  trackingData: makeUTMParams(),
  walletBalance: makeSelectCreditBalance(),
  quantity: makeSelectTotalProductQty(),
  categoryName: makeSelectCartCategoryName(),
  productName: makeSelectCartProductName(),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderSuccessPage);

OrderSuccess.propTypes = {
  reinitializeCart: PropTypes.func,
  reinitializeCheckout: PropTypes.func,
  loggedIn: PropTypes.bool,
  orderInfo: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
};

OrderSuccess.defaultProps = {
  reinitializeCart: noop,
  reinitializeCheckout: noop,
  loggedIn: false,
  orderInfo: false,
};
