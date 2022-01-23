import styled from 'styled-components';
import { MinimalButton } from 'shared/components/Button';

export default styled(MinimalButton)`
  font-family: inherit;
  text-decoration: none;
  color: ${props => props.theme.general.primaryColor};
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.2em;
  text-transform: uppercase;
  padding: 0;
  &:hover, &:active {
    color: ${props => props.theme.general.primaryColor};
    background: transparent;
  }
`;
