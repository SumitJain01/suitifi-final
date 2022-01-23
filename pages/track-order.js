import React, { Fragment, useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import Input from 'shared/components/Input';
import Button from 'shared/components/Button';
import Link from 'next/link';
import { Row, Col } from 'react-styled-flexboxgrid';
import { darken } from 'polished';
import RadioButton from 'shared/components/Html/RadioButton';
import ShipmentDetails from 'containers/Account/components/OrderList/ShipmentDetails';
import useShipmentInfo from 'containers/Account/components/OrderList/useShipmentInfo';

export default function TrackOrder(refreshFlag = true) {
  const [orderId, setOrderId] = useState('');
  const [trackparam, setTrackparam] = useState('orderid')
  const [showOrder, setShowOrder] = useState(false);
  const [shipmentInfo, isLoading, shipmentError] = useShipmentInfo(showOrder);
  
  useEffect(() => {
    setOrderId('');
    setShowOrder(false);
    refreshFlag = false;
  }, [refreshFlag]);

  const handleChange = (e) => {
    setOrderId(e.target.value);
  };
  
  const changeHandler = useCallback(evt => setTrackparam(evt.target.value));

  const onOrderId = (e) => {
    e.preventDefault();
    trackparam == "orderid" 
    ? setShowOrder(orderId)
    : window.open(`https://shiprocket.co/tracking/${orderId}`, '_blank');
  };
  
  return (
    <Fragment>
      {(!showOrder)&& (
        <Wrapper>
          <Fragment>
            <Heading>
              <Text>Order Track</Text>
              <Breadcrumbs>
                <Link prefetch={false} href="/"><Span>Home</Span></Link> &nbsp; / &nbsp; order track</Breadcrumbs>
            </Heading>
            <Row>
              <Col xs={12} sm={6} md={6} style={{ minWidth: 200, marginBottom: '1rem' }}>
                <RadioButton
                  name="orderid"
                  value="orderid"
                  isSelected={trackparam == "orderid"}
                  changeHandler={changeHandler}>Order ID</RadioButton>
              </Col>
              <Col xs={12} sm={6} md={6} style={{ minWidth: 200, marginBottom: '1rem' }}>
                <RadioButton
                  name="awb"
                  value="awb"
                  isSelected={trackparam == "awb"}
                  changeHandler={changeHandler}>AWB</RadioButton>
              </Col>
            </Row>
            <form onSubmit={onOrderId}>
              <Body>
                <InputField
                  type="text"
                  placeholder={trackparam == "orderid" ? "Order ID" : "AWB"}
                  required
                  onChange={handleChange}
                  value={orderId}
                />
                <Button style={{ marginLeft: '8px' }}>
                  track order
                </Button>
              </Body>
            </form>
          </Fragment>
        </Wrapper>
      )}
      
      {(showOrder) && (
        <ShipmentDetailsWrapper>
          <ShipmentDetails shipmentInfo={shipmentInfo} />
          <div className="cta-container">
            <Link prefetch={false} href="/contact-us" passHref>
              <a className="help-btn">Need Help?</a>
            </Link>
          </div>
        </ShipmentDetailsWrapper>
      )}
    </Fragment>
  );
}

const ShipmentDetailsWrapper = styled.div`
  margin-top: 2rem;

  .cta-container {
    padding-top: 2rem;
    padding-bottom: 2rem;
    position: static;
    width: auto;
    display: flex;
    justify-content: center;
  }
  
  .help-btn {
    padding: 0.5rem 1.5rem;
    width: auto;
    font-weight: 500;
    border-radius: 5px;
    font-family: Roboto, sans-serif;
    font-size: 1rem;
    text-transform: uppercase;
    background-color: ${props => props.theme.general.primaryColor};
    color: #fff;
    &:hover,
    &:active {
      background-color: ${props => darken(0.15, props.theme.general.primaryColor)};
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  max-width: 90%;
  margin: 0 auto;
`;

const Heading = styled.div`
  background: ${({ theme }) => theme.general.primaryColor};
  width: 100vw;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1.2rem 0;
  margin-bottom: 6rem;
`;

const Text = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-size: 2.75rem;
  line-height: 1.2;
`;

const Breadcrumbs = styled.div`
  color: ${({ theme }) => theme.colors.white};
  margin-top: .75rem;
  text-transform: uppercase;
  letter-spacing: .3px;
  font-weight: 600;
  font-size: 11px;
`;

const Body = styled.div`
  display: flex;
  width: 90vw;
  margin: 0 auto;
  max-width: 640px;
  padding-top: 2rem;
  justify-content: center;
`;

const InputField = styled(Input)`
  border: solid 1px;
  border-radius: 0;
  width: '50%';
  opacity: .5;
`;

const Span = styled.span`
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  &:hover {
    opacity: .7;
  }
`;

