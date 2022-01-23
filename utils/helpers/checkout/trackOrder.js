import { makeConsumableOrderResponse } from 'utils/helpers/checkout/transformers';
import dataLayer from 'lib/gtmDataLayer';
import config from 'config/env';
import makeClevertap from 'lib/makeClevertap';
import { makePriceForDataLayer } from 'utils/helpers/trackingHelpers';


export function trackOrderPaymentSuccess(order, itemIds,isPurchaseEventFire) {
  try {
    const clevertap = makeClevertap();
    const sanitisedOrder = makeConsumableOrderResponse(order , itemIds);
    let couponCode = JSON.parse(localStorage.getItem('coupon'))
    const affiliation = order.payment.method === "cashondelivery" ? "COD" : "online";
    if(isPurchaseEventFire){
      dataLayer.push({
        event: 'purchase',
        ecommerce: {
          purchase: {
            actionField: {
              id: order.increment_id,
              affiliation,
              revenue: order.grand_total,
              shipping: order.payment.shipping_amount,
              action: 'purchase',
              coupon : couponCode ? couponCode : "noCoupon"
            },
            products: sanitisedOrder.gtmProds,
          },
        },
      });
    }
    clevertap.profile.push({
      Site:{
        last_purchase_date: new Date(),
      }
    });
    let productIDs = "";
    order.items.map(item => {
      productIDs = productIDs + item.product_id + " | ";
    })
    clevertap.event.push('charged', {
      platform: "mewebsite",
      timeStamp: new Date().getTime(),
      clickSource: "checkout",
      clickTarget: "thank-you-redirect",
      clickURL: "checkout/thank-you-redirect",
      quantity: order.total_qty_ordered,
      purchaseAmount: Number(order.grand_total),
      paymentAmount: Number(order.grand_total),
      ProductId: productIDs,
      uniqueProducts: order.total_item_count,
      orderNumber: order.increment_id,
      purchaseDate: new Date().getTime(),
      email: order.billing_address.email,
      counponCodeApplied: order.coupon_code ? "Yes" : "No",
      cartAmount: order.base_subtotal_incl_tax,
      paymentMethod: order.payment.method,
      userName: `${order.billing_address.firstname} ${order.billing_address.lastname}`,
      phone: order.billing_address.telephone,
      ...(order.coupon_code && {
          couponCodeAppliedName: order.coupon_code,
          couponCodeAppliedAmount: order.base_discount_amount,
      }),
      orderAddressCity: order.billing_address.city,
      orderAddressPin: Number(order.billing_address.postcode),
      shipping: order.payment.shipping_amount,
    });
  } catch (e) {
    console.log(e);
  }
}

export function prepareGtmItems(items) {
  const selectPrice = (item) => {return item.parent_item
    ? item.parent_item.price_incl_tax || item.parent_item.price
    : item.price;}

    return items.map(item => ({
    id: item.sku ?? "",
    name: item.name ?? "",
    price: makePriceForDataLayer(selectPrice(item)),
    brand: config.brandTitle,
    quantity: item.qty ?? 0,
  }));
}

export function trackCheckout({
  products, step, paymentMethod, initiated = false, grandTotal,
}) {
  if (!step) {
    return console.warn('Checkout event is trying to be tracked without providing a step.');
  }
  if (initiated) {
    dataLayer.push({
      event: 'checkout',
      ecommerce: {
        checkout: {
          actionField: {
            step,
            option: paymentMethod,
            total:grandTotal,
            action:"checkout"
          },
          products: prepareGtmItems(products),
        },
      },
    });
  } else {
    dataLayer.push({
      event: 'checkoutOption',
      ecommerce: {
        checkout_option: {
          actionField: { step, option: paymentMethod },
        },
      },
    });
  }
  return null;
}
