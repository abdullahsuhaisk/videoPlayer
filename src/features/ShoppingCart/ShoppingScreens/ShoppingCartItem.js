/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import Stepper from '../../../components/Stepper/Stepper';
import CardImage from '../../../components/Card/ProductCard/CardImage';
import CardInfo from '../../../components/Card/ProductCard/CardInfo';
import CardPrice from '../../../components/Card/ProductCard/CardPrice';
import CardClose from '../../../components/Card/ProductCard/CardClose';
import { Wrapper, ShoppingCartItemStyles } from './ShoppingCartItem.style';
import { loadWebFontsFromStyles } from '../../../utils/parseStyles';
import { UPDATE_PRODUCT_IN_CART, GET_CONSUMER } from '../shoppingCartQueries';

const updateCache = (cache, { updateProductInCart }) => {
  const { consumer } = cache.readQuery({
    query: GET_CONSUMER
  });

  consumer.cart = updateProductInCart;

  cache.writeQuery({
    query: GET_CONSUMER,
    data: {
      consumer
    }
  });
};

const ShoppingCartItem = ({ styles, cartItem, onRemoveItem }) => {
  useEffect(() => {
    loadWebFontsFromStyles(ShoppingCartItemStyles);
    loadWebFontsFromStyles(styles);
  }, []);

  return (
    <Wrapper styles={styles}>
      <CardImage
        style={{
          backgroundImage: `url(${cartItem.product.image.thumbnailUrl}`
        }}
      />
      <CardInfo
        name={cartItem.product.name}
        seller={cartItem.product.brand.name}
        style={{ marginLeft: '30px' }}
      />
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
      <CardPrice currentPrice={cartItem.product.price.toFixed(2)} />
      <CardClose onClose={onRemoveItem} />
    </Wrapper>
  );
};

ShoppingCartItem.propTypes = {
  styles: PropTypes.object,
  cartItem: PropTypes.object.isRequired,
  onRemoveItem: PropTypes.func.isRequired
};

ShoppingCartItem.defaultProps = {
  styles: {}
};

export default ShoppingCartItem;
