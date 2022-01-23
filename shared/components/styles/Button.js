import { css } from 'styled-components';

export const buttonStyles = css`
  background-color: ${({ theme, bg }) => bg || theme.buttons.bg};
  display: block;
  color: ${({ theme, color }) => color || theme.buttons.color || '#fff'};
  border-radius: ${({ theme }) => theme.buttons.radius || 0};
  letter-spacing: 2px;
  text-align: center;
  padding: 0.5rem 0.75rem;
  font-size: 0.8rem;
  border: none;
  font-weight: 600;
  text-transform: uppercase;
  ${({ center }) => center ? 'margin: 0 auto' : ''};
  ${({ fullWidth }) => fullWidth ? 'width: 100%' : ''};
`;
