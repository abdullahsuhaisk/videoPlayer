import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import WishlistCollection from './WishlistCollection';

//     imageUrl: '/images/wishListGroup.jpg',

const WishListGroup = ({ whisLists }) => {
  // console.log(wishList);
  const items = whisLists && whisLists;
  // TODO: İf whishlist hasnt any product plase dont render
  return (
    <div className="VideoPlayerContainer flex-row">
      {items
        ? items.map((whisList) => (
            <div className="" key={whisList.id}>
              <WishlistCollection whisList={whisList} name={whisList.name} />
            </div>
          ))
        : null}
    </div>
  );
};

export default WishListGroup;
