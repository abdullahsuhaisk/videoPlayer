import React from 'react';

const ProductDetailAddToCard = ({ handleAddToCart }) => {
  return (
    <div>
      <button
        onClick={() => {
          handleAddToCart();
          console.log(JSON.parse(localStorage.getItem('guestCart')));
        }}
        className="ProductDetail--addToCartBtn">
        <i className="ProductDetail--addToCartBtn-icon"></i>
        Add To Cart
      </button>
      <div className="productdetail--seperator" />
    </div>
  );
};

export default ProductDetailAddToCard;
