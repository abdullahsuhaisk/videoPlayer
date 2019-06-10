/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './ProductCard.style';

const ProductCard = ({
  styles,
  basePrice,
  discountRate,
  currentPrice,
  currency,
  brand,
  title,
  inStock,
  assets
}) => {
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
        {basePrice && discountRate ? (
          <div className="price-container">
            <div className="discount-rate">
              <span>{`%${discountRate}`}</span>
            </div>
            <div className="base-price">
              <span>{`${currency || ''}${basePrice.toFixed(2)}`}</span>
            </div>
            <div className="current-price">
              <span>{`${currency || ''}${currentPrice.toFixed(2)}`}</span>
            </div>
          </div>
        ) : (
          <span className="price">{`${currency || ''}${currentPrice.toFixed(
            2
          )}`}</span>
        )}
        <span className="in-stock">{inStock ? 'In Stock' : 'No Stock'}</span>
        <hr />
        <button className="details">Details</button>
      </div>
    </Wrapper>
  );
};

ProductCard.propTypes = {
  styles: PropTypes.object,
  basePrice: PropTypes.number,
  discountRate: PropTypes.number,
  currentPrice: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  inStock: PropTypes.bool.isRequired,
  assets: PropTypes.object.isRequired
};

ProductCard.defaultProps = {
  styles: {},
  basePrice: 0,
  discountRate: 0
};

export default ProductCard;
