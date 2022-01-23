import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { noop } from 'ramda-adjunct';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectLoggedIn } from 'containers/Auth/redux/selectors';
import Overlay from 'shared/components/Overlay';
import NoScroll from 'shared/components/ScrollLock';
import BottomSheetLoginForm from 'containers/Checkout/components/NewLoginSegment/component/BottomSheetLoginForm';

function MobileLoginUIHandler({ isLoggedIn, setMobileLogin }) {
  const [loginStep, setLoginStep] = useState(0);

  // This component should render only when user is not logged in
  if (isLoggedIn) {
    setMobileLogin(false);
    return null;
  }

  return (
    <Fragment>
      <Overlay open onClick={() => setMobileLogin(false)}></Overlay>
      <NoScroll />
      <BottomSheetLoginForm
        open
        setIsModalOpen={setMobileLogin}
        loginStep={loginStep}
        setLoginStep={setLoginStep}
      />
    </Fragment>
  );
}

const mapStateToProps = createStructuredSelector({
  isLoggedIn: makeSelectLoggedIn(),
});

MobileLoginUIHandler.propTypes = {
  isLoggedIn: PropTypes.bool,
  setMobileLogin: PropTypes.func,
};

MobileLoginUIHandler.defaultProps = {
  isLoggedIn: false,
  setMobileLogin: noop,
};

export default connect(mapStateToProps)(MobileLoginUIHandler);
