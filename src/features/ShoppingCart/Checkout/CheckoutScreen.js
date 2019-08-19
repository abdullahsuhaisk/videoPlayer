import React from 'react';
import Checkout from './Checkout';
import CheckoutResult from './CheckoutResult';

const CheckoutScreen = ({ checkOutSteps }) => {
  console.log(checkOutSteps);
  switch (checkOutSteps) {
    case 1:
      return <Checkout />;
    case 2:
      return <CheckoutResult />;
    default:
      return null;
  }
};

export default CheckoutScreen;
