import React, { useState } from 'react';
import ShoppingCheckout from './ShoppingScreens/ShoppingCheckout';
import ShoppingPayment from './ShoppingScreens/ShoppingPayment';
import ShoppingBasket from './ShoppingScreens/ShoppingBasket';

const ShoppingCartScreen = () => {
  const [whichPageRender, setPageRender] = useState(1);
  // TODO: Set logic method

  switch (whichPageRender) {
    case 1:
      return <ShoppingBasket />;
    case 2:
      return <ShoppingPayment />;
    case 3:
      return <ShoppingCheckout />;
    default:
      return null;
  }
};

export default ShoppingCartScreen;
