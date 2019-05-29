/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div((props) => ({
  ...props.styles,
  'pointer-events': 'auto'
}));

const ProductCard = (props) => {
  const { styles, basePrice, discountRate, currentPrice } = props;

  return (
    <StyledWrapper styles={styles} className="vibuy--product-card-widget">
      <div className="first-container">
        <div className="product-image">
          <img src="/images/tshirt.jpg" alt="" />
        </div>
        <span className="add-to-wishlist">Add to Wish List</span>
      </div>
      <div className="second-container">
        <span className="brand">Valentino</span>
        <span className="title">Turtleneck Sweater</span>
        <Price
          basePrice={basePrice}
          discountRate={discountRate}
          currentPrice={currentPrice}
        />
        <span className="in-stock">In Stock</span>
        <hr />
        <span className="details">Details</span>
      </div>
    </StyledWrapper>
  );
};

const Price = (props) => {
  const { basePrice, discountRate, currentPrice } = props;

  if (basePrice && discountRate) {
    return (
      basePrice &&
      discountRate && (
        <div className="price-container">
          <div className="discount-rate">
            <span>{discountRate}</span>
          </div>

          <div className="base-price">
            <span>{basePrice}</span>
          </div>

          <div className="current-price">
            <span>{currentPrice}</span>
          </div>
        </div>
      )
    );
  }

  return <span className="price">{currentPrice}</span>;
};

export default ProductCard;
