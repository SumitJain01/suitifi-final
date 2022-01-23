import React from 'react';
import { isNumber } from 'ramda-adjunct';
import { makeLocaleStringWithCurrency } from 'utils/helpers/products/prices';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectLoggedIn } from 'containers/Auth/redux/selectors';
import { Icon } from 'react-icons-kit';
import { info } from 'shared/components/Icons';

import Wrapper from './styled/Wrapper';

function OrderSummaryItem({
  title,
  value,
  code,
  isLoggedIn,
  shippingAmount
}) {
  let specialClass = '', coupon_desc = '';
  if (title === "Subtotal") {
    title = "Item Total";
  }
  if (code == "discount" && value != 0) {
    let splittedTitle = title.split("(");
    splittedTitle[0] = "Coupon Discount"
    title = splittedTitle[0]
    coupon_desc = splittedTitle[1]
    specialClass = 'coupon-discount';
  } else if (code === "shipping") {
    value = shippingAmount;
    specialClass = 'shipping-charges';
  } else if (code === "grand_total_adjusted") {
    value = Math.abs(value);
    specialClass = 'grand-total';
  } else if (code === "itemsDiscount" && value != 0) {
    specialClass = 'items-discount';
  } else if (code === 'custom_payment_mutation'){
    value = Math.abs(value);
  }


  if (code === "customerbalance" && !isLoggedIn) {
    return null;
  }

  return (
    <Wrapper className={`${specialClass} px-rem`}>
      <span className="item-label">
        {title}
      </span>
      <span className="item-value">
        {(code === "shipping") && <ShippingToolTip />}
        {(isNumber(value) && value) ? makeLocaleStringWithCurrency()(value) : value}
      </span>
    </Wrapper>
  );
}

const ShippingToolTip = () => (
  <span className="shipping-tooltip__container">
    <Icon className="info-icon" size="1.2em" icon={info} />
    <span className="tooltiptext">Shipping charges of Rs.40.0 will apply on order below Rs. 399.0</span>
  </span>
);

const mapStateToProps = createStructuredSelector({
  isLoggedIn: makeSelectLoggedIn(),
});

export default connect(mapStateToProps)(OrderSummaryItem);
