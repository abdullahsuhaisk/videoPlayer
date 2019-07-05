import React from 'react';
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';
import { ShoppingCartItemWrapper } from '../ShoppingCart.style';
// import Button from '../../../components/Button/Button';
import ShoppingCartItem from './ShoppingCartItem';

export const GET_CART = gql`
  query getCart {
    consumer {
      id
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

const REMOVE_ITEM = gql`
  mutation removeItem($productId: Int!) {
    deleteProductInCart(productId: $productId) {
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
`;

const ShoppingCart = () => {
  return (
    <ShoppingCartItemWrapper>
      <div className="vb--tabs--shoppingCart-basket-container">
        <div className="vb--tabs-shoppingCart-content-Section">
          <Query query={GET_CART}>
            {({ loading, error, data }) => {
              if (loading || error) {
                return null;
              }

              const { consumer } = data;
              const { cart } = consumer;

              return cart.items.map((item) => (
                <Mutation
                  mutation={REMOVE_ITEM}
                  variables={{ productId: item.product.id }}
                  update={(cache, { data: { deleteProductInCart } }) => {
                    cache.writeQuery({
                      query: GET_CART,
                      data: {
                        consumer: {
                          id: consumer.id,
                          cart: deleteProductInCart,
                          __typename: 'ConsumerType'
                        }
                      }
                    });
                  }}>
                  {(removeItem) => {
                    return (
                      <ShoppingCartItem
                        cartItem={item}
                        onRemoveItem={removeItem}
                      />
                    );
                  }}
                </Mutation>
              ));
            }}
          </Query>
        </div>
        {/* <div className="vb--tabs--shoppingCart-basket-below">
          <div className="vb--tabs--shoppingCart-basket-below-item">TOTAL</div>
          <div className="vb--tabs--shoppingCart-basket-below-item">
        $ {totalPrice.toFixed(2)}
        </div>
        <div className="vb--tabs--shoppingCart-basket-below-item">
            <Button>Check</Button>
          </div>
        </div> */}
      </div>
    </ShoppingCartItemWrapper>
  );
};

export default ShoppingCart;
