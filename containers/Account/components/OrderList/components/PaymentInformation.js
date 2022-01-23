import { isNonEmptyArray, isNumber } from 'ramda-adjunct';
import React from 'react';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { info } from 'shared/components/Icons';
import { makeLocaleStringWithCurrency } from 'utils/helpers/products/prices';

export default PaymentInformation;
function PaymentInformation({ info, orderPaymentMethod, order }) {
  return (
    <Wrapper>
      {isNonEmptyArray(info) &&
        info.map(item => {
          if(item.key === 'COD'){
            return null;
          }
          return (
            <div className={`item ${item.id || ''}`} key={item.key}>
              <div className="key">{item.key}</div>
              <div className={`value ${item.class || ''}`}>
                {item.id === 'shipping_charges' && <ShippingToolTip />}
                {item.id === 'shipping_charges' && "₹"}
                {item.id === 'shipping_charges' ? (order.shipping_amount)
                    : 
                    (isNumber(item.value)
                    ? makeLocaleStringWithCurrency()(item.value)
                    : makeLocaleStringWithCurrency()(0))
                }
              </div>
            </div>
          );
        })}
    </Wrapper>
  );
}

const ShippingToolTip = () => (
  <span className="shipping-tooltip__container">
    <Icon className="info-icon" size="1.2em" icon={info} />
    <span className="tooltiptext">
      Shipping charges of Rs.40.0 will apply on order below Rs. 399.0 + COD charges if any
    </span>
  </span>
);

const Wrapper = styled.div`
  line-height: 1.2em;
  border-top: 1px solid ${props => props.theme.colors.smoke};

  .item {
    padding: 0.75rem 1rem;
    display: flex;
    justify-content: space-between;

    &.grand_total {
      border-top: 1px solid ${props => props.theme.colors.smoke};
    }
    
    @media (min-width: 1024px) {
      padding: 0.75rem 0px;
    }
  }

  .key {
    font-size: 0.875rem;
    color: ${props => props.theme.colors.mediumGray};
  }

  .value {
    font-weight: 500;

    &.credit {
      color: #f00;
    }
  }

  .shipping-tooltip__container {
    position: relative;

    .info-icon {
      color: ${props => props.theme.general.primaryColor};
      margin-right: 0.5rem;
    }

    .tooltiptext {
      visibility: hidden;
      background-color: #1d1d1dcc;
      color: #fff;
      text-align: center;
      transform: translateX(-95%) translateY(110%);
      padding: 5px 0;
      position: absolute;
      z-index: 1;
      bottom: 0;
      left: 8px;
      opacity: 0;
      transition: opacity 0.3s;
      width: 60vw;
      max-width: 320px;
      font-size: 1rem;
      font-weight: 300;
      font-style: italic;

      ::after {
        content: '';
        position: absolute;
        bottom: 98%;
        right: 2%;
        border-width: 8px;
        border-style: solid;
        border-color: transparent transparent #555 transparent;
      }
    }

    :hover .tooltiptext {
      visibility: visible;
      opacity: 1;
    }
  }
`;
