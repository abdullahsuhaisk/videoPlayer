import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { loadWebFontsFromStyles } from '../../utils/parseStyles';
import { emptylistStyle, Wrapper } from './EmptyList.style';

const EmptyList = ({ styles, imageUrl, content }) => {
  useEffect(() => {
    loadWebFontsFromStyles(emptylistStyle);
    loadWebFontsFromStyles(styles);
  }, []);

  return (
    <Wrapper styles={styles}>
      <div className="vb--component--emptyList-container">
        <div
          className="vb--component--emptyList-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className=".vb--component--emptyList-content">
          <span className="bold">{content}</span>
        </div>
      </div>
    </Wrapper>
  );
};

EmptyList.propTypes = {
  styles: PropTypes.object,
  content: PropTypes.string,
  imageUrl: PropTypes.string
};

EmptyList.defaultProps = {
  styles: {},
  content: 'No something in the list',
  imageUrl: '/images/emptyWhatchList.png'
};

export default EmptyList;
