import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectOrderSavings } from 'containers/Cart/redux/selectors';
import { makeLocaleStringWithCurrency } from 'utils/helpers/products/prices';
import { makeSelectHasPlacedOrder } from 'containers/Checkout/redux/selectors';
import styled from 'styled-components';
import theme from 'theme';

function OrderDiscount({
  hasPlacedOrder,
  cashBack,
  className
}) {
  if (!cashBack || hasPlacedOrder) {
    return null;
  }

  return (
    <div className={className}>
      You will get {makeLocaleStringWithCurrency()(cashBack * -1)} cashback after delivery.
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cashBack: makeSelectOrderSavings('Reward'),
  hasPlacedOrder: makeSelectHasPlacedOrder(),
});

const StyledOrderDiscount = styled(OrderDiscount)`
  font-family: Roboto, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.2px;
  text-align: center;
  width: 100%;
  margin: 0;
  padding: 0.25rem 0;
  color: ${props => props.theme.general.primaryColor};
  background-color: ${props => props.theme.general.lightSecondaryColor};
  border: 1px solid ${props => props.theme.general.secondaryColor}
`;

export default connect(mapStateToProps)(StyledOrderDiscount);
