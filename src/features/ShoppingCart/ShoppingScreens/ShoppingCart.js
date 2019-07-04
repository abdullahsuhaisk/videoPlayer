import React from 'react';
import gql from 'graphql-tag';
import { ShoppingCartItemWrapper } from '../ShoppingCart.style';
import { Query } from 'react-apollo';
// import Button from '../../../components/Button/Button';
import ShoppingCartItem from './ShoppingCartItem';

const GET_CART_ITEMS = gql`
  query getCartItems {
    consumer {
      cart {
        items {
          product {
            id
            name
            brand {
              id
              name
            }
            image {
              id
              thumbnailUrl
            }
            price
            discount
            currentPrice @client
          }
          quantity
        }
      }
    }
  }
`;

const ShoppingCart = () => {
  return (
    <ShoppingCartItemWrapper>
      <div className="vb--tabs--shoppingCart-basket-container">
        <div className="vb--tabs-shoppingCart-content-Section">
          <Query query={GET_CART_ITEMS}>
            {({ loading, error, data }) => {
              if (loading || error) {
                return null;
              }

              const {
                consumer: { cart }
              } = data;

              return cart.items.map((item) => (
                <ShoppingCartItem cartItem={item} />
              ));
            }}
          </Query>
          {/* {basketProducts &&
            basketProducts.map((productId) => (
              <ShoppingCartItem
                product={products[productId]}
                removeCart={removeCart}
                key={productId}
                productId={productId}
              />
            ))} */}
        </div>
        {/* <div className="vb--tabs--shoppingCart-basket-below">
          <div className="vb--tabs--shoppingCart-basket-below-item">TOTAL</div>
          <div className="vb--tabs--shoppingCart-basket-below-item"> */}
        {/* $ {totalPrice.toFixed(2)} */}
        {/* </div> */}
        {/* <div className="vb--tabs--shoppingCart-basket-below-item">
            <Button>Check</Button>
          </div>
        </div> */}
      </div>
    </ShoppingCartItemWrapper>
  );
};

export default ShoppingCart;
