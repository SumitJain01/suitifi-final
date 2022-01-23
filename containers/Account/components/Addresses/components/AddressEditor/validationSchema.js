import validator, { phoneRegex } from 'lib/validation';
import memoize from 'memoize-one';
import { path } from 'ramda';
import config from 'config/env';
import request from 'lib/request';
import { setPincode } from 'containers/Checkout/redux/actions';

const phoneSchema = validator
  .number()
  .typeError('Enter valid PIN Code')
  .test('len', 'Enter valid PIN Code', val => val && val.toString().length === 6)
  .required('Required');

export const makeValidatePincode = memoize((postCode, setFieldValue) => memoize(async (value) => {
  if (value && String(value).length === 6) {
    try {
      await phoneSchema.validate(value);
      const data = await request(`https://tdc-nd-api.honasa-staging.net/v1/carts/pincode/${value}`);
      if (data && data.delivery === 1) {
        // eslint-disable-next-line no-underscore-dangle
        window.__NEXT_REDUX_WRAPPER_STORE__.dispatch(setPincode(data));
        setFieldValue('region', data.state);
        setFieldValue('city', data.city);
        return null;
      } else if (data.delivery !== 1) {
        return 'We can\'t service your area';
      }
    } catch (e) {
      if (e.name === 'ValidationError') {
        return 'Add valid PIN Code';
      }
      if ([400, 404].includes(path(['response', 'status'], e))) {
        return 'We can\'t service your area';
      }
      return null;
    }
  }
  else{
    return "Invalid PIN Code";
  }
}));

export default validator.object().shape({
  firstname: validator.string().required('Required'),
  lastname: validator.string().required('Required'),
  telephone: validator
    .string()
    .min(10, 'Enter a 10 digit mobile number')
    .max(10, 'Enter a 10 digit mobile number')
    .matches(phoneRegex, 'Phone number is not valid')
    .required('Required'),
  street: validator.array().of(validator.string().required('Required')),
  postcode: validator
    .number()
    .typeError('Enter valid PIN Code')
    .test('len', 'Enter valid PIN Code', val => val && val.toString().length === 6)
    .required('Required'),
  city: validator.string().required('Required'),
  region: validator.string().required('Required'),
});
