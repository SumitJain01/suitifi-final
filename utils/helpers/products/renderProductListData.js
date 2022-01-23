import React from 'react';
import styled from 'styled-components';
import ProductCard from 'shared/components/ProductCard';

const isPLP = true;
const renderProductListData = ({
  products
}) => (
  <Wrapper>
    {
      products.map((product, index) => (
        <ProductCard
          isPLP={isPLP}
          key={product.id}
          product={product}
          position={index + 1}
        />
      ))
    }
  </Wrapper>
);

export default renderProductListData;

const Wrapper = styled.section`
  margin: 3rem 0 0 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0 4px;
  padding: 0;
  max-width: 1400px!important;
  width: 100%;
  margin: auto;

  @media screen and (max-width: 768px){
    grid-gap: 0px !important;
  
  }
  @media screen and (min-width: 768px){
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1rem 1rem;
  }

  @media screen and (min-width: 1400px){
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
  }
`;
