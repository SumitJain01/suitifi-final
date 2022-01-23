import React from 'react';
import Wrapper from './styled/Wrapper'
import styled from 'styled-components';

const Review = styled.div`
  margin-top: 0.3rem;
  margin-right: 0.2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #E30B5D;
  color: #ffffff;
  border-radius: 0.3rem;
  padding: 0.1rem 0.3rem;
  font-size: 0.8rem;
`;

export default function ProductRatings({ avg_rating_percent }) {
  const ratingPoint = avg_rating_percent ?(avg_rating_percent / 20).toFixed(1) : '5.0' ;
  return (
    <Wrapper>
      <Review>
        <div  style={{ margin: '0rem 0.05rem' }}>
          {ratingPoint}
        </div>
        <div style={{ margin: '0rem 0.03rem', fontSize: '0.9rem' }}>
          ★
        </div>
      </Review>
    </Wrapper>
  );
}
