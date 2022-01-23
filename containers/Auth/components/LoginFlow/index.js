import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { pick } from 'ramda';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { makeSelectOTPState ,makeSelectLoading, makeSelectSignUp} from 'containers/Auth/redux/selectors';
import * as authActionCreators from 'containers/Auth/redux/actions';
import OTPLoginForm from '../OTPLoginForm';
import OTPVerifyForm from '../OTPVerifyForm';
import styled from 'styled-components';
import SignupForm from '../SignupForm';

const FragmentDiv = styled.div`
.Input__NewForm-sc-1ha6pls-0{
  span{
    font-weight:400;
    margin-bottom:0.3rem;
  }
}
`;

function LoginFlow({
  generateOTPRequest,
  verifyOTPRequest,
  otpState,
  generateOTPIdle,
  signUp,
  signupRequest,
  backArrow,
  signUpArrow,
}) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showChangeNumber, setShowChangeNumber] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(()=> {
    generateOTPIdle();
    setIsMobile(window.innerWidth < 768);
  }, []);

  const verifyMode = otpState.contact && otpState.sessionId;

  return (
    <FragmentDiv>
      {
        signUp 
        ? 
        <SignupForm
        setShowChangeNumber={setShowChangeNumber} 
        backArrow={backArrow} 
        isMobile={isMobile} 
        key="signup"
        submitForm={signupRequest} 
        phoneNumber={phoneNumber}/> 
        :
          (
            verifyMode 
            ?
            <OTPVerifyForm
              showChangeNumber={showChangeNumber} 
              isMobile={isMobile} 
              key="verify" 
              submitForm={verifyOTPRequest} 
              backArrow={backArrow} 
              signUpArrow={signUpArrow}
              props={{otpState,generateOTPIdle,generateOTPRequest,signupRequest}} 
            />
            : 
            <OTPLoginForm 
              setShowChangeNumber={setShowChangeNumber} 
              isMobile={isMobile} 
              key="login" 
              setPhoneNumber={setPhoneNumber} 
              submitForm={generateOTPRequest} 
              loading
            />
          )
      }
    </FragmentDiv>
  );
}

const actionCreatorsToMap = pick([
  'generateOTPRequest',
  'verifyOTPRequest',
  'generateOTPIdle',
  'loginRequest',
  'signupRequest',
  'backArrow',
  'signUpArrow',
], authActionCreators);

const mapStateToProps = createStructuredSelector({
  otpState: makeSelectOTPState(),
  signUp: makeSelectSignUp(),
  loading: makeSelectLoading(),
});

LoginFlow.propTypes = {
  otpState: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
};

LoginFlow.defaultProps = {
  otpState: false,
};

const mapActionsToProps = dispatch => bindActionCreators(actionCreatorsToMap, dispatch);

export default connect(mapStateToProps, mapActionsToProps)(LoginFlow);
