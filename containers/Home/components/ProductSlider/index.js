import React from 'react';
import Spinner from 'shared/components/Spinner';
import { isNonEmptyArray } from 'ramda-adjunct';
import Button from 'shared/components/Button';
import Link from 'next/link';
import { Row, Col } from 'react-styled-flexboxgrid';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeUTMParams } from 'containers/Checkout/redux/selectors';
import { makeSelectUser } from 'containers/Auth/redux/selectors';
import gtmDataLayer from 'lib/gtmDataLayer';
import makeClevertap from "lib/makeClevertap";
const ProductCarousel = dynamic(() => import('shared/components/ProductCarousel'))

function ProductSlider({
  products, 
  cta, 
  title, 
  description, 
  shopLink, 
  isMobile, 
  className, 
  style,
  user, 
  trackingData
}) {
  const clevertap = makeClevertap();
  products = products.slice(0,8);

  function shopNowClevertap() {
    clevertap.event.push("selectShopNow", {
      platform: "mewebsite",
      timeStamp: new Date().getTime(),
      pageTitle: process.browser ? document.title : "",
      clickSource: window.location.pathname.split("/").slice(-1)[0] === "" ? "/" : window.location.pathname.split("/").slice(-1)[0],
      clickTarget: "shop",
      clickLabel: "viewAll",
      clickUrl: "/shop",
      ...(user && {
        userName: user.firstName + " " + user.lastName,
        email: user.email,
        phone: user.phone,
        gaUserId: user.id,
      }),
      ...trackingData,
    });
  }
  
  const dataLayerFn = () => {
    gtmDataLayer.push({
      event : "viewAll",
      userId : user ? user.id : undefined,
      category : title,
    })
  }

  const onClickHandler = () => {
    shopNowClevertap()
    dataLayerFn()
  }

  const onClickHandlerMob = () => {
    selectViewAllClevertap()
    dataLayerFn()
  }

  const selectViewAllClevertap = () => {
    clevertap.event.push('selectViewAll', {
      platform: 'mewebsite',
      timeStamp: new Date().getTime(),
      pageTitle: process.browser ? document.title : '',
      clickSource: window.location.pathname.split("/").slice(-1)[0],
      clickTarget: 'shop',
      clickLabel: 'viewAll',
      clickUrl: '/shop',
      ...trackingData,
      ...(user && {
          userName: user.firstName + ' ' + user.lastName,
          email: user.email,
          phone: user.phone,
          gaUserId: user.id,
      }),
    });
  }

  return (
    <Row className={className} style={style}>
      <Col xs={12} sm={12} md={3} lg={3} className="productDesc">
        <div className = "desktop_category">
          {
            !isMobile 
            ? <div className="categorytitle">{title}</div> 
            : null
          }  
          <p className="textDesc">{description}</p>
          {
            shopLink ? 
              <Link prefetch={false} href={shopLink} passHref>
                <a className="shopBtn" onClick={() => onClickHandler()}>VIEW ALL</a>
              </Link> 
            : null
          }
        </div>
      </Col>
      <Col xs={12} sm={12} md={9} lg={9} className="productCarousel">
        {shopLink 
          ?
          <div className="mobile_ViewAll">
            <div>
              {
                isMobile
                ? <div className="titleDisplay">{title}</div>
                : null
              }
            </div>
            <div>
              <Link prefetch={false} href={shopLink} passHref>
                <a className="shopBtn" onClick={() => onClickHandlerMob()}>View All &#x276F;</a>
              </Link>
            </div>
          </div> 
          : null
        }
        {  
          isNonEmptyArray(products) 
          ? <ProductCarousel isMobile={isMobile} title={title} products={products} /> 
          : <Spinner />
        }
      </Col>
      {cta && 
        (
          <Link prefetch={false} href={cta.route}>
            <Button style={{ margin: '3rem auto' }}>{cta.text}</Button>
          </Link>
        )
      }
    </Row>
  );
}

function mapStateToProps() {
  return createStructuredSelector({
    user: makeSelectUser(),
    trackingData: makeUTMParams(),
  });
}

export default connect(mapStateToProps, null)(styled(ProductSlider)`
  display: flex;
  align-items: flex-start;

  .categorytitle {
    font-size: 1.7rem;
    line-height: 2rem;
    font-weight: 600;
    color: #1D1D1D;
  }
  
  .shopBtn {
    display: block;
    width: fit-content;
    padding: 1rem 2rem;
    position: relative;
    line-height: 1rem;
    padding-top: 15px;
    padding-bottom: 15px;
    background: ${props => props.theme.general.primaryColor};
    color: white;
    border-radius: 5px;
    text-align: center;
    transition: all 0.2s ease-in-out;
    &:hover {
      background: ${({ theme }) => theme.buttons.bg};
    }
  }

  .productDesc {
    text-align: center;
    order :0;

    .shopBtn {
      display: none;
    }

    .textDesc {
      text-align: center;
      display:none;    
    }
  }

  .productCarousel {
    text-align: center;
    
    @media only screen and (min-width: 769px){
      padding: 0rem 1.5rem;
    } 
  
    .BrainhubCarousel {
      .BrainhubCarouselItem {
        align-items: flex-start;
      }
    }

    .titleDisplay {
      font-size: 1.7rem;
      line-height: 1;
      font-weight: 450;
      color: #1D1D1D;
      font-family: Roboto;
      padding: 0rem 0.3rem; 
    }

    .shopBtn {
      width: auto;
      padding: 0.5rem 0.6rem ;
      border: ${props => props.theme.general.primaryColor} solid 0.15rem;
      color: ${props => props.theme.general.primaryColor};
      font-size: 0.9rem;
      line-height: 1rem;
      background: white;
      border-radius: 25px;
      text-align: center;
      margin-right: 0.3rem;
      margin-bottom: 0.3rem;
      transition: all 0.2s ease-in-out;
      &:hover {
        color: #fff;
        background: ${({ theme }) => theme.buttons.bg};
      }
    }
  }

  .mobile_ViewAll {
    margin:0.3rem 0.6rem;
    display: flex;
    align-items:center;
    justify-content: space-between;
  }

  @media only screen and (min-width: 769px) {
    .productDesc {
      text-align: center;
      order: 0;

      .desktop_category {
        position : relative;
        top : 8rem;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      
      .shopBtn {
        display: block;
      }
    
      .textDesc {
        text-align: center;
        display:block;
      }
    }
    .productCarousel {
      .shopBtn {
        display: none;
      }
    }
  }
`);
