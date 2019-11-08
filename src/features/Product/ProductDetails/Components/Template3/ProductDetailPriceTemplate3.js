import React from 'react';

const ProductDetailPriceTemplate3 = ({
  currentPrice,
  price,
  discount,
  currency
}) => {
  // TODO: Destruct the currency={currency}
  return (
    <div className="productdetail--price-wrapper">
      {discount === 0 ? (
        <div className="current-price">
          {currentPrice} {currency && currency.symbol}
        </div>
      ) : (
        <React.Fragment>
          <div className="previous-price">
            {price} {currency && currency.symbol}
          </div>
          <div className="current-price">
            {currentPrice} {currency && currency.symbol}
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

ProductDetailPriceTemplate3.defaultProps = {
  price: 100,
  currentPrice: 80,
  discount: 20
};

export default ProductDetailPriceTemplate3;
