import React, { useState } from 'react';

import ShoppingCart from './ShoppingScreens/ShoppingCart';
import ShoppingCartTotal from './ShoppingScreens/ShoppingCartTotal';
import CheckoutScreen from './Checkout/CheckoutScreen';

// Other components needs
// It will manage the cart and wizard status with like a toogle state and render shoppingCart or Checkout
const ShoppingCartScreen = () => {
  const [checkoutShowing, setCheckoutShowing] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [checkOutSteps, setCheckOutSteps] = React.useState(1);
  return (
    <div className="ShoppingCartContainer" style={{ height: 630 }}>
      {checkoutShowing === false ? (
        <>
          <ShoppingCart setCheckoutShowing={setCheckoutShowing} />
        </>
      ) : (
        <CheckoutScreen
          checkOutSteps={checkOutSteps}
          setCheckOutSteps={setCheckOutSteps}
        />
      )}
      <ShoppingCartTotal
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
        setCheckoutShowing={setCheckoutShowing}
        checkoutShowing={checkoutShowing}
        setCheckOutSteps={setCheckOutSteps}
      />
    </div>
  );
};

export default ShoppingCartScreen;
