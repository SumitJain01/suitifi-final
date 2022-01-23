/* eslint-disable import/first */
import React, { useState } from 'react';
import styled from 'styled-components';
import Ratings from 'shared/components/Ratings';
import Button from 'shared/components/Button';
import Flex from 'shared/components/Flex';
import ReviewItem from './components/ReviewItem';
import ReviewForm from './components/ReviewForm';
import {USER_REVIEWS_COUNT} from 'utils/constants/index';
const FlexDiv =styled.div`
border:2px solid rgba(0,0,0,0.12);
background-color:#F8F8F8;
color:#1D1D1D;
display:flex;
justify-content:space-between;
align-items:center;
border-radius:5px;
height:3rem;
padding:0rem 0.5rem;
margin-bottom:0.5rem;
`;

function ReviewList({
  className,
  data: { count, reviews: items = [] },
  productName,
  productId,
  openModal,
  avg_rating_percent,
}) {
  
  const[toggle,setToggle] = useState(false); 
  return (
    <div id="review-list" >
     
      <FlexDiv>
      <h2 >
        Rating and Reviews
      </h2>
      <Flex justify="center" align="flex-end">
        <Ratings avg_rating_percent={avg_rating_percent} />
      </Flex>
      </FlexDiv>
      {
        toggle ? items.slice(0,count).map(item=>(
          <ReviewItem item={item} key={item.review_id} />
        )) : items.slice(0,USER_REVIEWS_COUNT).map(item=>(
          <ReviewItem item={item} key={item.review_id} />
        ))
      }
      <Flex style={{justifyContent:'center'}}>
        <Button
          style={{ marginRight: '1rem',borderRadius:'3px' }}
          onClick={() => openModal({
            content: <ReviewForm initialValues={{ productId, ratingValue: 5 }} />,
          })}
        >
          Add Review
        </Button>
        {items.length > 5 && <Button
        style={{borderRadius:'3px' }}
          onClick={() => setToggle(!toggle)}
        >
        {!toggle ? 'Read More': 'Read Less'}        
        </Button>}
      </Flex>
    </div>
  );
}

export default styled(ReviewList)`
  margin: auto;
  width: 90%;
  max-width: 900px;
  margin-bottom:5px;
  .ratings {
    text-align: center;
  }
`;
