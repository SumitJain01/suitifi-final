import validator, { nameRegex, newPhoneRegex } from 'lib/validation';

export default validator.object().shape({
  name: validator.string().matches(nameRegex, "Name can only contain alphabets").required('Name Required'),
  email: validator.string().email().required('Email Required'),
  phone: validator.string()
    .min(10, 'Enter a 10 digit mobile number')
    .max(10, 'Enter a 10 digit mobile number')
    .matches(newPhoneRegex, 'Phone number is not valid')
    .required('Required'),
  order_id: validator.number("Enter a valid Order Id").typeError("Enter a valid Order Id") ,
  cf_issue_type: validator.string().required('Issue Required'),
});
