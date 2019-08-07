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
              <figure
                className="ProductDetail--imagesSlider--figure"
                key={image.id}>
                <img
                  className="ProductDetail--imagesSlider--figure--img"
                  src={image.imageUrl}
                  alt={'image' + image.id}
                />
              </figure>
            );
          })
        : imagesLocal.map((image) => {
            return (
              <figure
                className="ProductDetail--imagesSlider--figure"
                key={image.key}>
                <img
                  className="ProductDetail--imagesSlider--figure--img"
                  src={image.imageUrl}
                  alt={'image' + image.id}
                />
              </figure>
            );
          })}
    </Flickity>
  );
};

export default FlickityComponent;
