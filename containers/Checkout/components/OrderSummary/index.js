import EmptyCart from 'containers/Cart/components/EmptyCart';
import { makeSelectCartProductsArray, makeSelectOrderSavings } from 'containers/Cart/redux/selectors';
import { makeSelectHasPlacedOrder, makeSelectLoading, makeSelectTotalSegments } from 'containers/Checkout/redux/selectors';
import { noop } from 'ramda-adjunct';
import React, { Fragment, memo, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ColoredLine from 'shared/components/ColoredLine';
import Gap from 'shared/components/Gap';
import styled from "styled-components";
import CouponManager from './CouponManager';
import ItemList from './ItemList';
import OfferBar from "./OfferBar";
import OrderDiscount from "./OrderDiscount";
import OrderSavings from './OrderSavings';
import makeOrderTotals from './OrderTotalsFactory';
import SafePaymentAssurance from "./SafePaymentAssurance";
import Wrapper from './styled/Wrapper';
import WalletBalance from './WalletBalance';


const OrderSummary = memo(function Os({
  isCheckoutPage = false,
  isPhonePe,
  cartProductsArray = [],
  loading,
  hasPlacedOrder,
  closeCart = noop,
  isNewDesign,
  UAisMobile,
  cashBack,
}) {
  const OrderTotalsRef = useMemo(() => makeOrderTotals({ isCheckoutPage }));

  useEffect(() => {
    UAisMobile && setProductSummaryOpen(false);
  }, [UAisMobile]);

  if (!cartProductsArray.length) {
    return (
      <Fragment>
        <EmptyCart />
      </Fragment>
    );
  }
  return (
    <Wrapper isNewDesign={isNewDesign}>
      <div className="OrderSummary_Content">
        {!isNewDesign && (
          <Fragment>
            <ItemList
              isImmutable={isCheckoutPage && hasPlacedOrder}
              clickHandler={noop}
            />
            <ColoredLine />
            {!isCheckoutPage && (
              <div className="px-rem">
                <Gap h="1rem" />
                <CustomOfferBar />
              </div>
            )}
            <CouponManager
              className={`coupon-wrapper px-rem ${isCheckoutPage && "isCheckout"
                }`}
            />
            <ColoredLine />
            {isCheckoutPage && !window.newCheckout && !isPhonePe && (
              <WalletBalance />
            )}
            <OrderTotalsRef />
            {!loading && (
              <Fragment>
                <Gap h="0.5rem" />
                <OrderSavings isCheckoutPage={isCheckoutPage} cartProductsArray={cartProductsArray} />
              </Fragment>
            )}
            {!loading && isCheckoutPage && (
              <Fragment>
                <Gap h="0.5rem" />
                <OrderDiscount />
              </Fragment>
            )}
            <Gap h="0.5rem" className="for-mobile" />
            {!isCheckoutPage && <ColoredLine className="for-mobile" />}
            {!isCheckoutPage && <Gap h="0.5rem" />}
            {!loading && !isCheckoutPage && <SafePaymentAssurance />}
            {!isCheckoutPage && <Gap h={Boolean(cashBack) ? "6rem" : "4rem"} />}
          </Fragment>
        )}
      </div>
    </Wrapper>
  );
});

const CustomOfferBar = styled(OfferBar)`
`;

const mapStateToProps = createStructuredSelector({
  cartProductsArray: makeSelectCartProductsArray(),
  loading: makeSelectLoading(),
  hasPlacedOrder: makeSelectHasPlacedOrder(),
  totalSegments: makeSelectTotalSegments({ isCheckoutPage: true }),
  cashBack: makeSelectOrderSavings("Reward"),
});

export default connect(mapStateToProps)(OrderSummary);
