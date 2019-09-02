/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { withApollo } from 'react-apollo';
import ShoppingCart from './ShoppingScreens/ShoppingCart';
import ShoppingCartTotal from './ShoppingScreens/ShoppingCartTotal';
import CheckoutScreen from './Checkout/CheckoutScreen';
import { GET_CONSUMER_TOTAL_PRICE } from './shoppingCartQueries';
import { GET_PERSON } from '../ProfileNew/ProfileQueries';
import ShoppingCardContentLoader from '../../components/ContentLoader/ShoppingCartContentLoader';

// Other components needs
// It will manage the cart and wizard status with like a toogle state and render shoppingCart or Checkout
const ShoppingCartScreen = ({ client }) => {
  const [checkValue, setCheckValue] = React.useState(1);
  const [checkoutShowing, setCheckoutShowing] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [checkOutSteps, setCheckOutSteps] = React.useState(1);
  const [isHasConsumer, setIsHasConsumer] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    setIsLoading(true);
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
        setIsHasConsumer(true);
        setIsLoading(false);
      })
      .catch(() => {
        setIsHasConsumer(false);
        setIsLoading(false);
      });
  }, [totalPrice, checkValue]);

  if (!isHasConsumer) {
    return null;
  }
  // console.log(isLoading);
  // if (isLoading) {
  //   return <ShoppingCardContentLoader width={700} height={70} />;
  // }
  return (
    <div className="ShoppingCartContainer" style={{ height: 630 }}>
      {checkoutShowing === false ? (
        <>
          <ShoppingCart
            setCheckoutShowing={setCheckoutShowing}
            setCheckValue={setCheckValue}
            checkValue={checkValue}
          />
        </>
      ) : (
        <CheckoutScreen
          checkOutSteps={checkOutSteps}
          setCheckOutSteps={setCheckOutSteps}
          totalPrice={totalPrice}
          client={client}
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
