import { useEffect, useRef, useState } from 'react';
import { omit } from 'ramda';
import { createStructuredSelector } from 'reselect';
import { makeSelectLoggedIn } from 'containers/Auth/redux/selectors';
import { connect } from 'react-redux';
import { makeUTMParams, makeSelectTotals } from "containers/Checkout/redux/selectors";
import { makeSelectCreditBalance } from "containers/Account/redux/selectors";
import { makeSelectTotalProductQty } from "containers/Cart/redux/selectors";
import { emailRegex, newPhoneRegex } from 'lib/validation';
import makeCleverTap from 'lib/makeClevertap';

const clevertap = makeCleverTap();
function useDebouncedEffect(callback, delay, deps = []) {
  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    const handler = setTimeout(() => {
      callback();
    }, delay);
    return () => clearTimeout(handler);
  }, [delay, ...deps]);
}


function validateEmail(email) {
  if (email.match(emailRegex)) {
    return true;
  }
  else {
    return false;
  }
}

function validatePhoneNumber(phone) {
  if (phone.match(newPhoneRegex)) {
    return true;
  }
  else {
    return false;
  }
}

function Logic({
  values,
  status,
  isValid,
  setPhone,
  sendValues,
  saveAddress,
  validateForm,
  setValid,
  isLoggedIn,
  initialValues,
  trackingData,
  quantity,
  walletBalance,
  total,
}) {
  // const isTrulyValid = useMemo(() => status && isValid, [status, isValid]);
  // const values = useDebouncedValue(address, 800);
  // const prevValues = usePrevious(values);
  const [customerDetails1Called, setcustomerDetails1Called] = useState(false);
  const [customerDetails2Called, setcustomerDetails2Called] = useState(false);
  if (values.email != "" && values.telephone && values.telephone.length == 10) {
    if (validateEmail(values.email) && validatePhoneNumber(values.telephone)) {
        if (!isLoggedIn && customerDetails1Called == false) {
          clevertap.event.push("customerDetails1 ", {
              platform: "mewebsite",
              ...trackingData,
              email: values.email,
              phone: `+91${values.telephone}`,
              cartAmount: total.subtotal_incl_tax,
              quantity,
              walletBalance: walletBalance ? walletBalance : 0,
              clickSource:window.location.pathname.split("/").slice(-1)[0],
              clickTarget:window.location.pathname.split("/").slice(-1)[0],
          });
          setcustomerDetails1Called(true);
        }
      }
  }

  if (values.postcode && values.postcode.length > 0 && values.region && values.street && values.city) {
    if (!isLoggedIn && customerDetails2Called == false) {
        clevertap.event.push("customerDetails2", {
            platform: "mewebsite",
            ...trackingData,
            email: values.email,
            phone: `+91${values.telephone}`,
            cartAmount: total.subtotal_incl_tax,
            quantity,
            walletBalance: walletBalance ? walletBalance : 0,
            clickSource:window.location.pathname.split("/").slice(-1)[0],
            clickTarget:window.location.pathname.split("/").slice(-1)[0],
            state: values.region,
            orderAddressPin: Number(values.postcode),
            orderAddressCity: values.city,
        });
        setcustomerDetails2Called(true);
      }
  }
  useEffect(() => {
    const isTrulyValid = status && isValid;
    setValid(false);
    window.appliedAddress = false;
    // on initial load, check if the form is valid and mark typing state as done
    validateForm(initialValues).then((errObj) => {
      if (!Object.keys(errObj) || isTrulyValid) {
        setPhone(values.telephone);
        sendValues(Object.assign(
          omit(['default_shipping', 'default_billing'], values),
          { save_in_address_book: saveAddress ? 1 : 0 }
        ));
        window.appliedAddress = values;
        setValid(true);
      }
    });
    return () => { window.appliedAddress = false; };
  }, []);

  useDebouncedEffect(() => {
    setValid(false);
    const isTrulyValid = status && isValid;
    if (isTrulyValid) {
      validateForm().then((errObj) => {
        if (!Object.keys(errObj).length) {
          setPhone(values.telephone);
          sendValues(Object.assign(
            omit(['default_shipping', 'default_billing'], values),
            { save_in_address_book: saveAddress ? 1 : 0 }
          ));
          window.appliedAddress = values;
          setValid(true);
        }
      });
    }
  }, 2000, [status, isValid, saveAddress, JSON.stringify(values)]);
  return null;
}

const mapStateToProps = createStructuredSelector({
  isLoggedIn: makeSelectLoggedIn(),
  trackingData: makeUTMParams(),
  total: makeSelectTotals(),
  quantity: makeSelectTotalProductQty(),
  walletBalance: makeSelectCreditBalance(),
});

export default (connect(mapStateToProps)(Logic));
