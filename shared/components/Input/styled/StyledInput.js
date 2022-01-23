import styled from 'styled-components';

const StyledInput = styled.input`
  background-color: #fff;
  border: 1px solid ${({ theme, hasError }) => hasError ? theme.colors.red : theme.colors.gray};
  width: 100%;
  padding: 10px;
  font-size: 0.9rem;

  appearance: none;
  border-radius: 0;
  outline: none;

  &:focus {
    border: 1px solid ${({ theme, hasError }) => hasError ? theme.colors.red : theme.colors.gray};
  }
`;

export default StyledInput;
