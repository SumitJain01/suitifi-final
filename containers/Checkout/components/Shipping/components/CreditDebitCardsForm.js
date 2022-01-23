import React from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';
import { pathOr, path } from 'ramda';
import Gap from 'shared/components/Gap';
import Image from 'shared/components/Image';
import Button from 'shared/components/Button';
import PaymentStrip from './PaymentStrip';
import cogotoast from 'lib/toast';
import StyledDesktopPayButton from './StyledDesktopPayButton';
import MobileOffStrip from './MobileOffStrip';
import { placeOrder as PlaceOrder } from 'lib/analytics/datalayer';
import { PREPAID_LIMIT } from 'utils/constants';

export default class CreditDebitCardsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardNumber: "",
            expiryDate: "",
            cardCVV: "",
            cardName: "",
            iscartNumberValid: false,
            isExpiryValid: false,
            cvvLength: 3
        }
    }

    componentDidMount() {
        var getEl = document.getElementById.bind(document);
        var formatter = window.Razorpay.setFormatter(getEl('rzp-form'));
        var cvvField = getEl('card_cvv');
        var that = this;
        formatter.add('card', getEl('cardNumber'))
            .on('network', function (o) {
                var type = this.type; // e.g. 'visa'
                // set length of cvv element based on amex card
                var cvvlen = type === 'amex' ? 4 : 3;
                that.setState({
                    cvvLength: cvvlen
                })
                cvvField.maxLength = cvvlen;
                cvvField.pattern = '^[0-9]{' + cvvlen + '}$';
            })
            .on('change', function (a) {
                that.setState({
                    cardNumber: this.value,
                    iscartNumberValid: this.isValid()
                })
                var isValid = this.isValid();

                // automatically focus next field if card number is valid and filled
                if (isValid && this.el.value.length === this.caretPosition) {
                    getEl('expiryDate').focus();
                }
            });

        formatter.add('expiry', getEl('expiryDate'))
            .on('change', function () {
                var isValid = this.isValid();
                that.setState({
                    expiryDate: this.value,
                    isExpiryValid: this.isValid()
                })

                // automatically focus next field if card number is valid and filled
                if (isValid && this.el.value.length === this.caretPosition) {
                    getEl('card_cvv').focus();
                }
            })
    }

    ChangeHandler = (event) => {
        let target = event.target;
        if (event.target.name == "cardCVV") {
            if (isNaN(event.target.value)) {
                return;
            }
        }
        this.setState({ [target.name]: target.value });
    }

    userId = this.props.user.id ? this.props.user.id : this.props.user
    dataLayerFn = (USERID, VALUE, METHOD) => {
        PlaceOrder(USERID, VALUE, METHOD)
    }

    handleSubmit = () => {
        const grandTotal = path([0, 'value'], this.props.totalSegments.filter((item) => item.code == "grand_total_adjusted"))

        if (grandTotal > PREPAID_LIMIT) {
            this.props.alertStateHandler(true);
            this.dataLayerFn(this.userId, false, "Credit/Debit Card")
            return;
        }

        if (!this.props.isValid) {
            this.props.setCheckError(true);
            this.dataLayerFn(this.userId, false, "Credit/Debit Card")
            return;
        }
        const tabContainer = document.querySelector('#payment-heading')
        tabContainer.scrollIntoView();
        if (!this.state.iscartNumberValid) {
            cogotoast.error("Enter Valid Card Number");
            this.dataLayerFn(this.userId, false, "Credit/Debit Card")
            return;
        }
        if (!this.state.isExpiryValid) {
            cogotoast.error("Enter Valid Expiry Date");
            this.dataLayerFn(this.userId, false, "Credit/Debit Card")
            return;
        }
        const inputCVV = this.state.cardCVV.trim();
        if (Number.isNaN(inputCVV) || inputCVV.length < this.state.cvvLength) {
            cogotoast.error("Enter Valid CVV");
            this.dataLayerFn(this.userId, false, "Credit/Debit Card")
            return;
        }
        if (this.state.cardName.trim().length < 2) {
            cogotoast.error("Enter Name on the Card");
            this.dataLayerFn(this.userId, false, "Credit/Debit Card")
            return;
        }

        this.props.placeOrderRequest({
            method: "card",
            methodFields: {
                card: {
                    name: this.state.cardName,
                    number: this.state.cardNumber,
                    cvv: this.state.cardCVV,
                    expiry_month: this.state.expiryDate.slice(0, 2),
                    expiry_year: this.state.expiryDate.includes('/')
                        ? this.state.expiryDate.slice(3)
                        : this.state.expiryDate.slice(2)
                }
            }
        });

        this.dataLayerFn(this.userId, true, "Credit/Debit Card")
    }

    render() {
        let payMobileAmount = '';
        let payDesktopAmount = '';
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
            payDesktopAmount = `₹ ${grandTotal.toFixed(2)}`;
        } catch (error) {
            console.log(error);
        }

        return (
            <>
                <form id="rzp-form">
                    <Row>
                        <Col xs={12}>
                            <input
                                onChange={this.ChangeHandler}
                                value={this.state.cardNumberI}
                                className="inputField"
                                placeholder="Card Number"
                                inputMode="tel"
                                id="cardNumber"
                                name="cardNumber" />
                        </Col>
                    </Row>
                    <Gap h="0.5rem" />
                    <Row>
                        <Col xs={6} className="expiryDateCol">
                            <input
                                onChange={this.ChangeHandler}
                                value={this.state.expiryDate}
                                className="expiryDate"
                                placeholder="MM / YY"
                                inputMode="tel"
                                id="expiryDate"
                                name="expiryDate" />
                        </Col>
                        <Col xs={6}>
                            <input
                                onChange={this.ChangeHandler}
                                value={this.state.cardCVV}
                                className="cardCVV"
                                placeholder="CVV"
                                inputMode="tel"
                                id="card_cvv"
                                name="cardCVV" />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Image src="https://mamaearthp.imgix.net/wysiwyg/creditCardImage.png?auto=format" className="creditCardImage" />
                        </Col>
                    </Row>
                    <Gap h="0.5rem" />
                    <Row>
                        <Col xs={12}>
                            <input
                                onChange={this.ChangeHandler}
                                value={this.state.cardName}
                                type="text"
                                className="inputField"
                                placeholder="Name on the card"
                                name="cardName" />
                        </Col>
                    </Row>
                </form>
                <Gap h="0.7rem" />
                <StyledDesktopPayButton className="mobileHidden payNowBtn" name="cardsButton" onClick={this.handleSubmit}>
                    PLACE ORDER
                </StyledDesktopPayButton>

                <div className="bottom-fixed-container">
                    <MobileOffStrip />
                    <Button className="mobile-button payNowBtn" name="cardsButton" onClick={this.handleSubmit}>
                        {`PLACE ORDER ${payMobileAmount}`}
                    </Button>
                </div>

                <div className="mobileHidden">
                    <PaymentStrip />
                </div>
            </>
        );
    }
}
