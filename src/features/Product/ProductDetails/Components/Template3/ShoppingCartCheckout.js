import React from 'react';
import GreenCartIcon from '../../../../../assets/icons/GreenCartIcon.svg';

const ShoppingCartCheckout = () => {
  return (
    <div className="shoppingcart--checkout-container">
      <div className="shoppingcart--checkout-detail">
        <div className="title">Order Subtotal</div>
        <div className="price">$239.49</div>
      </div>
      <div className="shoppingcart--checkout-detail">
        <div className="title">Order Subtotal</div>
        <div className="price">$7.95</div>
      </div>
      <div className="shoppingcart--checkout-detail">
        <div className="title">Order Subtotal</div>
        <div className="price-red">-$7.95</div>
      </div>
      <div className="checkout--seperator" />

      <div className="shoppingcart--checkout-total">
        <div className="title">Order Total</div>
        <div className="price">$239.49</div>
      </div>

      <div className="shoppingcart--checkoutbtn">Checkout</div>
    </div>
  );
};

export default ShoppingCartCheckout;
