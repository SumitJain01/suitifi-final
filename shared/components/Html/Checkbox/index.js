import React from 'react';
import styled from 'styled-components';
import { hideVisually } from 'polished';

export default function Checkbox({
  className, checked, label, style, onChange,
}) {
  return (
    <CheckboxContainer className={className} style={style}>
      <HiddenCheckbox checked={checked} onChange={onChange} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
      <span>{label}</span>
    </CheckboxContainer>
  );
}

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  ${hideVisually()};
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
  vertical-align: unset;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;
  background: ${props => props.checked ? props.theme.scheme.accent : 'white'};
  border-radius: 3px;
  transition: all 150ms;
  border: 1px solid #989898 !important;
  margin-right: 10px;

  ${HiddenCheckbox}:focus + & {
    // box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'}
  }
`;

const CheckboxContainer = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  span {
    font-size: 14px;
  }
`;
