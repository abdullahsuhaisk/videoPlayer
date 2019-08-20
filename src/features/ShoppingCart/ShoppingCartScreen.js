import React, { useState, useEffect } from 'react';
import { withApollo } from 'react-apollo';
import ShoppingCart from './ShoppingScreens/ShoppingCart';
import ShoppingCartTotal from './ShoppingScreens/ShoppingCartTotal';
import CheckoutScreen from './Checkout/CheckoutScreen';
import { GET_CONSUMER_TOTAL_PRICE } from './shoppingCartQueries';

// Other components needs
// It will manage the cart and wizard status with like a toogle state and render shoppingCart or Checkout
const ShoppingCartScreen = ({ client }) => {
  const [checkoutShowing, setCheckoutShowing] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [checkOutSteps, setCheckOutSteps] = React.useState(1);

  useEffect(() => {
    client
      .query({
        query: GET_CONSUMER_TOTAL_PRICE,
        variables: {},
        fetchPolicy: 'network-only'
      })
      .then(({ data: { consumer } }) => {
        consumer.cart.totalPrices[0]
          ? setTotalPrice(
              consumer.cart.totalPrices[0] &&
                consumer.cart.totalPrices[0].totalPrice
            )
          : setTotalPrice(0);
      });
  }, []);

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
          totalPrice={totalPrice}
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

export default withApollo(ShoppingCartScreen);
