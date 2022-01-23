import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeLocaleStringWithCurrency } from 'utils/helpers/products/prices';
import { makeSelectOrderSavings, makeSelectSpecialPriceSaving} from 'containers/Cart/redux/selectors';
import { makeSelectHasPlacedOrder, makeSelectGrandTotalFromCheckoutStateForSavingStrip, makeSelectTotalSegments } from 'containers/Checkout/redux/selectors';
import styled, { css } from 'styled-components';
import { GoldenRupeesSvg } from 'shared/components/SVGIcons';
import { magePriceStringToNumber } from 'utils/helpers/products/prices';

function OrderSavings({
  orderSavings,
  hasPlacedOrder,
  isCheckoutPage,
  specialPriceSaving,
  Grandtotal,
  cartProductsArray,
  totalSegments
}) {
  if (!orderSavings || hasPlacedOrder) {
    return null;
  }
  let shippingSaving = 0;
  Grandtotal > 398 ? shippingSaving = 40 : shippingSaving = 0;

  // let itemDiscount = totalSegments.find(seg => {
  //    if (seg.code === "itemsDiscount") 
  //     return seg; 
  // })

  let discountSavings = 0;

  cartProductsArray.map((item) => {
    let price = magePriceStringToNumber(item.price);
    let original_price = magePriceStringToNumber(item.original_price);
    discountSavings = discountSavings + original_price - price;
  })


  return (
    <SavingsWrapper className="total-savings" isCheckoutPage={isCheckoutPage}>
    {Boolean(orderSavings) &&
      <Fragment>
        <GoldenRupeesSvg />
        {/* <span className="savings">Total savings of {makeLocaleStringWithCurrency()((orderSavings * -1) + itemDiscount.value + shippingSaving)} on this order</span> */}
        <span className="savings">Total savings of {makeLocaleStringWithCurrency()((orderSavings * -1) + specialPriceSaving.totalSavings + shippingSaving + discountSavings)} on this order</span>
      </Fragment>
    }
    </SavingsWrapper>
  );
}

const SavingsWrapper = styled.div`
  font-weight: 500;
  text-align: center;
  color: ${props => props.theme.general.primaryColor};
  background-color: ${props => `${props.theme.general.primaryColor}1A`};
  border: 1px dashed ${props => props.theme.general.primaryColor};
  border-radius: 5px;
  padding: 0.5rem;
  margin:0rem 1rem;
  ${props => !(props.isCheckoutPage) && css`
    margin-left: 1rem;
    margin-right: 1rem;
  `}

  .savings {
    margin-left: 8px;
    font-size: 0.95rem;
  }

  @media only screen and (min-width: 768px) {
    margin: 0 1rem;
    .savings {
      font-size: 1rem;
    }
  }
`;

const mapStateToProps = createStructuredSelector({
  totalSegments: makeSelectTotalSegments({ isCheckoutPage: false }),
  orderSavings: makeSelectOrderSavings(),
  hasPlacedOrder: makeSelectHasPlacedOrder(),
  specialPriceSaving: makeSelectSpecialPriceSaving(),
  Grandtotal: makeSelectGrandTotalFromCheckoutStateForSavingStrip()
});

export default connect(mapStateToProps)(OrderSavings);
