import React from 'react';
import GreenCartIcon from '../../../../../assets/icons/GreenCartIcon.svg';

const ShoppingCartCheckout = ({ totalPrice, totalPriceWithOutDiscount }) => {
  return (
    <div className="shoppingcart--checkout-container">
      <div className="shoppingcart--checkout-detail">
        <div className="title">Order total without Discount</div>
        <div className="price">${totalPriceWithOutDiscount.toFixed(2)}</div>
      </div>
      <div className="shoppingcart--checkout-detail">
        <div className="title">Todal Discount</div>
        <div className="price">
          ${(totalPrice - totalPriceWithOutDiscount).toFixed(2)}
        </div>
      </div>
      <div className="shoppingcart--checkout-detail">
        <div className="title">Order Subtotal</div>
        <div className="price-red">-$7.95</div>
      </div>
      <div className="checkout--seperator" />

      <div className="shoppingcart--checkout-total">
        <div className="title">Order Total</div>
        <div className="price">${totalPrice.toFixed(2)}</div>
      </div>

      <div className="shoppingcart--checkoutbtn">Checkout</div>
    </div>
  );
};

export default ShoppingCartCheckout;
