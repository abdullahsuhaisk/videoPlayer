/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { ApolloConsumer, Query } from 'react-apollo';
import { GET_PRODUCT } from '../ProductQueries';
import FlickityComponent from '../../../components/Flickity/FlickityComponent';
import AddToCardButton from '../../../components/Button/AddToCardButton';

// import '../../assets/css/template1/ProductDetail.css';
const flickityOptions = {
  cellAlign: 'center',
  contain: true,
  pageDots: false,
  prevNextButtons: true,
  wrapAround: true,
  selectedAttraction: 0.1,
  friction: 0.8
};
const FlickityClassName = 'ProductDetail--imagesSlider';

const ProductDetail = ({ productId }) => {
  return (
    <ApolloConsumer>
      {(client) => (
        <React.Fragment>
          <Query query={GET_PRODUCT} variables={{ productId }}>
            {({ loading, error, data }) => {
              if (loading || error) return null;
              const { product } = data;
              console.log(product);
              const images = [];
              if (product && product.images) {
                product.images.map((i) => images.push(i));
              }
              return (
                <div className="ProductDetail">
                  <FlickityComponent
                    FlickityClassName={FlickityClassName}
                    flickityOptions={flickityOptions}
                    images={images}
                    key={product.name + product.id}
                  />
                  <div className="ProductDetail--information">
                    <i
                      className="ProductDetail--information--close"
                      onClick={() =>
                        client.writeData({
                          data: { productIdInDetails: null }
                        })
                      }></i>
                    <div className="ProductDetail--information--title">
                      <h2 className="ProductDetail--information--title--h2">
                        {product.name}
                      </h2>
                      <i className="ProductDetail--information--title--heartIcon"></i>
                    </div>
                    <div className="ProductDetail--information--rating">
                      <div className="ProductDetail--information--rating--stars">
                        <span className="ProductDetail--information--rating--stars--icon ProductDetail--information--rating--stars--icon-full"></span>
                        <span className="ProductDetail--information--rating--stars--icon ProductDetail--information--rating--stars--icon-full"></span>
                        <span className="ProductDetail--information--rating--stars--icon ProductDetail--information--rating--stars--icon-full"></span>
                        <span className="ProductDetail--information--rating--stars--icon"></span>
                        <span className="ProductDetail--information--rating--stars--icon"></span>
                      </div>
                      <p className="ProductDetail--information--rating--total">
                        {product.rank}
                      </p>
                      <p className="ProductDetail--information--rating--votes">
                        (381 votes)
                      </p>
                    </div>
                    <div className="ProductDetail--information--details">
                      <p>{product.description}</p>
                      <p>Easy care: Quick-drying and easy to iron.</p>
                      <p>Erkek Ceket ve Yelek</p>
                      <p>Tarz : LCW Vision</p>
                      <p>Kalıp : Dar</p>
                    </div>
                    <div className="ProductDetail--information--settingsContainer">
                      <div className="ProductDetail--information--settings">
                        <p className="ProductDetail--information--settings-name">
                          Colors
                        </p>
                        <div className="ProductDetail--information--settings-opt">
                          <div className="ProductDetail--information--settings-opt-div">
                            <img
                              className="ProductDetail--information--settings-opt-div-img"
                              src="/images/Blue.jpg"
                              alt="option1"
                            />
                            <span className="ProductDetail--information--settings-opt-div-span">
                              Blue
                            </span>
                          </div>
                          <div className="ProductDetail--information--settings-opt-div">
                            <img
                              className="ProductDetail--information--settings-opt-div-img"
                              src="/images/Purple.jpg"
                              alt="option1"
                            />
                            <span className="ProductDetail--information--settings-opt-div-span">
                              Purple
                            </span>
                          </div>
                          <div className="ProductDetail--information--settings-opt-div ProductDetail--information--settings-opt-active">
                            <img
                              className="ProductDetail--information--settings-opt-div-img"
                              src="/images/White.jpg"
                              alt="option1"
                            />
                            <span className="ProductDetail--information--settings-opt-div-span">
                              White
                            </span>
                          </div>
                          <div className="ProductDetail--information--settings-opt-div">
                            <img
                              className="ProductDetail--information--settings-opt-div-img"
                              src="/images/Black.jpg"
                            />
                            <span className="ProductDetail--information--settings-opt-div-span">
                              Black
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="ProductDetail--information--settings">
                        <p className="ProductDetail--information--settings-name">
                          Size
                        </p>
                        <div className="ProductDetail--information--settings-opt">
                          <div className="ProductDetail--information--settings-opt-div">
                            <span className="ProductDetail--information--settings-opt-div-span">
                              64 GB
                            </span>
                          </div>
                          <div className="ProductDetail--information--settings-opt-div ProductDetail--information--settings-opt-active">
                            <span className="ProductDetail--information--settings-opt-div-span">
                              128 GB
                            </span>
                          </div>
                          <div className="ProductDetail--information--settings-opt-div">
                            <span className="ProductDetail--information--settings-opt-div-span">
                              256 GB
                            </span>
                          </div>
                          <div className="ProductDetail--information--settings-opt-div">
                            <span className="ProductDetail--information--settings-opt-div-span">
                              512 GB
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ProductDetail--information--priceBtnContainer">
                      <div className="ProductDetail--information--price">
                        <p className="ProductDetail--information--price--discount">
                          {`%${product.discount}`}
                        </p>
                        <p className="ProductDetail--information--price--value">
                          {`${product.currency.symbol}${product.currentPrice}`}
                        </p>
                        <p className="ProductDetail--information--price--beforeDiscountvalue">
                          {`${product.currency.symbol}${product.price.toFixed(
                            2
                          )}`}
                          <svg>
                            <line
                              x1="0"
                              y1="70%"
                              x2="140%"
                              y2="0"
                              stroke="#ff1010"
                              strokeWidth="1"
                            />
                          </svg>
                        </p>
                      </div>
                      <AddToCardButton productId={product.id} />
                    </div>
                  </div>
                </div>
              );
            }}
          </Query>
        </React.Fragment>
      )}
    </ApolloConsumer>
  );
};

export default ProductDetail;
