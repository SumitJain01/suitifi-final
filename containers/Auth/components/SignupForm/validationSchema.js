import validator, {  emailRegex, nameRegex } from 'lib/validation';


export default validator.object().shape({
  firstName: validator
    .string()
    .min(2,'Length of the name should be greater than 2')
    .max(150, 'Length of the name should be less than 150 ')
    .matches(nameRegex, "Name can only contain alphabets without spaces")
    .required('First name Required'),
  lastName: validator
    .string()
    .min(2,'Length of the name should be greater than 2')
    .max(150, 'Length of the name should be less than 150 ')
    .matches(nameRegex, "Name can only contain alphabets without spaces")
    .required('Last name Required'),
  email: validator
    .string()
    .matches(emailRegex, 'Email is not valid')
    .required('Valid Email Id is Required'),
 
});
