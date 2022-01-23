/* eslint-disable no-underscore-dangle */
/* eslint-disable object-shorthand */
import config from 'config/env';
import cogotoast from 'lib/toast';
import { paymentSuccess, placeOrderSuccess, reinitializeCheckout, paymentFailed } from 'containers/Checkout/redux/actions';

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
    incrementId,
    newuser
}) => {
    var rzp = new Razorpay({
        key: config.rzpKey,
        callback_url: `https://tdc-nd-api.honasa-staging.net/v1/carts/rzphook?orderID=${magentoOrderId}&cartId=${cartId}&checkoutType=${JSON.parse(localStorage.getItem('newCheckout')) ? 'newCheckout' : 'oldCheckout'}&newuser=${newuser}`,
        redirect: true
    });

    var data = {
        amount: Math.trunc(amount * 100), // in currency subunits. Here 1000 = 1000 paise, which equals to ₹10
        currency: "INR",
        email: email,
        contact: contact,
        order_id: orderId,
        method: method,
        notes: {
            orderId: magentoOrderId,
            incrementId: incrementId
        },
        ...methodFields,
    };
    rzp.createPayment(data);
    rzp.on('payment.success', function (resp) {
        window.__NEXT_REDUX_WRAPPER_STORE__.dispatch(paymentSuccess({
            type: 'razorpay',
            data: resp,
        }));
    }); // will pass payment ID, order ID, and Razorpay signature to success handler.
    rzp.on('payment.error', function (resp) {
        console.log(resp);
        console.log(resp.error.description)
        if (resp.error.description == "Payment already done for this order.") {
            cogotoast.error("Payment already done for this order.")
        }
        if (resp.error.description) {
            window.__NEXT_REDUX_WRAPPER_STORE__.dispatch(paymentFailed({ error: resp.error.description }))
        }
        // window.__NEXT_REDUX_STORE__.dispatch(reinitializeCheckout({ preserveMeta: true }));
        window.__NEXT_REDUX_WRAPPER_STORE__.dispatch(placeOrderSuccess({ userClosedPaymentScreen: true }));
    });
};
