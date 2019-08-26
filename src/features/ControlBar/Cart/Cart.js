import React from 'react';
import { CartWrapper } from './Cart.style';

const Cart = () => {
  const cartHandler = () => {
    // TODO: Add Cart handler
    return;
  };
  return (
    <CartWrapper>
      <button
        className="cartBtn"
        onClick={() => {
          cartHandler();
        }}></button>
    </CartWrapper>
  );
};

export default Cart;
