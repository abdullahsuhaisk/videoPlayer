import React from 'react';

import ShoppingCart from './ShoppingScreens/ShoppingCart';

// Other components needs

const ShoppingCartNew = () => {
  return (
    <React.Fragment>
      <div className="VideoPlayerContainer flex-column">
        <div className="ShoppingCart">
          <div className="ShoppingCart--product">
            <figure className="ShoppingCart--product-figure">
              <img
                src="/images/ShoppingCart2.jpg"
                className="ShoppingCart--product-figure-img"
              />
            </figure>
            <div className="ShoppingCart--product-info">
              <h3 className="ShoppingCart--product-name">
                Adidas DB1756 Cosmic 2 XS W Lady Shirt{' '}
              </h3>
              <div className="ShoppingCart--product-seller">
                <label className="ShoppingCart--product-seller-label">
                  Seller :
                </label>
                <span className="ShoppingCart--product-seller-name">
                  Adidas Inc.
                </span>
              </div>
            </div>
          </div>
          <div className="ShoppingCart--quantite">
            <div className="ShoppingCart--quantite-iconContainer">
              <i className="ShoppingCart--quantite-minusIcon"></i>
            </div>
            <div className="ShoppingCart--quantite-inputContrainer">
              <input
                type="number"
                className="ShoppingCart--quantite-input"
                value="1"
              />
            </div>
            <div className="ShoppingCart--quantite-iconContainer">
              <i className="ShoppingCart--quantite-plusIcon"></i>
            </div>
          </div>
          <div className="ShoppingCart--priceContainer">
            <span className="ShoppingCart--price">$ 205,00</span>
          </div>
          <div className="ShoppingCart--closeContainer">
            <i className="ShoppingCart--close"></i>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const ShoppingCartScreen = () => {
  return <ShoppingCartNew />;
};

export default ShoppingCartScreen;
