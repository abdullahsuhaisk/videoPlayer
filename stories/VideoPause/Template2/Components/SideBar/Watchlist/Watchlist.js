import React from 'react';
import WatchlistProduct from './WatchlistProduct/WatchlistProduct';

const Watchlist = () => {
  return (
    <div className="SideBar--watchlist">
      <div className="SideBar--watchlist--videos scroll">
        <WatchlistProduct />
        <WatchlistProduct />
        <WatchlistProduct />
        <WatchlistProduct />
      </div>
      <div className="SideBar--watchlist--footer"></div>
    </div>
  );
};

export default Watchlist;