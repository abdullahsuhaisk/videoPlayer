import React, { useState } from 'react';

import { ShoppingCartItemWrapper } from '../ShoppingCart.style';
import Button from '../../../components/Button/Button';
// import ShoppingCartItem from './ShoppingCartItem';

const ShoppingBasket = () => {
  return (
    <ShoppingCartItemWrapper>
      <div className="vb--tabs--shoppingCart-basket-container">
        <div className="vb--tabs-shoppingCart-content-Section">
          {/* {basketProducts &&
            basketProducts.map((productId) => (
              <ShoppingCartItem
                product={products[productId]}
                removeCart={removeCart}
                key={productId}
                productId={productId}
              />
            ))} */}
        </div>
        <div className="vb--tabs--shoppingCart-basket-below">
          <div className="vb--tabs--shoppingCart-basket-below-item">TOTAL</div>
          <div className="vb--tabs--shoppingCart-basket-below-item">
            {/* $ {totalPrice.toFixed(2)} */}
          </div>
          <div className="vb--tabs--shoppingCart-basket-below-item">
            <Button>Check</Button>
          </div>
        </div>
      </div>
    </ShoppingCartItemWrapper>
  );
};

export default ShoppingBasket;
