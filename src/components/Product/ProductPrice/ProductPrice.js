import React from 'react';
import { ProductPriceWrapper } from './ProductPrice.style';

const ProductPrice = (props) => {
  return (
    <ProductPriceWrapper>
      <div className="vb--product-card-price-container">
        <div className="vb--product-card-discount-rate">
          <span>%50</span>
        </div>
        <div className="vb--product-card-base-price">
          <span>$250.00</span>
        </div>
        <div className="vb--product-card-current-price">
          <span>$120.00</span>
        </div>
      </div>
    </ProductPriceWrapper>
  );
};

export default ProductPrice;
