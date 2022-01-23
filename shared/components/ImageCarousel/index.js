import React from 'react';
import Slider from 'react-slick';
import { isEmpty } from 'ramda'
import { SampleNextArrow, SamplePrevArrow } from 'containers/Home/components/OfferSlider';
import Link from 'next/link';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoPlaySpeed: 4500,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: null
    }
  }
  
  componentDidMount() {
    let isMobile = window.innerWidth < 768;
    this.setState({ isMobile });
  }

  render() {
    const {
      plpBanners,
    } = this.props

    const assetData = !isEmpty(plpBanners) ? plpBanners.includes.Asset : {};
    const itemsData = !isEmpty(plpBanners) ? Object.values(plpBanners && plpBanners.items && plpBanners.items[0] && plpBanners.items[0].fields) : {};
    const itemsDataKeys = !isEmpty(plpBanners) ? Object.keys(plpBanners && plpBanners.items && plpBanners.items[0] && plpBanners.items[0].fields) : {};

    let mainSliderData = [];
    let mainSliderDataLinks = [];
    let mainSliderDataAltTexts = [];

    for (let i = 0; i < itemsData.length; i = i + 3) {
      const id = itemsData[i].sys.id;
      for (let j = 0; j < assetData.length; j++) {
        if (id === assetData[j].sys.id) {
          mainSliderData.push(assetData[j]);
          mainSliderDataLinks.push(itemsData[i + 2]);
          mainSliderDataAltTexts.push(itemsData[i + 1]);
        }
      }
    }

    let desktopSliderData = [], mobileSliderData = [], desktopCount = 0;
    let desktopSliderDataLinks = [], mobileSliderDataLinks = [];
    let desktopSliderDataAltTexts = [], mobileSliderDataAltTexts = [];
    for(let i = 0; i < itemsDataKeys.length; i = i + 3) {
      if (itemsDataKeys[i].includes("desktopBannerPosition"))
        desktopCount++;
    }
    desktopSliderData = mainSliderData.splice(0, desktopCount);
    mobileSliderData = mainSliderData.splice(-(itemsDataKeys.length - desktopCount));
    desktopSliderDataLinks = mainSliderDataLinks.splice(0, desktopCount);
    mobileSliderDataLinks = mainSliderDataLinks.splice(-(itemsDataKeys.length - desktopCount));
    desktopSliderDataAltTexts = mainSliderDataAltTexts.splice(0, desktopCount);
    mobileSliderDataAltTexts = mainSliderDataAltTexts.splice(-(itemsDataKeys.length - desktopCount));
    
    return (
      <Slider {...settings}>
        {plpBanners && !this.state.isMobile && desktopSliderData.map((item, index) => {
            return (
              <Link prefetch={false} href={desktopSliderDataLinks[index]} prefetch={false} key={index}>
                 <img 
                  style={{cursor:'pointer'}} 
                  className="desktop-img" 
                  src={'https:'+item.fields.file.url} 
                  alt={desktopSliderDataAltTexts[index]}
                />
              </Link>
            )
        })}

        {plpBanners && this.state.isMobile && mobileSliderData.map((item, index) => {
            return (
              <Link prefetch={false} href={mobileSliderDataLinks[index] ? mobileSliderDataLinks[index] : '/' } prefetch={false} key={index}>
                  <img 
                    style={{cursor:'pointer'}} 
                    className="mobile-img" 
                    src={'https:'+item.fields.file.url} 
                    alt={mobileSliderDataAltTexts[index]}
                  />
              </Link>
            )
          })}
      </Slider>
    )
  }
}

export default ImageCarousel;

