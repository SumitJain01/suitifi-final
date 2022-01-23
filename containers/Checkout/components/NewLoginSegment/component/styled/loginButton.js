import styled from 'styled-components';
import { MinimalButton } from 'shared/components/Button';

export default styled(MinimalButton)`
  border: ${({ theme }) => theme.general.primaryColor} 1px solid;
  background-color: ${({ theme }) => theme.general.primaryColor};
  /* margin: 1rem 12px; */
  text-decoration: none;
  color: #ffffff;
  font-size: 1rem;
  /* line-height: 0.8rem; */
  padding: 5px 10px;
  text-transform: uppercase;
  border-radius: 5px;
`;
