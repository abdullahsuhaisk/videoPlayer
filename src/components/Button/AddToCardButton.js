import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import AddToCardButtonWrapper from './AddToCardButton.style';

const ADD_PRODUCT_TO_CART = gql`
  mutation addProductToCart($productId: Int!) {
    addProductToCart(productId: $productId) {
      totalProductCount
    }
  }
`;

const AddToCardButton = ({ styles, productId }) => {
  return (
    <Mutation mutation={ADD_PRODUCT_TO_CART} variables={{ productId }}>
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
