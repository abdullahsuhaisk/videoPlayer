import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Flickity from 'react-flickity-component';

import WishlistCollection from './WishlistCollection';

//     imageUrl: '/images/wishListGroup.jpg',

const WishListGroup = ({ whisLists, setWhichWishList }) => {
  // console.log(wishList);
  const items = whisLists && whisLists;
  const flickityOptions = {
    cellAlign: 'left',
    contain: true,
    resize: false,
    pageDots: false,
    prevNextButtons: false
  };
  // TODO: İf whishlist hasnt any product plase dont render
  return (
    // <div className="whisListGroupeContainer">
    <Flickity
      className="VideoPlayerContainer"
      reloadOnUpdate={true}
      options={flickityOptions}>
      {items
        ? items.map((whisList, key) => (
            <WishlistCollection
              whisList={whisList}
              name={whisList.name}
              key={whisList.id}
              id={key}
              setWhichWishList={setWhichWishList}
            />
          ))
        : null}
    </Flickity>
    // </div>
  );
};

export default WishListGroup;
