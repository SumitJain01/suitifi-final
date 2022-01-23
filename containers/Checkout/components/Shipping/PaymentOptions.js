import React, { Component, Fragment } from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import Gap from 'shared/components/Gap';
import Button from 'shared/components/Button';
import Image from 'shared/components/Image';
import Icon from 'react-icons-kit';
import { CashIcon } from 'shared/components/SVGIcons';
import { paypal, money, bank, wallet, card, x } from 'shared/components/Icons';
import {
  placeOrderRequest, closePaymentFailed, cancelOrderRequest,
  setPaymentMethod, reinitializeCheckout, setCustomCheckoutPaymentMethod
} from 'containers/Checkout/redux/actions';
import SegmentationTitle from 'shared/components/SegmentationTitle';
import { path, pathOr } from 'ramda';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import {
  makeSelectAvailablePaymentMethods, makeSelectOrderInfo,
  makeSelectOrderMeta, makeSelectpaymentEntity,
  makeSelectPaymentError, makeSelectPaymentErrorMessage,
  makeSelectSelectedPaymentMethod, makeSelectHasPlacedOrder,
  makeSelectIncrementId, makeSelectTotalSegments, makeSelectIsInStock,
  makeSelectCODAvailability
} from 'containers/Checkout/redux/selectors';
import { makeSelectUser } from 'containers/Auth/redux/selectors'
import { makeSelectMagentoCartId } from 'containers/Cart/redux/selectors';
import PaymentStrip from './components/PaymentStrip';
import CreditDebitCardsForm from './components/CreditDebitCardsForm';
import NetBankingForm from './components/NetBankingForm';
import WalletsForm from './components/WalletsForm';
import UPIForm from './components/UPIForm';
import PayOnDelivery from './components/PayOnDelivery';
import Wrapper from './components/Wrapper';
import Message from 'shared/components/Message';
import Link from 'next/link';
import cogoToast from 'lib/toast';
import { RadioInActive, RadioActive } from './components/Wrapper';
import WalletBalance from 'containers/Checkout/components/OrderSummary/WalletBalance';
import Payment_group855 from 'shared/components/SVGIcons/payment_group855';
import Heading from 'containers/Checkout/components/styled/Heading';
import dynamic from 'next/dynamic';
import { placeOrder as PlaceOrder } from 'lib/analytics/datalayer';
import { COD_LIMIT, PREPAID_LIMIT } from 'utils/constants'
import theme from 'theme/index';

const TransActionAlert = dynamic(() => import('shared/components/TransactionVelocityAlert'), { ssr: false });


class PaymentOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentMethod: '',
      currentTab: 0,
      banksArray: [],
      isMobile: false,
      data: [
        // {
        //   id: '1',
        //   name: 'UPI',
        //   title: 'Pay Using UPI ID',
        //   icon: <Image src="static/mamaearth/group_737.svg" className="btn-tabs-image" />,
        //   icon2: <Image src="static/mamaearth/group_737_1.svg" className="btn-tabs-image" />,
        // },
        // {
        //   id: '2',
        //   name: 'Credit/Debit Card',
        //   title: 'Pay Using Credit or Debit Cards',
        //   icon: <Icon icon={card} />,
        // },
        // {
        //   id: '3',
        //   name: 'Net Banking',
        //   title: 'Net Banking',
        //   icon: <Icon icon={bank} />,
        // },
        // {
        //   id: '4',
        //   name: 'Wallets',
        //   title: 'Pay Using Online Wallets',
        //   icon: <Icon icon={wallet} />,
        // },
        // {
        //   id: '5',
        //   name: 'Paypal',
        //   title: 'Pay Via Paypal',
        //   icon: <Icon icon={paypal} />,
        // },
        {
          id: '6',
          name: 'Cash on Delivery',
          title: 'Cash on Delivery',
          icon: <Icon icon={money} />,
        },
      ],
      alertState: false,
      isAlertForOnline: true,
    };
  }

  setAlertState = (state) => {
    this.setState({ alertState: state })
  }
  
  handleClick(currentTab) {
    if (currentTab == 5 && !this.props.isCODAvailable) {
      cogoToast.error('COD option is not available for this pin code, Please try with other payment options');
      return;
    }
    const grandTotal = path([0, 'value'], this.props.totalSegments.filter((item) => item.code == "grand_total_adjusted"))
    if ([0, 1, 2, 3, 4].includes(currentTab) && grandTotal > PREPAID_LIMIT) {
      this.setState({
        alertState: true,
        isAlertForOnline: true
      })
      return;
    }
    else if (currentTab == 5 && grandTotal > COD_LIMIT) {
      this.setState({
        alertState: true,
        isAlertForOnline: false
      })
      return;
    }
    if (!this.props.isValid) {
      this.props.setCheckError(true)
      return;
    }
    this.setState({ currentTab });
    if (currentTab === 4) {//for PayPal
      this.props.setCustomCheckoutPaymentMethod({
        name: this.props.methodsAvailable[1],
        previousPaymentMethod: this.props.selectedPaymentMethod
      })
    }
    //for COD
    else if (currentTab === 5) {
      this.props.setPaymentMethod(this.props.methodsAvailable[2]);
      // if you are not geeting COD as options in the array then probably you need to add SKU (Free ones) in the makeSelectWhetherCartHasFreeStuff
      //setPaymentMethod is not a typo, it is necessary.
    }
    else {
      this.props.setCustomCheckoutPaymentMethod({
        name: this.props.methodsAvailable[0],
        previousPaymentMethod: this.props.selectedPaymentMethod
      })
    }
  }

  componentDidMount() {
    let isMobile = window.screen.width < 768;
    this.setState({ isMobile: isMobile });
  }

  componentDidUpdate(prevProps) {
    if (this.props.methodsAvailable != prevProps.methodsAvailable) {
      if(!this.props.methodsAvailable.includes('free') && this.props.selectedPaymentMethod=='free'){
        this.props.setPaymentMethod(this.props.methodsAvailable[0]);
        this.setState({ currentTab: 1 })
      }
      if (this.props.methodsAvailable.includes('free') && this.props.selectedPaymentMethod != 'free') {
        this.props.setPaymentMethod('free');
        this.setState({ currentTab: -1 })
      }
    }
  }
  
  placeFreeOrder = () => {
    this.props && this.props.user && this.props.user.id && PlaceOrder(this.props.user.id, true, "free")
    window.__NEXT_REDUX_WRAPPER_STORE__.dispatch(placeOrderRequest());
  }

  render() {
    const isFree = this.props.methodsAvailable.includes('free');
    let orderData = {}
    let payMobileAmount = '';
    try {
      const totalSegments = this.props.totalSegments || [];
      const grandTotal =
        this.props.totalSegments &&
        pathOr(
          '',
          [0, 'value'],
          totalSegments.filter(item => item.code === 'grand_total_adjusted'),
        );

      payMobileAmount = `( ₹ ${grandTotal.toFixed(2)} )`;
    } catch (error) {
      console.log(error);
    }

    return (
      <Wrapper isNewPaymentUI={this.props.isNewPaymentUI}>
        <Grid fluid>
          {/* new Design */}
          {this.props.isNewPaymentUI && <Row>
            <Col xs={12} md={12}>
              <Gap h="1rem" />
              <Heading>Choose Payment Method</Heading>
              <WalletBalance newDesignFlag={this.props.isNewPaymentUI} UAisMobile={this.props.UAisMobile}></WalletBalance>
              <Gap h="1rem" />
            </Col>
          </Row>}
          {/* old Design */}
          {!this.props.isNewPaymentUI && <Row>
            <Col xs={12} md={5}>
              <SegmentationTitle id="payment-heading">Choose payment method</SegmentationTitle>
            </Col>
            <Col xs={12} md={12}>
              <WalletBalance newDesignFlag={!this.props.isNewPaymentUI} UAisMobile={this.props.UAisMobile}></WalletBalance>
            </Col>
          </Row>}
        </Grid>
        <TransActionAlert
          show={this.state.alertState}
          showHandler={this.setAlertState}
          online={this.state.isAlertForOnline} />
        {
          this.props.paymentError && <Grid fluid>
            <Row>
              <Col xs={12} md={12} ls={12}>
                {this.props.paymentErrorMessage.error == "Payment failed" &&
                  <Message style={{ backgroundColor: '#3ca0da34', color: '#333333', border: '1px solid #41a8dd', borderRadius: '5px' }}>
                    <Row>
                      <Col xs={11} md={11} lg={11}>
                        Payment Failed, if amount is deducted from your account, it will be refunded.
                        To check order status Click
                      <Link prefetch={false} href="/my-account/orders">
                          <a style={{ color: '#111111' }}> here</a>
                        </Link>
                      </Col>
                      <Col xs={1} md={1} lg={1}>
                        <Icon size={32} style={{ marginLeft: 10, position: 'relative', top: '50%', transform: 'translateY(-50%)' }} icon={x} onClick={() => this.props.closePaymentFailed()} />
                      </Col>
                    </Row>
                  </Message>
                }
              </Col>
            </Row>
          </Grid>
        }
        {
          !isFree && <div className="tabContainer">
            <div className="tab">
              {this.state.data.map((button, index) => {

                if (button.name === 'Paypal') {
                  return null;
                }
                return (
                  <React.Fragment key={button.name}>
                    <button
                      key={button.name}
                      type="button"
                      className={`${this.state.currentTab === index ? 'isActive ' : ''}tablinks`}
                      onClick={() => this.handleClick(index)}
                    >
                      {
                        this.state.currentTab == index
                          ? <RadioActive customColor={theme.general.primaryColor} />
                          : <RadioInActive customColor={theme.colors.lightGray} />
                      }
                      <span className="buttonText">{button.name}</span>
                      {(index == 5) && (
                        <i className="cash-icon">
                          <CashIcon />
                        </i>
                      )}
                    </button>
                    {/* {(index == 0 && this.state.currentTab == 0 && this.state.isMobile) && <div key={button.name + "form"} className="formMobile">
                      <UPIForm
                        placeOrderRequest={this.props.placeOrderRequest}
                        isValid={this.props.isValid}
                        setCheckError={this.props.setCheckError}
                        totalSegments={this.props.totalSegments}
                        canCheckOut={this.props.canCheckOut}
                        alertStateHandler={this.setAlertState}
                        user={this.props && this.props.user}
                      />
                    </div>}
                    {(index == 1 && this.state.currentTab == 1 && this.state.isMobile) && <div key={button.name + "form"} className="formMobile">
                      <CreditDebitCardsForm
                        placeOrderRequest={this.props.placeOrderRequest}
                        isValid={this.props.isValid}
                        setCheckError={this.props.setCheckError}
                        totalSegments={this.props.totalSegments}
                        canCheckOut={this.props.canCheckOut}
                        alertStateHandler={this.setAlertState}
                        user={this.props && this.props.user}
                      />
                    </div>}
                    {(index == 2 && this.state.currentTab == 2 && this.state.isMobile) && <div key={button.name + "form"} className="formMobile">
                      <NetBankingForm
                        isMobile={this.state.isMobile}
                        placeOrderRequest={this.props.placeOrderRequest}
                        isValid={this.props.isValid}
                        setCheckError={this.props.setCheckError}
                        totalSegments={this.props.totalSegments}
                        canCheckOut={this.props.canCheckOut}
                        alertStateHandler={this.setAlertState}
                        user={this.props && this.props.user}
                      />
                    </div>}
                    {(index == 3 && this.state.currentTab == 3 && this.state.isMobile) && <div key={button.name + "form"} className="formMobile">
                      <WalletsForm
                        placeOrderRequest={this.props.placeOrderRequest}
                        isValid={this.props.isValid}
                        setCheckError={this.props.setCheckError}
                        orderData={orderData}
                        totalSegments={this.props.totalSegments}
                        canCheckOut={this.props.canCheckOut}
                        alertStateHandler={this.setAlertState}
                        user={this.props && this.props.user}
                      />
                    </div>} */}
                    {(index == 0 && this.state.currentTab == 0 && this.state.isMobile) && <div key={button.name + "form"} className="formMobile">
                      <PayOnDelivery
                        placeOrderRequest={this.props.placeOrderFunction}
                        isValid={this.props.isValid}
                        setCheckError={this.props.setCheckError}
                        orderData={orderData}
                        totalSegments={this.props.totalSegments}
                        canCheckOut={this.props.canCheckOut}
                        alertStateHandler={this.setAlertState}
                        user={this.props && this.props.user}
                        isCODAvailable={this.props.isCODAvailable}
                      />
                    </div>}
                  </React.Fragment>
                )
              }
              )}
            </div>

            <div className="tabcontent">
              {this.state.currentTab !== -1 &&
                <Fragment>
                  <Row className="payment-option-title">
                    <Col xs={6}>
                      <p className="reset-p paymentTitle">{this.state.data[this.state.currentTab]?.title}</p>
                    </Col>

                    {(this.state.currentTab >= 0 && this.state.currentTab < 5) && (
                      <Col xs={6}>
                        <div className="online-pay-off">
                          <span className="pay-off-title">Applied</span>
                          <span className="pay-off-subtitle"> : Extra 10% Off with Your Order</span>
                        </div>
                      </Col>
                    )}
                  </Row>
                  {/* {this.state.currentTab == 0 && !this.state.isMobile &&
                    <UPIForm
                      placeOrderRequest={this.props.placeOrderRequest}
                      isValid={this.props.isValid}
                      setCheckError={this.props.setCheckError}
                      orderData={orderData}
                      totalSegments={this.props.totalSegments}
                      canCheckOut={this.props.canCheckOut}
                      alertStateHandler={this.setAlertState}
                      user={this.props && this.props.user}
                    />
                  }
                  {this.state.currentTab == 1 && !this.state.isMobile &&
                    <CreditDebitCardsForm
                      placeOrderRequest={this.props.placeOrderRequest}
                      isValid={this.props.isValid}
                      setCheckError={this.props.setCheckError}
                      orderData={orderData}
                      totalSegments={this.props.totalSegments}
                      canCheckOut={this.props.canCheckOut}
                      alertStateHandler={this.setAlertState}
                      user={this.props && this.props.user}
                    />
                  }
                  {this.state.currentTab == 2 && !this.state.isMobile &&
                    <NetBankingForm
                      placeOrderRequest={this.props.placeOrderRequest}
                      data={this.state.banksArray}
                      isValid={this.props.isValid}
                      setCheckError={this.props.setCheckError}
                      orderData={orderData}
                      totalSegments={this.props.totalSegments}
                      canCheckOut={this.props.canCheckOut}
                      alertStateHandler={this.setAlertState}
                      user={this.props && this.props.user}
                    />
                  }
                  {this.state.currentTab == 3 && !this.state.isMobile &&
                    <WalletsForm
                      placeOrderRequest={this.props.placeOrderRequest}
                      isValid={this.props.isValid}
                      setCheckError={this.props.setCheckError}
                      orderData={orderData}
                      totalSegments={this.props.totalSegments}
                      canCheckOut={this.props.canCheckOut}
                      alertStateHandler={this.setAlertState}
                      user={this.props && this.props.user}
                    />
                  } */}
                  {this.state.currentTab == 0 && !this.state.isMobile &&
                    <PayOnDelivery
                      placeOrderRequest={this.props.placeOrderFunction}
                      isValid={this.props.isValid}
                      setCheckError={this.props.setCheckError}
                      orderData={orderData}
                      totalSegments={this.props.totalSegments}
                      canCheckOut={this.props.canCheckOut}
                      alertStateHandler={this.setAlertState}
                      user={this.props && this.props.user}
                      isCODAvailable={this.props.isCODAvailable}
                    />
                  }
                </Fragment>
              }
              {
                this.state.currentTab == -1 &&
                <div className="PaymentBanner">
                  <div className="heading">Choose Payment Options</div>
                  <div className="subheading">for smooth transaction</div>
                  <Payment_group855 className="paymentImage" />
                  <PaymentStrip />
                </div>
              }
            </div>
          </div>
        }
        {
          isFree && !this.state.isMobile &&
          <Button className="payNowBtn bottom-fixed-container" onClick={() => { this.placeFreeOrder() }}>PLACE ORDER</Button>
        }
      </Wrapper >
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  setPaymentMethod,
  reinitializeCheckout,
  cancelOrderRequest,
  closePaymentFailed,
  setCustomCheckoutPaymentMethod,
  placeOrderRequest
}, dispatch);

const mapStateToProps = createStructuredSelector({
  methodsAvailable: makeSelectAvailablePaymentMethods(),
  orderInfo: makeSelectOrderInfo(),
  paymentEntity: makeSelectpaymentEntity(),
  orderMeta: makeSelectOrderMeta(),
  cartId: makeSelectMagentoCartId(),
  hasPlacedOrder: makeSelectHasPlacedOrder(),
  paymentError: makeSelectPaymentError(),
  paymentErrorMessage: makeSelectPaymentErrorMessage(),
  selectedPaymentMethod: makeSelectSelectedPaymentMethod(),
  incrementId: makeSelectIncrementId(),
  totalSegments: makeSelectTotalSegments({ isCheckoutPage: true }),
  canCheckOut: makeSelectIsInStock(),
  user: makeSelectUser(),
  isCODAvailable: makeSelectCODAvailability()
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentOptions);