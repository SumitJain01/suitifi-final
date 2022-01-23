import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { pathOr } from 'ramda';
import { isFalse, isNonEmptyArray } from 'ramda-adjunct';
import Spinner from 'shared/components/Spinner';
import MailSVG from 'shared/components/SVGIcons/MailSVG';
import MessageSVG from 'shared/components/SVGIcons/MessageSVG';
import PaymentInformation from './components/PaymentInformation';
import { OrderSeparator } from './OrdersUI.styled';
import useFormattedPaymentInfo from './useFormattedPaymentInfo';
import ShipmentDetails from './ShipmentDetails';
import useScrollTop from './useScrollTop';
import Link from 'next/link';
import useShipmentInfo from './useShipmentInfo';
import shouldShowCancel from './helpers/shouldShowCancel';


export default OrderDetails;

function OrderDetails({ ...rest }) {
  const {
    order,
    cancelOrder,
    orderIndex,
    loadingIndex,
    isMobile,
  } = rest;
  const status = order.status;
  const orderID = order.increment_id;

  useScrollTop();
  
  const [shipmentInfo, isLoading, shipmentError] = useShipmentInfo(orderID);
  const [paymentInfo] = useFormattedPaymentInfo(order, isMobile);
  const orderPaymentMethod = order.payment.method;
  const payMode =
    orderPaymentMethod === 'cashondelivery'
      ? 'Cash On Delivery'
      : 'Online Payment';
  const address = pathOr({}, ['extension_attributes', 'shipping_assignments', 0, 'shipping', 'address'], order);
  const email = address.email;
  const telephone = address.telephone;
  const customerName = `${address.firstname} ${address.lastname}`;
  const fullAddress = `${address.street && address.street[0]}, ${address.city}, ${address.region} ${address.postcode}`;
  const isOrderCancellable = !isFalse(shipmentInfo) && 
    isNonEmptyArray(shipmentInfo.shipments) && 
    !isFalse(shipmentInfo.shipments[0].shipmentItems) && 
    Object.values(shipmentInfo.shipments[0].shipmentItems).map(shipment => shouldShowCancel(shipment.customerStatus));
  
  return (
    <Wrapper>
      {(isFalse(shipmentInfo)) && (
        <div className="spinner-wrapper">
          <Spinner />
        </div>
      )}
      
      {(!isFalse(shipmentInfo)) && <ShipmentDetails shipmentInfo={shipmentInfo} payMode={payMode}/>}
      <section className="information-section">
        <div className="left">
          <div className="section-header pay-info-section">
            Payment Information
          </div>
          
          <PaymentInformation info={paymentInfo} order={order} orderPaymentMethod={orderPaymentMethod}/>
          <OrderSeparator />
        </div>

        <div className="right">
          <div className="payment-mode-container">
            <div className="section-header mode-section">Payment Mode</div>
            <div className="mode">{payMode}</div>
            <OrderSeparator hideOnDesktop />
          </div>

          <div className="updates-container">
            <div className="section-header updates-section">
              Updates Sent to
            </div>
            <div className="update">
              <div className="email">
                <MailSVG />
                {email}
              </div>
              <div className="message">
                <MessageSVG />
                {telephone}
              </div>
            </div>
            <OrderSeparator hideOnDesktop />
          </div>

          <div className="address-container">
            <div className="m-text section-header address-section">
              Shipping Address
            </div>
            <div className="d-text section-header address-section">
              Delivery Address
            </div>
            <div className="address">
              <div className="c-name">{customerName}</div>
              <div className="full-address">{fullAddress}</div>
              <div className="contact-no">{telephone}</div>
            </div>
          </div>
        </div>
      </section>
      
      <MobileCTA>
        <Link prefetch={false} href="/contact-us" passHref>
          <a className="help-btn">Need Help?</a>
        </Link>
        {/* {Boolean(isOrderCancellable[0]) && <MCancelOrder onClick={cancelOrder}>Cancel Order?</MCancelOrder>} */}
      </MobileCTA>
    </Wrapper>
  );
}

const MobileCTA = styled.div`
  text-align: center;
  margin: 0px 1rem;
  
  .help-btn {
    font-weight: 500;
  }
  
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    margin: 0;
  }
`;

const MCancelOrder = styled.button`
  width: 100%;
  padding: 1rem 0px;
  display: block;
  font-family: Roboto, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 5px;
  background-color: ${props => props.theme.general.primaryColor};
  color: #fff;

  &:hover,
  &:active {
    background-color: ${props => darken(0.15, props.theme.general.primaryColor)};
  }

  @media (min-width: 1024px) {
    margin-right: 1rem;
    padding: 0.5rem;
    width: 10vw;
    font-size: 0.8rem;
  }
`;

const Wrapper = styled.div`
  .order-status-header,
  .product-details-wrapper {
    @media (max-width: 1023px) {
      margin: 0px 0.76rem 0px 0.5rem;
    }
  }

  .spinner-wrapper {
    display: flex;
    justify-content: center;
    margin: 3rem;
  }

  .mode {
    margin: 0.75rem 1rem 1rem;
    padding: 0.75rem 1rem;
    font-size: 0.975rem;
    line-height: 1.4em;
    border-radius: 5px;
    background-color: ${props => props.theme.general.themeLightGreen};

    @media (min-width: 1024px) {
      margin: 0.25rem 0px 0px;
      padding: 1rem;
      font-size: 0.875rem;
      background-color: #F8F8F8;
    }
  }

  .section-header {
    @media (max-width: 1023px) {
      margin: 1rem;
    }
  }

  .pay-info-section,
  .mode-section,
  .updates-section,
  .address-section {
    font-weight: 500;
  }
  
  .pay-info-section {
    @media (min-width: 1024px) {
      margin-bottom: 1rem;
    }
  }

  .update {
    @media (max-width: 1023px) {
      margin-left: 1rem;
      margin-right: 1rem;
    }
    @media (min-width: 1024px) {
      display: inline-flex;
      padding-bottom: 2rem;
    }
  }

  .email,
  .message {
    font-size: 0.875rem;
    color: ${props => props.theme.colors.themePlaceholderGray};

    svg {
      margin-right: 0.5rem;
    }
  }

  .email {
    @media (max-width: 1023px) {
      margin-top: 0.75rem;
    }
  }

  .message {
    margin: 0.75rem 0px;
    @media (min-width: 1024px) {
      margin: 0px;
      margin-left: 2rem;
    }
  }

  .information-section {
    @media (min-width: 1024px) {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;

      .left {
        max-width: 375px;
        min-width: 275px;
        width: 100%;
      }
      .right {
        max-width: 400px;
        margin-left: 2rem;
        display: flex;
        flex-direction: column;
        
        .updates-container,
        .payment-mode-container {
          margin-top: 1rem;
        }

        .address-container {
          order: 1;
        }
        .payment-mode-container {
          order: 2;
        }
        .updates-container {
          order: 3;
        }
      }
    }
  }
  
  .address {
    @media (min-width: 1024px) {
      padding: 1rem;
      box-shadow: 0px 0px 6px #00000033;
    }
  }

  .track-btn,
  .help-btn {
    width: 100%;
    padding: 1rem 0px;
    display: block;
    font-family: Roboto, sans-serif;
    font-size: 1rem;
    text-transform: uppercase;
    background-color: ${props => props.theme.general.primaryColor};
    color: #fff;

    &:hover,
    &:active {
      background-color: ${props => darken(0.15, props.theme.general.primaryColor)};
    }

    @media (min-width: 1024px) {
      padding: 0.5rem 1.5rem;
      width: auto;
      font-weight: 500;
      border-radius: 5px;
    }
  }

  .help-btn {
    background-color: #fff;
    color: ${props => props.theme.general.primaryColor};

    @media (min-width: 1024px) {
      order: 2;
    width: 10vw;
    font-size: 0.8rem;
    padding: 0.5rem;
    text-transform: uppercase;
    border-radius: 5px;
    background-color: ${props => props.theme.general.primaryColor};
    color: #fff;
    }
  }

  .address {
    margin: 1rem;
    padding: 0.5rem;
    line-height: 1em;
    border: 1px solid ${props => props.theme.colors.smoke};
    border-radius: 5px;
    
    @media (min-width: 1024px) {
      margin: 0px;
      margin-top: 0.5rem;
      padding: 0.5rem 1rem 0.5rem 1.05rem;
      border: 0px;
      background-color: #F8F8F8;
    }
  }

  .c-name {
    font-size: 1rem;
    font-weight: 700;
    color: ${props => props.theme.general.themeFontBlack};
  }

  .full-address,
  .contact-no {
    margin-top: 0.75rem;
    font-size: 0.875rem;
  }
  
  .full-address {
    @media (min-width: 1024px) {
      line-height: 1.5em;
    }
  }
  
  .m-text {
    display: block;
    @media (min-width: 1024px) {
      display: none;
    }
  }
  .d-text {
    display: none;
    @media (min-width: 1024px) {
      display: block;
    }
  }
`;
