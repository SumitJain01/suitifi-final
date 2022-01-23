import React from 'react';
import PropTypes from 'prop-types';
import LoginFlow from 'containers/Auth/components/LoginFlow';

export default class Login extends React.Component {
  render() {
    if (!this.props.open) {
      return null;
    }
    return <LoginFlow {...this.props} />;
  }
}

Login.propTypes = {
  open: PropTypes.bool,
};

Login.defaultProps = {
  open: false,
};
