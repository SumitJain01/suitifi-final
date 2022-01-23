import { useMutation } from "@apollo/client";
import PaymentOptions from 'containers/Checkout/components/Shipping/PaymentOptions';
import { billingAddressMutation, deliveryMethodMutation, placeOrderMutation, setGuestEmailMutation, setPaymentMutation, shippingAddressMutation } from "GraphQL/Mutations";
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: ${props => props.isNewPaymentUI ? '0rem' : '0.5rem'};
`;

function CustomPaymentSegment({
    isValid,
    setCheckError,
    isNewPaymentUI,
    UAisMobile
}) {
    const router = useRouter();

    const [setShippingAddress, { data:shippingData,error:shipError }] = useMutation(shippingAddressMutation);
    const [setBillingAddress, { data:billingData,error:addressError }] = useMutation(billingAddressMutation);
    const [setGuestEmail, { data:emailData, error:emailError }] = useMutation(setGuestEmailMutation);
    const [setPayment, { data:paymentData, paymentError }] = useMutation(setPaymentMutation);
    const [placeOrder, { data:orderData,placeError }] = useMutation(placeOrderMutation);
    const [deliveryMethod, {  data:deliveryData,methodError }] = useMutation(deliveryMethodMutation);
    const placeOrderFunction = ()=>{
        setShippingAddress(
            {
                variables: {
                cartId: JSON.parse(localStorage.getItem('guestCartId')),
                firstname: "SJ",
                lastname: "JJ",
                street: "ABCDEFG",
                city: "LDH",
                region: "PB",
                postcode: "141120",
                telephone: "7986483843",
                },
            }
            )
        setBillingAddress(
            {
              variables: {
                cartId: JSON.parse(localStorage.getItem('guestCartId')),
                firstname: "SJ",
                lastname: "JJ",
                street: "ABCDEFG",
                city: "LDH",
                region: "PB",
                postcode: "141120",
                telephone: "7986483843",
              },
            }
          )
        setGuestEmail(
        {
            variables: {
            cartId: JSON.parse(localStorage.getItem('guestCartId')),
            email: "sumitjaini1998@gmail.com",
            },
        }
        )
      }
     useEffect(() => {
         if(billingData && shippingData && emailData){
        setPayment(
            {
              variables: {
                cartId: JSON.parse(localStorage.getItem('guestCartId')),
              },
            }
          )
          deliveryMethod(
            {
              variables: {
                cartId: JSON.parse(localStorage.getItem('guestCartId')),
              },
            }
          )
        }
     },[billingData,shippingData,emailData])
     useEffect(() => {
        if(paymentData && deliveryData){
            placeOrder(
                {
                  variables: {
                    cartId: JSON.parse(localStorage.getItem('guestCartId')),
                  },
                }
              )
        }
     },[paymentData,deliveryData])
     useEffect(() => {
        if(orderData){
            localStorage.setItem(
                "guestCartId",
                false
              );
            router.push('checkoutSuccess');
        }
     },[orderData])
    return (
        <Wrapper isNewPaymentUI={isNewPaymentUI}>
            <PaymentOptions isValid={isValid} setCheckError={setCheckError} placeOrderFunction={placeOrderFunction} isNewPaymentUI={isNewPaymentUI} UAisMobile={UAisMobile}/>
        </Wrapper>
    )
}

export default CustomPaymentSegment;