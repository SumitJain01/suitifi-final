import { useQuery } from '@apollo/client';
import { makeSelectIds, makeSelectSpecialPriceSaving } from 'containers/Cart/redux/selectors';
import { makeSelectLoading, makeSelectShippingAmount, makeSelectTotalSegments } from 'containers/Checkout/redux/selectors';
import { grandTotalQuery } from "GraphQL/Queries";
import React, { memo } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import TotalsItem from './TotalsItem';

function makeOrderTotals({ isCheckoutPage, grandTotal }) {

  // eslint-disable-next-line prefer-arrow-callback
  const OrderTotals = memo(function Ot({
    totalSegments = [],
    ids,
    specialPriceSaving,
    shippingAmount,
  }) {
    let isCoupon = totalSegments.find((item) => item.code == "discount");
    if (!isCoupon) {
      totalSegments.push({
        code: "discount",
        title: "Coupon Discount",
        value: 0,
        index: 4
      })
    }
    let isWalletApplied = totalSegments.find((item) => item.code == "customerbalance");
    if (!isWalletApplied) {
      totalSegments.push({
        code: "customerbalance",
        title: "Store Credit",
        value: 0,
        index: 6
      })
    }

    totalSegments.sort((a, b) => {
      if (a.index < b.index) {
        return -1;
      }
      if (a.index > b.index) {
        return 1;
      }
      return 0;
    })

    if (!ids.length) {
      return null;
    }

    const { error, loading, data } = useQuery(grandTotalQuery, {
      variables: {
        cartId: JSON.parse(localStorage.getItem('guestCartId')),
      },
    });
    totalSegments.push({
      code: "grandtotal",
      title: "Grand Total",
      value: data?.cart?.prices?.grand_total?.value,
      index: 7
    })
    return (
      <SummaryWrapper>
        <div className="summary-heading px-rem">
          Price Summary
        </div>
        <div className="summary-items__container">
          {totalSegments.map(item =>
            <TotalsItem
              key={item.code}
              {...item}
              shippingAmount={shippingAmount}
              isCheckoutPage={isCheckoutPage}
            />
          )}
        </div>
      </SummaryWrapper>
    );
  });
  const mapStateToProps = createStructuredSelector({
    shippingAmount: makeSelectShippingAmount(),
    totalSegments: makeSelectTotalSegments({ isCheckoutPage }),
    ids: makeSelectIds(),
    loading: makeSelectLoading(),
    specialPriceSaving: makeSelectSpecialPriceSaving(),
  });
  // return connect(mapStateToProps)(isCheckoutPage ? OrderTotals : withLoader(OrderTotals));
  return connect(mapStateToProps)(OrderTotals);
}

const SummaryWrapper = styled.div`
  font-family: Roboto, sans-serif;
  color: #1D1D1D;
  background-color: #FFFFFF;

  .summary-heading {
    font-size: 1.1rem;
    line-height: 1.2em;
    font-weight: 500;
    border-bottom: 1px solid ${props => props.theme.colors.smoke};
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }

  @media only screen and (min-width: 768px) {
    .summary-heading {
      font-size: 1.25rem;
    }
  }

`;

export default makeOrderTotals;
