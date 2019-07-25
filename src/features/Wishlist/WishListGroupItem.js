import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { loadWebFontsFromStyles } from '../../utils/parseStyles';
import { wishlistgroupStyle, Wrapper } from './WishListGroupItem.style';

const WishListGroupItem = ({ styles, price, imageUrl, items }) => {
  console.log(items);

  useEffect(() => {
    loadWebFontsFromStyles(wishlistgroupStyle);
    loadWebFontsFromStyles(styles);
  }, []);

  return items
    ? items.map((item) => {
        return (
          <Wrapper key={item.id}>
            <div className="vb--wishlist--group--item--container">
              <img
                className="vb--wishlist--group--item--image"
                src={item.image ? item.image.thumbnailUrl : null}
                alt={item.name}
              />
              <div className="vb--wishlist--group--item--price">
                <span>{item.price}</span>
              </div>
            </div>
          </Wrapper>
        );
      })
    : null;
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
