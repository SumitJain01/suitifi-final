import React, { useRef } from 'react';
import { compose } from 'ramda';
import { Field } from 'formik';

import InputWithErrors from './InputWithErrors';
import withError from './withErrorHOC';
import PhoneInput from './PhoneInput';
import styled from 'styled-components';

const componentMap = {
  tel: PhoneInput,
};
const NewForm=styled(Field)`
// .StyledInput-sc-1m95fu4-0{
//   border:none !important;
//   border-bottom:1px solid #DBDBDB !important;
//   padding:0rem 0rem 0.6rem 0rem;
// }
`;

export default function FormikField(props) {
  const decoratedInputRef = compose(useRef, withError)(componentMap[props.type] || InputWithErrors);
  return <NewForm {...props} component={props.component || (props.type === 'textarea' ? 'textarea' : decoratedInputRef.current)} />;
}
