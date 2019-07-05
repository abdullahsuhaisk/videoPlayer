import React from 'react';
import EmptyWishList from './EmptyWishList';
import WishListGroupItem from './WishListGroupItem';
import WishListGroup from './WishListGroup';

const WishlistScreen = () => {
  return (
    <div style={{ width: '100%', height: '200px' }}>
      <EmptyWishList />
      <div style={{ margin: '10px' }}>
        <WishListGroup />
      </div>
      <WishListGroupItem />
    </div>
  );
};

export default WishlistScreen;
