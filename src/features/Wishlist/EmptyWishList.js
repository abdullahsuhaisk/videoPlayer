import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { loadWebFontsFromStyles } from '../../utils/parseStyles';
import { emptyWishListstyle, Wrapper } from './EmptyWishList.style';

const EmptyWishList = ({ styles }) => {
  useEffect(() => {
    loadWebFontsFromStyles(emptyWishListstyle);
    loadWebFontsFromStyles(styles);
  }, []);

  return (
    <Wrapper>
      <div className="vb--empty-wish-list-content">
        <div className="vb--empty-wish-list-content-image" />
        <div className="vb--empty-wish-list-content-item">
          <span className="bold"> NO ITEMS IN WISH LIST</span>
          <br />
          <span>Save your favorite items here</span>
        </div>
      </div>
    </Wrapper>
  );
};

EmptyWishList.propTypes = {
  styles: PropTypes.object
};

EmptyWishList.defaultProps = {
  styles: {}
};

export default EmptyWishList;
