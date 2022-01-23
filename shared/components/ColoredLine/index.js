import styled, { css } from 'styled-components';

export default styled.div.attrs({
  className: 'colored-line',
})`
  --height: ${props => (props.height ? `${props.height}px` : '5px')};
  --color: ${props => props.color || '#F2F2F2'};

  width: 100%;
  border-bottom: var(--height) solid var(--color);

  @media only screen and (min-width: 768px) {
    ${props =>
      props.hideDesktop &&
      css`
        display: none;
      `}
  }
`;
