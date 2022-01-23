import styled from 'styled-components';

export default styled.div`
  display: block;
  cursor: pointer;
  padding: 20px;
  -webkit-box-shadow: 0 0 4px rgba(0,0,0,.18);
  box-shadow: 0 0 4px rgba(0,0,0,.18);
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  color: #3f3f3f;
  margin: 1rem 0.5rem;
  min-width: 180px;

  i {
    color: ${({ theme }) => theme.scheme.highlight}
  }

  span { 
    display: block;
    margin-top: 12px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.darkGray};
   }
`;
