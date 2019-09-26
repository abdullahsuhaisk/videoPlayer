import React from 'react';
import ProductQueryHoc from '../../../../components/HOCS/Grapqhl/ProductQueryHoc';
import { GET_PRODUCT } from '../../../../Queries/Products/ProductQueries';

const ProductDetaiHeader = ({ data }) => {
  const { product } = data;
  return (
    <div className="ProductDetail--information--title">
      <h2 className="ProductDetail--information--title--h2">{product.name}</h2>
    </div>
  );
};

export default ProductQueryHoc(ProductDetaiHeader, GET_PRODUCT);
