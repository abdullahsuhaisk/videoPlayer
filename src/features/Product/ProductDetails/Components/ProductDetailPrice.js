import React from 'react';
import ProductQueryHoc from '../../../../components/HOCS/Grapqhl/ProductQueryHoc';
import { GET_PRODUCT } from '../../../../Queries/Products/ProductQueries';

const ProductDetailPrice = ({ product }) => {
  return (
    <div className="ProductDetail--information--priceBtnContainer">
      {product.discount ? (
        <div className="ProductDetail--information--price">
          <p className="ProductDetail--information--price--discount">
            {`%${product.discount}`}
          </p>
          <div className="ProductDetail--information--price--content">
            <p className="ProductDetail--information--price--beforeDiscountvalue">
              {`${product.currency.symbol}${product.price.toFixed(2)}`}
            </p>
            <p className="ProductDetail--information--price--value">
              {`${product.currency.symbol}${product.currentPrice}`}
            </p>
          </div>
        </div>
      ) : (
        <div className="ProductDetail--information--price">
          <p className="ProductDetail--information--price--value">
            {`${product.currency &&
              product.currency.symbol}${product.currency &&
              product.currentPrice}`}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductQueryHoc(ProductDetailPrice, GET_PRODUCT);
