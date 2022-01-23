import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { noop } from 'ramda-adjunct';
import { Icon } from 'react-icons-kit';
import { connect } from 'react-redux';
import { compose, propOr } from "ramda";
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import { logoutRequest, showLoginPopUp, hideLoginPopUp } from 'containers/Auth/redux/actions';
import * as accountActionTypes from 'containers/Account/redux/actions';
import { makeSelectLoggedIn, makeSelectUser } from 'containers/Auth/redux/selectors';
import { makeSelectCreditBalance,makeSelectUserInfo } from 'containers/Account/redux/selectors';
import { userCircleO } from 'shared/components/Icons';
// import Link from 'next/link';
import { UserAccountIcon } from 'shared/components/PageLayout/Header/Mobile/SvgIcons';
import theme from 'theme/index';
import { makeSelectAppliedCouponCode } from 'containers/Checkout/redux/selectors';
import { makeSelectTotals, makeUTMParams } from "containers/Checkout/redux/selectors";
import { useRouter } from 'next/router';
import makeClevertap from 'lib/makeClevertap';
import DesktopAccountDropdown from 'containers/Auth/components/DesktopAccountDropdown';

function LoginTrigger({
  isLoggedIn,
  user,
  logout,
  addresses,
  creditBalance,
  getCreditBalanceRequest,
  className,
  asPath,
  showLoginPopUp,
  hideLoginPopUp
}) {
  const name = isLoggedIn ? `${user.firstName} ${user.lastName}` : undefined;
  const { email, phone, id } = user;
  const router = useRouter();
 
  if (isLoggedIn) {
    getCreditBalanceRequest();
  }
  

  return (
    <div className={className}>
      <UserAccountTrigger  
        hideLoginPopUp={hideLoginPopUp}
        showLoginPopUp={showLoginPopUp} 
        isLoggedIn={isLoggedIn} 
        name={name} email={email} 
        phone={phone} 
        logout={logout} 
        creditBalance={creditBalance} 
        id={id} 
      />
    </div>
  );
}

const UserAccountTrigger = 
({ 
  isLoggedIn, name,id, email, phone, creditBalance, logout,addresses, trackingData,showLoginPopUp, userID 
}) => {
  const [triggerClassname, setTriggerClassname] = useState('user-account-trigger');
  const router = useRouter();
  const accountUrl = isLoggedIn ? '/my-account' : null; 
  const onClickHandler = () => {
    if(accountUrl){
      router.push(accountUrl);
        return;
    }
    showLoginPopUp();
  }

  useEffect(() => {
    if (isLoggedIn) {
      setTriggerClassname(() => 'user-account-trigger isLoggedIn');
    } else {
      setTriggerClassname(() => 'user-account-trigger');
    }
  }, [isLoggedIn]);

  const clevertap = makeClevertap();
  function selectProfileClevertap() 
  {
    if (isLoggedIn) {
      clevertap.event.push("selectProfile", {
        platform: "mewebsite",
        timeStamp: new Date().getTime(),
        pageTitle: process.browser ? document.title : "",
        clickSource: window.location.pathname,
        clickTarget: "my-account",
        clickUrl: "/my-account",
        clickLabel: name,
        email: email,
        name: name,
        phone: phone,
        gaUserId: id,
        ...trackingData,
      });
    }
  }

  return (
      <Trigger as="a" className={triggerClassname} onClick={selectProfileClevertap}>
        <IconContainer  onClick={onClickHandler}>
          <i className="hide-1024">
            <UserAccountIcon className="user-account-icon" color='#279989'/>
          </i>
          <Icon className="display-1024 isLoggedIn" icon={userCircleO} size={22} />
          <i className="display-1024">
            <UserAccountIcon/>
          </i>
        </IconContainer>
        <div onClick={onClickHandler} className="icon-label">{isLoggedIn ? name : 'Login'}</div>

        <DesktopAccountDropdown 
          hideLoginPopUp={hideLoginPopUp}
          showLoginPopUp={showLoginPopUp} 
          isLoggedIn={isLoggedIn} 
          name={name} 
          email={email} 
          phone={phone} 
          logout={logout} 
          creditBalance={creditBalance}
        />
      </Trigger>
  );
};

const IconContainer = styled.div`
  cursor: pointer;

  svg.user-account-icon {
    color: ${theme.general.primaryColor};
    width: 18px;
    height: 18px;
  }
  
  svg.user-account-icon {
    stroke-width: 1.4px;
  }

  .item-count {
    position: absolute;
    top: -2px;
    right: -6px;
    width: 14px;
    height: 13px;

    display: grid;
    place-items: center;
    border-radius: 50%;
    text-align: center;
    font-family: Roboto, Lato;
    font-size: 0.65rem;
    font-weight: 500;
    line-height: 1.2em;
    color: #fff;
    background: ${theme.general.primaryColor};
  }

  .display-1024 {
    display: none !important;
  }

  @media only screen and (min-width: 1024px) {
    .item-count {
      top: 0px;
      right: -6px;

      font-size: 0.6rem;
    }

.display-1024 {
      color: ${props => props.theme.general.primaryColor};

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
  
  @media only screen and (min-width: 1400px) {
  .display-1024 {
      svg {
        width: 22px;
        height: 22px;
      }
    }
  }
`;

const Trigger = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto auto;
  grid-column-gap: 0.5rem;
  cursor: pointer;

  .icon-label {
    display: none;
  }
  
  &.isLoggedIn .hide-1024 {
    position: relative;
    
    ::after {
      position: absolute;
      top: -3px;
      right: 2px;
      content: '';
      width: 5px;
      height: 5px;
      background-color: ;
      border-radius: 5px;
    }
  }

  @media only screen and (min-width: 411px) {
    grid-column-gap: 0.75rem;
  }

  @media only screen and (min-width: 480px) {
    grid-column-gap: 1rem;
  }

  @media screen and (min-width: 1024px) {
    grid-column-gap: 0.5rem;

    .icon-label {
      display: revert;
      padding-top: 3px;
      font-size: 0.875rem;
      line-height: 1.4em;
      color: ${theme.colors.mediumGray};
    }

    &.user-account-trigger {
      position: relative;
    }

    &.user-account-trigger:hover > ${DesktopAccountDropdown} {
      visibility: visible;
    }
    
    .display-1024 {
      display: inline-block !important;
    }
    .hide-1024, &.isLoggedIn .display-1024:not(.isLoggedIn), &:not(.isLoggedIn) .display-1024.isLoggedIn {
      display: none !important;
    }
  }
`;

const StyledTrigger = styled(LoginTrigger)`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 1.25rem;


  .user-account-trigger {
    grid-area: 1 / 1;
  }

  @media only screen and (min-width: 1024px) {


    .user-account-trigger {
      grid-area: 1 / 2;

      .icon-label {
        text-transform: capitalize;
      }
    }
  }

  @media only screen and (min-width: 1200px) {
    grid-column-gap: 2.5rem;
  }
`;

LoginTrigger.propTypes = {
  clickHandler: PropTypes.func,
  showLoginPopUp: PropTypes.func,
  itemCount: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  isLoggedIn: PropTypes.bool,
  user: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  logout: PropTypes.func,
  className: PropTypes.string,
};

LoginTrigger.defaultProps = {
  showLoginPopUp:noop,
  clickHandler: noop,
  itemCount: false,
  isLoggedIn: false,
  logout: noop,
  open: false,
  user:false,
};

const mapDispatchToProps = dispatch => ({
  logout: bindActionCreators(logoutRequest, dispatch),
  showLoginPopUp:bindActionCreators(showLoginPopUp, dispatch),
  hideLoginPopUp:bindActionCreators(hideLoginPopUp, dispatch),
  getCreditBalanceRequest: bindActionCreators(accountActionTypes.getCreditBalanceRequest, dispatch),
});

const mapStateToProps = createStructuredSelector({
  isLoggedIn: makeSelectLoggedIn(),
  user: makeSelectUser(),
  creditBalance: makeSelectCreditBalance(),
  addresses: compose(propOr(false, "addresses"), makeSelectUserInfo()),
  trackingData: makeUTMParams(),
  coupon: makeSelectAppliedCouponCode(),
  userId: compose(propOr(false, 'id'), makeSelectUserInfo()),
  walletBalance: makeSelectCreditBalance(),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginTrigger)
