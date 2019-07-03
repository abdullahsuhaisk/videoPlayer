import React from 'react';
import Checkout from './Checkout';
import CheckoutResult from './CheckoutResult';
import Button from '../../../components/Button/Button';

const CheckoutScreen = () => {
  return (
    <>
      <Checkout />
      <div className="vb--tabs--shoppingCart-basket-below-item">
        <Button>Back</Button>
      </div>
    </>
  );
};

export default CheckoutScreen;
