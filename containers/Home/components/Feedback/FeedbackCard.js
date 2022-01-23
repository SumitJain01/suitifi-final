import React from 'react';
import Ratings from './Ratings';
import Wrapper from './styled/Wrapper';


export default function FeedbackCard({
  name,
  imgSrc,
  ratingCount,
  description,
}) {
  return (
    <Wrapper key={name}>
      <figure>
        <img src={imgSrc} alt={name} title={name} />
      </figure>
      <Ratings
        rating={ratingCount * 0.05}
        size="20px"
        space="5px"
        color="#eabe12"
      />
      <p>{description}</p>
      <div className="customerName">{name}</div>
    </Wrapper>
  );
}

