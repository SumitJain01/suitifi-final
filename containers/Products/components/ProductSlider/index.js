import React from 'react';
import Spinner from 'shared/components/Spinner';
import { isNonEmptyArray } from 'ramda-adjunct';
import ProductCarousel from 'shared/components/ProductCarousel';
import styled from 'styled-components';
import H2 from 'shared/components/Html/H2';

function ProductSlider({ products, title, isMobile, className, style }) {
  return (
    <div className={className} style={style}>
      <div className="productDesc">
        <H2>{title}</H2>
      </div>
      <div className="productCarousel">
        {
          isNonEmptyArray(products) 
          ? <ProductCarousel isMobile={isMobile} products={products} isPLP={true} /> 
          : <Spinner />
        }
      </div>
    </div>
  );
}

export default styled(ProductSlider)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    @media only screen and (max-width: 767px) {
      margin: 0rem;
    }
    color: #1D1D1D;
    font-weight: 500;
    font-size: 1.6rem;
    text-align: center;
    display: block;
    width: 100%;
    font-family: "Roboto";
  }
  
  .productDesc {
    text-align: center;
    order: 0;
    margin-bottom: 1rem;
  }
  .productCarousel {
    text-align: center;
    width: 100%;

    .BrainhubCarousel {
      .BrainhubCarouselItem {
        align-items: flex-start;
      }
    }
  }

  @media only screen and (min-width: 767px) {
    .productCarousel {
      width: 90%;
    }
    .productDesc {
      text-align: center;
      order: 0;
      margin-top: auto;
      margin-bottom: auto;
    }
  }
`;
