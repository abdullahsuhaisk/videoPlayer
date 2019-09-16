/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { ApolloConsumer } from 'react-apollo';
import Bouncy from '../../../components/HOCS/AnimationsHocs/Bouncy';

const ProductCard = ({ product, addedWishList }) => {
  const productId = product.id;
  // console.log(addedWishList);

  const renderProductWithCondition = (client) => {
    if (!product.price) return null;
    return (
      <Bouncy direction="left">
        <div className="Product-Card">
          <figure className="productCard--imageWrapper">
            <img
              src={product.image && product.image.thumbnailUrl}
              className="productCard--image"
              alt={product.brand && product.brand.name}
            />
          </figure>
          {addedWishList ? (
            <div className="productCard--Onwishlist-statusWrapper">
              <i className="productCard--Onwishlist-checkedIcon"></i>
              <a className="productCard--Onwishlist-status">On WishList</a>
            </div>
          ) : (
            <div className="productCard--wishlist-statusWrapper">
              <a
                className="productCard--wishlist-status"
                onClick={() =>
                  // addProductToConsumerWishList()
                  client.writeData({
                    data: { isAddWishListOpen: true, productId: productId }
                  })
                }>
                Add to Wish List
              </a>
            </div>
          )}

          <p className="productCard--name">
            {product.brand && product.brand.name}
          </p>
          {product.discount !== 0 ? (
            <div className="productCard--priceWrapper">
              {product.discount ? (
                <div className="productCard--discountWrapper">
                  <p className="productCard--dicount-percent">{`%${product.discount}`}</p>
                  <p className="productCard--dicount-price">
                    {`${product.currency &&
                      product.currency.symbol}${product.price &&
                      product.price.toFixed(2)}`}
                    <svg>
                      <line x1="0" y1="100%" x2="100%" y2="0" />
                    </svg>
                  </p>
                </div>
              ) : null}
              <p className="productCard--Onwishlist--price">{`${
                product.currency && product.currency.symbol !== null
                  ? product.currency.symbol
                  : ''
              }${product.currentPrice && product.currentPrice.toFixed(2)}`}</p>
            </div>
          ) : (
            <div className="productCard--priceWrapper">
              <p className="productCard--wishlist--price">{`${
                product.currency && product.currency.symbol !== null
                  ? product.currency.symbol
                  : ''
              }${product.currentPrice && product.currentPrice.toFixed(2)}`}</p>
            </div>
          )}
          <p className="productCard--stock-status">
            {product.stockCount > 0 ? 'In Stock' : 'No Stock'}
          </p>
          <hr className="productCard--underline" />
          <a
            className="productCard--detail"
            onClick={() =>
              client.writeData({
                data: { productIdInDetails: product.id }
              })
            }>
            Details
          </a>
        </div>
      </Bouncy>
    );
  };

  return (
    <ApolloConsumer>
      {(client) => renderProductWithCondition(client)}
    </ApolloConsumer>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};

ProductCard.defaultProps = {};

export default ProductCard;
