import React, { useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { compose, propOr } from 'ramda';
import Flex from 'shared/components/Flex';
import makeClevertap from "lib/makeClevertap";
import dataLayer from 'lib/gtmDataLayer';
import * as checkoutActionCreators from 'containers/Checkout/redux/actions';
import { makeSelectAppliedCouponCode, makeSelectCouponError, makeSelectOrderInfo, makeSelectLoading, makeSelectTotals} from 'containers/Checkout/redux/selectors';
import { makeSelectUserInfo, makeSelectCreditBalance } from 'containers/Account/redux/selectors';
import { makeSelectTotalProductQty,makeSelectCartCategoryName, makeSelectMagentoCartId } from "containers/Cart/redux/selectors";
import { makeUTMParams } from "containers/Checkout/redux/selectors";
import { makeSelectUser } from "containers/Auth/redux/selectors";
import SegmentationTitle from 'shared/components/SegmentationTitle';
import { ErrorBadgeIcon, VerifiedBadge } from 'shared/components/SVGIcons';

const Htag = styled.div`
  color: #1D1D1D;
  font-size: 1.1rem;
  line-height: 1.2em;
  font-weight: 500;
`;

const clevertap = makeClevertap();

function CouponManager({
  appliedCouponCode,
  couponError,
  applyCouponCodeRequest,
  orderInfo,
  userId,
  className,
  user,
  trackingData,
  walletBalance,
  quantity,
  categoryName,
  cartId,
  total
}) {
  const [couponCode, setCouponCode] = useState('');
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (appliedCouponCode) {
      applyCouponCodeRequest(false);

      dataLayer.push({
        event:"couponRemoved",
        autoRemove: 'No',
        userId:userId?userId:false,
        cartId,
        couponName: appliedCouponCode,
        couponStatus:"Coupon removed successfully",
        cartValue:total.subtotal_incl_tax,
        cartProducts:total.items.map(item=>item.name),
      })

      clevertap.event.push("couponCodeRemoved", {
        couponName: appliedCouponCode,
        ...trackingData,
        userId: userId,
        quantity,
        platform: "mewebsite",
        categoryName,
        pageTitle: process.browser ? document.title : "",
        timeStamp: new Date().getTime(),
        ...(user && {
            userName: user.firstName + " " + user.lastName,
            email: user.email,
            phone: user.phone,
            gaUserId: user.id,
            walletBalance
        }),
      });
      setCouponCode('');
    } else {
      applyCouponCodeRequest(couponCode);
      setCouponCode('');
    }
  }, [couponCode, appliedCouponCode]);

  return (
    <div className={className}>
      <form onSubmit={handleSubmit}>
        {!orderInfo &&
          <SegmentationTitle style={{ marginTop: '0.5rem' }}>
            {appliedCouponCode ? '' : <Htag>Have a coupon?</Htag>}
          </SegmentationTitle>
        }
        <Flex className="width-full coupon-input__container" wrap="no-wrap">
          {!(orderInfo)
            && <StyledInput
              required
              disabled={appliedCouponCode}
              placeholder={"Enter Coupon Code"}
              style={{ flexGrow: '1' }}
              value={appliedCouponCode ? appliedCouponCode : couponCode}
              onChange={e => setCouponCode(e.target.value)}
              type="text" />
          }
          {!orderInfo && <StyledButton className="apply-coupon-btn">{!appliedCouponCode ? 'APPLY' : 'REMOVE'}</StyledButton>}
        </Flex>
      </form>

      <div className="coupon-status">
        {appliedCouponCode && <div className="success"><VerifiedBadge />Coupon applied successfully on this order</div>}
        {couponError && <div className="error"><ErrorBadgeIcon />{couponError}</div>}
      </div>
    </div>
  );
}

const StyledInput = styled.input`
  width: 70%;
  font-size: 0.9rem;
  line-height: 1.2em;
  padding: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${props => props.theme.general.themeFontBlack};
  background: ${props => props.theme.general.lightSecondaryColor};
  border: 1px solid ${props => props.theme.general.secondaryColor};
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  outline: 0px transparent;

  :disabled {
    background-color: #ffffff;
  }

  @media only screen and (min-width: 768px) {
    font-weight: 600;
    width: auto;
  }
`;

const StyledButton = styled.button`
  color: ${props => props.theme.general.primaryColor};
  display: block;
  text-align: center;
  font-size: 1rem;
  padding: 0 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  background-color: #00AFEF0D;
  transition: all 0.2s ease-in-out;

  @media only screen and (min-width: 768px) {
    background-color: ${props => props.theme.general.primaryColor};
    color: white;
    font-weight: 600;
  }
`;

const StyledCouponManager = styled(CouponManager)`
  font-family: Roboto, sans-serif;
  font-weight: 600;
  line-height: 1.4em;
  ${props => props.appliedCouponCode && css`
    margin-top: 1rem;
    ${StyledInput} {
      background: ${props => props.theme.general.lightSecondaryColor};
      border: 1px solid ${props => props.theme.general.secondaryColor};
    }
  `}
  
  .coupon-input__container {
    margin-bottom: 0.75rem;
    border: 1px solid ${props => props.theme.general.primaryColor};
    border-radius: 5px;
  }

  .coupon-status {
    font-weight: 400;
    font-size: 1rem;

    .success {
      margin-bottom: 0.75rem;
      color: ${props => props.theme.general.primaryColor};

      svg path {
        fill: ${props => props.theme.general.primaryColor};
      }
    }

    svg {
      margin-right: 5px;
      vertical-align: text-top;
    }

    .error {
      margin-bottom: 0.75rem;
      color: #ff0000;
    }
  }

  @media only screen and (max-width: 320px) {
    .coupon-input__container {
      input, .apply-coupon-btn {
        padding: 0.5rem;
        letter-spacing: 0px;
      }
      .apply-coupon-btn {
        min-width: 2rem;
        padding: 0.5rem 5px;
        font-size: 0.9rem;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .coupon-status svg {
      vertical-align: middle;
    }
    .coupon-input__container { border: 1px solid #DBDBDB; }
  }
`;


const mapActionsToProps = dispatch => ({
  applyCouponCodeRequest: bindActionCreators(checkoutActionCreators.applyCouponCodeRequest, dispatch),
});

const mapStateToProps = createStructuredSelector({
  appliedCouponCode: makeSelectAppliedCouponCode(),
  couponError: makeSelectCouponError(),
  orderInfo: makeSelectOrderInfo(),
  loading: makeSelectLoading(),
  userId: compose(propOr(false, 'id'), makeSelectUserInfo()),
  user: makeSelectUser(),
  trackingData: makeUTMParams(),
  walletBalance: makeSelectCreditBalance(),
  quantity: makeSelectTotalProductQty(),
  categoryName:makeSelectCartCategoryName(),
  cartId:makeSelectMagentoCartId(),
  total:makeSelectTotals(),
});

export default connect(mapStateToProps, mapActionsToProps)(StyledCouponManager);

