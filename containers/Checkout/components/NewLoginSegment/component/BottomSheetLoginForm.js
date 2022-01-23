import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-styled-flexboxgrid';
import Close from 'shared/components/SVGIcons/CheckoutMobileCloseModal';
import { Formik } from 'formik';
import FormikField from 'shared/components/Formik/Input';
import OTPLoginSchema from 'containers/Checkout/components/NewLoginSegment/LoginForm/OTPLoginForm/validationSchema.js';
import OTPVerifySchema from 'containers/Checkout/components/NewLoginSegment/LoginForm/OTPVerifyForm/validationSchema.js';
import CAGButton from './styled/CAGButton';
import LoginButton from './styled/loginButton';
import { MinimalButton } from 'shared/components/Button';
import { pick } from 'ramda';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import * as authActionCreators from 'containers/Auth/redux/actions';
import { makeSelectOTPState, makeSelectError } from 'containers/Auth/redux/selectors';
import { connect } from 'react-redux';

function BottomSheetLoginForm({
  loginStep,
  setLoginStep,
  setIsModalOpen,
  generateOTPRequest,
  verifyOTPRequest,
  authError,
  otpState,
  generateOTPIdle
}) {
  return (
    <Wrapper>
      <Row className="topRowStyle">
        <Col xs={10}>
          <div className="topRowStyle_Text">
            Existing User? Login Here.
          </div>
        </Col>
        <Col xs={2} className="topRowStyle_Icon">
          <div className="IconBorder" onClick={() => { setIsModalOpen(false) }}>
            <Close />
          </div>
        </Col>
      </Row>
      <div className="phonePeContainer">
        {/* NEEDED TO SETUP PHONEPE*/}
        {/* <PhonePeComponent /> */}
      </div>

      <div className="subContainer">
        <Formik
          validationSchema={loginStep === 0 || authError ? OTPLoginSchema : OTPVerifySchema}
          initialValues={{ contact: '', otp: '' }}
          onSubmit={(values, { setSubmitting }) => {
            if (loginStep === 0) {
              generateOTPRequest(values);
              setLoginStep(1);
            } else if(loginStep == 1 && authError) {
              generateOTPRequest(values);
            }
            else {
              verifyOTPRequest(values);
            }
            setSubmitting(false);
          }}>
          {
            ({ handleSubmit }) => (
                <form onSubmit={handleSubmit} id="checkoutbottomSheetForm">
                  <Row>
                    <Col xs={9}>
                      <FormikField
                        type="text"
                        label="Mobile"
                        placeholder="Mobile"
                        name="contact"
                        prefix="+91"
                        disabled={!authError && loginStep === 1}
                        ignorePrefix
                        newDesignFlag={true} />
                    </Col>
                    <Col xs={3} className="getoptstyle">
                      {(loginStep == 0 || authError ) &&
                       <MinimalButton type="submit" className="getoptstyleButton">
                        GET OTP
                      </MinimalButton>}
                      {/* GET OTP */}
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={9}>
                      <FormikField
                        autoComplete="off"
                        type="text"
                        label="Fill OTP"
                        placeholder="Fill OTP"
                        name="otp"
                        newDesignFlag={true} />
                    </Col>
                    <Col xs={3} className="longinWrapperStyle">
                      {(loginStep == 1 && !authError) && <LoginButton type="submit">Login</LoginButton>}
                    </Col>
                  </Row>
                </form>
              )
          }
        </Formik>
      </div>
      <div className="bgWhite">
        <Row className="otptext">
          <Col xs={12}>
            <span>Didn't receive the OTP? </span>
            <span>Resend</span>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="orSeperator">
            <div className="gradientLeft"></div>
            <div className="orStyle">Or</div>
            <div className="gradientRight"></div>
          </Col>
        </Row>
      </div>

      {/* <Button>continue as guest</Button> */}
      <CAGButton onClick={() => { setIsModalOpen(false) }}>Checkout as Guest</CAGButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    background-color: transparent;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    z-index: 1001;
    .topRowStyle {
      background-color: ${props => props.theme.general.themeLightGreen};
      padding:7px 15px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
    .topRowStyle_Text {
      font-size: 1.2rem;
      font-weight: 700;
      color: #3B3B3B;
    }
    .topRowStyle_Icon {
      text-align:center
    }
    .IconBorder {
      padding: 5px;
      border: 1px solid ${({ theme }) => theme.general.primaryColor};
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      background-color: #ffffff;
    }
    .subContainer {
      padding-left: 10px;
      padding-right: 10px;
      background-color: #ffffff;
    }
    .bgWhite {
      background-color: #ffffff
    }
    .otptext {
      padding: 5px 10px;
      span:nth-child(1) {
        font-size: 0.8rem;
        font-weight: 700;
        color: #1d1d1d;
      }
      span:nth-child(2) {
        margin: 0px 5px;
        color:${({ theme }) => theme.general.primaryColor};
        text-transform: uppercase;
        font-size: 1rem;
      }
    }
    .getoptstyle {
      margin-bottom:12px;
      padding-bottom: 0.8rem;
      display:flex;
      align-items: flex-end;
      justify-content: center;
    }
    .getoptstyleButton {
      color: ${({ theme }) => theme.general.primaryColor};
      font-weight: 500;
      :hover {
        color:#ffffff;
        background-color:${({ theme }) => theme.general.primaryColor};
      }
    }
    .longinWrapperStyle {
      margin-bottom:12px;
      padding-bottom: 0.8rem;
      display:flex;
      align-items: flex-end;
      justify-content: center;
    }
    .gradientLeft {
      width:60px;
      height:2px;
      background-image: linear-gradient(to right, #ffffff, #808080);
    }
    .gradientRight {
      width:60px;
      height:2px;
      background-image: linear-gradient(to right, #808080, #ffffff);
    }
    .orSeperator {
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 10px 0px;
    }
    .orStyle{
      margin: 0px 5px;
    }
    .phonePeContainer {
      background-color:white;
    }
`

const actionCreatorsToMap = pick([
  'generateOTPRequest',
  'verifyOTPRequest',
  'generateOTPIdle',
  'loginRequest',
], authActionCreators);

const mapStateToProps = createStructuredSelector({
  otpState: makeSelectOTPState(),
  authError: makeSelectError(),
});

const mapActionsToProps = dispatch => bindActionCreators(actionCreatorsToMap, dispatch);

export default connect(mapStateToProps, mapActionsToProps)(BottomSheetLoginForm);