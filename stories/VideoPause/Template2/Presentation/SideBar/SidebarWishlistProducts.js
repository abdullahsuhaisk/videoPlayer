import React from 'react';
import Profile from '../../Components/SideBar/Profile/Profile';
import Navigation from '../../Components/SideBar/Navigation/Navigation';
import WishlistProducts from '../../Components/SideBar/Wishlist/wishlistProducts/wishlistProducts';

const SidebarWishlistProducts = () => {
  return (
    <div className="SideBar">
      <Profile />
      <Navigation />
      <WishlistProducts />
    </div>
  );
};

export default SidebarWishlistProducts;