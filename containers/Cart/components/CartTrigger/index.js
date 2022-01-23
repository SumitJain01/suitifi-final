import { getCreditBalanceRequest } from 'containers/Account/redux/actions';
import { makeSelectCreditBalance } from 'containers/Account/redux/selectors';
import { logoutRequest } from 'containers/Auth/redux/actions';
import { makeSelectLoggedIn, makeSelectUser } from 'containers/Auth/redux/selectors';
import { makeSelectCartCategoryName, makeSelectCartProductIds, makeSelectCartProductName, makeSelectTotalProductQty } from 'containers/Cart/redux/selectors';
import { makeSelectAppliedCouponCode, makeSelectTotals, makeUTMParams } from "containers/Checkout/redux/selectors";
import { dataLayerFn } from 'lib/analytics/datalayer';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { noop } from 'ramda-adjunct';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { CartIcon } from 'shared/components/PageLayout/Header/Mobile/SvgIcons';
import styled from 'styled-components';
import theme from 'theme/index';
import DesktopAccountDropdown from '../DesktopAccountDropdown';

function CartTrigger({
  clickHandler,
  itemCount,
  isLoggedIn,
  user,
  getCreditBalanceRequest,
  className,
}) {
  const name = isLoggedIn ? `${user.firstName} ${user.lastName}` : undefined;
  const { email, phone, id } = user;
  const router = useRouter();
  if (isLoggedIn) {
    getCreditBalanceRequest();
  }
  function onClickHandler() {
    clickHandler();
    dataLayerFn(user.id)
  }
  return (
    <div className={className}>
      <Trigger className="cart-trigger" onClick={onClickHandler}>
        <IconContainer className="cart-icon-container">
          <i className="cart-icon">
            <CartIcon />
          </i>
          {itemCount !== 0 && <span className="item-count">{itemCount}</span>}
        </IconContainer>
        <div className="icon-label">Cart</div>
      </Trigger>
    </div>
  );
}

const IconContainer = styled.div`
  cursor: pointer;

  .cart-icon svg,
  svg.user-account-icon {
    color: ${theme.general.primaryColor};
    width: 18px;
    height: 18px;
  }

  .cart-icon svg {
    stroke-width: 1.8px;
  }
  .cart-icon .path-selector {
    fill: ${theme.general.primaryColor};
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
    font-family: Roboto, sans-serif;
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

    .cart-icon svg {
      width: 20px;
      height: 20px;
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
    .cart-icon svg {
      width: 22px;
      height: 22px;
    }
    
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
  grid-column-gap: 1.5rem;
  cursor: pointer;

  .icon-label {
    display: none;
  }

  .cart-icon-container {
    position: relative;
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
      background-color: ${props => props.theme.general.primaryColor};
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

const StyledTrigger = styled(CartTrigger)`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 0rem;

  .cart-trigger {
    grid-area: 1 / 2;
  }

  .user-account-trigger {
    grid-area: 1 / 1;
  }

  @media only screen and (min-width: 1024px) {
    .cart-trigger {
      grid-area: 1 / 1;
    }

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

CartTrigger.propTypes = {
  clickHandler: PropTypes.func,
  itemCount: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  isLoggedIn: PropTypes.bool,
  user: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  logout: PropTypes.func,
  className: PropTypes.string,
};

CartTrigger.defaultProps = {
  clickHandler: noop,
  itemCount: false,
  isLoggedIn: false,
  logout: noop,
  open: false,
};

const mapDispatchToProps = dispatch => ({
  logout: bindActionCreators(logoutRequest, dispatch),
  getCreditBalanceRequest: bindActionCreators(getCreditBalanceRequest, dispatch),
});

const mapStateToProps = createStructuredSelector({
  isLoggedIn: makeSelectLoggedIn(),
  user: makeSelectUser(),
  creditBalance: makeSelectCreditBalance(),
  trackingData: makeUTMParams(),
  coupon: makeSelectAppliedCouponCode(),
  walletBalance: makeSelectCreditBalance(),
  quantity: makeSelectTotalProductQty(),
  categoryName:makeSelectCartCategoryName(),
  total: makeSelectTotals(),
  productName: makeSelectCartProductName(),
  productID: makeSelectCartProductIds(),
});

export default connect(mapStateToProps, mapDispatchToProps)(StyledTrigger)
