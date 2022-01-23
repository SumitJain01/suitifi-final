import React from 'react';
import styled from 'styled-components';

export default MCMessage;

function MCMessage() {
  return (
    <Wrapper>
      Your order amount will be refunded in next 8-10 working business days.
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 1rem;
  font-size: 0.95rem;
  line-height: 1.4rem;
  color: ${props => props.theme.general.primaryColor};
  
  @media (min-width: 1024px) {
    margin: 1rem 0 0;
  }
`;
