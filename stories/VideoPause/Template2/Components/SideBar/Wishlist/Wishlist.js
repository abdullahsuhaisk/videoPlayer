import React from 'react';
import WishlistCard from './WishlistCard/WishlistCard';

const Wishlist = () => {
  return (
    <div className="SideBar--wishlist">
      <div className="SideBar--wishlist--cards scroll">
        <WishlistCard />
        <WishlistCard />
        <WishlistCard />
      </div>
      <div className="SideBar--wishlist--create">
        <p className="SideBar--wishlist--create-new">
          <i className="SideBar--wishlist--create-new-icon"></i>
          Create New
        </p>
      </div>
    </div>
  );
};

export default Wishlist;