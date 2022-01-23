import styled from 'styled-components';

export default styled.div`
  display: block;
  margin-bottom: 12px;

  .error {
    font-size: 12px;
    padding: 0 6px;
    color: ${({ theme }) => theme.colors.red};
  }

  span {
    font-size: 0.8rem;
    line-height: 0.8rem;
    color: ${({ theme }) => theme.colors.darkGray};
    margin-bottom: 0.5rem;
    font-weight: 300;
    display: block;
  }
`;
