import React from 'react';

const ProductDetailGoToLink = ({ link }) => {
  // http://localhost:3000/prodLinkId/5da718213ca28/?haslink=true&image=awesome.jpg
  return (
    <div>
      <a className="ProductDetail--addToCartBtn" href={link} target="_blank">
        <i className="ProductDetail--addToCartBtn-icon"></i>
        Go To Link
      </a>
    </div>
  );
};

export default ProductDetailGoToLink;
