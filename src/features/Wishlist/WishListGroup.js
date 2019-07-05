import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { loadWebFontsFromStyles } from '../../utils/parseStyles';
import { styledWishListGroup, Wrapper } from './WishListGroup.style';
import WishListGroupItem from './WishListGroupItem';

const data = [
  {
    name: 'ZARA | Men Campaign Spring Summer 2019',
    imageUrl: '/images/wishListGroup.jpg',
    price: '8.90$',
    id: 1
  },
  {
    name: 'ZARA | Men Campaign Spring Summer 2019',
    imageUrl: '/images/wishListGroup.jpg',
    price: '38.90$',
    id: 2
  },
  {
    name: 'ZARA | Men Campaign Spring Summer 2019',
    imageUrl: '/images/wishListGroup.jpg',
    price: '68.00$',
    id: 3
  },
  {
    name: 'ZARA | Men Campaign Spring Summer 2019',
    imageUrl: '/images/wishListGroup.jpg',
    price: '38.00$',
    id: 4
  },
  {
    name: 'ZARA | Men Campaign Spring Summer 2019',
    imageUrl: '/images/wishListGroup.jpg',
    price: '38.90$',
    id: 5
  },
  {
    name: 'ZARA | Men Campaign Spring Summer 2019',
    imageUrl: '/images/wishListGroup.jpg',
    price: '38.90$',
    id: 6
  }
];

const WishListGroup = ({ styles = {}, items, wishListName, total }) => {
  useEffect(() => {
    loadWebFontsFromStyles(styledWishListGroup);
    loadWebFontsFromStyles(styles);
  }, []);
  // TODO: Overflow ??
  // TODO: OnClick function
  return (
    <Wrapper styles={styles}>
      <div className="vb--wishlist--group--container">
        <div className="vb--wishlist--group--header">
          <div className="vb--wishlist-group--header--content">
            <span>{wishListName}</span>
          </div>
          <div
            className="vb--wishlist-group--header--see-all"
            onClick={() => console.log('Clicked')}>
            <span className="blue-color">See all > {total} </span>
          </div>
        </div>
        <div className="vb----wishlist--group--content">
          {items.map((item, key) => (
            <div className="vb----wishlist--group--content--item" key={key}>
              <WishListGroupItem price={item.price} imageUrl={item.imageUrl} />
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

WishListGroup.propTypes = {
  styles: PropTypes.object,
  items: PropTypes.array,
  wishListName: PropTypes.string,
  total: PropTypes.number
};

WishListGroup.defaultProps = {
  styles: {},
  items: data,
  wishListName: 'ZARA | Men Campaign Spring Summer 2019',
  total: 6
};

export default WishListGroup;
