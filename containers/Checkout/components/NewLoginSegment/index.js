import React, { Fragment, useState, useMemo } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import * as globalActionCreators from 'containers/Global/redux/actions';
import { pick } from 'ramda';
import { makeSelectUser } from 'containers/Auth/redux/selectors';
import { Row, Col } from 'react-styled-flexboxgrid';
import UserProfileIcon from 'shared/components/SVGIcons/UserProfileIcon';
import LoginCTAButton from './styled/LoginCTAButton';
import CheckoutMobileUser from 'shared/components/SVGIcons/CheckoutMobileUser';
import CheckoutMobileNext from 'shared/components/SVGIcons/CheckoutMobileNext';
import BottomSheetLoginForm from './component/BottomSheetLoginForm';
import LoginForm from './LoginForm';
import Title from '../styled/Title';
import Wrapper from '../styled/Wrapper';
import Overlay from 'shared/components/Overlay';

function LoginSegment({
  user,
  isActive,
  next,
  makeActive,
  className,
  UAisMobile,
  openModal,
  closeModal
}) {
  const isLoggedIn = useMemo(() => Boolean(user), [user]);
  const [loginStep, setLoginStep] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGuestLogin = () => {
    setLoginStep(prevStep => 0);
    next();
  }

  return (
    <>
      {/* Desktop Design */}
      {!UAisMobile && <Wrapper className={className}>
        {isLoggedIn ? (
          <Title>
            <ProfileIcon className="user-profile-icon" />
            Hello, {user.firstName}!
          </Title>
        ) : (
            <Fragment>
              <LoginForm open={isActive} next={() => next()} loginStep={loginStep} setLoginStep={setLoginStep} />
              {isActive && (
                <LoginCTAButton fullWidth minimal onClick={handleGuestLogin}>
                  Checkout as Guest?
                </LoginCTAButton>
              )}
              {!isActive && !isLoggedIn && (
                <Fragment>
                  <Title>Already a Registered User?</Title>
                  <LoginCTAButton onClick={() => makeActive()}>
                    Log In
                  </LoginCTAButton>
                </Fragment>
              )}
            </Fragment>
          )}
      </Wrapper>}

      {/* Mobile Design */}
      {UAisMobile &&
        <div style={{ padding: '0.2rem 1rem' }}>
          {isLoggedIn ? (
            <Title>
              <ProfileIcon className="user-profile-icon" />
            Hello, {user.firstName}!
            </Title>
          ) : (
              <div>
                <MobileWrapper onClick={() => setIsModalOpen(true)}>
                  <Row>
                    <Col xs={1} className="user">
                      <CheckoutMobileUser />
                    </Col>
                    <Col xs={9} className="text">Login to use Mamacash</Col>
                    <Col xs={2} className="next">
                      <CheckoutMobileNext />
                    </Col>
                  </Row>
                </MobileWrapper>
                {isModalOpen && <>
                  <Overlay open={isModalOpen} onClick={() => setIsModalOpen(false)}>
                  </Overlay>
                  <BottomSheetLoginForm
                    open={isActive}
                    next={() => next()}
                    setIsModalOpen={setIsModalOpen}
                    loginStep={loginStep}
                    setLoginStep={setLoginStep} />
                </>}
              </div>
            )
          }
        </div>}
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

const mapDispatchToProps = dispatch => bindActionCreators(pick(['openModal', 'closeModal'], globalActionCreators), dispatch);

const MobileWrapper = styled.div`
  border: 1px solid;
  border-color: ${props => props.theme.general.primaryColor};
  padding:10px;
  background-color: ${props => props.theme.general.secondaryColor};
  border-radius: 5px;
  .user {
    text-align:center;
  }
  .text {
    font-size: 1.2rem;
    color: ${props => props.theme.general.primaryColor};
  }
  .next {
    text-align: center;
  }
`;

const ProfileIcon = styled(UserProfileIcon)`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
`;

const StyledLoginSegment = styled(LoginSegment)`

`;

export default connect(mapStateToProps, mapDispatchToProps)(StyledLoginSegment);
