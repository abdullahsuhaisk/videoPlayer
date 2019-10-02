import React from 'react';
import ProductQueryHoc from '../../../../components/HOCS/Grapqhl/ProductQueryHoc';
import { GET_PRODUCT } from '../../../../Queries/Products/ProductQueries';

const ProductDetailRaiting = ({ data }) => {
  const { product } = data;

  return (
    <div className="ProductDetail--information--rating">
      <div className="ProductDetail--information--rating--stars">
        <span className="ProductDetail--information--rating--stars--icon ProductDetail--information--rating--stars--icon-full"></span>
        <span className="ProductDetail--information--rating--stars--icon ProductDetail--information--rating--stars--icon-full"></span>
        <span className="ProductDetail--information--rating--stars--icon ProductDetail--information--rating--stars--icon-full"></span>
        <span className="ProductDetail--information--rating--stars--icon"></span>
        <span className="ProductDetail--information--rating--stars--icon"></span>
      </div>
      <p className="ProductDetail--information--rating--total">
        {product.rank}
      </p>
      <p className="ProductDetail--information--rating--votes">(381 votes)</p>
    </div>
  );
};

export default ProductQueryHoc(ProductDetailRaiting, GET_PRODUCT);
