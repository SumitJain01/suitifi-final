import React from 'react';
import styled from 'styled-components';
import { pathOr } from 'ramda';
import getDeliveredOn from '../helpers/getDeliveredOn';
import getSpecialEstimate from 'utils/helpers/getSpecialEstimate';
import dateConvert from 'utils/helpers/dateConvert';

export default ShipmentHeader;

function ShipmentHeader({ shipment, mageOrderStatus }) {
  const orderID = pathOr('', ['order', 'incrementId'], shipment);
  const estimate = 
    shipment.deliveryDate === "NA" || mageOrderStatus === "RTO"
    ? false 
    : shipment.deliveryDate; 
  const shouldShowDelivered = pathOr('', ['status'], shipment).toLowerCase() === 'delivered';
  const deliveredDate = shouldShowDelivered && getDeliveredOn(shipment);
  const specialEstimate = estimate && getSpecialEstimate(new Date(estimate));
  const specialEstimateString = estimate && dateConvert(specialEstimate, 'MON DD, YYYY');

  return (
    <Wrapper className="shipment-status-header">
      {orderID && (
        <div className="order-id">
          Order ID: <span>{orderID}</span>
        </div>
      )}

      {(shouldShowDelivered && deliveredDate) ? (
        <div className="delivery-date">
          <span>
            Delivered on <span>{deliveredDate}</span>
          </span>
        </div>
      ) : (
        estimate && (
          <div className="estimate">
            <span>
              Expected Delivery by <span>{specialEstimateString}</span>
            </span>
          </div>
        )
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 0.5rem;
  font-family: Roboto, sans-serif;
  line-height: 1em;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: #DEF5F4;

  @media (min-width: 1024px) {
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  
  .order-id {
    font-size: 0.8rem;
    color: #989898;
    margin-top: 0.5rem;
    span {
      font-size: 0.925rem;
      font-weight: 500;
      color: #1d1d1d;
    }
  }
  
  .delivery-date > span > span {
    text-transform: capitalize;
  }
  
  .estimate,
  .delivery-date {
    font-size: 0.95rem;
    margin-top: 0.5rem;
    color: #279989;
  }
  
  .estimate > span > span {
    text-transform: capitalize;
  }
`;
