import React, { Fragment, useMemo } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import Flex from 'shared/components/Flex';
import Login from 'containers/Checkout/components/Login';
import { loginRequest, generateOTPRequest, verifyOTPRequest, generateOTPIdle } from 'containers/Auth/redux/actions';
import { makeSelectLoggedIn, makeSelectOTPState, makeSelectUser } from 'containers/Auth/redux/selectors';
import { showLoginPopUp } from 'containers/Auth/redux/actions';
import LoginCTAButton from './styled/LoginCTAButton';
import styled from 'styled-components';
import theme from 'theme';

const LogDiv = styled.div`
  color: #1D1D1D;
  font-size: 1.1rem;
  font-weight: 500;
`;

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  font-family: "Roboto";
  font-size: 1rem;
  color: #1D1D1D;
`;

const LogButton = styled.div`
  cursor: pointer;
  margin: 1rem;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid ${theme.general.primaryColor};
  color: ${theme.general.primaryColor};
  width: fit-content;
  padding: 0.4rem 1rem;
  border-radius: 3px;
  :hover {
    background: ${theme.general.primaryColor};
    color: white;
  }
`;

function LoginSegment({
  user,
  isActive,
  next,
  makeActive,
  showLoginPopUp,
  ...props
}) {
  const isLoggedIn = useMemo(() => Boolean(user), [user]);
  return (
    <div >
      {isLoggedIn ? (
        <div>
            Hello, {user.firstName}!
        </div>
      ) : (
        <Fragment>
          <Login
            open={isActive}
            next={() => next()}
            {...props}
          />
          {isActive && (
            <Flex
              justify="center"
              style={{ fontSize: '1rem', fontWeight: '600' }}
            >
              <LoginCTAButton style ={{borderRadius : '5px'}} onClick={() => next()}>
                  Continue as Guest
              </LoginCTAButton>
            </Flex>
          )}
          {!isActive && !isLoggedIn && (
            <FlexDiv >
              <LogDiv>Login to see your existing offers</LogDiv>
              <LogButton onClick={() => showLoginPopUp()}> 
                LOGIN
              </LogButton>
            </FlexDiv>
          )}
        </Fragment>
      )}
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  showLoginPopUp:bindActionCreators(showLoginPopUp, dispatch),
  generateOTPRequest: bindActionCreators(generateOTPRequest, dispatch),
  verifyOTPRequest: bindActionCreators(verifyOTPRequest, dispatch),
  generateOTPIdle: bindActionCreators(generateOTPIdle, dispatch),
  loginRequest: bindActionCreators(loginRequest, dispatch)
});

const mapStateToProps = createStructuredSelector({
  loggedIn: makeSelectLoggedIn(),
  otpState: makeSelectOTPState(),
  user: makeSelectUser(),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginSegment);
