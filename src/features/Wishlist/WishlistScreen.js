import React from 'react';
import EmptyWishList from './EmptyWishList';
import WishListGroupItem from './WishListGroupItem';
import WishListGroup from './WishListGroup';
import WishListCardItem from './WishListCardItem';

const data = [
  {
    name: 'ZARA | Men Campaign Spring Summer 2019',
    imageUrl: '/images/wishListGroup.jpg',
    price: '8.90$',
    id: 1,
    seller: 'Adidas Inc.'
  },
  {
    name: 'ZARA | Men Campaign Spring Summer 2019',
    imageUrl: '/images/wishListGroup.jpg',
    price: '38.90$',
    id: 2,
    seller: 'Adidas Inc.'
  },
  {
    name: 'ZARA | Men Campaign Spring Summer 2019',
    imageUrl: '/images/wishListGroup.jpg',
    price: '68.00$',
    id: 3,
    seller: 'Adidas Inc.'
  },
  {
    name: 'ZARA | Men Campaign Spring Summer 2019',
    imageUrl: '/images/wishListGroup.jpg',
    price: '38.00$',
    id: 4,
    seller: 'Adidas Inc.'
  },
  {
    name: 'ZARA | Men Campaign Spring Summer 2019',
    imageUrl: '/images/wishListGroup.jpg',
    price: '38.90$',
    id: 5,
    seller: 'Adidas Inc.'
  },
  {
    name: 'ZARA | Men Campaign Spring Summer 2019',
    imageUrl: '/images/wishListGroup.jpg',
    price: '38.90$',
    id: 6,
    seller: 'Adidas Inc.'
  }
];

const WishlistScreen = () => {
  return (
    <div style={{ width: '100%', height: '500px', overflow: 'scroll' }}>
      <div style={{ margin: '10px' }}>
        <WishListCardItem />
      </div>
      <EmptyWishList />
      <div style={{ margin: '10px' }}>
        <WishListGroup />
      </div>
      <WishListGroupItem />
    </div>
  );
};

export default WishlistScreen;
