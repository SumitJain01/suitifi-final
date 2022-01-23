
import validator from 'lib/validation';
const OTPLoginFormSchema = validator.object().shape({
  otp: validator.string()
    .min(4, 'Invalid OTP')
    .required('Required'),
});

export default OTPLoginFormSchema;
