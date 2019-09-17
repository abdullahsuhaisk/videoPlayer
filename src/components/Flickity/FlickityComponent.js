import React from 'react';
import Flickity from 'react-flickity-component';

const imagesLocal = [
  {
    id: 1,
    imageUrl: '/images/ProductDetail3.jpg'
  },
  {
    id: 2,
    imageUrl: '/images/ProductDetail2.jpg'
  },
  {
    id: 3,
    imageUrl: '/images/ProductDetail1.jpg'
  }
];

const FlickityComponent = ({ flickityOptions, FlickityClassName, images }) => {
  return (
    <Flickity className={FlickityClassName} options={flickityOptions}>
      {images
        ? images.map((image, key) => {
            return (
              <div
                className="ProductDetail--imagesSlider--figure"
                style={{ backgroundImage: `url(${image.imageUrl})` }}
                key={image.id}>
                {/* <img
                  className="ProductDetail--imagesSlider--figure--img"
                  src={image.imageUrl}
                  alt={'image' + image.id}
                /> */}
              </div>
            );
          })
        : imagesLocal.map((image) => {
            return (
              <div
                className="ProductDetail--imagesSlider--figure"
                style={{ backgroundImage: `url(${image.imageUrl})` }}
                key={image.id}>
                {/* <img
                  className="ProductDetail--imagesSlider--figure--img"
                  src={image.imageUrl}
                  alt={'image' + image.id}
                /> */}
              </div>
            );
          })}
    </Flickity>
  );
};

export default FlickityComponent;
