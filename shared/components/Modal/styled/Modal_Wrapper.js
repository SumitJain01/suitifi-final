import styled from 'styled-components';
import { cover } from 'polished';

export default styled.div`
  ${cover()}
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    position: relative;
    background:#fff;
    overflow-y:auto;

    button.close {
      position: absolute;
      right: 1rem;
      font-size: 2rem;
      top: 0;
      color: ${({ theme }) => theme.colors.red};
    }
  }
`;
