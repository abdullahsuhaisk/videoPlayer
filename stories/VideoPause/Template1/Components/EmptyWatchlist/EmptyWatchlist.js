import React from 'react';

const EmptyWatchlist = (props) => {
  return (
    <React.Fragment>
      <div className="EmptyWatchlist">
        <i className="EmptyWatchlist--icon"></i>
        <p className="EmptyWatchlist--p-bold">NO VIDEO IN WATCHLIST</p>
      </div>
    </React.Fragment>
  );
};

export default EmptyWatchlist;
