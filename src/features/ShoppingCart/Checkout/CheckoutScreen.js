import React from 'react';
import Checkout from './Checkout';
import CheckoutResult from './CheckoutResult';

const CheckoutScreen = ({ checkOutSteps, totalPrice }) => {
  console.log(checkOutSteps);
  switch (checkOutSteps) {
    case 1:
      return <Checkout />;
    case 2:
      return <CheckoutResult totalPrice={totalPrice} />;
    default:
      return null;
  }
};

export default CheckoutScreen;
