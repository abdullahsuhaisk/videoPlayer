import React from 'react';
// import '../../../assets/css/template1/Cards.css';

import cardimg from '../../../assets/cardimg.png';

const ProductCardDiscount = () => {
  return (
    <React.Fragment>
      <div className="singleCarContainer">
        <div className="Product-Card">
          <figure className="productCard--imageWrapper">
            <img src="/images/product1.jpg" className="productCard--image" />
          </figure>
          <div className="productCard--Onwishlist-statusWrapper">
            <i className="productCard--Onwishlist-checkedIcon"></i>
            <a className="productCard--Onwishlist-status">On Wishlist</a>
          </div>
          <p className="productCard--name">Pierre Cardin Women Red Glasses</p>
          <div className="productCard--priceWrapper">
            <div className="productCard--discountWrapper">
              <p className="productCard--dicount-percent">%50</p>
              <p className="productCard--dicount-price">
                149.95$
                <svg>
                  <line x1="0" y1="100%" x2="100%" y2="0" />
                </svg>
              </p>
            </div>
            <p className="productCard--Onwishlist--price">74.98$</p>
          </div>
          <p className="productCard--stock-status">In Stock</p>
          <hr className="productCard--underline" />
          <a className="productCard--detail">Details</a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductCardDiscount;
