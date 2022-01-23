/* eslint-disable react/no-danger */
import React from 'react';
import Ul from 'shared/components/Html/Ul';
import Li from 'shared/components/Html/Li';
import Link from 'next/link';
import Flex from 'shared/components/Flex';
import Icon from 'react-icons-kit';
import { useRouter } from "next/router";
import { user } from 'shared/components/Icons';
import { makeSelectUser } from "containers/Auth/redux/selectors";
import { makeSelectUserInfo } from "containers/Account/redux/selectors";
import { makeSelectTotalProductQty } from "containers/Cart/redux/selectors";
import { makeUTMParams } from "containers/Checkout/redux/selectors";
import { createStructuredSelector } from 'reselect';
import { compose, propOr } from 'ramda';
import { connect } from 'react-redux';
import makeClevertap from "lib/makeClevertap";
import styled from 'styled-components';
import { topBarLinks, TOPBAR_USP_STRING } from 'utils/constants';

const mapOfBlockNames = {
  '/': 'home-offer-bar',
  '/product': 'pdp-offer-bar',
  '/products': 'plp-offer-bar',
};

const getNameFromRoute = name => mapOfBlockNames[name];

function TopBar({ className, pathname, asPath, isLoggedIn, userInfo, quantity, trackingData, offerStripData }) {
  const router = useRouter();
  const clevertap = makeClevertap();
  function selectOfferStripClevertap() {
    clevertap.event.push("selectOfferStrip", {
        ...trackingData,
        platform: "mewebsite",
        timeStamp: new Date().getTime(),
        ...(userInfo && {
            userName: userInfo.firstName + " " + userInfo.lastName,
            email: userInfo.email,
            phone: userInfo.phone,
            gaUserId: userInfo.id,
        }),
        quantity,
        clickSource: router.asPath.split("/").slice(-1)[0],
        clickUrl: router.asPath,
    });
  }
  const stripData = (offerStripData && offerStripData.items && offerStripData.items[0] && offerStripData.items[0].fields) || {};

  const accountUrl = isLoggedIn ? '/my-account' : '/';
  return (
    <Flex className={className} align="space-between" flexDir="column">
      <Ul>
        <Li>
          {
            stripData.hasOwnProperty('homepageDesktopPermanentHeaderText2') && stripData.hasOwnProperty('homepageDesktopPermanentHeaderLink2') 
            ?
              <Link prefetch={false} href={stripData.homepageDesktopPermanentHeaderLink2}>
                <a>{stripData.homepageDesktopPermanentHeaderText2}</a>
              </Link>
            :
              stripData.hasOwnProperty('homepageDesktopPermanentHeaderText1') &&
              <div style={{color: "#ffffff"}}>
                {stripData.homepageDesktopPermanentHeaderText2}
              </div>
          }
        </Li>
        <Li onClick={() => selectOfferStripClevertap()}>
          {asPath === '/checkout' 
          ? 
            stripData.hasOwnProperty('checkoutDesktopPermanentHeaderText1') && stripData.checkoutDesktopPermanentHeaderText1
          :
            stripData.hasOwnProperty('homepageDesktopPermanentHeaderText1') && stripData.hasOwnProperty('homepageDesktopPermanentHeaderLink1') 
            ? 
              (
                <div>
                  <Link prefetch={false} href={stripData.homepageDesktopPermanentHeaderLink1}>
                      <a style={{color: "#ffffff"}} >{stripData.homepageDesktopPermanentHeaderText1}</a>
                  </Link>
                </div>
              )
            :
              stripData.hasOwnProperty('homepageDesktopPermanentHeaderText1')
              ?
                <div style={{color: "#ffffff"}}>{stripData.homepageDesktopPermanentHeaderText1}</div>
              : 
                <React.Fragment>
                {
                  topBarLinks && topBarLinks.map((item) => 
                  <a key={item.id} href={item.toLink} target="_blank">{item.title}</a>
                  )
                }
                </React.Fragment>
          }
        </Li>
        <Li>
          <Link prefetch={false} href={accountUrl}><a><Icon icon={user} /></a></Link>
        </Li>
      </Ul>

      <div className="showOnMobile">
        {asPath === '/checkout' 
        ? 
        stripData.hasOwnProperty('checkoutMobilePermanentHeaderText1') && stripData.checkoutMobilePermanentHeaderText1 
        :
        stripData.hasOwnProperty('homepageMobilePermanentHeaderText1') && stripData.hasOwnProperty('homepageMobilePermanentHeaderLink1')
        ?
        <Link prefetch={false} href={stripData.homepageMobilePermanentHeaderLink1}>
          <a style={{color: "#ffffff"}}>{stripData.homepageMobilePermanentHeaderText1}</a>
        </Link>
        :
        stripData.hasOwnProperty('homepageMobilePermanentHeaderText1')
        ?
        <div style={{color: "#ffffff"}}>{stripData.homepageMobilePermanentHeaderText1}</div>
        :
        <a style={{color: "#ffffff"}}>{TOPBAR_USP_STRING}</a>
        }
      </div>
    </Flex>
  );
  
}

const mapStateToProps = createStructuredSelector({
  userInfo: makeSelectUser(),
  trackingData: makeUTMParams(),
  quantity: makeSelectTotalProductQty(),
});

const styledTopBar = styled(TopBar)`
  background-color: ${({ theme }) => theme.general.primaryColor};
  color: #fff;
  padding-left: 2vw;
  padding-right: 2vw;
  font-size: 0.8rem;
  background-repeat:no-repeat;
  background-size:100% 100%;

  .showOnMobile {
    display: block;
    line-height:1.44rem !important;
    font-size: 1rem;
    text-align: center;
    margin: 0;
    background-color: ${({ theme }) => theme.general.primaryColor};
    background-repeat:no-repeat;
    background-size:100% 100%;
  }
  ul {
    display:none;
  }

  @media only screen and (min-width: 768px){

    .showOnMobile {
   
      display: none;
    }
    ul {
      display: flex;
      justify-content: space-between;
      padding-top: 4px;
      padding-bottom: 4px;
      
      li {

        p {
          margin-top: 0px;
          margin-bottom: 0px;
        }
        a {
          padding-left: 10px;
          padding-right:  10px;

          &:hover {
            color: #fff;
            text-decoration: underline;

          }
        }
        .searchContainer {
          display: inline-block;
          padding-left: 10px;
        }
      } 
    }

    a {
      color:#fff;
      display: inline-block;
    }
  }
`;

export default connect(mapStateToProps)(styledTopBar);