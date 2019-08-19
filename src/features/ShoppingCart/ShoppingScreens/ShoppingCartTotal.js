import React from 'react';
import { Query } from 'react-apollo';
import { GET_CONSUMER_TOTAL_PRICE } from '../shoppingCartQueries';

const ShoppingCartTotal = ({
  setTotalPrice,
  totalPrice,
  setCheckoutShowing,
  checkoutShowing,
  setCheckOutSteps
}) => {
  return (
    <Query query={GET_CONSUMER_TOTAL_PRICE}>
      {({ loading, error, data: { consumer } }) => {
        if (loading || error) {
          return null;
        }
        {
          /* console.log(consumer); */
        }
        consumer.cart &&
          consumer.cart.totalPrices &&
          setTotalPrice(consumer.cart.totalPrices[0].totalPrice);

        const currencySymbol =
          consumer.cart &&
          consumer.cart.totalPrices &&
          consumer.cart.totalPrices[0] &&
          consumer.cart.totalPrices[0].currency &&
          consumer.cart.totalPrices[0].currency.symbol;
        {
          /* console.log(currencySymbol); */
        }
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
                    onClick={() => setCheckOutSteps(2)}>
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

export default ShoppingCartTotal;
