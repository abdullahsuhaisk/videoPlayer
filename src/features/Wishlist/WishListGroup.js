import React from 'react';
// import PropTypes from 'prop-types';
// import Flickity from 'react-flickity-component';

import WishlistCollection from './WishlistCollection';

//     imageUrl: '/images/wishListGroup.jpg',

const WishListGroup = ({ whisLists, setWhichWishList }) => {
  // console.log(wishList);
  const items = whisLists && whisLists;
  // TODO: İf whishlist hasnt any product plase dont render
  return (
    <div className="VideoPlayerContainer flex-row">
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
    </div>
    // <Flickity
    //   className="VideoPlayerContainer"
    //   reloadOnUpdate={true}
    //   options={flickityOptions}>
    //   {items
    //     ? items.map((whisList, key) => (
    //         <WishlistCollection
    //           whisList={whisList}
    //           name={whisList.name}
    //           key={whisList.id}
    //           id={key}
    //           setWhichWishList={setWhichWishList}
    //         />
    //       ))
    //     : null}
    // </Flickity>
    // </div>
  );
};

export default WishListGroup;
