import React from 'react';
// import PropTypes from 'prop-types';

// import { loadWebFontsFromStyles } from '../../utils/parseStyles';
// import { emptyWishListstyle, Wrapper } from './EmptyWishList.style';

const EmptyWishList = () => {
  // useEffect(() => {
  //   loadWebFontsFromStyles(emptyWishListstyle);
  //   loadWebFontsFromStyles(styles);
  // }, []);

  return (
    <div className="EmptyWishlist">
      <i className="EmptyWishlist--icon"></i>
      <p className="EmptyWishlist--p-bold">NO ITEMS IN WISH LIST</p>
      <p className="EmptyWishlist--p-light">Save your favorite items here</p>
    </div>
  );
};

// EmptyWishList.propTypes = {
//   styles: PropTypes.object
// };

// EmptyWishList.defaultProps = {
//   styles: {}
// };

export default EmptyWishList;
