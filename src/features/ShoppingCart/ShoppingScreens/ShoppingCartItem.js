/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import Stepper from '../../../components/Stepper/Stepper';
import {
  UPDATE_PRODUCT_IN_CART,
  GET_CONSUMER_CART,
  GET_CONSUMER_TOTAL_PRICE
} from '../shoppingCartQueries';

import { httpToHttps } from '../../../utils/httpTohttps';

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

const ShoppingCartItem = ({
  cartItem,
  onRemoveItem,
  setCheckValue,
  checkValue
}) => {
  console.log(checkValue);
  return (
    <div className="ShoppingCart">
      <div className="ShoppingCart--product">
        <figure className="ShoppingCart--product-figure">
          <img
            src={httpToHttps(
              cartItem.product.image && cartItem.product.image.thumbnailUrl
            )}
            className="ShoppingCart--product-figure-img"
            alt="abc"
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
        update={(cache, { data }) => updateCache(cache, data)}
        refetchQueries={() => {
          return [
            {
              query: GET_CONSUMER_CART
            },
            {
              query: GET_CONSUMER_TOTAL_PRICE
            }
          ];
        }}>
        {(updateProductInCart) => {
          return (
            <Stepper
              checkValue={checkValue}
              setCheckValue={setCheckValue}
              value={cartItem.quantity}
              onValueChanged={(value) => {
                if (value === 0) {
                  onRemoveItem();
                  setCheckValue(checkValue + 1);
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
        <span className="ShoppingCart--price">
          {cartItem &&
            cartItem.product &&
            cartItem.quantity * cartItem.product.price}
        </span>
      </div>
      <div
        className="ShoppingCart--closeContainer"
        onClick={() => {
          console.log('deleted item');
          setCheckValue(checkValue + 1);
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
