import styled from 'styled-components';

export default styled.div`
  font-size: 0.9rem;
  color: #1d1d1d;
  font-weight: 700;
  text-transform: capitalize;
  padding: 0.5rem 1rem;
  background-color: #f8f8f8;
  border: 1px solid #f8f8f8;
  border-radius: 5px 5px 0px 0px;
  @media (max-width: 768px) {
    background-color: #ffffff;
    border: 1px solid transparent;
    border-top: 5px solid #f2f9e8;
    padding: 0.5rem calc(1rem + 5px);
    margin: 0px -1rem;
    font-size: 1.1rem;
    font-weight: 500;
  }
`;