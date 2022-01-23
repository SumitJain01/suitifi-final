import React from 'react';
import styled, { css } from 'styled-components';
import NavigateNext from 'containers/Account/components/styled/NavigateNext';

export default Header;

function Header({ orderID, isMobile }) {

  return (
    <Wrapper className="order-header-wrapper" isMobile={isMobile}>
      <div className="order-id">
        Order ID: <span>{orderID}</span>
      </div>

      <div className="view-details-wrapper">
        <div className="view-details-label">
          Track Order
        </div>
        <NavigateNext className="clickable-indicator" />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: ${props => (props.isMobile) ? '0.35rem 0px 0.35rem 1rem' : '0.35rem 1rem'};
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.general.themeLightGreen};
  line-height: 1.6rem;
  border-radius: 5px 5px 0px 0px;

  @media (min-width: 1024px) {
    margin: 0;
    padding: 0.5rem 1rem 0.5rem;
  }
  
  .order-id {
    font-size: 0.825rem;
    color: ${props => props.theme.colors.themePlaceholderGray};

    span {
      font-size: 0.9rem;
      font-weight: 500;
      color: ${props => props.theme.general.themeFontBlack};
    }
  }

  .view-details-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .view-details-label {
    font-size: 0.825rem;
    font-weight: 500;
    color: ${props => props.theme.general.primaryColor};

    @media (min-width: 1024px) {
      font-size: 0.975rem;
      font-weight: 500;
      text-transform: capitalize;

      span {
        font-size: 1rem;
      }
    }
  }
  ${NavigateNext} {
      margin: 0px 0.2rem;
    }
`;
