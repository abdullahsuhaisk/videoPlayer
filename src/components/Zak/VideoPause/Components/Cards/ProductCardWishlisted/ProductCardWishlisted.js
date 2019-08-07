import React from 'react';
// import '../../../assets/css/template1/Cards.css';

import cardimg from '../../../assets/cardimg.png';
import circleimg from '../../../assets/circle.png';

const ProductCardWishlisted = () => {
  return (
    <React.Fragment>
      <div className="singleCarContainer">
        <div className="Product-Card">
          <figure className="productCard--imageWrapper">
            <img src="/images/product1.jpg" className="productCard--image" />
          </figure>
          <div className="productCard--wishlist-statusWrapper">
            <a className="productCard--wishlist-status">Add to Wish List</a>
          </div>
          <p className="productCard--name">Pierre Cardin Women Red Glasses</p>
          <div className="productCard--priceWrapper">
            <p className="productCard--wishlist--price">74.98$</p>
          </div>
          <p className="productCard--stock-status">In Stock</p>
          <hr className="productCard--underline" />
          <a className="productCard--detail">Details</a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductCardWishlisted;
