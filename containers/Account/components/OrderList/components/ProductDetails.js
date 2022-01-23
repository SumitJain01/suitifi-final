import React from 'react';
import styled from 'styled-components';
import Image from 'shared/components/Image';
import { makeLocaleStringWithCurrency } from 'utils/helpers/products/prices';
import { isString } from 'ramda-adjunct';


export default ProductDetails;

function ProductDetails({
  name,
  price,
  itemsCount,
  imgSrc,
  status,
}) {
  return (
    <Wrapper className="product-details-wrapper">
      <div className="product-image">
        <Image src={imgSrc} alt="Product Image" />
      </div>

      <div className="product-info">
        <div className="product-name">
          <strong>{name && name}</strong>
        </div>
        <InfoRowDesktop>
          <div className="price"><span>{makeLocaleStringWithCurrency()(price)}</span></div>
          <div className="quantity">Qty: <span>{itemsCount  && itemsCount}</span></div>
        </InfoRowDesktop>
        <div className="mobile-row">
          {(isString(status)) && (
            <StyledDate data-type={status.toLowerCase()}>
              {status}
            </StyledDate>
          )}
          
          <InfoRow>
            <div className="quantity">Qty: <span>{itemsCount  && itemsCount}</span> </div>
          </InfoRow>
        </div>
      </div>
    </Wrapper>
  );
}

const StyledDate = styled.div`
  font-size: 1.08rem;
  font-weight: 500; 
  line-height: 1em;
  text-transform: capitalize;
  color: ${props => props.theme.general.primaryColor};
  
  &[data-type="canceled"],
  &[data-type="cancelled"],
  &[data-type="payment failed"],
  &[data-type="payment_failure"] {
    color: #f00;
  }
  
  @media (min-width: 1024px) {
    font-size: 0.925rem;
  }
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .price {
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1em;
  }

  .price span,
  .quantity span {
    color: ${props => props.theme.general.themeFontBlack};
  }
  
  .quantity {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1em;
    color: #989898;
  }
  
  @media (min-width: 1024px) {
    justify-content: flex-start;
    display: none;
    .quantity {
      margin-left: 4rem;
    }
  }
`;
const InfoRowDesktop = styled.div`
  display: flex;
  flex-direction: row;

  .quantity{
    display: none;
    margin-left: 30px;
    
    @media (min-width: 1024px) {
      display: block;
    }
  }
  .price {
    margin: 5px 5px 5px 0px;
  }
`;

const Wrapper = styled.div`
  padding-top: 0.5rem;
  display: flex;
  justify-content: space-evenly;

  @media (min-width: 1024px) {
    
  }
  
  .price {
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1em;
  }

  .price span {
    color: ${props => props.theme.general.themeFontBlack};
  }

  .product-image {
    width: 22.5%;
    @media (min-width: 1024px) {
      width: 25%;
      margin-left: 15px;
      margin-right: 10px;
    }
  }

  .product-image img {
    border: 1px solid ${props => props.theme.general.borderColor};
    border-radius: 10px;

    @media (min-width: 1024px) {
      border-radius: 5px;
    }
  }

  .product-info {
    margin-left: 0.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  
  .mobile-row {
    @media (max-width: 1023px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    @media (min-width: 1024px) {
      display: inline-flex;
      
    }
  }

  .product-name {
    font-size: 0.875rem;
    line-height: 1.4em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    span {
      padding-left: 1rem;
      font-weight: 500;
      white-space: nowrap;
      cursor: pointer;
      color: ${props => props.theme.general.primaryColor};
    }
    
    @media (min-width: 1024px) {
      padding-right: 3rem;
      font-size: 0.975rem;
    }
  }
`;
