/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { ApolloConsumer, Mutation } from 'react-apollo';
import { DELETE_WISHLIST_ITEM } from '../../../features/Wishlist/wishListQueries';

const AddedWishListProductCard = ({ product, wishListId }) => {
  const productId = product.id;
  return (
    <ApolloConsumer>
      {(client) => (
        <div className="Product-Card">
          <div
            className="productCard--imageWrapper"
            style={{
              backgroundImage: `url(${product.image &&
                product.image.thumbnailUrl})`
            }}>
            {/* <img
                src={product.image && product.image.thumbnailUrl}
                className="productCard--image"
                alt={product.brand && product.brand.name}
              /> */}
          </div>
          <Mutation
            mutation={DELETE_WISHLIST_ITEM}
            variables={{ productId, wishListId }}>
            {(deleteWishListItem, { client }) => {
              return (
                <div className="productCard--Onwishlist-statusWrapper">
                  <i className="productCard--Onwishlist-checkedIcon"></i>
                  <a
                    className="productCard--Onwishlist-status"
                    onClick={() => deleteWishListItem()}>
                    On WishList
                  </a>
                  {/* <a
              className="productCard--wishlist-status"
              onClick={() =>
                // addProductToConsumerWishList()
                client.writeData({
                  data: { isAddWishListOpen: true, productId: productId }
                })
              }>
              Add to Wish List
            </a> */}
                </div>
              );
            }}
          </Mutation>

          <p className="productCard--name">{product.brand.name}</p>
          {product.discount !== 0 ? (
            <div className="productCard--priceWrapper">
              <div className="productCard--discountWrapper">
                <p className="productCard--dicount-percent">{`%${product.discount}`}</p>
                <p className="productCard--dicount-price">
                  {`${product.currency.symbol}${product.price.toFixed(2)}`}
                  <svg>
                    <line x1="0" y1="100%" x2="100%" y2="0" />
                  </svg>
                </p>
              </div>
              <p className="productCard--Onwishlist--price">{`${
                product.currency.symbol
              }${product.currentPrice.toFixed(2)}`}</p>
            </div>
          ) : (
            <div className="productCard--priceWrapper">
              <p className="productCard--wishlist--price">{`${
                product.currency.symbol
              }${product.price.toFixed(2)}`}</p>
            </div>
          )}
          <p className="productCard--stock-status">
            {' '}
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
      )}
    </ApolloConsumer>
  );
};

AddedWishListProductCard.propTypes = {
  product: PropTypes.object.isRequired
};

AddedWishListProductCard.defaultProps = {};

export default AddedWishListProductCard;
