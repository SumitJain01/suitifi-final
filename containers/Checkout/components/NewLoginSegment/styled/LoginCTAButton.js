import styled, { css }from 'styled-components';
import { MinimalButton } from 'shared/components/Button';
import { darken } from 'polished';

export default styled(MinimalButton)`
  font-family: inherit;
  margin: 1rem 0px;
  padding: 0.8em 3.5em;
  border: ${({ theme }) => theme.general.primaryColor} 1px solid;
  border-radius: 5px;
  color: ${({ theme }) => theme.general.primaryColor};
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.2em;
  text-transform: uppercase;
  text-decoration: none;
  background-color: #FFFFFF;
  ${({ fullWidth }) => fullWidth && css`width: 100%;` }
  ${({ minimal }) => minimal && css`border: 0px;` }
  ${({ colored }) => colored && css`
    background-color: ${({ theme }) => theme.general.primaryColor};
    color: #FFFFFF;
  `}

  &:not(:disabled):hover {
    border-color: ${({ colored, theme }) => colored ? theme.general.primaryColor : 'transparent'};
    background-color: ${({ colored, theme }) => colored ? darken(0.15, theme.general.primaryColor) : theme.general.primaryColor};
    color: #FFFFFF;
  }
  &:disabled {
    border-color: transparent;
  }
`;
