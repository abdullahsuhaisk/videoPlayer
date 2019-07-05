import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import AddToCardButtonWrapper from './AddToCardButton.style';

const CART_FRAGMENT = gql`
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

const ADD_PRODUCT_TO_CART = gql`
  mutation addProductToCart($productId: Int!) {
    addProductToCart(productId: $productId) {
      ...cart
    }
  }
  ${CART_FRAGMENT}
`;

const GET_CONSUMER = gql`
  query getConsumer {
    consumer {
      id
      cart {
        ...cart
      }
    }
  }
  ${CART_FRAGMENT}
`;

const updateCache = (cache, data) => {
  const { addProductToCart } = data;
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

const AddToCardButton = ({ styles, productId }) => {
  return (
    <Mutation
      mutation={ADD_PRODUCT_TO_CART}
      variables={{ productId }}
      update={(cache, { data }) => updateCache(cache, data)}>
      {(addToCart) => {
        return (
          <AddToCardButtonWrapper styles={styles}>
            <button onClick={addToCart} className="vb--addToCardButton">
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
