import { useEffect, useState } from 'react';
import { BRAND_NAME } from 'utils/constants';
export default useFormattedPaymentInfo;

function useFormattedPaymentInfo(order, isMobile) {
  const [payInfo, setPayInfo] = useState([]);

  useEffect(() => {
    let info = [];

    if (isMobile) info = getMobileInfo(order);
    if (!isMobile) info = getDesktopInfo(order);

    setPayInfo(info);
  }, [order, isMobile]);

  return [payInfo];
}

function getDesktopInfo(order) {
  const {
    subtotal,
    discountAmount,
    shippingCharges,
    mamacashAmount,
    grandTotal,
    coupon,
  } = getExtractedObj(order);
  
  return [
    { id: 'subtotal', key: 'Subtotal', value: subtotal },
    {
      id: 'coupon_discounts',
      class: 'credit',
      key: 'Coupon Discount',
      value: discountAmount,
    },
    {
      id: 'shipping_charges',
      key: 'Shipping Charges',
      value: shippingCharges,
    },
    {
      id: `${BRAND_NAME}pay_credit`,
      class: 'credit',
      key: `via ${BRAND_NAME} Wallet`,
      value: mamacashAmount,
    },
    {
      id: 'grand_total',
      key: 'Total Amount Paid',
      value: grandTotal,
    },
  ];
}

function getMobileInfo(order) {
  const {
    subtotal,
    discountAmount,
    shippingCharges,
    mamacashAmount,
    grandTotal,
  } = getExtractedObj(order);

  return [
    { id: 'subtotal', key: 'Subtotal', value: subtotal },
    {
      id: 'coupon_discounts',
      class: 'credit',
      key: 'Coupon Discounts',
      value: discountAmount,
    },
    {
      id: 'shipping_charges',
      key: 'Shipping Charges',
      value: shippingCharges,
    },
    {
      id: '',
      key: 'Via Wallet',
      value: mamacashAmount || 0,
    },
    { id: 'grand_total', key: 'Amount Paid', value: grandTotal },
  ];
}

function getExtractedObj(order) {
  const subtotal = order.base_subtotal_incl_tax || 0;
  const discountAmount = order.discount_amount || 0;
  const shippingCharges = order.shipping_incl_tax > 40 ? 40 : order.shipping_incl_tax;
  const mamacashAmount = -order.extension_attributes.store_credit || 0;  
  const grandTotal = order.base_grand_total || 0;
  const coupon = order.coupon_code || 0;

  return {
    subtotal,
    discountAmount,
    shippingCharges,
    mamacashAmount,
    grandTotal,
    coupon,
  };
}
