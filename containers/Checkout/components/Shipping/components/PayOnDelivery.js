import React, { Fragment } from 'react';
import styled from 'styled-components';
import { pathOr } from 'ramda';
import { Row, Col } from 'react-styled-flexboxgrid';
import cogoToast from 'lib/toast';
import Button from 'shared/components/Button';
import PaymentStrip from './PaymentStrip';
import { path } from 'ramda';
import { COD_LIMIT } from 'utils/constants';
import { placeOrder as PlaceOrder } from 'lib/analytics/datalayer';
class PayOnDelivery extends React.Component {

  userId = this.props.user.id ? this.props.user.id : this.props.user
  dataLayerFn = (USERID, VALUE, METHOD) => {
      PlaceOrder(USERID, VALUE, METHOD)
  }


  handleSubmit = () => {
    if (!this.props.isCODAvailable) {
      cogoToast.error('COD option is not available for this pin code, Please try with other payment options');
      return;
    }

    const grandTotal = path([0, 'value'], this.props.totalSegments.filter((item) => item.code == "grand_total_adjusted"))

    if (grandTotal > COD_LIMIT) {
      this.props.alertStateHandler(true);
      this.dataLayerFn(this.userId, false, "Pay On Delivery")
      return;
    }

    if (!this.props.isValid) {
      this.props.setCheckError(true);
      this.dataLayerFn(this.userId, false, "Pay On Delivery")
      return;
    }
    const tabContainer = document.querySelector('#payment-heading')
    tabContainer.scrollIntoView();
    this.dataLayerFn(this.userId, true, "Pay On Delivery")
    this.props.placeOrderRequest();
  };

  render() {
    let payMobileAmount = '';
    try {
      const totalSegments = this.props.totalSegments || [];
      const grandTotal = this.props.totalSegments && pathOr(
        '',
        [0, 'value'],
        totalSegments.filter(item => item.code === 'grand_total_adjusted'),
      );

      payMobileAmount = ` ( ₹ ${grandTotal.toFixed(2)} )`;
    } catch (error) {
      console.log(error);
    }

    return (
      <Fragment>
        <Row className={this.props.className}>
          <Col xs={12} className="">
            <p className="cod-charges">
              A charge of Rs.19 applicable on COD order.
            </p>
            <SafetyTip>
              <span className="mobile-message">
               Do you know you get an  <strong>Extra 10% Off</strong>  when you pay online? For everyone’s safety, we advise paying online to limit
               contact and help stop the spread of the virus.
              </span>
              <span className="desktop-message">
               Do you know you get an  <strong>Extra 10% Off</strong>  when you pay online? For everyone’s safety, we advise paying online to limit
               contact and help stop the spread of the virus.
              </span>
            </SafetyTip>
            <Button className="mobileHidden payNowBtn" onClick={this.handleSubmit} name="payOnDelivery">
              PLACE ORDER
            </Button>

            <div className="bottom-fixed-container">
              <Button className="mobile-button payNowBtn" onClick={this.handleSubmit} name="payOnDelivery">
                {`PLACE ORDER${payMobileAmount}`}
              </Button>
            </div>
            <div className="mobileHidden">
              <PaymentStrip />
            </div>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

const SafetyTip = styled.p`
  border: 1px solid #1BBB33;
  border-radius: 5px;
  background-color: #E6FFE9;
  color: ${({ theme }) => theme.general.themeFontBlack};
  font-size: 0.7rem;
  text-align: justify;
  
  .desktop-message { display: none; }
  
  @media only screen and (min-width: 375px) {
    .mobile-message {
      font-size: 0.8rem;
    }
  }
  
  @media only screen and (min-width: 768px) {
    .desktop-message { display: revert; }
    .mobile-message { display: none; }
  }
  
  @media only screen and (min-width: 1024px) {
    margin: 0.7rem 0 1.5rem;
  }
  
  @media only screen and (min-width: 1200px) {

  }
`;

export default styled(PayOnDelivery)`
  .cod-charges {
    margin: 0px;
    color: #989898;
    font-size: 0.8rem;
    line-height: 1rem;
  }
  
  ${SafetyTip} {
    margin: 0;
    margin-top: 0.5rem;
    margin-left: -1.5rem;
    padding: 0.5rem;
  }
  
  @media only screen and (min-width: 768px) {
    .payNowBtn.mobile-button {
      display: none;
    }

    ${SafetyTip} {
      margin-left: 0;
    }
  }

  @media only screen and (min-width: 1024px) {
    .cod-charges {
      display: none;
    }
  }
`;
