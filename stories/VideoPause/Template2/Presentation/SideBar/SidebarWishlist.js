import React from 'react';
import Profile from '../../Components/SideBar/Profile/Profile';
import Navigation from '../../Components/SideBar/Navigation/Navigation';
import Wishlist from '../../Components/SideBar/Wishlist/Wishlist';

const SidebarWishlist = () => {
  return (
    <div className="SideBar">
      <Profile />
      <Navigation />
      <Wishlist />
    </div>
  );
};

export default SidebarWishlist;