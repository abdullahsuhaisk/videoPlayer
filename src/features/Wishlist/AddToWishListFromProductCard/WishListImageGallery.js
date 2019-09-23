/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import FlickityGallery from '../../../components/Flickity/FlickityGallery';

const WishListImageGallery = ({ whisListProduct }) => {
  const [images, setImages] = useState([]);
  // TODO: WishListFlicktiy images
  // console.log(whisListId);
  // console.log(whisListProduct);

  useEffect(() => {
    imageParser();
  }, [whisListProduct]);

  const imageParser = () => {
    const a = [];
    a.length = 0;
    whisListProduct != null
      ? whisListProduct.map((item) => {
          // if (images.length <= 10) {
          return (
            item &&
            item.images &&
            item.images.map((image) => {
              // images.push(image.imageUrl);
              a.push(image.imageUrl);
              return setImages(a);
            })
          );
          // }
        })
      : setImages(a);
  };
  // console.log(a);

  // console.log(consumer);
  return <FlickityGallery images={images} />;
};

export default WishListImageGallery;
