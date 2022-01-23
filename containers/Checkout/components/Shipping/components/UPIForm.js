import React, { Component, Fragment } from 'react';
import { pathOr, path } from 'ramda';
import { Row, Col } from 'react-styled-flexboxgrid';
import config from 'config/env';
import cogotoast from 'lib/toast';
import PaymentStrip from './PaymentStrip';
import Button from 'shared/components/Button';
import MobileOffStrip from './MobileOffStrip';
import StyledDesktopPayButton from './StyledDesktopPayButton';
let rzp;
import { placeOrder as PlaceOrder } from 'lib/analytics/datalayer';
import { PREPAID_LIMIT } from 'utils/constants';

export default class UPIForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upiID: '',
      isVerifying: false,
    };
  }

  componentDidMount() {
    rzp = new Razorpay({
      key: config.rzpKey,
    });
  }

  changeHandlerUpi = (event) => {
    this.setState({ upiID: event.target.value });
  };

  userId = this.props.user.id ? this.props.user.id : this.props.user
  dataLayerFn = (USERID, VALUE, METHOD) => {
    PlaceOrder(USERID, VALUE, METHOD)
  }

  UPIClickHandler = () => {
    const grandTotal = path([0, 'value'], this.props.totalSegments.filter((item) => item.code == "grand_total_adjusted"))

    if (grandTotal > PREPAID_LIMIT) {
      this.props.alertStateHandler(true);
      this.dataLayerFn(this.userId, false, "UPI")
      return;
    }

    if (!this.props.isValid) {
      this.props.setCheckError(true);
      this.dataLayerFn(this.userId, false, "UPI")
      return;
    }
    const tabContainer = document.querySelector('#payment-heading')
    tabContainer.scrollIntoView();
    if (!this.state.upiID || this.state.upiID.trim() === '') {
      cogotoast.error('Please fill UPI ID');
      this.dataLayerFn(this.userId, false, "UPI")
      return;
    }
    this.setState({ isVerifying: true });
    rzp
      .verifyVpa(this.state.upiID)  
      .then((result) => {
        this.setState({ isVerifying: false });
        this.dataLayerFn(this.userId, true, "UPI")
        this.props.placeOrderRequest({
          method: 'upi',
          methodFields: { vpa: this.state.upiID },
        });
      })
      .catch((error) => {
        this.setState({ isVerifying: false });
        console.log(error);
        cogotoast.error('UPI ID is invalid');
        this.dataLayerFn(this.userId, false, "UPI")
        return;
      });
      
  };

  render() {
    let payMobileAmount = '';
    let payDesktopAmount = '';
    try {
      const totalSegments = this.props.totalSegments || [];
      const grandTotal = this.props.totalSegments && pathOr(
        '',
        [0, 'value'],
        totalSegments.filter(item => item.code === 'grand_total_adjusted'),
      );

      payMobileAmount = `( ₹ ${grandTotal.toFixed(2)} )`;
      payDesktopAmount = `₹ ${grandTotal.toFixed(2)}`;
    } catch (error) {
      console.log(error);
    }

    return (
      <Fragment>
        <Row>
          <Col xs={12}>
            <p className="reset-p paymentSubtitle">Enter UPI ID&nbsp;&nbsp;(Google Pay, BHIM, PhonePe & more)</p>
            <input
              className="inputField"
              placeholder="Enter your UPI ID"
              label="UPI/QR"
              type="text"
              id="upiPayment"
              name="upiPayment"
              onChange={this.changeHandlerUpi}
            />

            <StyledDesktopPayButton className="mobileHidden payNowBtn" name="upiButton" type="button" onClick={this.UPIClickHandler}>
              PLACE ORDER
            </StyledDesktopPayButton>

            <div className="bottom-fixed-container">
              <MobileOffStrip />
              <Button className="mobile-button payNowBtn" name="upiButton" type="button" onClick={this.UPIClickHandler}>
                {`PLACE ORDER ${payMobileAmount}`}
              </Button>
            </div>

            <div className="mobileHidden">
              <PaymentStrip />
            </div>
            {this.state.isVerifying && (
              <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
              </div>
            )}
            {this.state.isVerifying && <div className="loadingText">Verifying your VPA</div>}
          </Col>
        </Row>
      </Fragment>
    );
  }
}
