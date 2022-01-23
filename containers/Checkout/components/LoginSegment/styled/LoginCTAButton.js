import styled from 'styled-components';
import { MinimalButton } from 'shared/components/Button';

export default styled(MinimalButton)`
  border: ${({ theme }) => theme.general.primaryColor} 1px solid;
  margin: 1rem 12px;
  text-decoration: none;
  color: ${({ theme }) => theme.general.primaryColor};
  font-size: 0.8rem;
  line-height: 0.8rem;
  padding: 14px 20px;
  letter-spacing: 2px;
  text-align: center;
  font-size: 12px;
`;
