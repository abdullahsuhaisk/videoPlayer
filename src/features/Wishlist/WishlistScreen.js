import React from 'react';
import EmptyWishList from './EmptyWishList';
import WishListGroupItem from './WishListGroupItem';

const WishlistScreen = () => {
  return (
    <div style={{ width: '100%', height: '200px' }}>
      <EmptyWishList />
      <WishListGroupItem />
    </div>
  );
};

export default WishlistScreen;
