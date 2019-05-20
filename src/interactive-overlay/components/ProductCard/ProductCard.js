/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import template from '../../templates/productCardTemplate.json';

const ProductCard = (props) => {
  const { basePrice, discountRate, currentPrice } = props;

  const {
    productContainer,
    topContainer,
    productImageContainer,
    productImage,
    addToWishList,
    brand,
    model,
    inStock,
    hrLine,
    details,
    bottomContainer
  } = template.styles;

  return (
    <>
      <div style={productContainer}>
        <div style={topContainer}>
          <div style={productImageContainer}>
            <img src="/images/tshirt.jpg" alt="" style={productImage} />
          </div>
          <span style={addToWishList}>Add to Wish List</span>
        </div>
        <div style={bottomContainer}>
          <span style={brand}>Valentino</span>
          <span style={model}>Turtleneck Sweater</span>
          <Price
            basePrice={basePrice}
            discountRate={discountRate}
            currentPrice={currentPrice}
          />
          <span style={inStock}>In Stock</span>
          <hr style={hrLine} />
          <span style={details}>Details</span>
        </div>
      </div>
    </>
  );
};

const Price = (props) => {
  const { basePrice, discountRate, currentPrice } = props;
  const {
    priceSectionContainer,
    discountRateSpan,
    discountRateDiv,
    priceContainer,
    basePriceSpan,
    currentPriceSpan,
    onlyCurrentPriceSpan
  } = template.styles;

  if (basePrice && discountRate) {
    return (
      basePrice &&
      discountRate && (
        <div style={priceSectionContainer}>
          <div style={discountRateDiv}>
            <span style={discountRateSpan}>{discountRate}</span>
          </div>

          <div style={priceContainer}>
            <span style={basePriceSpan}>
              <s>{basePrice}</s>
            </span>

            <span style={currentPriceSpan}>{currentPrice}</span>
          </div>
        </div>
      )
    );
  }

  return <span style={onlyCurrentPriceSpan}>{currentPrice}</span>;
};

export default ProductCard;
