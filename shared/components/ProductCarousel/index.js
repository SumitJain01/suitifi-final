/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import SlickSlider from 'shared/components/SlickSlider';
import { mergeDeepRight } from 'ramda';
import styled from 'styled-components';
import Icon from 'react-icons-kit';
import { chevronRight, chevronLeft } from 'shared/components/Icons';
import itemRenderer from 'utils/helpers/products/productSliderItemRenderer';

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} SlickPrevArrowCustom`}
      onClick={onClick}
    >
      <Icon icon={chevronRight} size="2rem" style={{ color: 'gray' }} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} SlickPrevArrowCustom`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <Icon icon={chevronLeft} size="2rem" style={{ color: 'gray' }} />
    </div>
  );
}

function settings(products, isPLP) {
  const settings = {
    dots: false,
    infinite: products.length > 3,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1370,
        settings: {
          slidesToShow: isPLP ? 4 : 3,
          slidesToScroll: isPLP ? 4 : 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false
        },
      },
    ],
  };
  return settings;
}


function ProductCarouselSlider({ products , customSliderSettings, isPLP = false }) {
  const sliderSettings = mergeDeepRight(settings(products, isPLP) , customSliderSettings || {})
  return (
    <SlickSlider
      settings={sliderSettings}
      items={products}
      itemRenderer={itemRenderer}
    />
  );
}

export default styled(ProductCarouselSlider)`
  .slick-next {
    &.SlickNextArrowCustom {
      &:before {
        display: none !important;
        content: '' !important;
        display: block !important;
      }
    }
  }
`;
