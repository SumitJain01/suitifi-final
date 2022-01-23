import styled from 'styled-components';

export default styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 12px 6px;
  overflow: hidden;

  @media screen and (min-width: 768px){
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 24px 18px;
  }
`;
