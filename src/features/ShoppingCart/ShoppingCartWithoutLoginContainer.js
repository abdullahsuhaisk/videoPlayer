import React from 'react';
import ShoppingCartEmpty from '../Product/ProductDetails/Components/Template3/ShoppingCartEmpty';
import ShoppingCartCheckout from '../Product/ProductDetails/Components/Template3/ShoppingCartCheckout';
import ShoppingCartItem from '../Product/ProductDetails/Components/Template3/ShoppingCartItem';

// We need a component it like modal
// It can call cart empty or shopping cart
// For now ıt just render Empty card for develop to css

const ShoppingCartWithoutLoginContainer = () => {
  return (
    <div className="shoppingcart--container">
      <div className="shoppingcart--title">Shopping Cart</div>
      <i className="modal--close"></i>
      <div className="productdetail--seperator" />

      {/* If shopping cart is empty, render ShoppingCArtEmpty */}
      {/* <ShoppingCartEmpty /> */}

      {/* If Shopping Cart Is NOT empty , render both ShoppingCartItems and ShoppingCartCheckout	 */}
      <div className="shoppingcart-items-container">
        <ShoppingCartItem />
        <ShoppingCartItem />
        <ShoppingCartItem />
        <ShoppingCartItem />
        <ShoppingCartItem />
      </div>

      <ShoppingCartCheckout />
    </div>
  );
};

export default ShoppingCartWithoutLoginContainer;
