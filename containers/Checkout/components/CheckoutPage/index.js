import config from "config/env";
import { LoadingStateWrapper } from 'hoc/withLoader';
import request from "lib/request";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import Button from 'shared/components/Button';
import Gap from 'shared/components/Gap';
import MESpinner from 'shared/components/Spinner/MESpinner';
import styled from "styled-components";
import { trackCheckout } from 'utils/helpers/checkout/trackOrder';
import detectMobile from 'utils/helpers/mobileDetect';
import AddressSegment from '../AddressSegment';
import CustomPaymentSegment from "../CustomPaymentSegment";
import OrderSummary from '../OrderSummary';

function CheckoutPage({
  reinitializeCheckout,
  currentUIStep,
  setCurrentStep,
  cartProductsArray,
  loading,
  otpLoading,
  placeOrderLoading,
  fetchUserInfo,
  paymentMethod,
  isLoggedIn,
  className,
  grandTotalFromSegment,
  mefe,
  editCartRequest,
  thankyouPageLoading,
  hideSnackBar,
  showLoginPopUp,
}) {
  loading = false;
  const [isValid, setIsValid] = useState(false);
  const [phone, setPhone] = useState(false);
  const [checkError, setCheckError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isNewLoginUI, setIsNewLoginUI] = useState(false);
  const [isNewAddressUI, setIsNewAddressUI] = useState(false);
  const [isNewPaymentUI, setIsNewPaymentUI] = useState(false);
  const [emptyCart, setEmptyCart] = useState(true);
  const [inStockloading, setInStockloading] = useState(true);

  let checkInStockStatus = () => {
    let outOfStockItems = [];
    let isInStock = true;
    cartProductsArray.map(async (item) => {
      const data = await request(`https://tdc-nd-api.honasa-staging.net/v1/products/inStock/${item.sku}`);
      if (data.stock_status === 0) {
        editCartRequest({ product: item, qty: 0, silentRemove: true })
        isInStock = false;
        outOfStockItems.push(item);
      }
      setInStockloading(false);
    })

    if (!isInStock) {
      cogotoast.info("Some items are Out of Stock, Removing from cart...");
    }
  }

  useEffect(() => {
    if (cartProductsArray.length === 0) {
      setEmptyCart(true);
      setInStockloading(false);
    }
    else {
      setEmptyCart(false);
    }
  }, [cartProductsArray.length])

  useEffect(() => {
    // checkInStockStatus();
    hideSnackBar();
  }, [])

  useEffect(() => {
    setIsMobile(detectMobile());
  }, []);

 

  if (emptyCart) {
    return (
      (thankyouPageLoading)
        ? <SpinnerDiv><MESpinner /></SpinnerDiv>
        :
        <div>
          <Empty>
            <img
              className="empty-cart-img"
              src="https://mamaearthp.imgix.net/Cart.svg"
              alt=""
              width="130px"
            ></img>
            <Gap h="2.5rem" />
            <div className="title">
              {isLoggedIn
                ? <>Your cart is empty!</>
                : <>Missing Cart items?</>
              }
            </div>
            <Gap h="1rem" />
            <div className="subtitle">
              {isLoggedIn
                ? <>Add Goodness to it now.</>
                : <>Login to see the items you added previously <br /> or continue shopping as Guest</>
              }
            </div>
            <Gap h="2.5rem" />
            {
              isLoggedIn
                ?
                <Link prefetch={false} href="/products">
                  <StyledButton center as="a">Shop Now</StyledButton>
                </Link>
                :
                <div className="mobile">
                  <Link prefetch={false} href="/products">
                    <StyledButton className="shoppingCta" center as="a">Continue Shoping</StyledButton>
                  </Link>
                  <a onClick={() => showLoginPopUp()}>
                    <StyledButton className="loginCta" center as="a">Login</StyledButton>
                  </a>
                </div>
            }
          </Empty>
        </div>
    )
  }
  return (
    <Grid
      fluid
      className={className}
    >
      {isMobile ? <Divider /> : null}
      <LoadingStateWrapper loading={otpLoading}>
        <CheckoutWrapper  isMobile={isMobile}>
          <Row className="mainRow">
            <Col xs={12} sm={7} md={7} lg={7}>
              {/* <LoginSegment
                isActive={currentUIStep === 0}
                next={() => setCurrentStep(1)}
                makeActive={() => setCurrentStep(0)}
              /> */}
              <div >
                <AddressSegment
                  isActive={currentUIStep === 1}
                  next={() => setCurrentStep(2)}
                  makeActive={() => setCurrentStep(1)}
                  setValid={setIsValid}
                  setPhone={setPhone}
                  checkError={checkError}
                  setCheckError={setCheckError}
                />
                {!isMobile && (
                  <LoadingStateWrapper loading={loading || placeOrderLoading}>
                    <CustomPaymentSegment
                      isValid={isValid}
                      setCheckError={setCheckError}
                      isNewPaymentUI={isNewPaymentUI}
                      UAisMobile={isMobile}
                    />
                  </LoadingStateWrapper>
                )}
              </div>
            </Col>

            {/* <Col xs={12} sm={5} md={5} lg={5}>
                <LoadingStateWrapper loading={loading}>
                  <div className="oldOrderSummaryWrapper">
                    <Htag>Order Summary</Htag>
                    <OrderSummary isCheckoutPage />
                  </div>
                </LoadingStateWrapper>
            </Col> */}
            {isMobile && (
              <Col xs={12} sm={12} md={7} lg={7}>
                  <LoadingStateWrapper loading={loading || placeOrderLoading}>
                    <CustomPaymentSegment
                      isValid={isValid}
                      setCheckError={setCheckError}
                      isNewPaymentUI={isNewPaymentUI}
                      UAisMobile={isMobile}
                    />
                  </LoadingStateWrapper>       
              </Col>
            )}
          </Row>
        </CheckoutWrapper>
      </LoadingStateWrapper>
    </Grid>
  );
}

const SpinnerDiv = styled.div`
  text-align: center;
  margin: 15rem 0;
`;

const Divider = styled.div`
  border-top: 4px solid #F8F8F8;
  position: relative;
  top: 5.5rem;
  margin: 0px !important;
`;

const Htag = styled.div`
  color: #1D1D1D;
  margin: 1rem 0rem 0rem 1rem;
  font-size: 1.1rem;
  line-height: 1.2em;
  font-weight: 600;
`;

const Empty = styled.div`
  padding-bottom: 5rem;
  font-family: Roboto, sans-serif;
  text-align: center;
  background: #EBF9FF;
  margin: 0 -8vw;
  margin-bottom: -1rem;

  .loginCta {
    margin-left: 1rem;
    background-color: white;
    color: #00AFEF;
    border: 2px solid #00AFEF;
  }

  .shoppingCta{ 
    border: 2px solid #00AFEF;
    margin-right: 1rem;
  }

  .empty-cart-img {
    margin-top: 4rem;
    max-width: 238px;
    margin-right: 2rem;
  }

  .title {
    text-align: center;
    color: #707070;
    font-size: 1.4rem;
    line-height: 1.2em;
    font-weight: 400;
  }
  
  .subtitle {
    color: #707070;
    font-size: 1rem;
    line-height: 1.6em;
    font-weight: 300;
  }

  @media only screen and (max-width: 767px) {
    .loginCta {
      margin-left:0rem;
    }

    .shoppingCta {
      margin-bottom: 1.5rem;
      margin-right: 0rem;
    }

    .mobile {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }

  @media only screen and (min-width: 768px) {
    .subtitle {
      font-size: 0.9rem;
      font-weight: 400;
    }
    .title {
      font-size: 1.3rem;
    }
  }
`;

const StyledButton = styled(Button)`
  display: inline-block;
  width: 180px;
  background-color: #00AFEF;
  color: #fff;
  border-radius: 5px;
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.2em;
  letter-spacing: 0px;
  &:hover, &:active {
    color: #fff;
    background: #00AFEF;
  }

  @media only screen and (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CheckoutWrapper = styled.div`
   margin: 0rem 0.5rem;
  .backdrop {
    background: ${(props) => props.theme.general.lightBg};
    padding: 1em;
  }

  .mainRow {
    border: 1px solid 
      ${({isMobile }) =>
      isMobile ? "transparent" : "#dbdbdb"};
    margin-top: 0.4rem;
    padding-top: 0rem;
    padding-bottom: 0.4rem;
    border-radius: 5px;
  }

  .orderSummaryCheckoutPage {
    border: 1px solid #dbdbdb;
    border-top: 1px solid transparent;
    margin-left: 2rem;
    padding: 0px 10px;
    @media (max-width: 768px) {
      margin-top: 0.4rem;
      margin-left: 0rem;
      border: 1px solid transparent;
      padding: 0px;
    }
  }

  .yourCart {
    font-size: 1.2rem;
    color: #279989;
    background-color: #ffffff;
    padding: 0.6rem 1.2rem;
    box-shadow: 0px 6px 8px -2px #0000001f;
    margin: 0px -11px;
    @media (max-width: 768px) {
      display: none;
    }
  }

  .announcement {
    background-color: #5c5c5c;
    color: #ffffff;
    padding: 0.6rem;
    margin: 0px -10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    text-align: center;
    @media (max-width: 768px) {
      display: none;
    }
  }

  .loginImageDiv {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .oldOrderSummaryWrapper {
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    margin-left: 1rem;
    @media (max-width: 768px) {
      margin: 1rem 0rem;
      margin-top:0px;
    }
  }
`;

export default CheckoutPage;
