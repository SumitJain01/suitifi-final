import React from 'react';
import styled from 'styled-components';
import Select, { components } from 'react-select';
import { Row, Col } from 'react-styled-flexboxgrid';
import { pathOr, path } from 'ramda';
import Gap from 'shared/components/Gap';
import PaymentStrip from './PaymentStrip';
import Button from 'shared/components/Button';
import cogotoast from 'lib/toast';
import config from 'config/env';
import CheckOption from './CheckOption';
import StyledDesktopPayButton from './StyledDesktopPayButton';
import MobileOffStrip from './MobileOffStrip';
import { placeOrder as PlaceOrder } from 'lib/analytics/datalayer';
import { PREPAID_LIMIT } from 'utils/constants';

let rzp;

const DropdownIndicator = (props) => {
    return (
        <components.DropdownIndicator {...props}>
            <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false"
                className="react-select__dropdown-indicator chevron"
                onTouchEnd={() => {
                    props.selectProps.DropdownIndicatorClickHandler()
                }}
            >
                <path className="path-selector" d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
            </svg>
        </components.DropdownIndicator>
    );
};


class NetBankingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            HDFC: false,
            SBIN: false,
            ICIC: false,
            UTIB: false,
            Selected: false,
            ddSelected: null,
            BanksArray: [],
            bankListDisabled: false
        }
    }

    handleChangeCheckbox = (event) => {
        const target = event;
        const forDDSelectedObj = this.state.BanksArray.find(bank => bank.value === target.value);
        this.setState({
            HDFC: false,
            SBIN: false,
            ICIC: false,
            UTIB: false,
            [target.value]: target.checked,
            Selected: target.checked ? target.value : false,
            ddSelected: target.checked ? forDDSelectedObj : null,
        })
    }

    handleChangeDD = (event) => {
        const isCheckbox = this.state[event.value];
        this.setState({
            HDFC: false,
            SBIN: false,
            ICIC: false,
            UTIB: false,
            Selected: event.value,
            ddSelected: event
        })
        if (isCheckbox != undefined) {
            this.setState({
                [event.value]: true,
            });
        }
    }

    userId = this.props.user.id ? this.props.user.id : this.props.user
    dataLayerFn = (USERID, VALUE, METHOD) => {
        PlaceOrder(USERID, VALUE, METHOD)
    }

    handleSubmit = () => {
        const grandTotal = path([0, 'value'], this.props.totalSegments.filter((item) => item.code == "grand_total_adjusted"))

        if (grandTotal > PREPAID_LIMIT) {
          this.props.alertStateHandler(true);
          this.dataLayerFn(this.userId, false, "Net Banking")
          return;
        }
    
        if (!this.props.isValid) {
            this.props.setCheckError(true);
            this.dataLayerFn(this.userId, false, "Net Banking")
            return;
        }
        const tabContainer = document.querySelector('#payment-heading')
        tabContainer.scrollIntoView();
        
        if (this.state.Selected) {
            this.props.placeOrderRequest({ method: "netbanking", methodFields: { bank: this.state.Selected } });
            this.dataLayerFn(this.userId, true, "Net Banking")
        } 
        else {
            cogotoast.error("Please select a bank")
            this.dataLayerFn(this.userId, false, "Net Banking")
        }
    }

    DropdownIndicatorClickHandler = () => {
        this.setState((prevstate) => {
            return ({
                bankListDisabled: !prevstate.bankListDisabled 
            },
            this.dataLayerFn(this.userId, false, "Net Banking"))
        })
    }


    componentDidMount() {
        rzp = new Razorpay({
            key: config.rzpKey
        })
        rzp.once('ready', (response) => {
            let banks = response.methods.netbanking
            let BanksArray = [];
            for (let key in banks) {
                BanksArray.push({
                    "label": banks[key],
                    "value": key
                })
            }
            this.setState({ BanksArray: BanksArray })
        })
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
            <div className={this.props.className}>
                <Row className="check-options-wrapper">
                    <Col xs={3}>
                        <CheckOption
                            clickHandler={() => {
                                this.handleChangeCheckbox({ value: "HDFC", checked: !this.state.HDFC });
                            }}
                            checked={this.state.HDFC}
                            imgClass="hdfcImage"
                            imgSrc="https://mamaearthp.imgix.net/wysiwyg/hdfc-logo.png?auto=format"
                            title="HDFC"
                        />
                    </Col>
                    <Col xs={3}>
                        <CheckOption
                            clickHandler={() => {
                                this.handleChangeCheckbox({ value: "SBIN", checked: !this.state.SBIN });
                            }}
                            checked={this.state.SBIN}
                            imgClass="sbiImage"
                            imgSrc="https://mamaearthp.imgix.net/wysiwyg/sbi-logo.png?auto=format"
                            title="SBI"
                        />
                    </Col>
                    <Col xs={3}>
                        <CheckOption
                            clickHandler={() => {
                                this.handleChangeCheckbox({ value: "ICIC", checked: !this.state.ICIC });
                            }}
                            checked={this.state.ICIC}
                            imgClass="iciciImage"
                            imgSrc="https://mamaearthp.imgix.net/wysiwyg/icici-logo.png?auto=format"
                            title="ICICI"
                        />
                    </Col>
                    <Col xs={3}>
                        <CheckOption
                            clickHandler={() => {
                                this.handleChangeCheckbox({ value: "UTIB", checked: !this.state.UTIB });
                            }}
                            checked={this.state.UTIB}
                            imgClass="axisImage"
                            imgSrc="https://mamaearthp.imgix.net/wysiwyg/axis-logo.png?auto=format"
                            title="AXIS"
                        />
                    </Col>
                </Row>
                <Gap h="0.5rem" />
                <Row>
                    <Col xs={12}>
                        <Select
                            classNamePrefix="react-select"
                            options={this.state.BanksArray}
                            isSearchable={(this.props.isMobile && this.state.bankListDisabled) ? false : true}
                            onMenuClose={() => { this.setState({ bankListDisabled: false }) }}
                            value={this.state.ddSelected}
                            onChange={this.handleChangeDD}
                            placeholder="Select Bank"
                            DropdownIndicatorClickHandler={this.DropdownIndicatorClickHandler}
                            components={{ DropdownIndicator }}
                        />
                    </Col>
                </Row>

                <StyledDesktopPayButton className="mobileHidden payNowBtn" name="netBankingButton" onClick={this.handleSubmit}>
                    PLACE ORDER
                </StyledDesktopPayButton>
                <div className="bottom-fixed-container">
                    <MobileOffStrip />
                    <Button className="mobile-button payNowBtn" name="netBankingButton" onClick={this.handleSubmit}>
                        {`PLACE ORDER ${payMobileAmount}`}
                    </Button>
                </div>

                <div className="mobileHidden">
                    < PaymentStrip />
                </div>
            </div>
        );
    }
}

export default styled(NetBankingForm)`
    --bg-color: #DEF5F4;
    
    .option-img {
        max-width: 28px;
    }
    
    @media only screen and (min-width: 768px) {
        .option-img {
            width: 45px;
        }
    }
    
    .react-select {
        
        &__control {
            min-height: 32px;
            border-radius: 5px;
            border: 1px solid #989898;
            box-shadow: none;
            background-color: var(--bg-color);
            
            &:hover, &--is-focused {
                border: 1px solid #989898;
            }
            
            .react-select__value-container {
                color: ${({ theme }) => theme.colors.mediumGray};
                font-size: 0.9rem;
            }
            
            .react-select__indicators {
                .react-select__indicator-separator {
                    display: none;
                }    
            }
            
            @media only screen and (min-width: 768px) {
                border: 1px solid ${props => props.theme.general.primaryColor};
                background-color: transparent;
                
                &:hover, &--is-focused {
                    border: 1px solid ${props => props.theme.general.primaryColor};
                }
                
                .react-select__value-container {
                    color: ${({ theme }) => theme.general.themeFontBlack};
                }
                
                .react-select__indicators {
                    .react-select__dropdown-indicator {
                        color: ${({ theme }) => theme.general.primaryColor};
                        
                        .path-selector {
                            fill: currentcolor;
                            stroke: currentcolor;
                            stroke-width: 0;
                        }
                    }
                }
            }
        }
        
        
        &__menu {
            
            .react-select__menu-list {
                padding: 0px;

                .react-select__option {
                    color: ${({ theme }) => theme.colors.mediumGray};
                    
                    &--is-focused, &--is-selected {
                        background-color: var(--bg-color);
                    }
                }
                
                @media only screen and (min-width: 768px) {
                    .react-select__option {
                        color: ${({ theme }) => theme.general.themeFontBlack};
                        
                        &--is-focused, &--is-selected {
                            background-color: var(--bg-color);
                        }
                    }
                }
            }
        }
    }
`;
