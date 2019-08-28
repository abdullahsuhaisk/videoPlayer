import React from 'react';
import Profile from './Profile/Profile';
import Navigation from './Navigation/Navigation';
import Wishlist from './Wishlist/Wishlist';

const SideBar = () => {
  return (
    <div className="SideBar">
      <Profile />
      <Navigation />
      <Wishlist />
    </div>
  );
};

export default SideBar;