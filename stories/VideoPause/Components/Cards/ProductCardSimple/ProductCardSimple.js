import React from 'react';
import '../Cards.styles.css';

import cardimg from '../../../assets/cardimg.png';

const ProductCardSimple = () => {
  return (
    <React.Fragment>
      <div className="mainMenu--productCard">
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

export default ProductCardSimple;
