import React from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import AddToCardButtonWrapper from './AddToCardButton.style';
import {
  GET_CONSUMER_CART,
  ADD_PRODUCT_TO_CART,
  IS_LOGGED_IN
} from '../../features/ShoppingCart/shoppingCartQueries';

const updateCache = (cache, { addProductToCart }) => {
  const { consumer } = cache.readQuery({
    query: GET_CONSUMER_CART
  });

  consumer.cart = addProductToCart;

  cache.writeQuery({
    query: GET_CONSUMER_CART,
    data: {
      consumer
    }
  });
};

const addToCartCb = async (client, addToCart) => {
  const { isLoggedIn } = client.readQuery({
    query: IS_LOGGED_IN
  });

  if (isLoggedIn) {
    await addToCart();
    client.writeData({
      data: { productIdInDetails: null, navigationDialogShowing: true }
    });
  } else {
    client.writeData({ data: { isLoginFormShowing: true } });
  }
};

const AddToCardButton = ({ productId, quantity }) => {
  return (
    <Mutation
      mutation={ADD_PRODUCT_TO_CART}
      variables={{ productId, quantity }}
      update={(cache, { data }) => updateCache(cache, data)}>
      {(addToCart, { client }) => {
        return (
          <>
            <button
              onClick={() => addToCartCb(client, addToCart)}
              className="ProductDetail--addToCartBtn">
              <i className="ProductDetail--addToCartBtn-icon"></i>
              Add To Card
            </button>
          </>
        );
      }}
    </Mutation>
  );
};

AddToCardButton.propTypes = {
  productId: PropTypes.number.isRequired,
  quantity: PropTypes.number
};

AddToCardButton.defaultProps = {
  quantity: 1
};

export default AddToCardButton;
