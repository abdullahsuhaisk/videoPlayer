import React from 'react';
import './ProductCardWishlisted.styles.css';

import cardimg from '../../../assets/cardimg.png';
import circleimg from '../../../assets/circle.png';

const ProductCardWishlisted = () => {
  return (
    <React.Fragment>
      <div className="mainMenu--productCard">
        <div className="productCard--imageWrapper2">
          <img src={cardimg} className="productCard--image" />
          <div className="productCard--wishlistWrapper">
            <img src={circleimg} className="productCard--wishlist-image" />
            <a className="productCard--wishlist-status">On Whistlist</a>
          </div>
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

export default ProductCardWishlisted;
