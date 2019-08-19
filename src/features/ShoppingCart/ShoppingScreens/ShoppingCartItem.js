/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import Stepper from '../../../components/Stepper/Stepper';
import {
  UPDATE_PRODUCT_IN_CART,
  GET_CONSUMER_CART
} from '../shoppingCartQueries';

const updateCache = (cache, { updateProductInCart }) => {
  const { consumer } = cache.readQuery({
    query: GET_CONSUMER_CART
  });

  consumer.cart = updateProductInCart;

  cache.writeQuery({
    query: GET_CONSUMER_CART,
    data: {
      consumer
    }
  });
};

const ShoppingCartItem = ({ cartItem, onRemoveItem }) => {
  return (
    <div className="ShoppingCart">
      <div className="ShoppingCart--product">
        <figure className="ShoppingCart--product-figure">
          <img
            src={cartItem.product.image.thumbnailUrl}
            className="ShoppingCart--product-figure-img"
          />
        </figure>
        <div className="ShoppingCart--product-info">
          <h3 className="ShoppingCart--product-name">
            {cartItem.product.name}
          </h3>
          <div className="ShoppingCart--product-seller">
            <label className="ShoppingCart--product-seller-label">
              Seller :
            </label>
            <span className="ShoppingCart--product-seller-name">
              {cartItem.product.brand.name}
            </span>
          </div>
        </div>
      </div>
      <Mutation
        mutation={UPDATE_PRODUCT_IN_CART}
        update={(cache, { data }) => updateCache(cache, data)}>
        {(updateProductInCart) => {
          return (
            <Stepper
              value={cartItem.quantity}
              onValueChanged={(value) => {
                if (value === 0) {
                  onRemoveItem();
                }
                if (value > 0) {
                  updateProductInCart({
                    variables: {
                      productId: cartItem.product.id,
                      quantity: value
                    }
                  });
                }
              }}
            />
          );
        }}
      </Mutation>
      <div className="ShoppingCart--priceContainer">
        <span className="ShoppingCart--price">{cartItem.product.price}</span>
      </div>
      <div
        className="ShoppingCart--closeContainer"
        onClick={() => {
          console.log('deleted item');
          return onRemoveItem();
        }}>
        <i className="ShoppingCart--close"></i>
      </div>
    </div>
  );
};

ShoppingCartItem.propTypes = {
  cartItem: PropTypes.object.isRequired,
  onRemoveItem: PropTypes.func.isRequired
};

ShoppingCartItem.defaultProps = {};

export default ShoppingCartItem;
