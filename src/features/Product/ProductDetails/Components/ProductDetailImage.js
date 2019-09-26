import React from 'react';
import FlickityComponent from '../../../../components/Flickity/FlickityComponent';
import ProductQueryHoc from '../../../../components/HOCS/Grapqhl/ProductQueryHoc';
import { GET_PRODUCT } from '../../../../Queries/Products/ProductQueries';

const ProductDetailImage = ({ data }) => {
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
  const { product } = data;
  const images = [];
  if (product && product.images) {
    product.images.map((i) => images.push(i));
  }

  return (
    <div>
      <FlickityComponent
        FlickityClassName={FlickityClassName}
        flickityOptions={flickityOptions}
        images={images}
        key={product.name + product.id}
      />
    </div>
  );
};

export default ProductQueryHoc(ProductDetailImage, GET_PRODUCT);
