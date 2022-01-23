import React from 'react';
import theme from 'theme/index';
import styled from 'styled-components';
import { Row, Col } from 'react-styled-flexboxgrid';
import itemRenderer from 'utils/helpers/products/productSliderItemRenderer';
import Countdown from './CountDown';
import Link from 'next/link';

const customStyle = {
  background : '#DEF5F4',
  paddingBottom : '1rem',
} 

function DealOfDay({ products, className, isMobile }) {
  let newdate = new Date();
  let year = newdate.getFullYear();
  let month = newdate.getMonth() < 9 ? '0' + (newdate.getMonth() + 1) : newdate.getMonth() + 1;
  let day = newdate.getDate() < 10 ? '0' + (newdate.getDate()) : newdate.getDate();
  let fullDate = year + '-' + month + '-' + day;
  
  return (
    <div style ={isMobile ? customStyle : null}>
      <Row className={className}>
        <Col xs={12} sm={12} md={6} lg={6} style={{textAlign: 'center',}} className="dealOfDayProductData">
          <div className="header"> 
            <span className="heading">Deal Of The Day</span>
            { isMobile &&
          <Link prefetch={false} href="/product-category/today-deals">
              <a className="shopBtn">
                View All &#x276F;
              </a>
          </Link>

            }
          </div>
          <div className="titleDealOfTheDay">
     
         <span>Hurry!</span>
            <span id="offer-text">Offer</span>
            Will Expire In
          </div>
          <Countdown date={fullDate} />
          { !isMobile &&
          <Link prefetch={false} href="/product-category/today-deals">
            <a className="viewAllDeals">
              VIEW ALL DEALS
            </a>
          </Link>
          }
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} className="dealOfDayProductSlider">
          <div className="DealOfDay-Wrapper">
            {
              products.map(itemRenderer)
            }
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default styled(DealOfDay)`
.heading {
  font-size: 1.7rem;
  line-height: 1;
  font-weight: 450;
  color: #1D1D1D;
  font-family: Roboto;
  padding: 0rem 0.9rem;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
}

.shopBtn {
  width: auto;
  padding: 0.5rem 0.6rem;
  border: ${theme.general.primaryColor} solid 0.15rem;
  color: ${theme.general.primaryColor};
  font-size: 0.9rem;
  line-height: 1rem;
  background: white;
  border-radius: 25px;
  text-align: center;
  margin: 0.5rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #fff;
    background: ${theme.buttons.bg};
  }
}  

.dealOfDayProductSlider {
  h2 {
    padding-top: 2rem;
  }
}

.titleDealOfTheDay {
  padding: 0rem 0.95rem;
  display: block;
  font-size: 1rem;
  font-weight: 400;
  text-align: left;

  #offer-text {
    font-family: ${theme.fonts.secondary};
    display: inline-block;
    color: ${theme.general.primaryColor};
    padding: 0px 0.5rem;
  }
}

.viewAllDeals {
  display: inline-block; 
  position: relative; 
  margin: 1rem 2rem;
  padding: 0.5rem 1rem;
  background: ${theme.general.primaryColor};
  border-radius: 5px; 
  font-size: 0.8rem;
  color: ${theme.colors.white}; 
}

.DealOfDay-Wrapper {
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.2rem;
  display: flex;

  > div {
    width: 50%;
  }
}

@media only screen and (min-width: 769px) {  
  .dealOfDayProductData {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      display: block;
    }
  }

  .titleDealOfTheDay {
    display: block;
    font-size: 2.5rem;
    font-weight: 300;
  }

  .viewAllDeals {
    display: inline-block; 
    position: relative; 
    margin: 1rem 2rem;
    padding: 0.5rem 1rem;
    background: ${theme.general.primaryColor};
    border-radius: 5px; 
    font-size: 1rem;
    color: ${theme.colors.white}; 
  }
  
  .DealOfDay-Wrapper {
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.2rem;
    display: flex;

    > div {
      width: 50%;
    }
  }
} 
`;
