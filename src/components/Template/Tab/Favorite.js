import React from 'react';

const Favorite = () => {
  return (
    <div className="stats--content stats--content--heart">
      {/* add 'loved' class name beside 'watchlist--heartIcon' class to display red heart */}
      <i className="stats--content--heartIcon loved"></i> 40
    </div>
  );
};

export default Favorite;
