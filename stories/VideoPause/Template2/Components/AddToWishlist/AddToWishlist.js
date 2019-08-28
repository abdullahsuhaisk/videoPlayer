import React from 'react';
// import '../../assets/css/template1/AddToWishlist.css';
import Flickity from 'react-flickity-component';
const flickityOptions = {
  cellAlign: 'center',
  contain: true,
  pageDots: false,
  prevNextButtons: true,
  wrapAround: true,
  selectedAttraction: 0.1,
  friction: 0.8
};

const AddToWishlist = () => {
  return (
    <React.Fragment>
      <div className="AddToWishlist">
        <Flickity
          className="AddToWishlist--imagesSlider"
          options={flickityOptions}>
          <figure className="AddToWishlist--imagesSlider--figure">
            <img
              className="AddToWishlist--imagesSlider--figure--img"
              src="/images/ProductDetail3.jpg"
            />
          </figure>
          <figure className="AddToWishlist--imagesSlider--figure">
            <img
              className="AddToWishlist--imagesSlider--figure--img"
              src="/images/ProductDetail2.jpg"
            />
          </figure>
          <figure className="AddToWishlist--imagesSlider--figure">
            <img
              className="AddToWishlist--imagesSlider--figure--img"
              src="/images/ProductDetail1.jpg"
            />
          </figure>
        </Flickity>
        <div className="AddToWishlist--information">
          <i className="AddToWishlist--information--close"></i>
          <div className="AddToWishlist--information--title">
            <h2 className="AddToWishlist--information--title--h2">
              Camper Summer Shoes
            </h2>
          </div>
          <h3 className="AddToWishlist--information--h3">
            Add this item to wishlist
          </h3>
          <div className="AddToWishlist--information--search">
            <i className="AddToWishlist--information--search--icon"></i>
            <input
              type="text"
              className="AddToWishlist--information--search--input"
            />
          </div>
          <div className="AddToWishlist--information--wishlistItemContainer">
            <div className="AddToWishlist--information--wishlistItem">
              <figure className="AddToWishlist--information--wishlistItem--figure"></figure>
              <div className="AddToWishlist--information--wishlistItem--titleItems">
                <input type="text" className="AddToWishlist--information--wishlistItem--titleInput" />
              </div>
            </div>
            <div className="AddToWishlist--information--wishlistItem">
              <figure className="AddToWishlist--information--wishlistItem--figure">
                <img
                  className="AddToWishlist--information--wishlistItem--figure--img"
                  src="/images/wishlist/whishlist1.jpg"
                />
              </figure>
              <div className="AddToWishlist--information--wishlistItem--titleItems">
                <h3 className="AddToWishlist--information--wishlistItem--titleItems--h3">
                  Glasses that I like
                </h3>
                <p className="AddToWishlist--information--wishlistItem--titleItems--p">
                  12 items
                </p>
              </div>
            </div>
            <div className="AddToWishlist--information--wishlistItem AddToWishlist--information--wishlistItem-selected">
              <figure className="AddToWishlist--information--wishlistItem--figure">
                <img
                  className="AddToWishlist--information--wishlistItem--figure--img"
                  src="/images/wishlist/whishlist1.jpg"
                />
              </figure>
              <div className="AddToWishlist--information--wishlistItem--titleItems">
                <h3 className="AddToWishlist--information--wishlistItem--titleItems--h3">
                  Glasses that I like
                </h3>
                <p className="AddToWishlist--information--wishlistItem--titleItems--p">
                  12 items
                </p>
              </div>
            </div>
            <div className="AddToWishlist--information--wishlistItem">
              <figure className="AddToWishlist--information--wishlistItem--figure">
                <img
                  className="AddToWishlist--information--wishlistItem--figure--img"
                  src="/images/wishlist/whishlist1.jpg"
                />
              </figure>
              <div className="AddToWishlist--information--wishlistItem--titleItems">
                <h3 className="AddToWishlist--information--wishlistItem--titleItems--h3">
                  Glasses that I like
                </h3>
                <p className="AddToWishlist--information--wishlistItem--titleItems--p">
                  12 items
                </p>
              </div>
            </div>
          </div>
          <div className="AddToWishlist--information--btnContainer">
            <button className="AddToWishlist--information--btnContainer--createBtn">
              Create new list
            </button>
            <button className="AddToWishlist--information--btnContainer--doneBtn">
              Done
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddToWishlist;
