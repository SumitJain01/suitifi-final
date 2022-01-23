import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { noop } from 'ramda-adjunct';
import AuthContainer from 'containers/Auth';
import { loginRequest, signupRequest, sendPasswordResetRequest, hideLoginPopUp} from 'containers/Auth/redux/actions';
import { makeSelectLoggedIn } from 'containers/Auth/redux/selectors';

class AuthPage extends React.Component {
  render() {
    const {
      loggedIn, loginRequest, signupRequest, resetRequest, hideLoginPopUp
    } = this.props;
    return (
      <Fragment>
        <AuthContainer
          isPage
          hideLoginPopUp={hideLoginPopUp}
          loggedIn={loggedIn}
          loginRequest={loginRequest}
          signupRequest={signupRequest}
          resetRequest={resetRequest}
        />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loginRequest: bindActionCreators(loginRequest, dispatch),
  signupRequest: bindActionCreators(signupRequest, dispatch),
  resetRequest: bindActionCreators(sendPasswordResetRequest, dispatch),
  hideLoginPopUp: bindActionCreators(hideLoginPopUp, dispatch),
});

const mapStateToProps = createStructuredSelector({
  loggedIn: makeSelectLoggedIn(),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);

AuthPage.propTypes = {
  loginRequest: PropTypes.func,
  signupRequest: PropTypes.func,
  resetRequest: PropTypes.func,
  loggedIn: PropTypes.bool,
  hideLoginPopUp:PropTypes.func,
};

AuthPage.defaultProps = {
  loginRequest: noop,
  signupRequest: noop,
  resetRequest: noop,
  hideLoginPopUp:noop,
};

