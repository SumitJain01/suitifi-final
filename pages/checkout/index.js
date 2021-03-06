import React, { useEffect } from 'react';
import CheckoutContainer from 'containers/Checkout';
import { useRouter } from 'next/router';

function Checkout() {
  const router = useRouter();
  useEffect(() => {
    router.prefetch('checkoutSuccess');
  }, []);
  return (
    <CheckoutContainer />
  );
}

export default Checkout;

