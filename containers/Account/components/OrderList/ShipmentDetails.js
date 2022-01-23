import React, { Fragment } from 'react';
import styled from 'styled-components';
import { isFalse, isNonEmptyArray } from 'ramda-adjunct';
import Header from './components/Header';
import { OrderSeparator } from './OrdersUI.styled';
import Shipment from './Shipment';
import MCMessage from './components/MCMessage';

export default ShipmentDetails;

function ShipmentDetails({ shipmentInfo, withHeader, payMode }) {
  const mageOrderStatus = shipmentInfo && shipmentInfo.orderStatus; 
  const lastIndex = (shipmentInfo.length - 1);
  return (
    <Wrapper>
      {!isFalse(shipmentInfo) &&
        shipmentInfo.shipments.map((shipment, currentIndex) => {
          const status = shipment.status || '';
          const orderID = shipment.order && shipment.order.incrementId || '';

          return (
            <Fragment key={shipment.shipment_id}>
              {withHeader && (
                <Header
                  status={status || 'Processing'}
                  orderID={orderID}
                  isDetailsView
                />
              )}
              <Shipment shipment={shipment} mageOrderStatus={mageOrderStatus} />
              {(currentIndex === lastIndex &&
                status.toLowerCase() === 'cancelled' &&
                payMode && payMode !== 'Cash On Delivery') && <MCMessage />}
              {(currentIndex === lastIndex) && <OrderSeparator hideOnDesktop />}
            </Fragment>
          );
        })}
    </Wrapper>
  );
}

const Wrapper = styled.div``;
