import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import WishlistCollection from './WishlistCollection';
import Flickity from 'react-flickity-component';

//     imageUrl: '/images/wishListGroup.jpg',

const WishListGroup = ({ whisLists }) => {
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
        ? items.map((whisList) => (
            <WishlistCollection
              whisList={whisList}
              name={whisList.name}
              key={whisList.id}
            />
          ))
        : null}
    </Flickity>
    // </div>
  );
};

export default WishListGroup;
