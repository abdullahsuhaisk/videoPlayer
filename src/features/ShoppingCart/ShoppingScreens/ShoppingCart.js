import React, { useState } from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import { ShoppingCartItemWrapper } from '../ShoppingCart.style';
import Button from '../../../components/Button/Button';
import ShoppingCartItem from './ShoppingCartItem';
import { InjectProductProps } from '../../../store/redux/providers';
import { InjectShoppingProps } from '../../../store/redux/shoppingCart/shoppingCartProps';

const ShoppingBasket = (props) => {
  const { switchPage, basketProducts, products, removeCart } = props;
  const [totalPrice, setTotalPrice] = useState(0);

  // TODO: CHECK TOTAL PRİCE METHOD
  return (
    <ShoppingCartItemWrapper>
      <div className="vb--tabs--shoppingCart-basket-container">
        <div className="vb--tabs-shoppingCart-content-Section">
          {basketProducts &&
            basketProducts.map((productId) => (
              <ShoppingCartItem
                product={products[productId]}
                removeCart={removeCart}
                key={productId}
                productId={productId}
              />
            ))}
        </div>
        <div className="vb--tabs--shoppingCart-basket-below">
          <div className="vb--tabs--shoppingCart-basket-below-item">TOTAL</div>
          <div className="vb--tabs--shoppingCart-basket-below-item">
            $ {totalPrice.toFixed(2)}
          </div>
          <div className="vb--tabs--shoppingCart-basket-below-item">
            <Button onClick={() => switchPage()}>Check</Button>
          </div>
        </div>
      </div>
    </ShoppingCartItemWrapper>
  );
};

ShoppingBasket.propTypes = {};

ShoppingBasket.defaultProps = {};

export default compose(
  InjectProductProps({
    selectProps: ({ products }) => ({ products })
  }),
  InjectShoppingProps({
    selectActions: ({ removeCart }) => ({ removeCart }),
    selectProps: ({ basketProducts }) => ({ basketProducts })
  })
)(ShoppingBasket);
