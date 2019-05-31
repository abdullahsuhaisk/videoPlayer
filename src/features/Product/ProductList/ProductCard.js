/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Wrapper } from './ProductCard.style';

const ProductCard = (props) => {
  const {
    styles,
    basePrice,
    discountRate,
    currentPrice,
    currency,
    brand,
    title,
    inStock,
    assets
  } = props;

  return (
    <Wrapper styles={styles} className="vibuy--product-card-widget">
      <div className="first-container">
        <div
          className="product-image"
          style={{ backgroundImage: `url(${assets.images[0]}` }}
        />
        <button className="add-to-wishlist">Add to Wish List</button>
      </div>
      <div className="second-container">
        <span className="brand">{brand}</span>
        <span className="title">{title}</span>
        <PriceTag
          basePrice={basePrice.toFixed(2)}
          discountRate={discountRate}
          currentPrice={currentPrice.toFixed(2)}
          currency={currency}
        />
        <span className="in-stock">{inStock ? 'In Stock' : 'No Stock'}</span>
        <hr />
        <button className="details">Details</button>
      </div>
    </Wrapper>
  );
};

const PriceTag = (props) => {
  const { basePrice, discountRate, currentPrice, currency } = props;

  if (basePrice && discountRate) {
    return (
      basePrice &&
      discountRate && (
        <div className="price-container">
          <div className="discount-rate">
            <span>{`%${discountRate}`}</span>
          </div>
          <div className="base-price">
            <span>{`${currency || ''}${basePrice}`}</span>
          </div>
          <div className="current-price">
            <span>{`${currency || ''}${currentPrice}`}</span>
          </div>
        </div>
      )
    );
  }

  return <span className="price">{`${currency || ''}${currentPrice}`}</span>;
};

export default ProductCard;
