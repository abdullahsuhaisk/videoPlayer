import React from 'react';
import ShoppingCartProduct from './ShoppingCartProduct/ShoppingCartProduct';

const ShoppingCart = () => {
  return (
    <div className="SideBar--shoppingCart">
      <div className="SideBar--shoppingCart--products scroll">
        <ShoppingCartProduct />
        <ShoppingCartProduct />
        <ShoppingCartProduct />
        <ShoppingCartProduct />
        <ShoppingCartProduct />
        <ShoppingCartProduct />
        <ShoppingCartProduct />
        <ShoppingCartProduct />
        <ShoppingCartProduct />
      </div>
      <div className="SideBar--shoppingCart--total">
        <span className="SideBar--shoppingCart--total--label">total</span>
        <p className="SideBar--shoppingCart--total--value">$ 845,73</p>
      </div>
      <div className="SideBar--shoppingCart--checkout">
        <p className="SideBar--shoppingCart--checkout--p">Checkout <i className="SideBar--shoppingCart--checkout--p--icon"></i></p>
      </div>
    </div>
  );
};

export default ShoppingCart;