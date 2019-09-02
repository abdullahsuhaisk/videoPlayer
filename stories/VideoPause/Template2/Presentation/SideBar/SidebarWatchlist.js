import React from 'react';
import Profile from '../../Components/SideBar/Profile/Profile';
import Navigation from '../../Components/SideBar/Navigation/Navigation';
import Watchlist from '../../Components/SideBar/Watchlist/Watchlist';

const SidebarWatchlist = () => {
  return (
    <div className="SideBar">
      <Profile />
      <Navigation />
      <Watchlist />
    </div>
  );
};

export default SidebarWatchlist;