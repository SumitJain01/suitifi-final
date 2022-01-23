import styled, { css } from 'styled-components';
import { darken } from 'polished';

const OrderWrapper = styled.div`
  margin: 0.5rem 1rem 1rem;
  padding-bottom: 0.9rem;
  box-shadow: 0px 2px 6px #00000029;
  border-radius: 5px;
  flex-basis: ${props => (props.isMobile) ? '100%' : '48%' };
  align-self: flex-start;
  
  @media (min-width: 1024px) {
    margin: 0 0 2rem;
    cursor: pointer;
    border-radius: 10px;
    
    &:first-of-type {
      margin-top: 0.5rem;
    }
  }
  
  .product-details-wrapper {
    @media (max-width: 1023px) {
      margin: 0px 1rem;
    }
  }
`;

const OrderSeparator = styled.hr`
  border: 0px;
  border-bottom: 3px solid #f2f9e8;

  @media (min-width: 768px) {
    border-bottom: 1px solid ${props => props.theme.general.borderColor};
    ${props => props.hideOnDesktop && `display: none;`}
  }
`;

const ViewMoreBtn = styled.button`
  padding: 0.75rem 1.25rem 0.6rem;
  font-family: Roboto, sans-serif;
  font-size: 0.925rem;
  font-weight: 500;
  line-height: 1.2em;
  text-transform: uppercase;
  border: 1px solid ${props => props.theme.general.primaryColor};
  border-radius: 5px;
  background-color: #fff;
  color: ${props => props.theme.general.primaryColor};

  &:hover,
  &:active {
    color: #fff;
    background: ${props => darken(0.15, props.theme.general.primaryColor)};
  }
`;

export { OrderWrapper, OrderSeparator, ViewMoreBtn };
