import React ,{useEffect, useState} from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-styled-flexboxgrid';
import { Formik } from 'formik';
import FormikField from 'shared/components//Formik/Input';
import Wrapper from './Wrapper';
import Gap from 'shared/components//Gap';
import { bindActionCreators } from 'redux';
import validationSchema from './validationSchema';
import Input from 'shared/components//Input';
import { createStructuredSelector } from 'reselect';
import { makeSelectLoading, makeSelectMappedContact} from 'containers/Auth/redux/selectors';
import { connect } from 'react-redux';
import { otpGenerateEmailRequest} from 'containers/Auth/redux/actions';
import Overlay from 'shared/components//Overlay';
import MESpinner from 'shared/components//Spinner/MESpinner';
import dataLayer from 'lib/gtmDataLayer';

function SignUpForm ({submitForm,isMobile,phoneNumber,loading,mappedContact,otpGenerateEmailRequest,backArrow,setShowChangeNumber}){
  const userSignUpDetails = JSON.parse(localStorage.getItem("userSignUpDetails"));
  const [emailOtp, setEmailOtp] = useState(userSignUpDetails?.email||'');

  useEffect(() => {
    dataLayer.push({
      event: "signUpPage",
    }); 
  }, [])

  const backClickHandler = () => {
    backArrow();
    dataLayer.push({
      event: "signUpDrop",
    });
  }
  const securedMappedNumber = `XXXXXX${mappedContact.toString().substring(6)}`
    return (     
   <Wrapper>
        {loading && <><Overlay open ={true}><div className="spinner"><MESpinner /></div></Overlay></>}
        {isMobile
        ? 
        <>
         <div className="flex">
        <img onClick={()=>{backClickHandler()}} className="close-icon" src="/static/mamaearth/arrow_back.svg"  height="25px" width="25px"/>
        <div className="signup-start">Create your Account</div>
        </div>
        <Gap h='1rem'/>
         <Divider />
         <Gap h='3rem'/>
         </>
        :
        <>
      <img onClick={()=>{backClickHandler()}} className="close-icon" src="/static/mamaearth/arrow_back.svg"  height="24px" width="24px"/>
      <div className="signup-start">Sign up</div>
      <Gap h='2rem'/>
      </>
    }
        <Row className="responsive">
          <Col xs={12}>
            <Formik
              initialValues={{ email: userSignUpDetails?.email || '',
                               firstName:userSignUpDetails?.firstName|| '',
                               lastName:userSignUpDetails?.lastName || ''
                              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                setEmailOtp(values.email);
                const signUpDetails ={
                  ...values,
                  "gender":"MALE",
                  "contact":phoneNumber,
                }
                localStorage.setItem(
                  "userSignUpDetails",
                  JSON.stringify(signUpDetails)
                );
                const newValues = {
                   
                   "contact":phoneNumber,
                   "email":values.email,
                }

                submitForm(newValues);
              }}
            >
              {({handleSubmit,}) => (
                <form onSubmit={handleSubmit}>
                <Gap h='0.5rem'/>
                <span className="label">Phone Number</span>
                <Input  style={{color:"#D6D6D6"}} value={phoneNumber} autoComplete="off" type="text"  name="phone" disabled="true" />
                {isMobile ? <Gap h='3rem'/>:<Gap h='2rem'/>}
                <InputWrapper>
                <FormikField autoComplete="off" type="text" label="First Name" name="firstName" required/>
                </InputWrapper>
                {isMobile? <Gap h='2.5rem'/>:<Gap h='1.5rem'/>}
                <InputWrapper>
                <FormikField autoComplete="off" type="text" label="Last Name" name="lastName"  required/>
                </InputWrapper>
                {isMobile? <Gap h='2.5rem'/>:<Gap h='1.5rem'/>}
                <InputWrapper>
                <FormikField className={mappedContact ? "e-error":null} autoComplete="off" type="text" label="Email ID" name="email"  required/>
                </InputWrapper>
                {mappedContact && <>
                <div className="flex1">
                <span className="mappedContact">Email ID already exist with {securedMappedNumber}. Either change the email ID OR </span>
                <a onClick={()=>{otpGenerateEmailRequest({"email":emailOtp}),setShowChangeNumber(false);}}>
                  <span className="loginWith">Login with {securedMappedNumber} Instead</span>
                </a>
                </div>
                <Gap h='0.2rem'/>
                </> }
                {isMobile? <Gap h='3rem'/>:<Gap h='1rem'/>}
              <SignInbtn type="submit"  >
              SIGN UP
              </SignInbtn>
              <Gap h='0.5rem'/>
                </form>
              )}
            </Formik>
          </Col>
        </Row>
      </Wrapper>
    );
  }

  const Divider = styled.div`
  width:100%;
  border-bottom : 1px solid #0000001F;
  `;
  
  const SignInbtn = styled.button`
  cursor: pointer;
  font-size:13px;
  width: 100%;
  text-align: center;
  color:white;
  background-color: #279989;
  border: 1px solid #279989;
  border-radius: 3px;
  padding: 0.5rem 0rem;
  @media only screen and (max-width:767px){
  padding: 1rem 0;
  width:100%;
  }
  `;
  
  const InputWrapper = styled.div`
  div{
    position:relative;
    span{
      font-size: 11px;
      font-weight:500 !important;
      padding:0 4px;
      position:absolute;
      top:-5px;
      left:12px;
      background:white;
      opacity:95%;
    }
    input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  }
  `

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  mappedContact: makeSelectMappedContact(),
});

const mapDispatchToProps = dispatch => ({
  otpGenerateEmailRequest:bindActionCreators(otpGenerateEmailRequest,dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
