
import validator, { phoneRegex } from 'lib/validation';
const OTPLoginFormSchema = validator.object().shape({
  contact: validator.string()
    .min(10, 'Add a 10 digit mobile number')
    .max(10, 'Add a 10 digit mobile number')
    .matches(phoneRegex, 'Phone number is not valid')
    .required('Required'),
});

export default OTPLoginFormSchema;
