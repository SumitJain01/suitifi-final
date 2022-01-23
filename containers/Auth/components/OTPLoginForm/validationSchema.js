// import * as yup from 'validation';
import validator, { newPhoneRegex } from '../../../../lib/validation';

const OTPLoginFormSchema = validator.object().shape({
  contact: validator.string()
    .min(10, 'Add a 10 digit mobile number')
    .max(10, 'Add a 10 digit mobile number')
    .matches(newPhoneRegex, 'Phone number is not valid')
    .required('Required'),
});

export default OTPLoginFormSchema;
