import React, { useState } from 'react';
import { ReactComponent as MinusIcon } from '../../../../../assets/icons/MinusIcon.svg';
import { ReactComponent as PlusIcon } from '../../../../../assets/icons/PlusIcon.svg';

const ProductDetailPriceNew = () => {
  const [data, setData] = useState({ quantity: 1 });
  return (
    <div className="productdetail--quantity-wrapper">
      <div className="productdetail--label">Quantity</div>
      <div className="productdetail--quantity-options">
        {data.quantity > 1 ? (
          <div
            className="decrement"
            onClick={() => {
              setData({ ...data, quantity: data.quantity - 1 });
            }}>
            {' '}
            <MinusIcon />
          </div>
        ) : (
          <div className="decrement">
            <MinusIcon />
          </div>
        )}

        <div className="value">{data.quantity}</div>

        <div
          className="increment"
          onClick={() => {
            setData({ ...data, quantity: data.quantity + 1 });
          }}>
          <PlusIcon />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPriceNew;
