import React from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import AddToCardButtonWrapper from './AddToCardButton.style';
import {
  GET_CONSUMER,
  ADD_PRODUCT_TO_CART,
  IS_LOGGED_IN
} from '../../features/ShoppingCart/shoppingCartQueries';

const updateCache = (cache, { addProductToCart }) => {
  const { consumer } = cache.readQuery({
    query: GET_CONSUMER
  });

  consumer.cart = addProductToCart;

  cache.writeQuery({
    query: GET_CONSUMER,
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

const AddToCardButton = ({ styles, productId }) => {
  return (
    <Mutation
      mutation={ADD_PRODUCT_TO_CART}
      variables={{ productId }}
      update={(cache, { data }) => updateCache(cache, data)}>
      {(addToCart, { client }) => {
        return (
          <AddToCardButtonWrapper styles={styles}>
            <button
              onClick={() => addToCartCb(client, addToCart)}
              className="vb--addToCardButton">
              <div className="vb--addToCardButton-icon" />
              <div className="vb--addToCardButton-text">Add To Card</div>
            </button>
          </AddToCardButtonWrapper>
        );
      }}
    </Mutation>
  );
};

AddToCardButton.propTypes = {
  styles: PropTypes.object,
  productId: PropTypes.number.isRequired
};

AddToCardButton.defaultProps = {
  styles: {}
};

export default AddToCardButton;
