import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Row, Col } from 'react-styled-flexboxgrid';
import { Formik } from 'formik';
import FormikField from 'shared/components/Formik/Input';
import Gap from 'shared/components/Gap';
import Wrapper from './Wrapper';
import validationSchema from './validationSchema';
// import dataLayer from 'lib/gtmDataLayer';
import styled from 'styled-components';
import { hideLoginPopUp }  from 'containers/Auth/redux/actions';
import { makeSelectLoading } from 'containers/Auth/redux/selectors';

function OTPLogin({
  submitForm, setPhoneNumber, isMobile, hideLoginPopUp, setShowChangeNumber
}) {
  return (
    <Wrapper>
    {
      isMobile ? 
      <>
        <div className="flex">
          <img onClick={()=>{ hideLoginPopUp() }} className="close-icon-mobile" src="/static/mamaearth/close.svg" height="25px" width="25px"/>
          <div className="login-start-mobile">Login or Signup</div>
        </div>
        <Gap h='1rem'/>
        <Divider />
        <Gap h='2.5rem'/>
        <div style={{ minHeight:'73px', minWidth:'248px' }}>
          <img src="/static/mamaearth/TheDermaCoLogo2-min.png" height="73px" width="248px"/>
        </div>
        <Gap h="2rem"/>
        <span className="mobile-paragraph">Get access to your orders, track previous<br/> order & Redeem Derma Cash</span>
        <Gap h="1rem"/>
      </>
      :
      <>
        <img onClick={()=>{ hideLoginPopUp()} } className="close-icon" src="/static/mamaearth/close.svg" height="24px" width="24px"/>
        <div className="login-start">Log in to get started</div>
        <div className="login-intro"><img src="/static/mamaearth/VerifyOTP.svg" height="70px" width="65px"/>
          <span >Get access to your orders, track<br/> previous order & Redeem Derma <br/> Cash</span>
        </div>
      </>
    }
      <Row className="responsive">
        <Col xs={12}>
          <Formik
            validationSchema={validationSchema}
            initialValues={{ contact: '' }}
            onSubmit={(values, { setSubmitting }) => {
              values.contact = values.contact.toString();
              setPhoneNumber(values.contact);
              submitForm(values);
              setSubmitting(false);
            }}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Gap h='3rem'/>
                <FormikField prefix="+91" autoComplete="off" type="number" label="Phone Number" name="contact" />
                { isMobile ? <Gap h='8rem'/> : <Gap h='3rem'/> }
                <div className="conditions">By Continuing, you agree to DermaCo's <a href="https://thedermaco.com/terms-and-conditions">Terms and Conditions</a> and  <a href="https://thedermaco.com/privacy-policy">Privacy Policy</a></div>
                <Gap h='2rem'/>
                <LoginButton type="submit">
                  LOGIN WITH OTP
                </LoginButton>
              </form>
            )}
          </Formik>
        </Col>
      </Row>
      <div onClick={()=>{ hideLoginPopUp() }} >
        <GuestButton>
              CONTINUE AS GUEST
        </GuestButton>
      </div>
    </Wrapper>
  );
}

const Divider = styled.div`
  width:100%;
  border-bottom : 2px solid #F2F2F2;
`;

const LoginButton = styled.button`
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
    padding: 1rem 0rem;
    width:100%;
  }
`;
const GuestButton = styled.div`
  cursor: pointer;
  width: 100%;
  text-align: center;
  border:none;
  color:#279989;
  font-size:11px;
  font-weight:600;
  margin:1rem 0 ;

  @media only screen and (max-width:767px){
    font-size:12px;
    margin-top:1.6rem;
    margin-bottom:2rem;
    width:100%;
  }
`;

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
});

const mapDispatchToProps = dispatch =>({
  hideLoginPopUp: bindActionCreators(hideLoginPopUp,dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(OTPLogin);
