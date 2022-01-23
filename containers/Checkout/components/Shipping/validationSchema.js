import validator, { emailRegex, nameRegex, noSpaceRegex, addressRegex, cityRegex, regionRegex, newPhoneRegex } from 'lib/validation';
import memoize from 'memoize-one';
import config from 'config/env';
import { path } from 'ramda';
import request from 'lib/request';
import { setPincode, setCODAvailability } from 'containers/Checkout/redux/actions';
import dataLayer from 'lib/gtmDataLayer'
import { ADDRESS_LINE_LIMIT, NAME_LENGTH_LIMIT } from 'utils/constants';

function pincodeDataLayerFn(value, message, cod) {
  dataLayer.push({
    event : "pincode",
    pin : value,
    pinMessage : message,
    CODavailaibility  : cod,
  })
}

const phoneSchema = validator
  .number()
  .typeError('Pincode must be valid')
  .test('len', 'Enter valid PIN Code', val => val && val.toString().length === 6)
  .required('Required');

  export const makeValidatePincode = memoize(async (postCode, setStatus, setInitialVal, setFieldValue) => {
    if (document.body.contains(document.querySelector(".pincodeError"))) {
      document.querySelector(".pincodeError").remove();
    }
    
    const pincodeInput = document.querySelector('input[name="postcode"]');
    const errorDiv = document.createElement("div");
    errorDiv.className = "error pincodeError";
    errorDiv.innerText = "We can't service your area";
    
    if (postCode && String(postCode).length === 6) {
      try {
        await phoneSchema.validate(postCode);
        const data = await request(`https://tdc-nd-api.honasa-staging.net/v1/carts/pincode/${postCode}`);
        if (data && data.delivery === 1) {
          if (document.body.contains(document.querySelector(".pincodeError"))) {
            document.querySelector(".pincodeError").remove();
          }

          const isCODAvailable = data.cod === 1;
          process.browser && window.__NEXT_REDUX_WRAPPER_STORE__.dispatch(setCODAvailability(isCODAvailable));
          
          setStatus(true);
          setFieldValue('region', data.state);
          setFieldValue('city', data.city);
          
          // eslint-disable-next-line no-underscore-dangle
          process.browser && window.__NEXT_REDUX_WRAPPER_STORE__.dispatch(setPincode(data));
          pincodeDataLayerFn(data.postcode, "pincode is servicable", data.cod)
          // localStorage.setItem('city', JSON.stringify(data.city))
          return null;
        } else if (data.delivery !== 1) {
          if (!document.body.contains(document.querySelector(".pincodeError"))) {
            pincodeInput.after(errorDiv);
          }
          pincodeDataLayerFn(data.postcode, "pincode is not servicable", data.cod)
          localStorage.setItem('pincode', JSON.stringify(1))
          return 'We can\'t service your area';
        }
      } catch (e) {
        setStatus(false);
        if (e.name === 'ValidationError') {
          return 'Add valid PIN Code';
        }
        if ([400, 404].includes(path(['response', 'status'], e))) {
          if (!document.body.contains(document.querySelector(".pincodeError"))) {
            pincodeInput.after(errorDiv);
          }
          pincodeDataLayerFn(postCode, "pincode is not servicable", 0)
          localStorage.setItem('pincode', JSON.stringify(1))
          return 'We can\'t service your area';
        }
        return null;
      }
    }
    else{
      if(!postCode){
        return false;
      }
      return "Invalid PIN Code";
    }
  });  

  export const makeValidateTelephone = memoize((mobile, setStatus, setFieldValue) => {
    if (mobile) {
      let filteredMobile = mobile.slice(-10);
      setStatus(true);
      setFieldValue('telephone', filteredMobile, false);
      if (document.body.contains(document.querySelector('input[name="telephone"]'))) {
        document.querySelector('input[name="telephone"]').value = filteredMobile;
      }
    } else {
      return false;
    }
  })
  
export function validatePhoneNumber(phone,email) {
  if (phone.match(newPhoneRegex) && phone.length == 10 && email.match(emailRegex)) {
    return true;
  }
  else {
    return false;
  }
}

export default validator.object().shape({
  firstname: validator
    .string()
    .max(NAME_LENGTH_LIMIT, `Please enter no more than ${NAME_LENGTH_LIMIT} characters`)
    .matches(nameRegex, "Name can only contain alphabets without spaces")
    .required('First name Required'),
  lastname: validator
    .string()
    .max(NAME_LENGTH_LIMIT, `Please enter no more than ${NAME_LENGTH_LIMIT} characters`)
    .matches(nameRegex, "Name can only contain alphabets without spaces")
    .required('Last name Required'),
  telephone: validator
    .string()
    .min(10, 'Enter a 10 digit mobile number')
    .max(10, 'Enter a 10 digit mobile number')
    .matches(newPhoneRegex, 'Phone number is not valid')
    .required('Required'),
  email: validator
    .string()
    .matches(emailRegex, 'Email is not valid')
    .required('Required'),
  postcode: validator
    .number()
    .typeError('Pincode must be valid')
    .test('len', 'Enter 6 digit PIN Code', val => val && val.toString().length === 6)
    .required('Required'),
  city: validator.string()
    .test('test-nonEnglish','City/District can only contain alphabets',function() {
      return cityRegex.test(this.parent.city) != false ; 
    })
    .required('Required'),
  region: validator.string()
    .test('test-nonEnglish','State can only contain alphabets',function() {
      return regionRegex.test(this.parent.region) != false ; 
    })
    .required('Required'),
  street:validator.array(), // every validation is in orderwise this should be like this.   
    'street[0]':validator.string()
      .test('test-Required',function() { 
        return this.parent.street[0] && this.parent.street[0].length || (this.path !=='street[0]' || this.createError({ path:`${this.path}`,message:'Required' }));   
      })
      .test('test-nonEnglish','Required',function() {
        return noSpaceRegex.test(this.parent.street[0]) != false ; 
      })
      .test('test-nonEnglish','Please Enter your address in English',function() {
        return addressRegex.test(this.parent.street[0]) != false ; 
      })
      .test('test-minimum','Enter correct address with at least 5 characters',function() {
        return this.parent.street[0] && this.parent.street[0] !== 'undefined' && this.parent.street[0].length >= 5 ;
      })
      .test('test-maximum',`Please enter no more than ${ADDRESS_LINE_LIMIT} characters`,function() {
        return this.parent && this.parent.street[0] && this.parent.street[0].length <= ADDRESS_LINE_LIMIT ;
      }),
});
