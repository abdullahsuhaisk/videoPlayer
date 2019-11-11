/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

const ShoppingCartCheckout = ({
  totalPrice,
  totalPriceWithOutDiscount,
  setCheckoutProcess,
  checkoutProcess,
  currencySymbol
}) => {
  return (
    <div className="shoppingcart--checkout-container">
      <div className="shoppingcart--checkout-detail">
        <div className="title">Order total without Discount</div>
        <div className="price">
          {totalPriceWithOutDiscount.toFixed(2)} {currencySymbol}
        </div>
      </div>
      <div className="shoppingcart--checkout-detail">
        <div className="title">Shipping</div>
        <div className="price">0.00 {currencySymbol}</div>
      </div>
      <div className="shoppingcart--checkout-detail">
        <div className="title">Total Discount</div>
        <div className="price-red">
          {(totalPrice - totalPriceWithOutDiscount).toFixed(2)} {currencySymbol}
        </div>
      </div>

      <div className="checkout--seperator" />

      <div className="shoppingcart--checkout-total">
        <div className="title">Order Total</div>
        <div className="price">
          {totalPrice.toFixed(2)} {currencySymbol}
        </div>
      </div>
      {checkoutProcess === 2 ? (
        <input
          type="submit"
          value="Continue To Payment"
          className="checkoutprocess--checkoutbtn"></input>
      ) : (
        <div
          className="shoppingcart--checkoutbtn"
          onClick={() => {
            setCheckoutProcess(1);
          }}>
          Checkout
        </div>
      )}
    </div>
  );
};

export default ShoppingCartCheckout;
