import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

export default styled.button`
  margin: 1.7rem auto 0;
  width: 9em;
  display: block;
  font-family: Roboto, sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 2.75em;
  text-align: center;
  border-radius: 5px;
  background-color: ${props => props.theme.general.primaryColor};
  color: #FFFFFF;
  text-transform: uppercase;

  &:hover, &:active {
    background: ${props => darken(0.15, props.theme.general.primaryColor)};
  }
`;

