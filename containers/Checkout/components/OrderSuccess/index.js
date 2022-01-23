import React, { Fragment, useState, useEffect } from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';
import { path, prop } from 'ramda';
import Flex from 'shared/components/Flex';
import Gap from 'shared/components/Gap';
import theme from 'theme/index';
import Message from 'shared/components/Message/index';
import Wrapper from './styled/Wrapper';
import md5 from 'md5';
import axios from 'axios';
import config from 'config/env';
import { isValidDate } from 'ramda-adjunct';
import getSpecialEstimate from 'utils/helpers/getSpecialEstimate';
import styled from 'styled-components';
import { BRAND_NAME } from 'utils/constants';

const { apiUrl } = config;

const FlexDiv = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
`;

export default function OrderSuccess({ orderInfo, cashBackOnCOD }) {
  const [ETA, setETA] = useState(false);
  const [cashBack, setCashback] = useState(false);
  const [storeCreditUsed, setStoreCreditUsed] = useState(false);
  const shippingAddress = path(
    ['shipping', 'address'],
    path(['extension_attributes', 'shipping_assignments'], orderInfo)[0]
  );
  const payment_method = path(['payment', 'method'], orderInfo);
  function addDaysToDate(inputDate) {
    let date = new Date(inputDate);
    if (!isValidDate(date)) {
      addFailedRequestDaysToDate();
      return;
    }

    const estimateDate = getSpecialEstimate(date);

    setETA(estimateDate.toString().slice(4, 16));
  }
  function addFailedRequestDaysToDate() {
    let date = new Date();
    date.setDate(date.getDate() + 10);
    setETA(date.toString().slice(4, 16));
  }

  useEffect(() => {
    let hashedEmail = md5(orderInfo.customer_email);
    axios.get(`${apiUrl}/users/getOrderCashback/${orderInfo.entity_id}/${hashedEmail}`)
      .then((res) => {
        if (res.data) {
          let cashback = path(['data', 0, 'cashback_amount'], res);
          cashback = cashback && parseFloat(cashback).toFixed(2);
          let walletAmountUsed = path(['data', 1, 'customer_balance_amount'], res);
          walletAmountUsed = walletAmountUsed && parseFloat(walletAmountUsed).toFixed(2)
          setCashback(cashback)
          setStoreCreditUsed(walletAmountUsed)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);

  useEffect(() => {
    let url = `${apiUrl}/users/getEstimatedOrderDate`;
    axios.post(url, {
      postCode: orderInfo.billing_address.postcode,
    })
      .then((res) => {
        addDaysToDate(res.data.estimatedDate);
      })
      .catch((err) => {
        addFailedRequestDaysToDate();
        console.log(err)
      })
  }, [orderInfo]);

  return (
    <Wrapper>
      <Row>
        <Col xs={12} md={12}>

          <FlexDiv>
            <img src="/static/mamaearth/orderplaced.svg" />
            <div className="htag" >
              Yeah! Order Successfully Placed
            </div >
          </FlexDiv>
          <p style={{ margin: '0.4rem 0rem 1rem 0rem' }} className="Thankyou_Title">Thank you for your order</p>
          {cashBack && cashBack > 0 && (
            <Message className="cashback" style={{ margin: "20px 0 0 0" }}>
              You will get {payment_method === "cashondelivery" ? cashBackOnCOD * -1 : cashBack} cashback credited in your {BRAND_NAME}pay wallet account within 7 days of all products being delivered or once the return period is over
            </Message>
          )}
          <div className="OrderOverview">
            <div >
              <span>Order Number:</span>
              <strong>{prop("increment_id", orderInfo)}</strong>
            </div>
            <div >
              <span>Email:</span>
              <strong>{prop("customer_email", orderInfo)}</strong>
            </div>
            <div >
              <span>Payment method:</span>
              <strong>
                {payment_method === "cashondelivery" ? (
                  <span>Cash on Delivery</span>
                ) : (
                  <span>Online Payment</span>
                )}
              </strong>
            </div>
            <div >
              <span>Estimated Date Of Arrival:</span>
              <strong>{ETA}</strong>
            </div>
          </div>
        </Col>
        <Message
          style={{
            margin: "0 0 1rem 0",
            padding: "1rem",
            backgroundColor: "#F8F8F8",
            color: "#E54A53",
            fontWeight: "400",
            lineHeight: "1.5rem",
          }}
        >
          Due to government restrictions around COVID-19, you may experience a delay in your order delivery. We regret the inconvenience and request you to please bear with us.
            </Message>
        <Col xs={12} sm={12} md={8} lg={8} >

          <div className="heading ">
            Product Summary
            </div>

          {renderOrderItems(prop("items", orderInfo))}

          <div
            style={{
              color: `${theme.colors.darkColor}`,
              textAlign: "center",
              margin: "0",
              paddingTop: "0",
            }}
          >
            <Gap h="1rem" />
            <div
              style={{
                color: "#1D1D1D",
                marginTop: "0.5rem",
              }}
              className="heading"
            >
              Customer Details
            </div>
            <div className="shipping">Shipping Address</div>
            <div className="box">
              {renderAddress(shippingAddress)}
              <span>{prop("customer_email", orderInfo)}</span>
            </div>
          </div>

        </Col>
        <Col xs={12} sm={12} md={4} lg={4}  >
          <div className="mainbox">
            <div className="heading ">
              Price Details
            </div>
            <Flex className="row details" justify="space-between">
              <div className="LineItem_Title">Subtotal</div>
              <div className="LineItem_Details">
                ₹ {orderInfo.base_subtotal_incl_tax}
              </div>
            </Flex>
            {orderInfo.discount_amount !== 0 && (
              <Flex className="row details" justify="space-between">
                <div className="LineItem_Title">
                  Discount
                  {orderInfo.coupon_code && orderInfo.coupon_code.split(':')[0] !== 'false' && `(${orderInfo.coupon_code.split(':')[0]})`}
                </div>
                <div className="LineItem_Details">
                  ₹ {orderInfo.discount_amount.toFixed(2)}
                </div>
              </Flex>
            )}
            <Flex className="row details" justify="space-between">
              <div className="LineItem_Title">Shipping & Handling</div>
              <div className="LineItem_Details">
                ₹ {
                  payment_method === "cashondelivery" ?
                    (orderInfo.shipping_incl_tax > 40 ? "40" : 0)
                    : orderInfo.shipping_incl_tax
                }
              </div>
            </Flex>
            <Flex className="row details" justify="space-between">
              <div className="LineItem_Title">Store Credit Used</div>
              <div className="LineItem_Details">
                ₹ {storeCreditUsed ? storeCreditUsed : 0}
              </div>
            </Flex>
            <Flex className="row details" justify="space-between">
              <div className="LineItem_Title">Payment Method</div>
              <div className="LineItem_Details">
                {payment_method === "cashondelivery" ? (
                  <span>
                    Cash on Delivery{" "}
                    {orderInfo.shipping_incl_tax > 40 ? " , 19" : (orderInfo.shipping_incl_tax === 0 ? null : ` , ${orderInfo.shipping_incl_tax}`)}
                  </span>
                ) : (
                  <span>Online Payment</span>
                )}
              </div>
            </Flex>
            <Flex className="row flex details" justify="space-between" >
              <div className="LineItem_Title">Grand Total</div>
              <div className="LineItem_Details total">
                {payment_method === "free" ? (
                  <strong>
                    ₹{" "}
                    {orderInfo.grand_total}
                  </strong>
                ) : (
                  <strong>₹ {orderInfo.grand_total}</strong>
                )}
              </div>
            </Flex>
          </div>
        </Col>

      </Row>
    </Wrapper>
  );
}

function renderAddress({
  firstname,
  lastname,
  street,
  postcode,
  region,
  city,
  country_id,
  telephone,
}) {
  return (
    <div>
      {street.map(s => (
        <div>{s}</div>
      ))}
      {postcode} {city} {region} <br />
      <Gap h="0.8rem" />
      {firstname} {lastname} <br />
      {country_id} {telephone}
    </div>
  );
}

function renderOrderItems(items) {
  return (
    <div>
      {items.map(item => (
        <Fragment>
          <Flex className="row order" style={{ flexDirection: 'column', alignItems: 'flex-start' }} justify="space-between">
            <div style={{ fontSize: '16px', fontWeight: '400' }} className="LineItem_Title">
              {prop('name', chooseItem(item))} x{' '}
              {prop('qty_ordered', chooseItem(item))}
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: '500' }} className="LineItem_Details">
              ₹ {chooseItem(item).base_row_total_incl_tax}
            </div>
          </Flex>
        </Fragment>
      ))}
    </div>
  );
}

function chooseItem(item) {
  if (item.parent_item) {
    return item.parent_item;
  }
  return item;
}
