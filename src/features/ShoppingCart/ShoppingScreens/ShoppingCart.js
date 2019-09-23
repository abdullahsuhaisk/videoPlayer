import React from 'react';
import { Mutation } from 'react-apollo';
// import { ShoppingCartItemWrapper } from '../ShoppingCart.style';
// import Button from '../../../components/Button/Button';
import ShoppingCartItem from './ShoppingCartItem';
import {
  GET_CONSUMER_CART,
  REMOVE_ITEM,
  GET_CONSUMER_TOTAL_PRICE
} from '../shoppingCartQueries';
import EmptyShoppingCart from '../EmptyShoppingCart';
import BaseQueryHoc from '../../../components/HOCS/Grapqhl/BaseQueryHoc';
//  import ShoppingCardContentLoader from '../../../components/ContentLoader/ShoppingCartContentLoader';

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

const ShoppingCart = ({ setCheckValue, checkValue, data }) => {
  const { consumer } = data;
  const { cart } = consumer;

  if (cart.items.length === 0) {
    // return <div>There is no product in your shopping cart.</div>;
    return <EmptyShoppingCart />;
  }
  return cart.items.map((item) => (
    <Mutation
      key={item.product.id}
      mutation={REMOVE_ITEM}
      variables={{ productId: item.product.id }}
      refetchQueries={() => {
        return [
          {
            query: GET_CONSUMER_CART
          },
          {
            query: GET_CONSUMER_TOTAL_PRICE
          }
        ];
      }}
      update={(cache, { data: deleteProductInCart }) =>
        updateConsumerCart(cache, deleteProductInCart)
      }>
      {(removeItem) => (
        <ShoppingCartItem
          cartItem={item}
          onRemoveItem={removeItem}
          setCheckValue={setCheckValue}
          checkValue={checkValue}
        />
      )}
    </Mutation>
  ));
};

export default BaseQueryHoc(ShoppingCart, GET_CONSUMER_CART, 'network-only');
