import styled from 'styled-components';

export default styled.div`
  margin: 1rem 2rem 1.5rem;
  position: relative;
  display: flex;
  align-items: center;

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 90%;
    margin-left: 5%;
    height: 1px;
    background: #eee;
    bottom: -0.75rem;
  }
`;

