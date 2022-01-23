import styled from 'styled-components';

export default styled.span`
  font-size: 1.1rem;
  font-weight: 500;
  margin-left: 1rem;

  .items-count {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    .items-count {
      display: initial;
    }
  }
`;
