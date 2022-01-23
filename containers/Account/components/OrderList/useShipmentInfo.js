import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from 'config/env';

export default function useShipmentInfo(orderID) {
  const [shippingInfo, setShippingInfo] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const encodedOrderID = encodeURIComponent(orderID);
  const requestURL = `https://tdc-nd-api.honasa-staging.net/v1/carts/fetchOrderShipments/${encodedOrderID}?normalize=1`;

  useEffect(() => {
    if (!orderID) return;
    axios
      .get(requestURL)
      .then(resp => {
        if (resp.status === 200) {
          setShippingInfo(resp.data);
        }
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Error while fetching shipment details: ', err);
        setError(err);
        setIsLoading(false);
      });
  }, [orderID]);

  return [shippingInfo, isLoading, error];
}
