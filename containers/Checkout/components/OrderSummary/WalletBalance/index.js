import React, { useState, useEffect, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Checkbox from 'shared/components/Html/Checkbox';
import * as actionTypes from 'containers/Checkout/redux/actions';
import * as accountActionTypes from 'containers/Account/redux/actions';
import { makeSelectLoggedIn } from 'containers/Auth/redux/selectors';
import { makeSelectCreditBalance } from 'containers/Account/redux/selectors';
import { makeSelectUserInfo } from 'containers/Account/redux/selectors';
import { makeSelectWalletChecked } from 'containers/Checkout/redux/selectors';
import makeClevertap from "lib/makeClevertap";
import config from "config/env";
import Wrapper from './Wrapper';
import styled from 'styled-components';
import Image from 'shared/components/Image';
import { BRAND_NAME } from 'utils/constants';

const FlexDiv = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #1D1D1D;
  font-size: 1.2rem;
`;

const NDwrapper = styled.div`
  background-color: #f2f9e8;
  padding: 0.6rem;
  border: 1px solid #DBDBDB;
  border-radius : 5px;
  .bdColLeft {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .bdColRight {
    display: flex;
    justify-content: ${props => props.isMobile ? 'flex-start' : 'flex-end'};
    align-items: center;
  }
  .verticalSeperator {
    width: 1px;
    height: 100%;
    border-left: 1px solid #DBDBDB;
    margin: 0px 10px;
  }
  .availableAmount {
    margin-left: 2.5rem;
    color: #5c5c5c;
    font-size: 0.9rem;
  }
  .applicableAmount {
    color: #6da523;
    font-weight: bold;
    font-size: 1.2rem;
  }
  .walletIcon {
    width: 2.2rem;
    height: 2rem;
    margin-right: 0.5rem;
  }
`;

const clevertap = makeClevertap();

function WalletBalance({
  creditBalance,
  applyOrRemoveWalletBalanceRequest,
  getCreditBalanceRequest,
  loggedIn,
  userInfo,
  isWalletChecked,
  newDesignFlag,
  UAisMobile
}) {
  const [checked, setChecked] = useState(isWalletChecked);
  useEffect(() => {
    // here global state and local state are opposite to each other after first render
    // bcz when user dispatches the action local state is updated immediately but global state don't update immediately.
    if (loggedIn) {
      getCreditBalanceRequest();
    }
    if (checked && creditBalance > 1) {
      clevertap.event.push("walletBalanceApplied", {
        platform: "mewebsite",
        PaymentMethod: "customerbalance",
        Name: `${userInfo.firstname} ${userInfo.lastname}`,
        Email: userInfo.email,
        id: userInfo.id,
      });
      applyOrRemoveWalletBalanceRequest({ remove: false });
    }
    if (!checked) {
      applyOrRemoveWalletBalanceRequest({ remove: true });
    }
  }, [checked]);
  const toggle = () => setChecked(!checked);

  function applicableBalance(bal) {
    return ((bal / 100) * config.applicableWalletPercentage).toFixed(2) > 1000 ? 1000 : ((bal / 100) * config.applicableWalletPercentage).toFixed(2)
  }

  if (!creditBalance) {
    return null;
  }
  return (
    <Fragment>
      {newDesignFlag &&
        <NDwrapper isMobile={UAisMobile}>
          <div className="bdColLeft">
            <FlexDiv>
              <Checkbox checked={isWalletChecked} onChange={toggle} />{BRAND_NAME} Wallet Balance
            </FlexDiv>
            <FlexDiv>
              <Image style={{ height : '1.6rem', width : '1.6rem' }} src="https://mamaearthp.imgix.net/wysiwyg/wallets2x.png?auto=format" className="walletIcon"></Image>
              <span className="applicableAmount">₹{applicableBalance(creditBalance)}</span>
            </FlexDiv>
          </div>    
          <span className="availableAmount">
            70% of {creditBalance.toFixed(2)} upto 1000 is Eligible
          </span>
        </NDwrapper>
      }
      {!newDesignFlag && 
        <Wrapper>
          <Checkbox checked={isWalletChecked} onChange={toggle} />
          <span>
            {BRAND_NAME} Wallet Balance: ₹{applicableBalance(creditBalance)} (70%&nbsp;of&nbsp;{creditBalance.toFixed(2)}&nbsp;upto 1000 is Eligible)
        </span>
        </Wrapper>
      }
    </Fragment>
  );
}

function mapStateToProps() {
  return createStructuredSelector({
    creditBalance: makeSelectCreditBalance(),
    loggedIn: makeSelectLoggedIn(),
    userInfo: makeSelectUserInfo(),
    isWalletChecked: makeSelectWalletChecked()
  });
}

function mapActionsToProps(dispatch) {
  return bindActionCreators({
    applyOrRemoveWalletBalanceRequest: actionTypes.applyOrRemoveWalletBalanceRequest,
    getCreditBalanceRequest: accountActionTypes.getCreditBalanceRequest,
  }, dispatch);
}

export default connect(mapStateToProps, mapActionsToProps)(WalletBalance);
