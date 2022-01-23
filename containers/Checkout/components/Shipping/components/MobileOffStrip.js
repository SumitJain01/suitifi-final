import React from 'react';
import styled from 'styled-components';

function MobileOffStrip({
  className,
}) {
  return (
    <div className={className}>
      <span>Applied</span> : Extra 10% Off with Your Order
    </div>
  )
}

export default styled(MobileOffStrip)`
  padding: 0.25rem 0px;
  width: 100%;
  font-family: Roboto, sans-serif;
  font-size: 0.85rem;
  font-weight: 400;
  line-height: 1.6;
  text-align: center;
  color: #FFFFFF;
  background-color: #69C485;

  span {
    font-weight: 700;
  }
`;
