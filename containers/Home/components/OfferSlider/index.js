import React from 'react';
import Slider from 'react-slick';
import { chevronLeft, chevronRight } from 'shared/components/Icons';
import Icon from 'react-icons-kit';
import { useRouter } from 'next/router';
import { makeImgixParams, makeImgixParamsMobileBanner } from 'shared/components/Image/Imgix';
import Image from 'next/image';
import { HOME_PAGE_BANNER } from 'utils/constants';

export function SampleNextArrow(props) {
  const { className, onClick, style} = props;
  return (
    <div
      className={`${className} SlickPrevArrowCustom`}
      onClick={onClick}
      style={{
        ...style,
        display: 'block',
        position: 'absolute',
        left: 'auto',
        right: '0px',
        zIndex: '9',
        height: '100%',
        width: '10vw',
        backgroundImage: 'linear-gradient(to left, #00000061 , #ffffff00)',
      }}
    >
      <Icon
        icon={chevronRight}
        size="3.5rem"
        className="chevronRight"
        style={{
          display: 'inline-block',
          color: 'white',
          top: '0px',
          bottom: '0px',
          position: 'absolute',
          margin: 'auto',
          height: '60px',
          left: '0px',
          right: '0px',
          width: '60px',
        }}
      />
    </div>
  );
}

export function SamplePrevArrow(props) {
  const { className, style, onClick} = props;
  return (
    <div
      className={`${className} SlickPrevArrowCustom`}
      style={{
        ...style,
        display: 'block',
        position: 'absolute',
        left: '0',
        zIndex: '9',
        height: '100%',
        width: '10vw',
        backgroundImage: 'linear-gradient(to right, #00000061 , #ffffff00)',
        right: 'auto',
      }}
      onClick={onClick}
    >
      <Icon
        icon={chevronLeft}
        size="3.5rem"
        style={{
          display: 'inline-block', color: 'white', top: '0px', bottom: '0px', position: 'absolute', margin: 'auto', height: '60px', left: '0px', right: '0px', width: '60px',
        }}
      />
    </div>
  );
}


function MainSlider({ isMobile , className}) {
  const settings = {
    dots: isMobile ? true : false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoPlaySpeed: 6000,
    lazyLoad: true,
  };

  const router = useRouter();

 

  return (
    <Slider {...settings}
      nextArrow={isMobile ? null : <SampleNextArrow />}
      prevArrow={isMobile ? null : <SamplePrevArrow  />}
    >
      {
        !isMobile
          ?
          (HOME_PAGE_BANNER.map((item, index) => (
            <div className={className} key={index}>
                  <div className="desktop-img">
                    <Image
                      srcSet={`${item}${makeImgixParams({
                        width: 1000,
                      })} 1000w, ${item}${makeImgixParams({
                        width: 1200,
                      })} 1200w, ${item}${makeImgixParams({
                        width: 1400,
                      })} 1400w, ${item}${makeImgixParams({
                        width: 1600,
                      })} 1600w, ${item}${makeImgixParams({
                        width: 1800,
                      })} 1800w, ${item}${makeImgixParams({
                        width: 1920,
                      })} 1920w`}
                      sizes="100vw"
                      src={item}
                      alt={"suitifi"}
                      title={"banner"}
                      width={1200}
                      height={300}
                      quality={60}
                      priority="true"
                    />
                  </div>
            </div>
          )))
          :
          (HOME_PAGE_BANNER.map((item, index) => (
            <div className={className} key={index}>
                  <div className="mobile-img" style={{minHeight:"150px"}}>
                    <img
                      srcSet={
                        `${item}${makeImgixParamsMobileBanner({
                          width: 400,
                        })} 400w, ${item}${makeImgixParamsMobileBanner({
                          width: 500,
                        })} 500w, ${item}${makeImgixParamsMobileBanner({
                          width: 600,
                        })} 600w, ${item}${makeImgixParamsMobileBanner({
                          width: 700,
                        })} 700w, ${item}${makeImgixParamsMobileBanner({
                          width: 800,
                        })} 800w,
                        `}
                      sizes="100vw"
                      src={item +`?fit=scale&w=400&h=200&fm=webp`} title={"banner"}
                      alt="suitifi"
                      width="100%"
                      height="100%"
                      priority="true"
                    />
                  </div>
            </div>
          )))
      }
    </Slider>
  );
}

export default MainSlider;
