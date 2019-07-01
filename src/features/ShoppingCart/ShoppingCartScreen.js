import React, { useState } from 'react';
import ShoppingCheckout from './ShoppingScreens/ShoppingCheckout';
import ShoppingPayment from './ShoppingScreens/ShoppingPayment';
import ShoppingBasket from './ShoppingScreens/ShoppingBasket';

const ShoppingCartScreen = () => {
  const [whichPageRender, setPageRender] = useState(1);
  // TODO: Set logic method

  const switchPage = (value) => {
    // For up and Down
    setPageRender(whichPageRender + value);
  };

  switch (whichPageRender) {
    case 1:
      return <ShoppingBasket switchPage={switchPage} />;
    case 2:
      return <ShoppingPayment />;
    case 3:
      return <ShoppingCheckout />;
    default:
      return <ShoppingBasket switchPage={switchPage} />;
  }
};

export default ShoppingCartScreen;
