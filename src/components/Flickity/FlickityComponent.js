import React from 'react';
import Flickity from 'react-flickity-component';

const FlickityComponent = ({ flickityOptions, FlickityClassName, images }) => {
  return (
    <Flickity className="ProductDetail--imagesSlider" options={flickityOptions}>
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
  );
};

export default FlickityComponent;
