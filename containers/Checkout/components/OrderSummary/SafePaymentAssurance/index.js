import React from 'react';
import styled from 'styled-components';

function SafePaymentAssurance({ className }) {
  return (
    <div className={`${className} payment-assurance__container`}>
      <img src="https://mamaearthp.imgix.net/wysiwyg/dlf2x.png?auto=format" alt="" />
      <div className="assurance-label">
        Safe and Secure Payment, Easy Return.
      </div>
    </div>
  );
}

export default styled(SafePaymentAssurance)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;

  & img {
    width: 44px;
    height: 33px;
  }

  .assurance-label {
    padding-left: 1rem;
    font-size: 0.85rem;
  }

  @media only screen and (min-width: 768px) {
    margin-top: 0.5rem;
    .assurance-label {
      padding-left: 1.5rem;
      font-size: 1rem;
    }
  }
`;
