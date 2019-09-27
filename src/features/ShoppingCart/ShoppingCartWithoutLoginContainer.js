import React from 'react';
import ShoppingCartEmpty from '../Product/ProductDetails/Components/Template3/ShoppingCartEmpty';
import ShoppingCartCheckout from '../Product/ProductDetails/Components/Template3/ShoppingCartCheckout';

// We need a component it like modal
// It can call cart empty or shopping cart
// For now ıt just render Empty card for develop to css

const ShoppingCartWithoutLoginContainer = () => {
  return (
    <div className="shoppingcart--container">
      <div className="shoppingcart--title">Shopping Cart</div>
      <i className="modal--close"></i>
      <div className="productdetail--seperator" />
      <ShoppingCartEmpty />
      {/* <div className="shoppingcart-items-container">
				<ShoppingCartEmpty />
				
			</div> */}
      <ShoppingCartCheckout />
    </div>
  );
};

export default ShoppingCartWithoutLoginContainer;
