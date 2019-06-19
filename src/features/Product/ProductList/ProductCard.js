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
  assets,
  id,
  setProductId,
  openDialog
}) => {
  return (
    <>
      <Wrapper styles={styles} className="vb--product-card">
        <div className="vb--product-card-first-container">
          <div
            className="vb--product-card-product-image"
            style={{ backgroundImage: `url(${assets.images[0]}` }}
          />
          <button className="vb--product-card-add-to-wishlist">
            Add to Wish List
          </button>
        </div>
        <div className="vb--product-card-second-container">
          <span className="vb--product-card-brand">{brand}</span>
          <span className="vb--product-card-title">{title}</span>
          {basePrice && discountRate ? (
            <div className="vb--product-card-price-container">
              <div className="vb--product-card-discount-rate">
                <span>{`%${discountRate}`}</span>
              </div>
              <div className="vb--product-card-base-price">
                <span>{`${currency || ''}${basePrice.toFixed(2)}`}</span>
              </div>
              <div className="vb--product-card-current-price">
                <span>{`${currency || ''}${currentPrice.toFixed(2)}`}</span>
              </div>
            </div>
          ) : (
            <span className="vb--product-card-price">{`${currency ||
              ''}${currentPrice.toFixed(2)}`}</span>
          )}
          <span className="vb--product-card-in-stock">
            {inStock ? 'In Stock' : 'No Stock'}
          </span>
          <hr />
          <button
            className="vb--product-card-details"
            onClick={() => {
              setProductId(id);
              openDialog();
            }}>
            Details
          </button>
        </div>
      </Wrapper>
    </>
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
  assets: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  setProductId: PropTypes.func.isRequired,
  openDialog: PropTypes.func.isRequired
};

ProductCard.defaultProps = {
  styles: {},
  basePrice: 0,
  discountRate: 0
};

export default ProductCard;
