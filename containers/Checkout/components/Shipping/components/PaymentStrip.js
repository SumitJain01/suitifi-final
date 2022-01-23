import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-styled-flexboxgrid';
import Icon from 'react-icons-kit';
import Image from 'shared/components/Image';
import { checkSquare } from 'shared/components/Icons';
import Link from 'next/link';


function PaymentStrip({ className }) {
  return (
    <Row className={className} top="md" center="md">
      <Col md={12}>
        <Row className="assurance-message">
          <Image
            src="https://mamaearthp.imgix.net/wysiwyg/noun_trusted_27146262x_6Ekja92.png?auto=format"
            className="protection-img"
          />
          <p className="protection-label">100% Payment Protection, Easy Return Policy</p>
          {/* <Image src="/static/mamaearth/group_786.svg" className="securityImage" /> */}
          {/* <p className="paymentStripText1">&nbsp;&nbsp;100% Payment Protection, Easy Returns Policy</p> */}
        </Row>

        <AcceptedCards className="accepted-cards">
          <Image className="payment-card-img" src="https://mamaearthp.imgix.net/wysiwyg/visa2x.png?auto=format" alt="" />
          <Image className="payment-card-img" src="https://mamaearthp.imgix.net/wysiwyg/master_card2x.png?auto=format" alt="" />
          <Image
            className="payment-card-img"
            src="https://mamaearthp.imgix.net/wysiwyg/american_express2x.png?auto=format"
            alt=""
          />
          <Image className="payment-card-img" src="https://mamaearthp.imgix.net/wysiwyg/rupay2x.png?auto=format" alt="" />
          <Image className="payment-card-img" src="https://mamaearthp.imgix.net/wysiwyg/net_banking2x.png?auto=format" alt="" />
        </AcceptedCards>

        <p className="user-agreement-label">
          <Icon className="checked-icon" icon={checkSquare} />
          By placing this order, you agree to The Derma Co's&nbsp;
          <Link prefetch={false} href="/terms-and-conditions" passHref>
            <a style={{ color: 'inherit', textDecoration: 'underline' }}>Terms and Conditions</a>
          </Link>
          &nbsp;and&nbsp;
          <Link prefetch={false} href="/privacy-policy" passHref>
            <a style={{ color: 'inherit', textDecoration: 'underline' }}>Privacy Policy</a>
          </Link>
          .
        </p>
        {/* <p className="paymentStripText2">By placing the order, I have read and agreed to Mamaearth's Terms of Use | Terms of Sale</p> */}
      </Col>
    </Row>
  );
}

const AcceptedCards = styled.div`
  margin: 0.75rem 0 0.875rem;
  display: grid;
  grid-column-gap: 0.375rem;
  grid-template-columns: repeat(5, minmax(3rem, 3.75rem));
  justify-content: center;
`;

export default styled(PaymentStrip)`
  margin: 0.5rem 0 0;
  padding: 0.25rem;
  font-family: Roboto, sans-serif;
  text-align: center;
  justify-content: center;

  .assurance-message {
    justify-content: center;
    align-items: center;
  }

  .protection-img {
    width: 1.175rem;
  }

  .protection-label {
    margin: 0;
    padding-left: 0.5rem;
    color: #65a006;
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 1em;
  }

  .user-agreement-label {
    margin: 0;
    color: ${({ theme }) => theme.colors.mediumGray};
    font-size: 0.6rem;
    font-weight: 400;
    line-height: 1em;
    white-space: nowrap;
    
    i.checked-icon {
      color: ${({ theme }) => theme.general.primaryColor};
      margin-right: 0.375rem;
      
      svg {
        width: 22px;
        height: 22px;
      }
    }
  }
  
  @media only screen and (min-width: 1200px) {
    .protection-label {
      padding-left: 0.75rem;
    }
    
    .user-agreement-label {
      i.checked-icon {
        svg {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
`;
