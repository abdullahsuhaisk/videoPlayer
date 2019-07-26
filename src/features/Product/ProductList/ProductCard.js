/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { ApolloConsumer, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Wrapper } from './ProductCard.style';
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

const ProductCard = ({ styles, product }) => {
  const productId = product.id;
  return (
    <ApolloConsumer>
      {(client) => (
        <Mutation
          mutation={ADD_WISHLIST_MUTATION}
          variables={{ productId, wishListId: WISH_LIST_ID }}>
          {(addProductToConsumerWishList, { data }) => (
            <Wrapper styles={styles} className="vb--product-card">
              <div className="vb--product-card-first-container">
                <div
                  className="vb--product-card-product-image"
                  style={{
                    backgroundImage: `url(${product.image.thumbnailUrl}`
                  }}
                />
                <button
                  onClick={() => addProductToConsumerWishList()}
                  className="vb--product-card-add-to-wishlist">
                  Add to Wish List
                </button>
              </div>
              <div className="vb--product-card-second-container">
                <span className="vb--product-card-brand">
                  {product.brand.name}
                </span>
                <span className="vb--product-card-title">{product.name}</span>
                {product.discount !== 0 ? (
                  <div className="vb--product-card-price-container">
                    <div className="vb--product-card-discount-rate">
                      <span>{`%${product.discount}`}</span>
                    </div>
                    <div className="vb--product-card-base-price">
                      <span>{`${product.currency.symbol}${product.price.toFixed(
                        2
                      )}`}</span>
                    </div>
                    <div className="vb--product-card-current-price">
                      <span>{`${
                        product.currency.symbol
                      }${product.currentPrice.toFixed(2)}`}</span>
                    </div>
                  </div>
                ) : (
                  <span className="vb--product-card-price">{`${
                    product.currency.symbol
                  }${product.price.toFixed(2)}`}</span>
                )}
                <span className="vb--product-card-in-stock">
                  {product.stockCount > 0 ? 'In Stock' : 'No Stock'}
                </span>
                <hr />
                <button
                  className="vb--product-card-details"
                  onClick={() =>
                    client.writeData({
                      data: { productIdInDetails: product.id }
                    })
                  }>
                  Details
                </button>
              </div>
            </Wrapper>
          )}
        </Mutation>
      )}
    </ApolloConsumer>
  );
};

ProductCard.propTypes = {
  styles: PropTypes.object,
  product: PropTypes.object.isRequired
};

ProductCard.defaultProps = {
  styles: {}
};

export default ProductCard;
