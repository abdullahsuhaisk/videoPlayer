import React from 'react';

const ProductDetailPriceNew = ({ previousPrice, currentPrice }) => {
  return (
    <div className="productdetail--price-wrapper">
      <div className="previous-price">{previousPrice}</div>
      <div className="current-price">{currentPrice}</div>
    </div>
  );
};

ProductDetailPriceNew.defaultProps = {
  previousPrice: '$130',
  currentPrice: '$70'
};

export default ProductDetailPriceNew;
