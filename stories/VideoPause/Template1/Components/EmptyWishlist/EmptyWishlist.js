import React from 'react';

const EmptyWishlist = (props) => {
  return (
    <React.Fragment>
      <div className="EmptyWishlist">
        <i className="EmptyWishlist--icon"></i>
        <p className="EmptyWishlist--p-bold">NO ITEMS IN WISH LIST</p>
        <p className="EmptyWishlist--p-light">Save your favorite items here</p>
      </div>
    </React.Fragment>
  );
};

export default EmptyWishlist;
