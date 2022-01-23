import React from 'react';
import Wrapper from './styled/Wrapper';

export default function RadioButton({
  name,
  value,
  isSelected,
  changeHandler,
  children,
}) {
  return (
    <Wrapper>
      <label htmlFor={name}>
        <input
          id={name}
          type="radio"
          name={name}
          value={value}
          checked={isSelected}
          onChange={changeHandler}
        />
        <span>{children}</span>
      </label>
    </Wrapper>
  );
}
