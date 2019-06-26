import React from 'react';
import { ShoppingCartBasketWrapper } from '../ShoppingCart.style';
import Button from '../../../components/Button/Button';
import ShoppingCartCard from '../../../components/Card/ShoppingCartCard';

const ShoppingBasket = () => {
  return (
    <ShoppingCartBasketWrapper>
      <div className="vb--tabs--shoppingCart-basket-container">
        <div className="vb--tabs-shoppingCart-content-Section">
          <ShoppingCartCard className="vb--tabs-profile-content-item" />
          <ShoppingCartCard />
          <ShoppingCartCard />
        </div>
        <div className="vb--tabs--shoppingCart-basket-below">
          <div className="vb--tabs--shoppingCart-basket-below-item">TOTAL</div>
          <div className="vb--tabs--shoppingCart-basket-below-item">886</div>
          <div className="vb--tabs--shoppingCart-basket-below-item">
            <Button>Check</Button>
          </div>
        </div>
      </div>
    </ShoppingCartBasketWrapper>
  );
};

export default ShoppingBasket;
