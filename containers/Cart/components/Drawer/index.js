import OrderSummary from 'containers/Checkout/components/OrderSummary';
import OrderDiscount from "containers/Checkout/components/OrderSummary/OrderDiscount";
import { useRouter } from 'next/router';
import React, { Fragment, memo, useMemo } from 'react';
import Icon from 'react-icons-kit';
import Button from 'shared/components/Button';
import Flex from 'shared/components/Flex';
import { chevronLeft } from 'shared/components/Icons';
import Message from 'shared/components/Message';
import Spinner from 'shared/components/Spinner';
import { AwesomeChevronLeft } from 'shared/components/SVGIcons';
import styled, { css } from 'styled-components';
import theme from 'theme/index';
import CartAnnouncement from '../CartAnnouncement';
import DrawerWrapper from '../styled/DrawerWrapper';
import Title from '../Title';


const BackButton = ({ clickHandler }) => (
  <Fragment>
    <div className="mobile-icon" onClick={clickHandler}>
      <Icon icon={chevronLeft} size={30} fill="#279989" />
    </div>
    <div className="desktop-icon" onClick={clickHandler}>
      <AwesomeChevronLeft fill="#279989" />
    </div>
  </Fragment>
);

function CartDrawer({
  open,
  clickHandler,
  wishlist,
  loading,
  cartItemsLength,
  user,
  cashBack,
  cartMessage,
  className,
  trackingData,
  addresses,
  total,
  totalSegments,
  quantity,
  walletBalance,
  categoryName,
  productName,
  closeCartExplicitly,
  ...props
}) {
  const summary = useMemo(() => <OrderSummary closeCart={clickHandler} />);
  const pose = open ? 'open' : 'closed';
  const isWishlist = open === 'wishlist';
  const isEmpty = isWishlist ? wishlist.length === 0 : cartItemsLength === 0;
  const router = useRouter();

  return (
    <div className={`${className} cart-drawer__wrapper`}>
      <DrawerWrapper pose={pose}>
        <CartWrapper isEmptyCart={cartItemsLength === 0}>
          <CustomMessage>
            <CartAnnouncement totalSegments={totalSegments} cartMessage={cartMessage} />
          </CustomMessage>
          <CartHeader
            className="cart-header"
            align="center"
          >
            <BackButton clickHandler={clickHandler} />
            <Title pose={open ? "open" : "closed"}>
              {isWishlist ? (
                "Your Wishlist"
              ) : (
                <Fragment>
                  Your Cart{" "}
                  {Boolean(cartItemsLength) && (
                    <span className="items-count">({cartItemsLength})</span>
                  )}
                </Fragment>
              )}
            </Title>
          </CartHeader>
          {loading && isEmpty && (
            <Flex justify="center" style={{ marginTop: "2rem" }}>
              {" "}
              <Spinner />{" "}
            </Flex>
          )}
          {summary}
        </CartWrapper>
      </DrawerWrapper>
      {Boolean(cartItemsLength) && open && (
        <div className="drawer-footer__container">
          <OrderDiscount />
          <div>
            <a>
              <StyledButton
                onClick={() => {
                  router.replace('/checkout')
                  closeCartExplicitly();
                }}
              >
                Proceed to Pay
              </StyledButton>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
const CustomMessage = styled(Message)`
  margin: 0px;
  font-size: 0.9rem;
  padding: 13px 6px;
  background-color: ${({ theme }) => theme.general.primaryColor};
`;

const CartHeader = styled(Flex)`
  color: ${({ theme }) => theme.general.primaryColor};
  box-shadow: 0px 3px 6px #0000001f;
  line-height: 1.4em;
  padding-top: 8px;
  padding-bottom: 8px;

  @media only screen and (min-width: 768px) {
    padding-top: 10px;
    padding-bottom: 10px;

    .desktop-icon svg {
      height: 16px;
    }
  }
`;

const CartWrapper = styled.div`
  height: 100%;
  ${(props) =>
    !props.isEmptyCart &&
    css`
      overflow-y: scroll;
    `}

  scrollbar-width: thin;
  scrollbar-color: #ffffff;

  /* Works on Chrome/Edge/Safari */
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: #ffffff;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #c1c1c1;
  }
`;

const StyledCartDrawer = styled(CartDrawer)`
  .desktop-icon,
  .mobile-icon {
    cursor: pointer;
    color: #279989;
    padding-left: 1rem;
  }

  .mobile-icon svg {
    width: 1.4rem;
    height: 1.4rem;
  }
  .desktop-icon {
    display: none;
  }

  .drawer-footer__container {
    width: 100%;
    margin-top: auto;
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 200;
    max-width: 410px;
    @media (max-width: 540px) {
      max-width: 90vw;
    }
  }

  @media only screen and (min-width: 768px) {
    .mobile-icon {
      display: none;
    }
    .desktop-icon {
      display: initial;
    }
  }
`;


const StyledButton = styled(Button)`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.2em;
  letter-spacing: 1px;
  padding-top: 0.9rem;
  padding-bottom: 0.9rem;
  width: 100%;
  background-color: ${theme.general.primaryColor};

  @media only screen and (min-width: 768px) {
    font-size: 1.2rem;
    font-weight: 700;
  }
`;

export default memo(StyledCartDrawer);
