import React, { Component, useState, useEffect } from 'react';
import Slick from 'shared/components/SlickSlider/Slick';
import styled, {css} from 'styled-components';
import NegativeMargin from '../NegativeMargin';

function ContentFulOffer({ className, desktopUrl = [], mobileUrl = [], ...props }) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    let isMobile = window.innerWidth < 768;
    setIsMobile(isMobile);
  }, []);

  return (
    // <Unpad>
    <NegativeMargin>
      <div className={className}>
        {
          isMobile ?
          <div className="secondary-banner g-2">
          {mobileUrl.map((item, index) => {
            return (
              <img key={index} src={item} ></img>
            )
          })}
          </div>
            :
              <div className="secondary-banner g-2">
                {desktopUrl.map((item, index) => {
                  return (
                    <img key={index} src={item} ></img>
                  )
                })}
            </div>
        }
      </div>
    </NegativeMargin>
    //  </Unpad>
  );
}

const StyledContentFulOffer = styled(ContentFulOffer)`
${props => (
  props.pageTitle === 'OMG/BABY Sale Page' ||
  props.pageTitle === 'Anniversary SALE LAnding Page / OMG'
) && css`
  @media (max-width:767px){
    margin: 0px -4px;
    width: 100vw;
    .image_mobile {
    border-radius: 0px !important;
  }
  }
`}

.image_mobile {
  border-radius: 14px;
}

.sanitize-banner {
  .slick-list {
    padding: 0px 0px !important;
  }
  .slick-slide { 
  }
}

.breadCrumbs {
  margin-top: 10px;
  font-size: 0.9rem;
  margin-bottom: 5rem;
  .divider {
    margin: 0 5px;
  }
  .current {
    color: #000;
  }
}

  .secondary-banner.g-2 {
    justify-content: center;
    display: grid;
    grid-template-columns: auto auto;
    margin-top: -0.3%;
    @media (max-width:767px){
      padding: 5px;
    }
  }

  .costumor-say {
    display: flex;
    flex-flow: column;
    align-items: center;
    overflow: hidden;
    .title {
        text-align: left;
        font-weight: 800;
        font-size: xx-large;
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
    }
    .grid-feedback-container {
        width:100%;
        padding: 0 8vw 12px 8vw;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url('static/mamaearth/bg_testimonial.svg')
    }

    @media (max-width: 599px)  {
      .ab-divider {
        width: 26%;
      }

      .title {
        font-size: larger;
      }

      .grid-feedback-container {
            padding: 0 0vw 12px 0vw;
            background-image: url('static/mamaearth/bg_testimonial-mobile.svg');
            background-position: bottom;
            background-size: contain;
      }
    }
  }

  .ab-divider {
    width: 10%;
    border: 0.5px solid #707070a8;
    margin: 0 0 3vh 0;
    display: flex;
    height: 0;
    justify-content: center;
    align-items: center;
    &:after {
        content: ' ';
        border: 2px solid #000;
        height: 0px;
        overflow: hidden;
        display: block;
        width: 52%;
    }
  }

  .product-category-container {
    display: grid;
    grid-gap: 30px;
    margin-top: 60px;
    .product-title {
      border-radius: 10px 10px 0px 0px;
      background-size: cover;
      background-image: url('static/mamaearth/bg_desk.svg');
      padding: 1.2%;
      text-align: center;
      letter-spacing: 0px;
      color: #000000;
      text-transform: uppercase;
      opacity: 1;
      font-weight: bolder;
      font-size: x-large;
    }
    .product-item-wrapper {
      display: grid;
      grid-template-columns: repeat(4, auto);
      grid-gap: 50px;
    }

    @media (max-width: 599px) {
      grid-gap: unset;
      margin-top: 20px;
      .product-title {
        font-size: larger;
      }
      .product-item-wrapper {
        grid-template-columns: repeat(2, auto);
        grid-gap: unset;
      }

    }
  }

`;

export default StyledContentFulOffer;
