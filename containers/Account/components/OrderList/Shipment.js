import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import ProductDetails from './components/ProductDetails';
import ShipmentHeader from './components/ShipmentHeader';
import { ViewMoreBtn } from './OrdersUI.styled';

export default Shipment;

function Shipment({ shipment = {}, mageOrderStatus, cancelHandler }) {
  const awbNumber = shipment.awbNumber || '';
  const trackingURL = `https://shiprocket.co/tracking/${awbNumber}`;

  const renderProductsDetails = shipment => {
    const products = shipment.shipmentItems || {};
    const output = Object.values(products).map(product => {
      const productDetailsProps = {
        name: product.name,
        imgSrc: product.image,
        price: product.price,
        itemsCount: product.qty,
        status: product.customerStatus,
      };

      return <ProductDetails key={product.sku} {...productDetailsProps} />;
    });

    return output;
  };

  return (
    <Wrapper>
      <ShipmentHeader shipment={shipment} mageOrderStatus={mageOrderStatus}/>

      <div className="products">
        {renderProductsDetails(shipment)}
      </div>
      
      {awbNumber && (
        <div className="track-btn-container">
          <Link prefetch={false} href={trackingURL} passHref>
            <CustomButton as="a" target="_blank">
              Track
            </CustomButton>
          </Link>
        </div>
      )}
    </Wrapper>
  );
}

const CustomButton = styled(ViewMoreBtn)`
  width: 100%;
  display: block;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background-color: ${props => props.theme.general.primaryColor};
  color: #fff;
  text-align: center;
  
  @media (min-width: 1024px) {
    margin-left: 14%;
    width: min-content;
    border-radius: 5px;
    font-size: 0.85rem;
    padding: 0.75rem 2rem 0.6rem;
  }
`;

const Wrapper = styled.div`
  font-family: Roboto, sans-serif;
  color: ${props => props.theme.general.themeFontBlack};
  box-shadow: 0px 0px 6px #00000033;
  border-radius: 5px;
  @media (max-width: 1024px){
    margin: 15px;
  }
  @media (min-width: 1024px) {
    border-radius: 10px;
    margin-top: 1.5rem;
    
    :first-of-type {
      margin-top: 0.5rem;
    }
    
    .shipment-wrapper {
      width: 100%;
      display: inline-flex;
      justify-content: flex-start;
      flex-wrap: wrap;

      .dummy {
        width: 13%;
      }
    }
  }
  
  .track-btn-container {
    @media (min-width: 1024px) {
      padding-bottom: 1rem;
    }
  }
  
  .products {
    padding-bottom: 1rem;
  }
  .products .product-image{
    width:13%;
  }
`;
