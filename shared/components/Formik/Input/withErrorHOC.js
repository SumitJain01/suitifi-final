import React from 'react';
import { path } from 'ramda';

const withError = Component => (props) => {
  const {
    field: { name }, form: {
      touched, errors, setFieldValue, initialValues, setFieldTouched,
    },
  } = props;
  return (
    <Component
      setFieldValue={setFieldValue}
      setFieldTouched={setFieldTouched}
      error={
        Boolean(path([name, 'length'], initialValues) || touched[name])
        && errors[name]
      }
      {...props}
    />);
};

export default withError;
