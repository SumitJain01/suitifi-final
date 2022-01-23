import React, { Component, Fragment } from 'react';
import { last } from 'ramda';
import PropTypes from 'prop-types';
import { noop } from 'ramda-adjunct';
import { withRouter } from 'next/router';
import Link from 'next/link';
import { routerPropTypes } from 'utils/PropTypes';
import { myAccountMenu } from 'utils/constants';
import MobileAccountPage from 'containers/Account/components/MobileAccountPage';
import OrderList from 'containers/Account/components/OrderList';
import Wallet from 'containers/Account/components/Wallet';
import Addresses from 'containers/Account/components/Addresses';
import ConfirmModal from 'containers/Account/components/styled/ConfirmModal';
import detectMobile from 'utils/helpers/mobileDetect';
import MenuItem from '../styled/MenuItem';
import AccountWrapper from '../styled/AccountWrapper';
import ProfileCard from 'containers/Account/components/ProfileCard';

class AccountPage extends Component {
  constructor(props) {
    super(props);
    const lastItem = last(this.props.router?.asPath?.split('/'));
    this.state = {
      current: lastItem,
      isMobile: null,
      showLogout: false,
    };
  }

  componentDidMount() {
    const isMobile = detectMobile();
    const { router } = this.props;
    if (!this.props.loggedIn && !isMobile) {
      router.push('/');
    }   
    if (this.props.loggedIn) {
      this.props.getUserInfo();
    }
    this.setState({ isMobile: detectMobile() });
 
  }
  
  componentDidUpdate() {
    const isMobile = detectMobile();
    if (!this.props.loggedIn && !isMobile) {
      this.props.router.push('/');
    }
  }

  static getDerivedStateFromProps(nP, pS) {
    const lastItem = last(nP.router.asPath.split('/'));
    if (pS.current !== lastItem && !['account', ''].includes(lastItem)) {
      return {
        current: lastItem,
      };
    }
    return null;
  }

  getActiveView = (current) => {
    switch(current) {
      case 'orders':
        return <OrderList />;
        break;
      case 'wallet':
        return  <Wallet />;
        break;
      case 'addresses':
        return <Addresses {...this.props}/>
        break;
     // can add any tabs here, just by adding a switch and constants in utils.   
  }
  }

  shouldBeActive = (val, current, isAnyActive) => {
    if (!isAnyActive && last(val.split('/')) === 'profile') {
      return true;
    }
    return last(val.split('/')) === current;
  }

  createTabs = (isAnyActive) => {
    return myAccountMenu.map(({ id, name, val, icon }) => {
      if (id === 'logout' && !this.props.loggedIn) {
        return null;
      } else if (id === 'logout' && this.props.loggedIn) {
        return (
          <MenuItem key={name} onClick={() => this.setState({ showLogout: true })}>
            <div className="icon-container">{icon}</div>
            <div className="nav-name-container">{name}</div>
          </MenuItem>
        );
      }

      return (
        <Link prefetch={false} href={val} key={name}>
          <MenuItem
            className={id}
            active={this.shouldBeActive(val, this.state.current, isAnyActive)}
          >
            <div className="icon-container">{icon}</div>
            <div className="nav-name-container">{name}</div>
          </MenuItem>
        </Link>
      );
    })
  }
  
  render() {
    const { user, className } = this.props;
    const { current, isMobile } = this.state;

    if (isMobile) {
      return <MobileAccountPage {...this.props} activeRoute={current} />;
    }

    const isAnyActive = myAccountMenu.some(({ val }) => current && last(val.split('/')) === current);

    return(
      <Fragment>
      <AccountWrapper className={className} key={this.props.router.asPath}>
          <div className="manage-box-wrapper">
            <div className="view-links-wrapper">
              <div className="view-links">
                {this.createTabs(isAnyActive)}
              </div>
              <div className="active-view">
                {
                  !isAnyActive || current === 'profile' 
                  ? <ProfileCard user={user} /> 
                  : this.getActiveView(current)
                }
              </div>
            </div>
          </div>
        </AccountWrapper>
        {this.state.showLogout && (
          <ConfirmModal
            message="Are you sure you want to Log Out?"
            cancelMessage="Cancel"
            confirmMessage="Log Out"
            cancelHandler={() => this.setState({ showLogout: false })}
            confirmHandler={() => {
              this.setState({ showLogout: false });
              this.props.logout({ forceGuestReload: true });
              this.props.router.push('/');
              this.props.hideLoginPopUp();
            }}
          />
        )}
      </Fragment>
    );
  }
}

export default withRouter(AccountPage);

AccountPage.propTypes = {
  className: PropTypes.string,
  router: routerPropTypes,
  editUserInfo: PropTypes.func,
  getUserInfo: PropTypes.func,
  listUserOrders: PropTypes.func,
  logout: PropTypes.func,
  isMobile: PropTypes.bool,
  loading: PropTypes.bool,
  loggedIn: PropTypes.bool,
  orders: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  user: PropTypes.object,
};

AccountPage.defaultProps = {
  className: '',
  editUserInfo: noop,
  getUserInfo: noop,
  listUserOrders: noop,
  logout: noop,
  isMobile: false,
  loading: false,
  loggedIn: false,
  orders: false,
};
