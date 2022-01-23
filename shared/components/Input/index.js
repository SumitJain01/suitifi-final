import React from 'react';
import PropTypes from 'prop-types';
import { styleProptype } from 'utils/PropTypes';
import { noop } from 'ramda-adjunct';
import StyledInput from './styled/StyledInput';


export default function Input(props) {
  return (
    
    <StyledInput
      {...props}
    />
  
  );
}

Input.propTypes = {
  name: PropTypes.string,
  style: styleProptype,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  value: PropTypes.string,
  hasError: PropTypes.bool,
};

Input.defaultProps = {
  name: '',
  placeholder: '',
  type: 'text',
  handleChange: noop,
  handleBlur: noop,
  hasError: false,
  value: '',
};
