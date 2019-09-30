import React from 'react';
import FlickityComponent from '../../../../components/Flickity/FlickityComponent';

const ProductDetailImage = ({ images }) => {
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
  return (
    <div>
      <FlickityComponent
        FlickityClassName={FlickityClassName}
        flickityOptions={flickityOptions}
        images={images}
        key={images[0].id}
      />
    </div>
  );
};

export default ProductDetailImage;
