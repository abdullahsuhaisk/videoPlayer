import React from 'react';

const Navigation = () => {
  return (
    <div className="SideBar--menu">
      <div className="SideBar--menu--item">
        <p className="SideBar--menu--item-p">Shopping Cart</p>
      </div>
      <div className="SideBar--menu--item">
        <p className="SideBar--menu--item-p SideBar--menu--item-active">Wishlist</p>
      </div>
      <div className="SideBar--menu--item">
        <p className="SideBar--menu--item-p">Watchlist</p>
      </div>
    </div>
);
};

export default Navigation;