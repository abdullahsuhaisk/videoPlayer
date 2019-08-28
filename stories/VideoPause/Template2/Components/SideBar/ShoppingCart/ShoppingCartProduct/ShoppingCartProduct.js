import React from 'react';

const ShoppingCartProduct = () => {
  return (
  <div className="SideBar--shoppingCart--product">
    <i className="SideBar--shoppingCart--product--close"></i>
    <figure className="SideBar--shoppingCart--product--figure">
      <img src ="/images/product2.jpg" className="SideBar--shoppingCart--product--figure--img" />
    </figure>
    <div className="SideBar--shoppingCart--product-info">
      <h3 className="SideBar--shoppingCart--product-name">Soundblaster  Best Headphone Rosepink</h3>
      <div className="SideBar--shoppingCart--product-seller">
        <label className="SideBar--shoppingCart--product-seller-label">
          Seller :
        </label>
        <span className="SideBar--shoppingCart--product-seller-name">
          Adidas Inc.
        </span>
      </div>
    </div>
    <div className="SideBar--shoppingCart--quantite">
      <div className="SideBar--shoppingCart--quantite-iconContainer">
        <i className="SideBar--shoppingCart--quantite-minusIcon"></i>
      </div>
      <div className="SideBar--shoppingCart--quantite-inputContrainer">
        <input
          type="number"
          className="SideBar--shoppingCart--quantite-input"
          value="1"
        />
      </div>
      <div className="SideBar--shoppingCart--quantite-iconContainer">
        <i className="SideBar--shoppingCart--quantite-plusIcon"></i>
      </div>
    </div>
    <div className="SideBar--shoppingCart--priceContainer">
      <span className="SideBar--shoppingCart--price">$ 205,00</span>
    </div>
  </div>
);
};

export default ShoppingCartProduct;