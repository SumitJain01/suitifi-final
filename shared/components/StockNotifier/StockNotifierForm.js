import React, { useCallback, useState } from 'react';
import cogoToast from 'lib/toast';
import styled from 'styled-components';
import request from 'lib/request';
import config from 'config/env';
import Input from 'shared/components/Input';
import H2 from 'shared/components/Html/H2';
import Button from 'shared/components/Button';
import { validatePhoneNumber } from 'containers/Checkout/components/Shipping/validationSchema'
import makeClevertap from "lib/makeClevertap";

const clevertap = makeClevertap();

export default ({ productData, isMobile, ...rest }) => {
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');

  const sendNotifyRequest = useCallback(
    async (e) => {
      e.preventDefault();
      const requestURL = `https://tdc-nd-api.honasa-staging.net/v1/products/notify/`;
      const body =
        productData.type === 'simple'
          ? {
            simple: JSON.stringify({
              id: productData.id,
            }),
            configurable: JSON.stringify({
              id: '',
            }),
            type: 'simple',
            email,
            phoneNo,
          }
          : {
            configurable: JSON.stringify({
              id: productData.id,
            }),
            simple: JSON.stringify({
              id: '',
            }),
            type: 'configurable',
            email,
            phoneNo,
          };
      try {
        const data = await request(requestURL, {
          method: 'POST',
          body: JSON.stringify(body),
        });
        if (data.length) {
          cogoToast.success('You will be notified when we restock.');
          clevertap.event.push("notifyMe", {
            Email: email,
            Phone: phoneNo,
            ProductId: productData.id,  
            Platform: isMobile ? 'M-Web' : 'Web',
          });
        } else {
          cogoToast.error('Please try again.');
        }
      } catch (err) {
        cogoToast.error('Please try again.');
      }
      rest.closeModal();
    },
    [productData.id, email, phoneNo]
  );
  return (
    <Form onSubmit={sendNotifyRequest}>
      <H2 style={{ textAlign: 'center' }}>Notify Me</H2>
      <Input
        type="email"
        placeholder="Enter email address"
        required
        onChange={e => setEmail(e.target.value)}
        value={email}
        style={{ marginBottom: '0.5rem' }}
      />
      <Input
        type="tel"
        placeholder="10 digit phone number"
        required
        onChange={e => setPhoneNo(e.target.value)}
        value={phoneNo}
        style={{ margin: '0' }}
      />
      <Button style={{ margin: '2rem auto' }} disabled={!validatePhoneNumber(phoneNo,email)}>Submit</Button>
    </Form>
  );
};

const Form = styled.form`
  background-color: #fff;
  padding: 1rem 3rem;
`;
