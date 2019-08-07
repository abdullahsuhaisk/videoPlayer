import React, { useState, useEffect } from 'react';
import Flickity from 'react-flickity-component';
import { Query } from 'react-apollo';
import { GET_WISHLISTS_IMAGE } from '../wishListQueries';

const WishListFlickity = ({ whisListId }) => {
  const [images, setImages] = useState([]);
  // TODO: WishListFlicktiy images
  // console.log(whisListId);
  const flickityOptions = {
    cellAlign: 'center',
    contain: true,
    // resize: false,
    pageDots: false,
    prevNextButtons: true,
    wrapAround: true
  };

  // const imageParser = (consumer) => {
  //   const whisLists =
  //     consumer && consumer.whisLists ? consumer.whisLists[whisListId] : null;
  //   console.log(whisLists);
  //   const products = whisLists && whisLists.products;
  //   console.log(products);
  //   setImages(
  //     products.map((product) => {
  //       return product.images.map((image) => image.thumbnailUrl);
  //     })
  //   );
  // };
  // console.log(images);

  return (
    <Query query={GET_WISHLISTS_IMAGE}>
      {({ data: { consumer }, error, loading }) => {
        if (error || loading) {
          return null;
        }
        // console.log(consumer);
        if (consumer && whisListId) {
          // imageParser(consumer);
        }

        return (
          <Flickity
            className="AddToWishlist--imagesSlider"
            options={flickityOptions}>
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
          </Flickity>
        );
      }}
    </Query>
  );
};

export default WishListFlickity;
