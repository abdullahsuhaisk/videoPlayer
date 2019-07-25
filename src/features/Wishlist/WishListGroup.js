import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './WishListGroup.style';
import WishListGroupItem from './WishListGroupItem';

//     imageUrl: '/images/wishListGroup.jpg',

const WishListGroup = ({ wishList }) => {
  // console.log(wishList);
  const items = wishList && wishList.products;
  const count = items ? items.length : 0;
  // TODO: İf whishlist hasnt any product plase dont render
  if (items) {
    return (
      <Wrapper>
        <div className="vb--wishlist--group--container">
          <div className="vb--wishlist--group--header">
            <div className="vb--wishlist-group--header--content">
              <span>{wishList.name}</span>
            </div>
            <div
              className="vb--wishlist-group--header--see-all"
              onClick={() => console.log('Clicked')}>
              <span className="blue-color">See all > {count} </span>
            </div>
          </div>
          <div className="vb----wishlist--group--content">
            <WishListGroupItem items={items} />
          </div>
        </div>
      </Wrapper>
    );
  }
  // if wish list has not items
  return null;
  // TODO: Overflow ??
  // TODO: OnClick function
};

// WishListGroup.propTypes = {
//   styles: PropTypes.object,
//   items: PropTypes.array,
//   wishListName: PropTypes.string,
//   total: PropTypes.number
// };

// WishListGroup.defaultProps = {
//   styles: {},
//   items: data,
//   wishListName: 'ZARA | Men Campaign Spring Summer 2019',
//   total: 6
// };

export default WishListGroup;
