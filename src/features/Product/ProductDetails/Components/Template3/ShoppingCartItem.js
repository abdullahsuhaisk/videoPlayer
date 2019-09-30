import React from 'react';
import SampleImage from '../../../../../assets/images/SampleImage.jpg';
import ProductDetailQuantity from './ProductDetailQuantity';

const ShoppingCartItem = () => {
  return (
    <div className="shoppcart--item-container">
      <div className="item-image">
        <img src={SampleImage} alt="" />
      </div>
      <div className="item-info">
        <div>
          <div className="item-name">Gigi Hadid Flag Print One-Piece</div>
          <div className="item-variant">Color: Navy Blazer</div>
          <div className="item-variant">Size: S</div>
        </div>
        <div className="item-quanity-price">
          <div className="item--quantity">
            <ProductDetailQuantity />
          </div>
          <div className="item--price">$79.99</div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
