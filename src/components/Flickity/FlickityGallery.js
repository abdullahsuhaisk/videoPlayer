import React from 'react';
import Flickity from 'react-flickity-component';

const FlickityGallery = ({ images }) => {
  // console.log(images);
  const flickityOptions = {
    cellAlign: 'center',
    contain: true,
    // resize: false,
    pageDots: false,
    prevNextButtons: true,
    wrapAround: true
  };

  return (
    <Flickity className="AddToWishlist--imagesSlider" options={flickityOptions}>
      {images && images.length > 1 ? (
        images.map((image, key) => {
          return (
            <figure className="AddToWishlist--imagesSlider--figure">
              <img
                className="AddToWishlist--imagesSlider--figure--img"
                src={image}
                alt={`${image} + ${key}`}
              />
            </figure>
          );
        })
      ) : (
        <>
          <figure className="AddToWishlist--imagesSlider--figure">
            <img
              className="AddToWishlist--imagesSlider--figure--img"
              src="/images/ProductDetail3.jpg"
              alt="whishlist-1"
            />
          </figure>
          <figure className="AddToWishlist--imagesSlider--figure">
            <img
              className="AddToWishlist--imagesSlider--figure--img"
              src="/images/ProductDetail2.jpg"
              alt="whishlist-1-1"
            />
          </figure>
          <figure className="AddToWishlist--imagesSlider--figure">
            <img
              className="AddToWishlist--imagesSlider--figure--img"
              src="/images/ProductDetail1.jpg"
              alt="whishlist-2-1"
            />
          </figure>
        </>
      )}
    </Flickity>
  );
};

export default FlickityGallery;
