import React from 'react';
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
          {/* ProductDetail--information--badge--in-wishlist */}
          <i className="ProductDetail--information--badge"></i>
          <div className="ProductDetail--information--title">
            <h2 className="ProductDetail--information--title--h2">
              Camper Summer Shoes
            </h2>
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
              (81 comments)
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
              Select Color
              </p>
              <div className="ProductDetail--information--settings-opt">
                <div className="ProductDetail--information--settings-opt-div">
                  <span className="ProductDetail--information--settings-opt-div-span">
                    Blue
                  </span>
                </div>
                <div className="ProductDetail--information--settings-opt-div">
                  <span className="ProductDetail--information--settings-opt-div-span">
                    Purple
                  </span>
                </div>
                <div className="ProductDetail--information--settings-opt-div ProductDetail--information--settings-opt-active">
                  <span className="ProductDetail--information--settings-opt-div-span">
                    White
                  </span>
                </div>
                <div className="ProductDetail--information--settings-opt-div">
                  <span className="ProductDetail--information--settings-opt-div-span">
                    Black
                  </span>
                </div>
              </div>
            </div>
            <div className="ProductDetail--information--settings">
              <p className="ProductDetail--information--settings-name">Select Size</p>
              <div className="ProductDetail--information--settings-opt">
                <div className="ProductDetail--information--settings-opt-div">
                  <span className="ProductDetail--information--settings-opt-div-span">
                    42
                  </span>
                </div>
                <div className="ProductDetail--information--settings-opt-div ProductDetail--information--settings-opt-active">
                  <span className="ProductDetail--information--settings-opt-div-span">
                    44
                  </span>
                </div>
                <div className="ProductDetail--information--settings-opt-div">
                  <span className="ProductDetail--information--settings-opt-div-span">
                    46
                  </span>
                </div>
                <div className="ProductDetail--information--settings-opt-div">
                  <span className="ProductDetail--information--settings-opt-div-span">
                    48
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="ProductDetail--information--priceBtnContainer">
            <div className="ProductDetail--information--price">
              <p className="ProductDetail--information--price--discount">%50</p>
              <div className="ProductDetail--information--price--container">
                <p className="ProductDetail--information--price--beforeDiscountvalue">340.95$ </p>
                <p className="ProductDetail--information--price--value">$278.90</p>
              </div>
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
