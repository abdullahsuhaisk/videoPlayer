import React, { useState } from 'react';

import ShoppingCart from './ShoppingScreens/ShoppingCart';
import CheckoutScreen from './Checkout/CheckoutScreen';

const ShoppingCartScreen = () => {
  const [isShoppingCartRender, setShoppingCartRender] = useState(true);
  // TODO: Set logic method

  const switchPage = () => {
    // For up and Down
    setShoppingCartRender(!isShoppingCartRender);
  };

  switch (isShoppingCartRender) {
    case true:
      return <ShoppingCart switchPage={switchPage} />;
    case false:
      return <CheckoutScreen switchPage={switchPage} />;
    default:
      return <ShoppingCart switchPage={switchPage} />;
  }
};

export default ShoppingCartScreen;
