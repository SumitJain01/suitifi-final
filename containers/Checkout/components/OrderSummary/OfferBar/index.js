import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';
import request from 'lib/request';
import { isArray, isEmptyArray } from 'ramda-adjunct';
import styled from 'styled-components';
import Image from 'shared/components/Image';
import { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN, CART_OFFER_CONTENT_ID } from 'utils/constants/index'

function OfferBar({ className }) {
  const[offers, setOffers] = useState([]);

  useEffect(() => {
    //  request(`https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${CONTENTFUL_ACCESS_TOKEN}&content_type=${CART_OFFER_CONTENT_ID}`, {}, true)
    //   .then(resp => setOffers(resp.items[0].fields))
    //   .catch(err => console.log('Error Requesting Offer Bar Data: ', err));
      setOffers({cartPageOffer1 : "Suitifi Welcome Offer  Rs. 200 Off | Hurry Up  "})
  }, []);

  const offersData = Object.values(offers)
  
  if (isEmptyArray(offersData)) return null;
  return (
    <div className={className}>
      <Row>
        {(isArray(offersData) && offersData.length >= 1 )&& (
          <ul>
          {offersData.map((offer, index) =>  
            <li className="background" key={index}>
            <Col xs={11} md={10} lg={10} className="textDiv">
              {offer}
            </Col>
            </li>
          )}
          </ul>
        )}
      </Row>
    </div>
  )
}

const StyledOfferBar = styled(OfferBar)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  justify-content:center;

  padding: 0.5rem 0.5rem;

  .offerImage {
    width: 20px;
    height: 20px;
    margin-top: 3px;
  }

  .textDiv {
    font-size: 0.85rem;
    font-weight: 400;
    color: ${({ theme }) => theme.general.themeFontBlack};
    line-height: 1.4em;
    /* margin-left: 0.5rem; */

  }
  .background{
      border: 0px;
      background-image: url("https://tdcstatic.imgix.net/static/offer-strip.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      display:flex;
      margin-bottom: 1rem;
      padding: 2rem 5rem;
      margin-bottom: -1rem;
      margin-top: -1.5rem;
    }
  
  .pdp-list {
    text-align: left;
    
    ul {
      list-style-type: revert;
      list-style-position: inside;
    }
  }

  

  .imageDiv {
    display:flex;
    align-items:center;
    justify-content:center;
  }
  

  @media only screen and (min-width: 410px) {
    .offerImage {
      margin-top: 5px;
    }
    .textDiv {
      font-size: 0.8rem;
    }
  }

  @media only screen and (min-width: 768px) {
    .offerImage {
      align-self: center;
      margin-top: 0;
    }
    .textDiv {
      font-weight: 500;
      /* margin-left: 0.75rem; */
    }
  }
`;

export default StyledOfferBar;
