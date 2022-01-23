import styled, { keyframes } from 'styled-components';
import Button from './Button';
import MamacashHistoryItem from 'containers/Account/components/Wallet/MamacashHistoryItem';

const fadeOut = keyframes`
  from {
    background-color: #f8f8f8;
  }

  to {
    background-color: transparent;
  }
`;

export default styled.div`
  margin-top: 1.25rem;
  
  .current-page ${MamacashHistoryItem} {
    animation: ${fadeOut} 3s linear;
  }

  .section-header {
    margin: 0px;
    font-size: 1.2rem;
    line-height: 1.556em;
    color: ${props => props.theme.general.themeFontBlack};
  }
  
  ${Button} {
    margin-top: 1.5rem;
    width: 10em;
    font-size: 1rem;
    border: 1px solid ${props => props.theme.general.primaryColor};
    background-color: #FFFFFF;
    color: ${props => props.theme.general.primaryColor};
    
    &:hover {
      background: ${props => props.theme.general.primaryColor};
      color: #FFFFFF;
    }
  }
`;