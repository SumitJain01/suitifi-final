import React, { Fragment } from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';
import styled from 'styled-components';
import { pathOr } from 'ramda';
import PaymentStrip from './PaymentStrip';
import Button from 'shared/components/Button';
import cogotoast from 'lib/toast';
import CheckOption from './CheckOption';
import StyledDesktopPayButton from './StyledDesktopPayButton';
import MobileOffStrip from './MobileOffStrip';
import { path } from 'ramda';
import { placeOrder as PlaceOrder } from 'lib/analytics/datalayer';
import { PREPAID_LIMIT } from 'utils/constants';


class WalletsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      w1: false,
      w2: false,
      w3: false,
      w4: false,
      w5: false,
      walletCode: undefined,
    };
  }

  handleChangeCheckbox = e => {
    //custom event
    this.setState({
      w1: false,
      w2: false,
      w3: false,
      w4: false,
      w5: false,
    });
    const target = e;
    this.setState({
      [target.name]: target.checked,
      walletCode: target.value,
    });
  };

  userId = this.props.user.id ? this.props.user.id : this.props.user
  dataLayerFn = (USERID, VALUE, METHOD) => {
      PlaceOrder(USERID, VALUE, METHOD)
  }

  handleSubmit = () => {
    const grandTotal = path([0, 'value'], this.props.totalSegments.filter((item) => item.code == "grand_total_adjusted"))

    if (grandTotal > PREPAID_LIMIT) {
      this.props.alertStateHandler(true);
      this.dataLayerFn(this.userId, false, "Wallet")
      return;
    }
    
    if (!this.props.isValid) {
      this.props.setCheckError(true);
      this.dataLayerFn(this.userId, false, "Wallet")
      return;
    }
    const tabContainer = document.querySelector('#payment-heading')
    tabContainer.scrollIntoView();
    if (this.state.walletCode) {
      this.props.placeOrderRequest({
        method: 'wallet',
        methodFields: { wallet: this.state.walletCode },
      });
      this.dataLayerFn(this.userId, true, "Wallet")
    } else {
      cogotoast.error('Please select a wallet.');
      this.dataLayerFn(this.userId, false, "Wallet")
    }
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
        <Row className={this.props.className}>
          <Col xs={4} sm={3} md={4}>
            <CheckOption
              clickHandler={() => {
                this.handleChangeCheckbox({ value: 'phonepe', name: 'w2', checked: !this.state.w2 });
              }}
              checked={this.state.w2}
              imgClass="phonepe"
              imgSrc="static/mamaearth/phonepe.png"
            />
          </Col>
          {/* <Col xs={4} sm={3} md={4}>
            <CheckOption
              clickHandler={() => {
                this.handleChangeCheckbox({ value: 'amazonpay', name: 'w1', checked: !this.state.w1 });
              }}
              checked={this.state.w1}
              imgClass="amazonpay"
              imgSrc="static/mamaearth/azpay.png"
            />
          </Col> */}
          <Col xs={4} sm={3} md={4}>
            <CheckOption
              clickHandler={() => {
                this.handleChangeCheckbox({ value: 'freecharge', name: 'w3', checked: !this.state.w3 });
              }}
              checked={this.state.w3}
              imgClass="freecharge"
              imgSrc="static/mamaearth/freecharge.png"
            />
          </Col>
          <Col xs={4} sm={3} md={4}>
            <CheckOption
              clickHandler={() => {
                this.handleChangeCheckbox({ value: 'mobikwik', name: 'w4', checked: !this.state.w4 });
              }}
              checked={this.state.w4}
              imgClass="mobikwik"
              imgSrc="static/mamaearth/mobikwik.png"
            />
          </Col>
          {/* <Col xs={4} sm={3} md={4}>
            <CheckOption
              clickHandler={() => {
                this.handleChangeCheckbox({ value: 'olamoney', name: 'w5', checked: !this.state.w5 });
              }}
              checked={this.state.w5}
              imgClass="olaMoneyImage"
              imgSrc="static/mamaearth/olamoney4.png"
            />
          </Col> */}
        </Row>

        <StyledDesktopPayButton className="mobileHidden payNowBtn" name="walletButton" onClick={this.handleSubmit}>
          PLACE ORDER
          {/* PAY <span>{`${payDesktopAmount}`}</span> NOW */}
        </StyledDesktopPayButton>

        <div className="bottom-fixed-container">
          <MobileOffStrip />
          <Button className="mobile-button payNowBtn" name="walletButton" onClick={this.handleSubmit}>
            {`PLACE ORDER ${payMobileAmount}`}
          </Button>
        </div>

        <div className="mobileHidden">
          <PaymentStrip />
        </div>
      </Fragment>
    );
  }
}
// Note: Following Styles Only applied on <Row></Row>
export default styled(WalletsForm)`
  .option-img {
    max-width: 115px;
  }
  .amazonpay.option-img {
    max-width: 99px;
  }
  
  ${Col} {
    margin: 0px;
    :nth-child(n+4) {
      margin-top: 0.375rem;
    }
    
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
      :nth-child(4) {
        margin-top: revert;
      }
      :nth-child(n+5) {
        margin-top: 0.5rem;
      }
    }
  }
  
  @media (max-width: 767px) {
    ${CheckOption} {
      height: 70px;
      justify-content: flex-end;
      
      .option-img {
        margin-bottom: 0.5rem;
      }
    }
  }
  
  @media only screen and (min-width: 768px) {
    ${CheckOption} {
      height: 70px;
    }
  }
  
  @media only screen and (min-width: 1300px) {
    margin-left: 1.5rem;
  }
`;
