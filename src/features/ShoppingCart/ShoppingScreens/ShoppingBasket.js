import React, { useState } from 'react';
import { compose } from 'redux';

import { ShoppingCartBasketWrapper } from '../ShoppingCart.style';
import Button from '../../../components/Button/Button';
import ShoppingCartCard from '../../../components/Card/ShoppingCartCard';
import { InjectProductProps } from '../../../store/redux/providers';
import { InjectShoppingProps } from '../../../store/redux/shoppingCart/shoppingCartProps';

const ShoppingBasket = (props) => {
  const { switchPage, basketProducts, products, removeCart } = props;
  const [piece, setPiece] = useState(1);
  return (
    <ShoppingCartBasketWrapper>
      <div className="vb--tabs--shoppingCart-basket-container">
        <div className="vb--tabs-shoppingCart-content-Section">
          {basketProducts &&
            basketProducts.map((productId) => (
              <ShoppingCartCard
                product={products[productId]}
                removeCart={removeCart}
                key={productId}
                productId={productId}
              />
            ))}
        </div>
        <div className="vb--tabs--shoppingCart-basket-below">
          <div className="vb--tabs--shoppingCart-basket-below-item">TOTAL</div>
          <div className="vb--tabs--shoppingCart-basket-below-item">886</div>
          <div className="vb--tabs--shoppingCart-basket-below-item">
            <Button onClick={() => switchPage(1)}>Check</Button>
          </div>
        </div>
      </div>
    </ShoppingCartBasketWrapper>
  );
};

export default compose(
  InjectProductProps({
    selectProps: ({ products }) => ({ products })
  }),
  InjectShoppingProps({
    selectActions: ({ removeCart }) => ({ removeCart }),
    selectProps: ({ basketProducts }) => ({ basketProducts })
  })
)(ShoppingBasket);
