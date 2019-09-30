import React, { useState } from 'react';
import ShoppingCartEmpty from '../Product/ProductDetails/Components/Template3/ShoppingCartEmpty';
import ShoppingCartCheckout from '../Product/ProductDetails/Components/Template3/ShoppingCartCheckout';
import ShoppingCartItem from '../Product/ProductDetails/Components/Template3/ShoppingCartItem';
import ScreenChoserQuery from '../../components/HOCS/Grapqhl/ScreenChoserQuery';

// We need a component it like modal
// It can call cart empty or shopping cart
// For now ıt just render Empty card for develop to css

const ShoppingCartWithoutLoginContainer = ({ client }) => {
  const [quantity, setQuantity] = useState({ color: 0, size: 0, quality: 1 });

  return (
    <div className="shoppingcart--container">
      <div className="shoppingcart--title">Shopping Cart</div>
      <i
        className="modal--close"
        onClick={() =>
          client.writeData({
            data: { isShoppingCartShowing: false }
          })
        }></i>
      <div className="productdetail--seperator" />

      {/* If shopping cart is empty, render ShoppingCArtEmpty */}
      {/* <ShoppingCartEmpty /> */}

      {/* If Shopping Cart Is NOT empty , render both ShoppingCartItems and ShoppingCartCheckout	 */}
      <div className="shoppingcart-items-container">
        <ShoppingCartItem data={quantity} setData={setQuantity} />
        <ShoppingCartItem data={quantity} setData={setQuantity} />
      </div>

      <ShoppingCartCheckout />
    </div>
  );
};

export default ScreenChoserQuery(ShoppingCartWithoutLoginContainer);
