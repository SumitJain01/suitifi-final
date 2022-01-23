/* eslint-disable no-underscore-dangle */
/* eslint-disable object-shorthand */
import { paymentSuccess, placeOrderSuccess } from 'containers/Checkout/redux/actions';
import config from 'config/env';

export default ({
  amount,
  orderId,
  name = '',
  email = '',
  contact = '',
  magentoOrderId,
  cartId,
  method,
  methodFields,
  incrementId
  // onSuccess,
}) => {
  amount = Math.round(amount * 100) / 100;
  const options = {
    key: config.rzpKey,
    amount, // 2000 paise = INR 20, amount in paisa
    currency: 'INR',
    name: 'Suitifi',
    description: `${config.brandTitle} Order #${magentoOrderId}`,
    handler: (response) => {
      window.__NEXT_REDUX_WRAPPER_STORE__.dispatch(paymentSuccess({
        type: 'razorpay',
        data: response,
      }));
    },
    modal: {
      onDismiss: () => {
        window.__NEXT_REDUX_WRAPPER_STORE__.dispatch(placeOrderSuccess({ userClosedPaymentScreen: true }));
      },
    },
    order_id: orderId,
    notes: {
      orderId: magentoOrderId,
      incrementId: incrementId
    },
    prefill: {
      name,
      email,
      contact,
    },
    theme: {
      color: '#000',
    },
    callback_url: `https://tdc-nd-api.honasa-staging.net/v1/carts/rzphook?orderID=${magentoOrderId}&cartId=${cartId}&checkoutType=${JSON.parse(localStorage.getItem('newCheckout')) ? 'newCheckout' : 'oldCheckout'}`
  };

  const rzp = new Razorpay(options); // eslint-disable-line
  rzp.open();
};
