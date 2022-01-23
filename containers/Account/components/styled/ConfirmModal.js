import styled, { css } from 'styled-components';
import ConfirmModal from 'containers/Account/components/ConfirmModal';

export default styled(ConfirmModal)`
  ${props => props.isMobile ? ( // Mobile
    css`
      .content { 
        .message {
          font-size: 1.18rem;
        }
        .confirm-btn, .cancel-btn {
          width: 5em;
          padding: 0px;
          font-size: 0.975rem;
          line-height: 2rem;
        }
      }
    `
  ) : ( // Desktop
    css`
      .content {
        border-radius: 5px;
        
        .message {
          font-size: 1.125rem;
        }
        .confirm-btn, .cancel-btn {
          font-size: 1.025rem;
          padding: 0.5em 2.25em;
        }
      }
    `
  )}
`;
