import React, { useState } from 'react';
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
  // const imageParser = async (consumer, whishListId) => {
  //   const imagesArray = [];
  //   const whisLists = consumer && consumer.whisLists && consumer.whisLists[whishListId];
  //   console.log(whisLists);
  //   return whisLists.products && whisLists.products
  //     ? whisLists.products.map((item) =>
  //         item.images.map((image) => imagesArray.push(...image.thumbnailUrl))
  //       )
  //     : null;
  // };
  return (
    <Query query={GET_WISHLISTS_IMAGE}>
      {({ data: { consumer }, error, loading }) => {
        if (error || loading) {
          return null;
        }
        {
          /* console.log(imageParser(consumer, whisListId)); */
        }

        return (
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
        );
      }}
    </Query>
  );
};

export default WishListFlickity;
