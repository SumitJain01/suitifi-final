import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Heading from '../styled/Heading';

function ContactUs({ className }) {
  return (
    <Wrapper className={className}>
      {/* <Title>For any queries/ concerns, click <br className="force-break" /> "Contact us" below</Title> */}
      <Title>Have Queries or Concerns?</Title>
      <Link prefetch={false} href="/contact-us">
        <Button>contact us</Button>
      </Link>
    </Wrapper>
  );
}

const Title = styled(Heading)`
  color: #000000;
  font-size: 1rem;
  line-height: 1.4em;
  text-transform: revert;

  @media only screen and (min-width: 768px) {
    font-size: 1.2rem;
    line-height: 1.6em;
    color: #3d3d3d;
  }
`;

const Button = styled.button`
  font-family: Roboto, sans-serif;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.general.primaryColor};
  border: 1px solid ${({ theme }) => theme.general.primaryColor};
  border-radius: 5px;
  padding: 0.5rem 1.5rem;

  &:hover {
    color: #ffffff;
    background-color: ${props => props.theme.general.primaryColor};
  }

  @media only screen and (min-width: 1024px) {
    font-size: 1.1rem;
    padding: 0.5rem 3rem;
  }
`;

const Wrapper = styled.div``;

export default styled(ContactUs)`
  padding: 1rem;
  text-align: center;
  display: flex;
  justify-content: space-around;
  grid-row-gap: 1rem;
  place-items: center;
  
  @media only screen and (min-width: 768px) {
    .force-break {
      display: none;
    }
    border-top: 1px solid #EAEAEA;
  }
  
  @media only screen and (min-width: 1024px) {
    flex: 1;
    border-top: 0;
  }
`;
