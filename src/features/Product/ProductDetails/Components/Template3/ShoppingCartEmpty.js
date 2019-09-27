import React from 'react';
import GreenCartIcon from '../../../../../assets/icons/GreenCartIcon.svg';

const ShoppingCartEmpty = () => {
  return (
    <div className="shoppingcart--content-empty">
      <div className="shopping-cart--empty-icon">
        <img src={GreenCartIcon} alt="Shopping Cart Empty" />
      </div>
      <div className="shopping-cart--empty-info">
        <h1>You have no items in your shopping cart.</h1>
        <p>Click the hotspots to add the product.</p>
      </div>
    </div>
  );
};

export default ShoppingCartEmpty;
