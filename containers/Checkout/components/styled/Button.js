import React from 'react';
import styled from 'styled-components';
import Button from 'shared/components/Button';
import { darken } from 'polished';

export default styled(Button)`
  font-family: Roboto, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.2em;
  background-color: ${props => props.theme.general.primaryColor};
  border-radius: 5px;

  &:hover, &:active {
    color: #fff;
    background: ${props => darken(0.15, props.theme.general.primaryColor)};
  }
`;
