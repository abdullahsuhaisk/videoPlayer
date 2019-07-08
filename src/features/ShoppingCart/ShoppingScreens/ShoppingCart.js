import React from 'react';
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';
import { ShoppingCartItemWrapper } from '../ShoppingCart.style';
// import Button from '../../../components/Button/Button';
import ShoppingCartItem from './ShoppingCartItem';

const CART = gql`
  fragment cart on CartType {
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
`;

export const GET_CONSUMER = gql`
  query getCart {
    consumer {
      id
      cart {
        ...cart
      }
    }
  }
  ${CART}
`;

const REMOVE_ITEM = gql`
  mutation removeItem($productId: Int!) {
    deleteProductInCart(productId: $productId) {
      ...cart
    }
  }
  ${CART}
`;

const updateCache = (cache, { deleteProductInCart }) => {
  const { consumer } = cache.readQuery({
    query: GET_CONSUMER
  });

  consumer.cart = deleteProductInCart;

  cache.writeQuery({
    query: GET_CONSUMER,
    data: {
      consumer
    }
  });
};

const ShoppingCart = () => {
  return (
    <ShoppingCartItemWrapper>
      <div className="vb--tabs--shoppingCart-basket-container">
        <div className="vb--tabs-shoppingCart-content-Section">
          <Query query={GET_CONSUMER} fetchPolicy="network-only">
            {({ loading, error, data }) => {
              if (loading || error) {
                return !!error ? (
                  <div>You need to log-in to see your shopping cart.</div>
                ) : null;
              }

              const { consumer } = data;

              if (!consumer) {
                return <div>You need to log-in to see your shopping cart.</div>;
              }

              const { cart } = consumer;

              if (cart.items.length === 0) {
                return <div>There is no product in your shopping cart.</div>;
              }

              return cart.items.map((item) => (
                <Mutation
                  mutation={REMOVE_ITEM}
                  variables={{ productId: item.product.id }}
                  update={(cache, { data: deleteProductInCart }) =>
                    updateCache(cache, deleteProductInCart)
                  }>
                  {(removeItem) => (
                    <ShoppingCartItem
                      cartItem={item}
                      onRemoveItem={removeItem}
                    />
                  )}
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
