import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { noop } from 'ramda-adjunct';
import { logoutRequest } from 'containers/Auth/redux/actions';
import { makeSelectLoggedIn, makeSelectUser } from 'containers/Auth/redux/selectors';
import {
  fetchUserInfoRequest,
  editUserInfoRequest,
  customerPurchasedProductsRequest,
  getCreditBalanceRequest
} from 'containers/Account/redux/actions';
import { makeSelectLoading, makeSelectCreditBalance, makeSelectUserInfo } from 'containers/Account/redux/selectors';
import AccountPage from 'containers/Account/components/AccountPage';
import { hideLoginPopUp } from 'containers/Auth/redux/actions';

class AccountContainer extends React.Component {

  componentDidMount() {
    this.props.getCreditBalanceRequest();
    if (this.props.loggedIn) {
      this.props.purchasedOrders();
    }
  }

  render() {
    return (
      <div style={{ padding: '0 1rem' }}>
        <AccountPage {...this.props} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logout: bindActionCreators(logoutRequest, dispatch),
  getUserInfo: bindActionCreators(fetchUserInfoRequest, dispatch),
  editUserInfo: bindActionCreators(editUserInfoRequest, dispatch),
  purchasedOrders: bindActionCreators(customerPurchasedProductsRequest, dispatch),
  hideLoginPopUp: bindActionCreators(hideLoginPopUp, dispatch),
  getCreditBalanceRequest: bindActionCreators(getCreditBalanceRequest, dispatch),
});

const mapStateToProps = createStructuredSelector({
  loggedIn: makeSelectLoggedIn(),
  user: makeSelectUser(),
  userInfo: makeSelectUserInfo(),
  loading: makeSelectLoading(),
  creditBalance: makeSelectCreditBalance(),
});

const Connected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountContainer);

export default withRouter(Connected);

AccountContainer.propTypes = {
  logout: PropTypes.func,
  getUserInfo: PropTypes.func,
  editUserInfo: PropTypes.func,
  listUserOrders: PropTypes.func,
  loggedIn: PropTypes.bool,
  loading: PropTypes.bool,
  user: PropTypes.object,
  orders: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  cartId: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  creditHistory: PropTypes.array,
  creditBalance: PropTypes.number,
};

AccountContainer.defaultProps = {
  logout: noop,
  getUserInfo: noop,
  editUserInfo: noop,
  listUserOrders: noop,
  loggedIn: false,
  loading: false,
  orders: false,
  creditHistory: [],
  creditBalance: 0,
};
