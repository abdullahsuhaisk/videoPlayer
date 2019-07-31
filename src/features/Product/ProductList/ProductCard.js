/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { ApolloConsumer, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { WISH_LIST_ID } from '../../../common/GrapqlConstant';

const ADD_WISHLIST_MUTATION = gql`
  mutation addWishList($wishListId: Int!, $productId: Int!) {
    addProductToConsumerWishList(
      wishListId: $wishListId
      productId: $productId
    ) {
      id
      name
    }
  }
`;

const ProductCard = ({ product }) => {
  const productId = product.id;
  return (
    <ApolloConsumer>
      {(client) => (
        <Mutation
          mutation={ADD_WISHLIST_MUTATION}
          variables={{ productId, wishListId: WISH_LIST_ID }}>
          {(addProductToConsumerWishList, { data }) => (
            <div className="Product-Card">
              <figure className="productCard--imageWrapper">
                <img
                  src={product.image.thumbnailUrl}
                  className="productCard--image"
                  alt={product.brand.name}
                />
              </figure>
              <div className="productCard--wishlist-statusWrapper">
                <a
                  className="productCard--wishlist-status"
                  onClick={() => addProductToConsumerWishList()}>
                  Add to Wish List
                </a>
              </div>
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
        </Mutation>
      )}
    </ApolloConsumer>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};

ProductCard.defaultProps = {};

export default ProductCard;
