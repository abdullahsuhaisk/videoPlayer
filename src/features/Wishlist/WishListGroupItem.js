import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { loadWebFontsFromStyles } from '../../utils/parseStyles';
import { wishlistgroupStyle, Wrapper } from './WishListGroupItem.style';

const WishListGroupItem = ({ styles, price, imageUrl }) => {
  useEffect(() => {
    loadWebFontsFromStyles(wishlistgroupStyle);
    loadWebFontsFromStyles(styles);
  }, []);

  return (
    <Wrapper styles={styles}>
      <div className="vb--wishlist--group--item--container">
        <div
          className="vb--wishlist--group--item--image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="vb--wishlist--group--item--price">
          <span>{price}</span>
        </div>
      </div>
    </Wrapper>
  );
};

WishListGroupItem.propTypes = {
  styles: PropTypes.object,
  imageUrl: PropTypes.string,
  price: PropTypes.string
};

WishListGroupItem.defaultProps = {
  styles: {},
  imageUrl: '/images/wishListGroup.jpg',
  price: '38.90$'
};

export default WishListGroupItem;
