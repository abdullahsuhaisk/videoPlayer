import React from 'react';
import Profile from '../../Components/SideBar/Profile/Profile';
import Navigation from '../../Components/SideBar/Navigation/Navigation';
import ShoppingCart from '../../Components/SideBar/ShoppingCart/ShoppingCart';

const SidebarShoppingCart = () => {
  return (
    <div className="SideBar">
      <Profile />
      <Navigation />
      <ShoppingCart />
    </div>
  );
};

export default SidebarShoppingCart;