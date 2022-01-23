import React, { useCallback, useState, useEffect } from 'react';
import { isFunction, noop } from 'ramda-adjunct';
import Input from 'shared/components/Input';
import Flex from 'shared/components/Flex';
import Wrapper from './styled/Wrapper';

export default function PhoneInput({
  field, // { name, value, onChange, onBlur }
  error,
  arrayError,
  label,
  style,
  className = '',
  prefix,
  ignorePrefix,
  setFieldValue = noop,
  setFieldTouched,
}) {
  const [realValue, setRealValue] = useState(field.value || '');
  const onChange = useCallback(
    ({ target: { value } }) => {
      setRealValue(value);
    },
    [prefix, ignorePrefix, realValue]
  );
  useEffect(() => {
    setFieldValue(field.name, realValue);
  }, [realValue]);
  const err = error || arrayError;
  return (
    <Wrapper className={className} style={style}>
      {label && renderLabel(label)}
      <Flex wrap="nowrap">
        {prefix && <Input type="text" disabled value={prefix} style={{ width: '50px' }} />}
        <Input type="text" inputMode="tel" hasError={Boolean(error)} onChange={onChange} onBlur={() => setFieldTouched(field.name, true)} value={realValue} name={field.name} placeholder="Mobile" />
      </Flex>
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
