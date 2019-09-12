/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Query, withApollo } from 'react-apollo';

import {
  GET_CONSUMER_CART,
  GET_CONSUMER_TOTAL_PRICE,
  DELETE_PRODUCT_FROM_CART
} from '../shoppingCartQueries';

const ShoppingCartTotal = ({
  setTotalPrice,
  totalPrice,
  setCheckoutShowing,
  checkoutShowing,
  setCheckOutSteps,
  client
}) => {
  // const deleteAllProductsInCart = async (deleteProductInCart) => {
  //   await deleteProductInCart({ variables: { productId: 1 } });
  // };

  // useEffect(() => {
  //   client
  //     .query({ query: GET_CONSUMER_CART, variables: {} })
  //     .then(({ data: { consumer } }) => {
  //       console.log(consumer);
  //       return (
  //         consumer.cart &&
  //         consumer.cart.items &&
  //         setCartItems(consumer.cart.items)
  //       );
  //     });
  // }, []);
  // console.log(cartItems);
  const deleteProductCart = (productArray) => {
    // console.log(productArray);
    productArray &&
      productArray.map((productId) =>
        client
          .mutate({
            mutation: DELETE_PRODUCT_FROM_CART,
            variables: { productId },
            refetchQueries: [{ query: GET_CONSUMER_CART }]
          })
          .then((data) => data)
      );
    setTotalPrice(0);
  };
  return (
    <Query query={GET_CONSUMER_TOTAL_PRICE}>
      {({ loading, error, data: { consumer } }) => {
        if (loading || error) {
          return null;
        }
        const cart = consumer && consumer.cart;
        const items = cart && cart.items;
        const productArray = [];
        items.map((item) => productArray.push(item.product.id));

        const currencySymbol =
          consumer.cart &&
          consumer.cart.totalPrices &&
          consumer.cart.totalPrices[0] &&
          consumer.cart.totalPrices[0].currency &&
          consumer.cart.totalPrices[0].currency.symbol;
        return (
          <div className="ShoppingCartTotal" style={{ bottom: 0 }}>
            <div className="ShoppingCartTotalContainer">
              <div className="ShoppingCartTotalContainer--content">
                <label className="ShoppingCartTotal--total-label">TOTAL</label>
                <span className="ShoppingCartTotal--total-price">
                  {currencySymbol}
                  {totalPrice}
                </span>
                {checkoutShowing === true ? (
                  <a
                    className="ShoppingCartTotal--next"
                    onClick={() => {
                      deleteProductCart(productArray);
                      setCheckOutSteps(2);
                    }}>
                    CheckOut
                  </a>
                ) : (
                  <a
                    className="ShoppingCartTotal--next"
                    onClick={() => setCheckoutShowing(true)}>
                    Next
                  </a>
                )}
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default withApollo(ShoppingCartTotal);

// {
/* <Mutation
                    mutation={DELETE_PRODUCT_FROM_CART}
                    refetchQueries={() => {
                      console.log('refetchQueries');
                      return [
                        {
                          query: GET_CONSUMER_TOTAL_PRICE
                        }
                      ];
                    }}>
                    {({ deleteProductInCart }, { data, error, loading }) => {
                      if (loading) {
                        return 'loading';
                      }
                      if (error) {
                        return 'error';
                      }
                      return (
                        <a
                          className="ShoppingCartTotal--next"
                          onClick={() => {
                            deleteAllProductsInCart(deleteProductInCart);
                            setCheckOutSteps(2);
                          }}>
                          CheckOut
                        </a>
                      );
                    }}
                  </Mutation> */
// }
