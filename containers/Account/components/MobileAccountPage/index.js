import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import { last } from 'ramda';
import LazyLoad from 'react-lazyload';
import { CartIcon, PinIcon, CallIcon } from 'shared/components/SVGIcons';
import Overlay from 'shared/components/Overlay';
import ScrollLock from 'shared/components/ScrollLock';
import ConfirmModal from 'containers/Account/components/styled/ConfirmModal';
import OrderList from 'containers/Account/components/OrderList';
import Wallet from 'containers/Account/components/Wallet';
import Addresses from 'containers/Account/components/Addresses';
import BottomSheetLoginForm from 'containers/Checkout/components/NewLoginSegment/component/BottomSheetLoginForm';
import useLoginForm from 'containers/Account/hooks/useLoginForm';
import MobileAccountLinks from '../MobileAccountLinks';
import MobileMamacashBox from '../MobileMamacashBox';
import Guest from '../MobileUserStatus/Guest';
import UserIcon from 'shared/components/SVGIcons/UserIcon';
import ProfileCard from 'containers/Account/components/ProfileCard';
import { BRAND_NAME } from 'utils/constants';

export default function MobileAccount({ router, activeRoute, loggedIn, creditBalance, user, getUserInfo, editUserInfo, logout,addresses, showLoginPopUp }) {
  const activeRouteLast = last(activeRoute.split('/'));
  const [showLogout, setShowLogout] = useState(false);
  const [isLoginOpen, setIsLoginOpen, loginStep, setLoginStep] = useLoginForm(loggedIn);
  const logoutHandlers = {
    confirmHandler: () => {
      logout({ forceGuestReload: true });
      setShowLogout(false);
      router.push('/');
    },
    cancelHandler: () => setShowLogout(false),
  };

  useEffect(() => {
    setIsLoginOpen(!loggedIn);
  }, [loggedIn]);
  
  let ActiveComponent = null;
  if (!loggedIn || activeRouteLast === 'my-account' || activeRouteLast === '') {
    ActiveComponent = (
      <AccountWrapper>
        {loggedIn ? (
          <h2 style={{'color':'#000000'}}>Your Account</h2>
        ) : (
          <Guest showLoginPopUp={showLoginPopUp}/>
        )}
        {loggedIn && <MobileMamacashBox mamacashAmount={creditBalance} />}
        <Message>
          Cashback will be credited in the {BRAND_NAME}pay wallet account within 
          7 days of all products being delivered for eligible orders.
        </Message>
        <MobileAccountLinks linksData={data} />
        {loggedIn && <LogoutButton onClick={() => setShowLogout(true)}>log out</LogoutButton>}
        {(showLogout) && (
          <ConfirmModal
            isMobile
            message="Are you sure you want to Log Out?"
            cancelMessage="Cancel"
            confirmMessage="Log Out"
            {...logoutHandlers}
          />
        )}
      </AccountWrapper>
    );
  } else if (activeRouteLast === 'addresses') {
    ActiveComponent = <Addresses user={user} addresses isMobile />;
  } else if (activeRouteLast === 'orders') {
    ActiveComponent = <OrderList isMobile />;
  }
  else if (activeRouteLast === 'wallet') {
    ActiveComponent = <Wallet isMobile />;
  }
  else if (activeRouteLast === 'profile') {
    ActiveComponent = <ProfileCard user={user} />;
  }

  return (
    <Wrapper>
      <LazyLoad once>
        {ActiveComponent}
      </LazyLoad>
    </Wrapper>
  );
}

const data = [
  { name: 'Your Profile', val: '/my-account/profile', icon: <UserIcon /> },
  { name: 'Your Orders', val: '/my-account/orders', icon: <CartIcon /> },
  { name: 'Manage Address', val: '/my-account/addresses', icon: <PinIcon /> },
  { name: 'Contact Us', val: '/contact-us', icon: <CallIcon /> },
];


const Message = styled.div`
  margin: 0.45rem 0 0;
  font-size: 0.95rem;
  color: ${props => props.theme.general.primaryColor};
`;

const LogoutButton = styled.p`
  margin: 0;
  margin-top: 1rem;
  text-align: center;
  font-family: Roboto, sans-serif;
  font-size: 1.286rem;
  font-weight: 500;
  line-height: 1.4em;
  text-transform: uppercase;
  color: ${props => props.theme.general.primaryColor};
`;

const AccountWrapper = styled.div`
  margin: 0 1.375rem;
  
  ${MobileAccountLinks} {
    margin-top: 1rem;
  }
`;

const Wrapper = styled.div`
  margin-left: -4px;
  margin-right: -4px;
`;
