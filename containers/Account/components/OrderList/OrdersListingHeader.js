import React, { Fragment } from 'react';
import styled from 'styled-components';
import Icon from 'react-icons-kit';
import { darken } from 'polished';
import { arrowLeft } from 'shared/components/Icons';
import NavigateNext from 'shared/components/PageLayout/styled/NavigateNext';


export default OrdersListingHeader;

function OrdersListingHeader({ currentOrder, closeDetails }) {
  return (
    <Fragment>
      <Mobile onClick={closeDetails}>
        {currentOrder && <Icon icon={arrowLeft} size={22} />}
        {currentOrder ? 'Order Details' : 'Your Orders'}
      </Mobile>

      <Desktop>
        <h2
          className={`current-page ${currentOrder ? 'order-page' : null}`}
        >
          {currentOrder ? 'Order Details' : 'Your Orders'}
        </h2>
        <div className="page-order">
          <div className="sub-tab">Home</div>
          <NavigateNext />
          <div className="sub-tab">My Account</div>
          <NavigateNext />
          <div
            className="sub-tab"
            data-click={currentOrder ? 'true' : 'false'}
            onClick={currentOrder ? closeDetails : null}
          >
            Your Orders
          </div>
          {currentOrder && (
            <Fragment>
              <NavigateNext />
              <div className="sub-tab" data-active="true">
                Order Details
              </div>
            </Fragment>
          )}
        </div>
      </Desktop>
    </Fragment>
  );
}

const Mobile = styled.div`
  margin: 1rem;
  font-weight: 500;
  color: ${props => props.theme.general.primaryColor};

  i {
    margin-right: 1rem;
    line-height: 1.2em;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;

const Desktop = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
  }
  
  .current-page {
    margin: 0px;
    display: flex;
    align-content: center;
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1em;
  }
  
  .page-order {
    padding: 0px 1rem;
    display: flex;
    font-size: 0.85rem;
    color: ${props => props.theme.colors.themePlaceholderGray};

    .sub-tab {
      &[data-active='true'] {
        color: ${props => props.theme.general.themeFontBlack};
      }

      &[data-click='true'] {
        cursor: pointer;

        :hover {
          color: ${props => props.theme.general.themeFontBlack};
        }
      }
    }

    ${NavigateNext} {
      margin: 0px 0.5rem;
      color: ${props => props.theme.colors.mediumGray};
    }
  }
  
  .order-help-btn {
    display: none;

    @media (min-width: 1024px) {
      margin-left: auto;
      display: block;
      font-size: 0.925rem;
      font-weight: 500;
      cursor: pointer;
      text-transform: uppercase;
      color: ${props => props.theme.general.primaryColor};

      &:hover,
      &:active {
        color: ${props => darken(0.15, props.theme.general.primaryColor)};
      }
    }
  }
`;
