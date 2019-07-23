import React from 'react';

import cardimg from './assets/cardimg.png';

const ProductListCard = () => {
  return (
    <React.Fragment>
      <div className="Product-Card">
        <div className="productCard--imageWrapper">
          <img src={cardimg} className="productCard--image" />
          <a className="productCard--wishlist-status">Add to Wish List</a>
        </div>
        <p className="productCard--name">Pierre Cardin Women Red Glasses</p>
        <div className="productCard--priceWrapper">
          <p className="productCard--price">12$</p>
        </div>
        <p className="productCard--stock-status">in stock</p>
        <div className="productCard--underline"></div>
        <a className="productCard--detail">Details</a>
      </div>
    </React.Fragment>
  );
};

export default ProductListCard;
