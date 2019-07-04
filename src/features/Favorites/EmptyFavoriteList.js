import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { loadWebFontsFromStyles } from '../../utils/parseStyles';
import { emptyFavoriteListStyle, Wrapper } from './EmptyFavoriteList.style';

const EmptyFavoriteList = ({ styles }) => {
  useEffect(() => {
    loadWebFontsFromStyles(emptyFavoriteListStyle);
    loadWebFontsFromStyles(styles);
  }, []);

  return (
    <Wrapper styles={styles}>
      <div className="vb--empty-favorite-list-container">
        <div className="vb--empty-favorite-list-image" />
        <div className="vb--empty-favorite-list-content bold">
          <span>NOTHING IN YOUR FAVORITES</span>
        </div>
      </div>
    </Wrapper>
  );
};

EmptyFavoriteList.propTypes = {
  styles: PropTypes.object
};

EmptyFavoriteList.defaultProps = {
  styles: {}
};
export default EmptyFavoriteList;
