import React, { useState } from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';
import H2 from 'shared/components/Html/H2';
import Gap from 'shared/components/Gap';
import styled, { css } from 'styled-components';
import theme from 'theme/index';
import CountDown from './countDown';
import ProgressRings from './ProgressRings';

function CountDownComponent({ className, heading, subheading1, subheading2, subheading3,
  expiryMessage, startTimePicker, endTimePicker }) {
  let startTime = Date.parse(startTimePicker);
  let endTime = Date.parse(endTimePicker);
  // let startTime = 1609843183000;
  // let endTime = 1610275183000;
  //Just a safety check to ensure if new props are not available on some page, then it should not break.
  if (!startTime) {
    startTime = 1598340174000;
    startTime = 1600090233000;  
  }
  if (!endTime) {
    endTime = 1598340184000;
    endTime = 1600093833000;
  }
  // let newdate = new Date();
  // let year = newdate.getFullYear();
  // let month = newdate.getMonth() < 9 ? '0' + (newdate.getMonth() + 1) : newdate.getMonth() + 1;
  // let day = newdate.getDate() < 10 ? '0' + (newdate.getDate()) : newdate.getDate();
  // let fullDate = year + '-' + month + '-' + day;
  let shouldRender = ((Date.parse(new Date()) - startTime) > 0);
  const [offerExpired, setOfferExpired] = useState(false)
  return (
    <Row className={className}>
      {shouldRender && (
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          style={{
            textAlign: 'center',
          }}
          className="dealOfDayProductData"
        >
          {!offerExpired && (
            <>
              <div className="deal-message">
                {/* <img className="hurry-up" src="https://mamaearthp.imgix.net/wysiwyg/Hurry-up2x.png?auto=format" alt="hurryUpText" width="50px"/> */}
                {/* <img className="hurry-up" src="https://mamaearthp.imgix.net/wysiwyg/hurry_up_bg_desktop2x.png?auto=format" alt="hurry up with balloons" width="200px"/>                 */}
                <p className="message">{`${subheading1 ? subheading1 : ''} ${subheading2 ? subheading2 : ''} ${subheading3 ? subheading3 : ''}`}</p>
              </div>
              {/* <H2>{heading}</H2>
          <div className="titleDealOfTheDay">
            <span style={{ fontWeight: '700' }}>{subheading1}</span>
            <span
              style={{
                fontFamily: `${theme.fonts.secondary}`,
                display: 'inline-block',
                color: `${theme.general.primaryColor}`,
                padding: '0px 0.5rem',
              }}
            >{subheading2}</span>
            {subheading3}
          </div> */}
            </>
          )}
          {offerExpired && (
            <div className="titleDealOfTheDay">
              <span style={{ fontWeight: '700' }}>{expiryMessage}</span>
            </div>
          )}
          <div className="countdown-timer">
            <ProgressRings startTime={startTime} endTime={endTime} setOfferExpired={setOfferExpired} />
          </div>
          {/* <CountDown startTime={startTime} endTime={endTime} setOfferExpired={setOfferExpired} /> */}
        </Col>
      )}
    </Row>
  );
}

export default styled(CountDownComponent)` 
  margin-bottom:-10px;
  @media only screen and (max-width: 769px){
    margin-bottom:-20px;
    }
  font-family: Roboto, sans-serif;
  h2 {
    background-image:url("https://images-na.ssl-images-amazon.com/images/I/61b9%2BruRzFL._SL1200_.jpg");
    color: ${({ theme }) => theme.scheme.accent};
    font-weight: 300;
    font-size: 2rem;
    text-align: center;
    display: block;
    width: 100%;
    font-family: ${({ theme }) => theme.fonts.secondary};
  }
  .dealOfDayProductData {
    order: 1;
/* padding-left:200px; */
    padding-top:10px;
    padding-left:10px;
    /* background-image:url("https://mamaearthp.imgix.net/wysiwyg/centre_bg_desktop2x.png?auto=format"); */
    
    ${props => (
      props.pageTitle === 'OMG/BABY Sale Page' ||
      props.pageTitle === 'Anniversary SALE LAnding Page / OMG'
      ) && css`
      @media (max-width: 420px){
        padding: 0px
      }
    `}
    
    h2 {
      /* display: none */
    }
  }

  .deal-message {
    text-align: center;
    margin-top:160px;
    @media only screen and (max-width: 769px){
    margin-top:100px;
    }
    img {
      width: 100%;
    }
    .message {
      color: #5c5c5cd9;
      /* color: ${({ theme }) => theme.colors.mediumGray}; */
      font-size: 1.1rem;
      font-weight: 500;
      line-height: 1.2em;
      margin-top: -116px;
    }
  }
  .titleDealOfTheDay {
    display: block;
    font-size: 2rem;
    font-weight: 300;
  }
  
  @media only screen and (min-width: 1280px) {
    .dealOfDayProductData {
      order: 0;
      /* background-image:url("https://mamaearthp.imgix.net/wysiwyg/centre_bg_desktop.png?auto=format"); */
      h2 {
        display: block;
      }
    }

    .titleDealOfTheDay {
      display: block;
      font-size: 2.5rem;
      font-weight: 300;
    }
  }
  @media only screen and (min-width: 769px) {
    .dealOfDayProductData {
      order: 0;
      /* background-image:url("https://mamaearthp.imgix.net/wysiwyg/centre_bg_desktop.png?auto=format"); */
      h2 {
        display: block;
      }
    }
    .deal-message {
      img {
        width: 50%;
      }
      .message {
        font-size: 1.6rem;
        font-weight: 501;
        margin-top:-166px;
      }
    }
  }
  @media only screen and (min-width: 834px) and (max-width :900px){      //for ipad pro / pro 2 / ...
    .dealOfDayProductData {
      order: 0;
      /* background-image:url("https://mamaearthp.imgix.net/wysiwyg/centre_bg_desktop.png?auto=format"); */
      h2 {
        display: block;
      }
    }
    .deal-message {
      img {
        width: 50%;
      }
      .message {
        font-size: 0.9rem;
        font-weight: 501;
        margin-top:-101px;
      }
    }
  }
  
  @media only screen and (max-width: 375px) {
    .dealOfDayProductData {
      order: 0;
      /* background-image:url("https://mamaearthp.imgix.net/wysiwyg/centre_bg_desktop.png?auto=format"); */
      h2 {
        display: block;
      }
    }
    .deal-message {
      img {
        width: 100%;
        height:auto;
      }
      .message {
        font-size: 0.78rem;
        font-weight: 500;
        margin-top:-83px;
        line-height:0.6rem;
      }
    }
  }

  @media only screen and (max-width: 694px) {
    .dealOfDayProductData {
      order: 0;
      /* background-image:url("https://mamaearthp.imgix.net/wysiwyg/centre_bg_desktop.png?auto=format"); */
      h2 {
        display: block;
      }
    }
    /* .hurry-up{
      width
    } */
    .deal-message {
      img {
        width: 83%;
        height:auto;
        margin-top:1.2rem;
        margin-left: auto;
        margin-right: auto;
      }
      .message {
        font-size: 0.9rem;
        font-weight: 500;
        margin-top:-101px;
        line-height:0.6rem;
      }
    }
  }
  @media only screen and (max-width: 800px) and (min-width: 799px){
    .deal-message{
      img {
        width: 100%;
        height:auto;
      }
      .message{
        font-size: 1.9rem;
        font-weight: 502;
        margin-top: -154px;
      }
    }
    
  }
  @media only screen and (max-width:359px) and (min-width: 300px) {
    .dealOfDayProductData {
      order: 0;
      /* background-image:url("https://mamaearthp.imgix.net/wysiwyg/centre_bg_desktop.png?auto=format"); */
      h2 {
        display: block;
      }
    }
    .deal-message {
      img {
        width: 50%;
        height:auto;
      }
      .message {
        font-size: 0.7rem;
        font-weight: 500;
        margin-top:-67px;
        line-height:0rem;
      }
    }
  }
  @media only screen and (max-width: 370px) and (min-width:350px){
    .deal-message .message {
        font-size: 0.9rem;
        font-weight: 500;
        margin-top: -91px;
        line-height: 0.6rem;
    }
}
@media only screen and (max-width: 360px) and (min-width: 200px){

 .deal-message img {
    width: 82%;
    height: auto;
 }
}
@media only screen and (max-width: 380px) and (min-width:370px){

.deal-message .message {
    font-size: 0.9rem;
    font-weight: 500;
    margin-top: -92px;
    line-height: 0.6rem;
}
}
@media only screen and (max-width: 769px) and (min-width:766px){

.deal-message .message {
    color: #5c5c5cd9;
    font-size: 2.1rem;
    font-weight: 500;
    line-height: 1.2em;
    margin-top: -174px;
}
.deal-message img {
    width: 82%;
}
}
@media only screen and (max-width: 290px) and (min-width:278px){
.deal-message .message {
    margin-top: -68px;
}
.deal-message img {
    width: 82%;
    height: auto;
}
}
`;
