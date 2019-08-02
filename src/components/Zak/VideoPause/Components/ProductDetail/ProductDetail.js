import React from 'react';
import '../../assets/css/template1/ProductDetail.css';
import Flickity from 'react-flickity-component';
const flickityOptions = {
  cellAlign: 'center',
  contain: true,
  // resize: false,
  pageDots: false,
  prevNextButtons: true,
  wrapAround: true
};

const ProductDetail = () => {
  return (
    <React.Fragment>
      <div className="ProductDetail">
        <Flickity
          className="ProductDetail--imagesSlider"
          options={flickityOptions}>
          <figure className="ProductDetail--imagesSlider--figure">
            <img
              className="ProductDetail--imagesSlider--figure--img"
              src="/images/ProductDetail3.jpg"
            />
          </figure>
          <figure className="ProductDetail--imagesSlider--figure">
            <img
              className="ProductDetail--imagesSlider--figure--img"
              src="/images/ProductDetail2.jpg"
            />
          </figure>
          <figure className="ProductDetail--imagesSlider--figure">
            <img
              className="ProductDetail--imagesSlider--figure--img"
              src="/images/ProductDetail1.jpg"
            />
          </figure>
        </Flickity>
        <div className="ProductDetail--information">
          <i className="ProductDetail--information--close"></i>
          <div className="ProductDetail--information--title">
            <h2 className="ProductDetail--information--title--h2">
              Pierre Cardin - Women Red Glasses
            </h2>
            <i className="ProductDetail--information--title--heartIcon"></i>
          </div>
          <div className="ProductDetail--information--rating">
            <div className="ProductDetail--information--rating--stars">
              <span className="ProductDetail--information--rating--stars--icon"></span>
              <span className="ProductDetail--information--rating--stars--icon"></span>
              <span className="ProductDetail--information--rating--stars--icon"></span>
              <span className="ProductDetail--information--rating--stars--icon-empty"></span>
              <span className="ProductDetail--information--rating--stars--icon-empty"></span>
            </div>
            <p className="ProductDetail--information--rating--total">3.9</p>
            <p className="ProductDetail--information--rating--votes">
              (381 votes)
            </p>
          </div>
          <div className="ProductDetail--information--details">
            <p>
              Bi-stretch: Stretch fabric with greater recovery (in both
              directions) after applying force to it.
            </p>
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
                  />
                  <span className="ProductDetail--information--settings-opt-div-span">
                    Blue
                  </span>
                </div>
                <div className="ProductDetail--information--settings-opt-div">
                  <img
                    className="ProductDetail--information--settings-opt-div-img"
                    src="/images/Purple.jpg"
                  />
                  <span className="ProductDetail--information--settings-opt-div-span">
                    Purple
                  </span>
                </div>
                <div className="ProductDetail--information--settings-opt-div ProductDetail--information--settings-opt-active">
                  <img
                    className="ProductDetail--information--settings-opt-div-img"
                    src="/images/White.jpg"
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
              <p className="ProductDetail--information--settings-name">Size</p>
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
              <p className="ProductDetail--information--price--discount">%50</p>
              <p className="ProductDetail--information--price--value">74.98$</p>
              <p className="ProductDetail--information--price--beforeDiscountvalue">
                149.95$
                <svg>
                  <line
                    x1="0"
                    y1="70%"
                    x2="140%"
                    y2="0"
                    stroke="#ff1010"
                    stroke-width="1"
                  />
                </svg>
              </p>
            </div>
            <button className="ProductDetail--addToCartBtn">
              <i className="ProductDetail--addToCartBtn-icon"></i>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductDetail;
