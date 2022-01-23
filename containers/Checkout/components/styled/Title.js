import React from 'react';
import styled, { css }from 'styled-components';

export default styled.div`
  font-size: 1rem;
  color: ${props => props.color ? props.color : props.theme.general.themeFontBlack};
  font-weight: ${props => props.weight ? props.weight : 500};
  line-height: 1.4em;
  text-transform: capitalize;
  
  @media screen and (min-width: 768px) {
    ${({ pl }) => pl && css`padding-left: 1rem;`}
    ${({ mb }) => mb && css`margin-bottom: 1rem;`}
  }
`;
