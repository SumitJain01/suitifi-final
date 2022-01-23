import React from 'react';
import styled, { css } from 'styled-components';
import NavigateNext from 'containers/Account/components/styled/NavigateNext';

export default Header;

function Header({ status, orderID, viewDetails, isDetailsView, isMobile }) {
  let statusClassName = '',
    statusText = '';
  const statusToCompare = String(status).toLowerCase();

  if (statusToCompare === 'canceled') {
    statusClassName = 'canceled';
    statusText = 'Order Cancelled';
  } else if (
    statusToCompare === 'delivered' ||
    statusToCompare === 'order_delivered'
  ) {
    statusClassName = 'delivered';
    statusText = 'Delivered';
  } else {
    statusText = status;
  }

  return (
    <Wrapper className="order-status-header" isMobile={isMobile} isDetailsView={isDetailsView}>
      <div className="status-wrapper">
        <div className={`order-status ${statusClassName}`}>
          Status: <span>{statusText}</span>
        </div>
      </div>

      <div
        className="order-id-wrapper"
        onClick={(viewDetails && isMobile) ? viewDetails : null}
      >
        <div className="order-id">
          Order ID: <span>{orderID}</span>
        </div>
        {isMobile && <NavigateNext className="clickable-indicator" />}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: ${props => (props.isMobile && !props.isDetailsView) ? '0.35rem 0px 0.35rem 1rem' : '0.35rem 1rem'};
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.general.themeLightGreen};
  line-height: 1.6rem;
  border-radius: 5px 5px 0px 0px;

  @media (min-width: 1024px) {
    ${props =>
      props.isDetailsView &&
      css`
        margin-top: 1rem;
        margin-left: 2rem;
        padding: 1rem 0px 0px;
      `}
    margin: 0;
    padding: 0.5rem 0.5rem 0.5rem 2rem;
    background-color: #f8f8f8;

    .clickable-indicator {
      display: none !important;
    }
  }

  .order-id-wrapper {
    display: flex;
  }

  .order-status {
    font-size: 0.825rem;
    color: ${props => props.theme.colors.themePlaceholderGray};

    span {
      font-size: 0.9rem;
      font-weight: 500;
      color: ${props => props.theme.general.primaryColor};
      text-transform: capitalize;
    }
    &.delivered span {
      color: ${props => props.theme.general.primaryColor};
    }
    &.canceled span {
      color: #f00;
    }

    @media (min-width: 1024px) {
      font-size: 0.975rem;
      font-weight: 500;

      span {
        font-size: 0.975rem;
        font-weight: 700;
      }
    }
  }
  .order-id {
    font-size: 0.825rem;
    color: ${props => props.theme.colors.themePlaceholderGray};

    span {
      font-size: 0.875rem;
      font-weight: 500;
      color: ${props => props.theme.general.themeFontBlack};
    }

    @media (min-width: 1024px) {
      font-size: 0.975rem;
      font-weight: 500;

      span {
        font-size: 1rem;
      }
    }
  }
`;
