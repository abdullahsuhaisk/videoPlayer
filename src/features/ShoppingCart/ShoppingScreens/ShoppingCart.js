import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { ShoppingCartItemWrapper } from '../ShoppingCart.style';
// import Button from '../../../components/Button/Button';
import ShoppingCartItem from './ShoppingCartItem';
import { GET_CONSUMER_CART, REMOVE_ITEM } from '../shoppingCartQueries';

const updateConsumerCart = (cache, { deleteProductInCart }) => {
  const { consumer } = cache.readQuery({
    query: GET_CONSUMER_CART
  });

  consumer.cart = deleteProductInCart;

  cache.writeQuery({
    query: GET_CONSUMER_CART,
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
          <Query query={GET_CONSUMER_CART} fetchPolicy="network-only">
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
                  key={item.product.id}
                  mutation={REMOVE_ITEM}
                  variables={{ productId: item.product.id }}
                  update={(cache, { data: deleteProductInCart }) =>
                    updateConsumerCart(cache, deleteProductInCart)
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
