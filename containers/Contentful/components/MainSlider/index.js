import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import NegativeMargin from '../NegativeMargin';
import { SampleNextArrow, SamplePrevArrow } from 'containers/Home/components/OfferSlider';

const Wrapped = styled.div`
  .b1gi-banner {
    .slick-dots {
      li{  
        .slick-active {
          .custom-dot-active {
            background-color: black;
          }
        }
        @media (max-width: 599px) {
          width: unset;
          height: unset;
        }
      }
    }

  }
`
function MainSlider({ slider = [], ...props }) {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    let isMobile;
    if(process.browser) {
      isMobile = window.innerWidth < 768;
    }
    setIsMobile(isMobile);
  }, []);

  const settings = {
    className: "b1gi-banner",
    dots: isMobile ? true : false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoPlaySpeed: 6000,
    nextArrow: isMobile ? null : <SampleNextArrow />,
    prevArrow: isMobile ? null : <SamplePrevArrow />,
  };

  return (
    <NegativeMargin>
      <OuterWrapper>
        <Wrapped>
          <Slider {...settings}>
            {slider.map(({
              desktopImage, mobileImage, key, link, name,
            }) => !(isMobile && !mobileImage) && (
              <div className='img-container' style={{ width: '100%' }} key={key}>
                {(link)
                  ? (
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      <img src={isMobile ? mobileImage : desktopImage} width="100%" alt={name} title={name} />
                    </a>
                  ) : (
                    <img src={isMobile ? mobileImage : desktopImage} width="100%" alt={name} title={name} />
                  )
                }
              </div>
            ))}
          </Slider>
        </Wrapped>
      </OuterWrapper>
    </NegativeMargin>
  );
}

const OuterWrapper = styled.div`
  min-width: 100vw;
  height: auto;
  
  @media (min-width: 1200px) {
    margin: 0px -8vw;
  }
  
  @media (max-width: 480px) {
    width: 100vw;
    margin: 0px -4px;

    .img-container {
      display: block !important;
    }
  }
`;

export default MainSlider;
