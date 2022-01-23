import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { pick } from 'ramda';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { Formik } from 'formik';
import LoginCTAButton from '../styled/LoginCTAButton';
import FormikField from 'shared/components/Formik/Input';
import { makeSelectOTPState } from 'containers/Auth/redux/selectors';
import * as authActionCreators from 'containers/Auth/redux/actions';
import OTPLoginSchema from 'containers/Checkout/components/NewLoginSegment/LoginForm/OTPLoginForm/validationSchema.js';
import OTPVerifySchema from 'containers/Checkout/components/NewLoginSegment/LoginForm/OTPVerifyForm/validationSchema.js';
import Title from 'containers/Checkout/components/styled/Title';
import RetryTimer from './RetryTimer';
import Gap from 'shared/components/Gap';

function LoginForm({
  open,
  generateOTPRequest,
  verifyOTPRequest,
  otpState,
  generateOTPIdle,
  loginStep,
  setLoginStep,
  className,
}) {
  useEffect(() => () => { generateOTPIdle(); }, []);

  useEffect(() => {

    function fetchOtpState() {
      setLoginStep(preStep => 1);
    }

    if (otpState.sessionId) {
      fetchOtpState();
    }
  }, [otpState.sessionId])

  if (!open) {
    return null;
  }

  return (
    <Fragment>
      <Title>Enter login details</Title>
      <Gap h="1rem" />
      <Formik
        validationSchema={loginStep === 0 ? OTPLoginSchema : OTPVerifySchema}
        initialValues={{ contact: '', otp: '' }}
        onSubmit={(values, { setSubmitting }) => {
          if (loginStep === 0) {
            generateOTPRequest(values);
          } else {
            verifyOTPRequest(values);
          }
          setSubmitting(false);
        }}>
        {({
          touched,
          handleSubmit,
          isSubmitting,
          isValid,
        }) => (
            <form onSubmit={handleSubmit}>
              <FormikField
                autoComplete="off" type="text" label="Phone Number"
                placeholder="Phone Number" name="contact" disabled={loginStep === 1}
                newDesignFlag={true} />

              {loginStep === 1 && <FormikField
                autoComplete="off" type="text" label="One Time Password"
                placeholder="One Time Password" name="otp"
                newDesignFlag={true} />}


              {loginStep === 1 && <RetryTimer generateOTPRequest={generateOTPRequest} />}

              <LoginCTAButton type="submit" fullWidth colored type="submit" disabled={!isValid || !touched || isSubmitting}>
                {(loginStep === 0) ? "LOG IN" : "VERIFY OTP"}
              </LoginCTAButton>
            </form>
          )}
      </Formik>
    </Fragment>
  );
}

const actionCreatorsToMap = pick([
  'generateOTPRequest',
  'verifyOTPRequest',
  'generateOTPIdle',
  'loginRequest',
], authActionCreators);

const mapStateToProps = createStructuredSelector({
  otpState: makeSelectOTPState(),
});

const mapActionsToProps = dispatch => bindActionCreators(actionCreatorsToMap, dispatch);

LoginForm.propTypes = {
  open: PropTypes.bool,
};

LoginForm.defaultProps = {
  open: false,
}

export default connect(mapStateToProps, mapActionsToProps)(LoginForm);
