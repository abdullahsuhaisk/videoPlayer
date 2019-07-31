import React, { useState } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Query, ApolloConsumer } from 'react-apollo';
import ModalDialog from '../../../components/ModalDialog/ModalDialog';
import { Wrapper } from './ProductDetailsDialog.style';
import AddToCardButton from '../../../components/Button/AddToCardButton';

import Stepper from '../../../components/Stepper/Stepper';
import ProductWishList from '../../Wishlist/oldWishlistComponents/ProductWishList/ProductWishList';

// import ProductWishList from '../../Wishlist/ProductWishList/ProductWishList';

const GET_PRODUCT = gql`
  query getProductForProductDetailsDialog($productId: Int!) {
    product(productId: $productId) {
      id
      name
      description
      image {
        id
        imageUrl
      }
      price
      discount
      currentPrice @client
      currency {
        id
        symbol
      }
    }
  }
`;

const ProductDetailDialog = ({ productId }) => {
  const wrapperStyle = {
    Wrapper: {
      // zIndex: '1',
      top: '50px',
      left: '100px',
      width: '80%',
      height: '80%',
      borderRadius: '8px'
    },
    CloseButton: { color: 'black' }
  };
  const [wishListOpen, setWishlist] = useState(false);

  const [quantity, setQuantity] = React.useState(1);

  return (
    <ApolloConsumer>
      {(client) => (
        <Wrapper>
          <ModalDialog
            styles={wrapperStyle}
            onClose={() =>
              client.writeData({ data: { productIdInDetails: null } })
            }>
            <div className="vb--product-details-container">
              <Query query={GET_PRODUCT} variables={{ productId }}>
                {({ loading, error, data }) => {
                  if (loading || error) return null;

                  const { product } = data;
                  return (
                    <>
                      <div className="vb--product-detail-dialog-slider">
                        <div
                          className="vb--product-detail-dialog-slider-image"
                          style={{
                            backgroundImage: `url(${product.image.imageUrl}`
                          }}
                        />
                      </div>
                      {wishListOpen ? (
                        <ProductWishList setWishlist={setWishlist} />
                      ) : (
                        <div className="vb--product-detail-dialog-contents">
                          <div className="vb--product-detail-dialog-content-header">
                            {product.name}
                          </div>
                          <div className="vb--product-detail-dialog-content-content">
                            {product.description}
                          </div>
                          <div className="vb--product-detail-dialog-content-features">
                            <div className="vb--product-detail-dialog-content-features-header">
                              Colors
                            </div>
                            <div className="vb--product-detail-dialog-content-features-content">
                              <button>Blue</button>
                              <button>Purple</button>
                              <button>Black</button>
                              <button>White</button>
                            </div>
                            <div className="vb--product-detail-dialog-content-features-header">
                              Size
                            </div>
                            <div className="vb--product-detail-dialog-content-features-content">
                              <button>64 GB</button>
                              <button>128 GB</button>
                              <button>256 GB</button>
                              <button>512 GB</button>
                            </div>
                          </div>
                          <div className="vb--product-detail-dialog-content-price-and-cartButton">
                            <div className="vb--product-card-price-container">
                              <div className="vb--product-card-base-price">
                                <span>{`${
                                  product.currency.symbol
                                }${product.price.toFixed(2)}`}</span>
                              </div>
                              <div className="vb--product-card-discount-rate-and-price">
                                <div className="vb--product-card-discount-rate">
                                  <span>{`%${product.discount}`}</span>
                                </div>
                                <div className="vb--product-card-current-price">
                                  <span>{`${product.currency.symbol}${product.currentPrice}`}</span>
                                </div>
                                <AddToCardButton
                                  styles={{ paddingTop: '9px' }}
                                  productId={product.id}
                                />
                              </div>
                              <Stepper
                                value={1}
                                minValue={1}
                                onValueChanged={(value) => {
                                  setQuantity(value);
                                }}
                              />
                              <AddToCardButton
                                styles={{ paddingTop: '9px' }}
                                productId={product.id}
                                quantity={quantity}
                              />
                            </div>
                          </div>
                          <button onClick={() => setWishlist(true)}>
                            Open Wish List
                          </button>
                        </div>
                      )}
                    </>
                  );
                }}
              </Query>
            </div>
          </ModalDialog>
        </Wrapper>
      )}
    </ApolloConsumer>
  );
};

ProductDetailDialog.propTypes = {
  productId: PropTypes.number.isRequired
};

export default ProductDetailDialog;
