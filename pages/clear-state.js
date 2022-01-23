import React from 'react';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reinitializeCart } from 'containers/Cart/redux/actions';

class ClearState extends React.Component {
  
  componentDidMount() {
    const { router } = this.props;
    this.props.reinitializeCart({ forceGuestReload: true });
    sessionStorage.setItem('isClearState', true);
    router.push('/');
  }

  render() {
    return null;
  }
}

const mapDispatchToProps = (dispatch) => ({
  reinitializeCart: bindActionCreators(reinitializeCart, dispatch),
});

export default withRouter(connect(null, mapDispatchToProps)(ClearState));
