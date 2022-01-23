import React from 'react';
import { isFunction } from 'ramda-adjunct';
import Input from 'shared/components/Input';
import Wrapper from './styled/Wrapper';

export default function InputWithErrors({
  field, // { name, value, onChange, onBlur }
  error,
  arrayError,
  form,
  label,
  style,
  className = '',
  ...props
}) {
  const err = error || arrayError;
  return (
    <Wrapper className={className} style={style}>
      {label && renderLabel(label)}
      <Input type="text" {...field} {...props} hasError={Boolean(error)} />
      {err && <div className="error">{err}</div>}
    </Wrapper>
  );
}

function renderLabel(label) {
  if (isFunction(label)) {
    return React.createElement(label);
  }
  return <span>{label}</span>;
}
