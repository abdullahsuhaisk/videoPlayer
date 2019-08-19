import React from 'react';

import ShoppingCart from './ShoppingScreens/ShoppingCart';

// Other components needs
// It will manage the cart and wizard status with like a toogle state and render shoppingCart or Checkout
const ShoppingCartScreen = () => {
  return (
    <div className="ShoppingCartContainer">
      <ShoppingCart />
    </div>
  );
};

export default ShoppingCartScreen;
