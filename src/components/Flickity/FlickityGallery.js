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
  const dummy = [
    '/images/ProductDetail3.jpg',
    '/images/ProductDetail2.jpg',
    '/images/ProductDetail1.jpg'
  ];

  return (
    <Flickity className="AddToWishlist--imagesSlider" options={flickityOptions}>
      {images && images.length > 1
        ? images.map((image, key) => {
            return (
              <div
                className="AddToWishlist--imagesSlider--figure"
                style={{ backgroundImage: `url(${image})` }}>
                {/* <img
                className="AddToWishlist--imagesSlider--figure--img"
                src={image}
                alt={`${image} + ${key}`}
              /> */}
              </div>
            );
          })
        : dummy.map((image, key) => {
            return (
              <div
                className="AddToWishlist--imagesSlider--figure"
                style={{ backgroundImage: `url(${image})` }}>
                {/* <img
              className="AddToWishlist--imagesSlider--figure--img"
              src={image}
              alt={`${image} + ${key}`}
            /> */}
              </div>
            );
          })}
    </Flickity>
  );
};

export default FlickityGallery;
