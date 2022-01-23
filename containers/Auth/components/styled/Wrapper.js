import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ isPage }) => isPage ? '2rem 2.5rem' : 0};
  height: 100%;
  margin: auto;
  max-width: 60vw;
  @media(max-width: 768px) {
    max-width: 100vw;
  }
`;
