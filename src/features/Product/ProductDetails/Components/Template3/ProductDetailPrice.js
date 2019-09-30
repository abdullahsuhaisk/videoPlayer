import React from 'react';
import ProductQueryHoc from '../../../../../components/HOCS/Grapqhl/ProductQueryHoc';
import { GET_PRODUCT } from '../../../../../Queries/Products/ProductQueries';

const ProductDetailPriceNew = ({ data }) => {
  const { product } = data;
  return (
    <div className="productdetail--price-wrapper">
      {product.discount === 0 ? (
        <div className="current-price">$ {product.currentPrice}</div>
      ) : (
        <React.Fragment>
          <div className="previous-price">$ {product.price}</div>
          <div className="current-price">$ {product.currentPrice}</div>
        </React.Fragment>
      )}
    </div>
  );
};

ProductDetailPriceNew.defaultProps = {
  data: {
    product: {
      price: 100,
      currentPrice: 80,
      discount: 20
    }
  }
};

export default ProductQueryHoc(ProductDetailPriceNew, GET_PRODUCT);
