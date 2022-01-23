import React, { Fragment } from 'react';
import styled from 'styled-components';
import Flex from 'shared/components/Flex';
import CenteredColumn from '../styled/CenteredColumn';
import Heading from '../styled/Heading';
import { NounTrustedIcon, SecurePaymentIcon } from 'shared/components/SVGIcons';

function PaymentOptions({
  className,
  isPhonePe
}) {
  return (
    <PaymentOptionsWrapper className={className}>
      <Heading className="for-desktop">payment</Heading>
      <Flex className="assurance-message for-desktop">
        <NounTrustedIcon fill="#279989"/>
        <span className="assurance-text">100% Payment Protection, Easy Return Policy</span>
      </Flex>

      {!isPhonePe && <Fragment>
        <div className="for-mobile">Pay Using</div>
        <OptionsImgsWrapper>
          <img width="60px" height="28px" src="https://mamaearthp.imgix.net/wysiwyg/visa2x.png?auto=format" alt="" loading="lazy" />
          <img width="60px" height="28px" src="https://mamaearthp.imgix.net/wysiwyg/master_card2x.png?auto=format" alt="" loading="lazy" />
          <img width="60px" height="28px" src="https://mamaearthp.imgix.net/wysiwyg/american_express2x.png?auto=format" alt="" loading="lazy" />
          <img width="60px" height="28px" src="https://mamaearthp.imgix.net/wysiwyg/rupay2x.png?auto=format" alt="" loading="lazy" />
          <img width="60px" height="28px" src="https://mamaearthp.imgix.net/wysiwyg/net_banking2x.png?auto=format" alt="" loading="lazy" />

        </OptionsImgsWrapper>
      </Fragment>}

      <SecurePay className="for-mobile">
        <i><SecurePaymentIcon/></i>
        <span>100% Secure Payment</span>
      </SecurePay>
    </PaymentOptionsWrapper>
  );
}

const PaymentOptionsWrapper = styled(CenteredColumn).attrs({
  className: 'payment-options',
})`
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0 1rem;
  text-align: center;
  font-size: 0.9rem;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    align-items: center;
    margin-bottom: 0;
    padding: 0;
  }
  @media only screen and (min-width: 1200px) {
    align-items: flex-start;
    margin-top: 0;
    padding: 1rem;
    padding-left: 0;
    /* border-right: 1px solid ${props => props.theme.colors.smoke}; */
    flex: 1;
  }
`;

const OptionsImgsWrapper = styled.div.attrs({
  className: 'options-imgs',
})`
  margin-top: 0.5rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 0.5rem;

  @media only screen and (min-width: 480px) {
    grid-column-gap: 1rem;
    img {
      max-width: 75px;
    }
  }

  @media only screen and (min-width: 768px) {
    margin-top: 0.75rem;

    img {
      margin-top: 0px;
    }
  }

  @media only screen and (min-width: 1200px) {
    img {
      max-width: 60px;
    }
  }
`;

const SecurePay = styled(CenteredColumn).attrs({
  className: 'secure-pay',
})`
  margin-top: 1.5rem;
  
  span {
    margin: 0;
  }

  i {
    margin-top: 0.5rem;
    width: 3rem;
  }
`;

export default styled(PaymentOptions)`

  .for-mobile {
    font-size: 1rem;
    font-weight: 500;
  }

  @media only screen and (min-width: 768px) {
    .assurance-message {
      color: #000000;
      font-size: 0.95rem;
      font-weight: 400;
      line-height: 1.4em;
      margin-top: 0.5rem;

      .assurance-text{
        margin-left: 0.5rem;
      }

      img {
        width: 1.25rem;
        height: 1.4rem;
        margin-right: 0.5rem;
      }
    }
  }
`;
