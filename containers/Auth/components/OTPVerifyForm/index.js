import React, { useEffect, useState, useCallback } from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';
import Wrapper from './Wrapper';
import styled from 'styled-components';
import MESpinner from 'shared/components/Spinner/MESpinner';
import { createStructuredSelector } from 'reselect';
import { makeSelectLoading ,makeSelectError,makeSelectUserSignUp,makeSelectMappedContact,makeSelectOtpLocked} from 'containers/Auth/redux/selectors';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { otpGenerateEmailRequest } from 'containers/Auth/redux/actions';
import Gap from 'shared/components/Gap';
import Overlay from 'shared/components/Overlay';
// import dataLayer from 'lib/gtmDataLayer';

function OTPVerifyForm({
  submitForm,
  props,
  loading,
  backArrow,
  signUpArrow,
  otpError,
  isMobile,
  showChangeNumber,
  newUser,
  mappedContact,
  otpGenerateEmailRequest,
  otpLocked,
}) { 
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [resendOtp,setResendOtp] = useState(false);
  const [timer,setTimer] = useState(30);
  const [err,setErr] = useState(false);
  const userSignUpDetails = JSON.parse(localStorage.getItem("userSignUpDetails"));
  
  // useEffect(() => {
  //   err 
  //   ?
  //   dataLayer.push({
  //     event: "otpfailure",
  //     failureMessage: err,
  //   })
  //   :
  //   otpError.message&&
  //   dataLayer.push({
  //     event: "otpfailure",
  //     failureMessage: otpError.message,
  //   });
  // }, [err,otpError])

  useEffect(() => {
    if(timer === 0){
      setResendOtp(true);
      return ;
    }
    setTimeout(() => {
      setTimer(timer-1);
    },1000);

  },[timer]);

  useEffect(() => {
    if(typeof otpError === 'string' && otpError.includes("Incorrect")){
      setErr("Invalid OTP , Please Try Again with Correct OTP");
    }
  });

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    if(element.value > 9 && index === 0){
      if(otp[0] === '') {
        setOtp([...otp.map((d, idx) => (element.value[idx]))]);
        return true;
      }
      else {
        element.value = element.value[-1];
      }
    }

    element.value = element.value.slice(0,1);

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.value && element.nextSibling) {
        element.nextSibling.focus();
    }
    else if (!element.value && element.previousSibling) {
      element.previousSibling.focus();
    }
  };

  const handleResend = () => {
    setOtp(new Array(4).fill(""));
    newUser ?
    props.signupRequest({email:userSignUpDetails.email,contact:userSignUpDetails.contact}) :
    ( 
      showChangeNumber ? 
      props.generateOTPRequest({ contact: props.otpState.contact }) : 
      otpGenerateEmailRequest({"email":userSignUpDetails.email})
    )
    setResendOtp(false);
    setTimer(30);
    setErr(false);
  }

  const handleSubmit = useCallback((e) => {
      e.preventDefault();
      let newOtp = '';
      otp.map((digit) => {
        newOtp = newOtp + digit;
      })

      if(newOtp.length < 4) {
       setErr( showChangeNumber && !newUser ? "Please enter OTP to Login" : "Please enter OTP to Register" );
      }
      else {
        submitForm({ otp: newOtp })
      }
  }, [otp,otpError]);
  
  const backFunction = () => { 
    showChangeNumber && !newUser ? backArrow() : signUpArrow();
  }

  return (
    <Wrapper>
      { loading && 
        <> 
          <Overlay open ={true}> 
            <div className="spinner"> 
              <MESpinner />
            </div> 
          </Overlay> 
        </> 
      }

      {
        isMobile ?
        <>
          <div className="flex">
            <img onClick={() => backFunction()} className="close-icon" src="/static/mamaearth/arrow_back.svg" height="25px" width="25px"/>
            <div className="otp-start">Verify OTP</div>
          </div>
          <Gap h='1rem'/>
          <Divider />
          <Gap h='3rem'/>
        </>
        :
        <>
          <img onClick={() => backFunction()} className="close-icon" src="/static/mamaearth/arrow_back.svg" height="24px" width="24px"/>
          <div className="otp-start">Verify OTP</div>
          <Gap h='1rem'/>
        </>
      }

      <img src="/static/mamaearth/VerifyOTP.svg" height="80px" width="75px"/>

      <Row  className="responsive">
        <Col xs={12}>
          <Gap h="1rem"/>
          {
            showChangeNumber && !newUser ? 
            <Text className="sent-to">
              Sent to <div className="pen" onClick={() => props.generateOTPIdle()}> XXXXXX{props.otpState.contact.toString().substring(6)} &nbsp; 
              <img height="12px" width="10px" src="/static/mamaearth/pen.svg"/></div>
            </Text> :
            <Text className="sent-to">
              Sent to <span className="pen" >XXXXXX{newUser? props.otpState.contact.toString().substring(6) : mappedContact.toString().substring(6)}</span>
            </Text>
          }
          { isMobile ? <Gap h='2rem'/> : <Gap h='1rem'/> }
          <div className={ err ? "otp-text red" : "otp-text" }>Enter OTP</div>
          <form onSubmit={handleSubmit}>
            <div className="digit-group">
              {
                otp.map((data, index) => {
                  return (
                    <input
                      autoComplete="off"
                      className={err?"otp-field red":"otp-field"}
                      type="number"
                      name="otp"
                      maxLength="1"
                      key={index}
                      value={data}
                      onChange={e => handleChange(e.target, index)}
                      onFocus={e => e.target.select()}
                      onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                    />
                  );
                })
              }
            </div>
            { err && <div className="error"> {err} </div> }
            { isMobile ? <Gap h='2rem'/> : <Gap h='1rem'/> }
            { !otpLocked && 
              <Text style={{fontSize:'13px',textAlign:'center'}}>
                { 
                  !resendOtp ? 
                  <div> Resend OTP in &nbsp;<span style={{color:'#279989'}}>00:{timer < 10 ? 0 : null}{timer}</span></div> :   
                  <a onClick={() => {handleResend()}} style={{color:'#279989',fontWeight:'600',paddingLeft:'2px'}}> Resend OTP </a>
                }
              </Text>
            }
            { isMobile ? <Gap h='7rem'/> : <Gap h='2rem'/> }
            <VerifyButton type="submit" >
                VERIFY 
            </VerifyButton>
          </form>
          <div className="caution">do not share this OTP with anyone</div>
        </Col>
      </Row>
    </Wrapper>
  );
}

const Text = styled.div`
  color: #1D1D1D;
  margin:12px 0;
`;

const Divider = styled.div`
  width:100%;
  border-bottom : 2px solid #F2F2F2;
`;

const VerifyButton = styled.button`
  cursor: pointer;
  letter-spacing:0.5px;
  word-spacing:2px;
  font-size:12px;
  width: 100%;
  text-align: center;
  color:white;
  background-color: #279989;
  border: 1px solid #279989;
  border-radius: 3px;
  padding: 0.6rem 0rem;

  @media only screen and (max-width:767px){
    font-size:13px;
    padding: 0.8rem 0rem;
    width:100%;
  }
`;

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  otpError:makeSelectError(),
  newUser:makeSelectUserSignUp(),
  mappedContact: makeSelectMappedContact(),
  otpLocked:makeSelectOtpLocked(),
});

const mapDispatchToProps = dispatch => ({
  otpGenerateEmailRequest:bindActionCreators(otpGenerateEmailRequest,dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(OTPVerifyForm);
