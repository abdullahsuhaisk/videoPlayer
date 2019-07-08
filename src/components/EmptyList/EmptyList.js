import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { loadWebFontsFromStyles } from '../../utils/parseStyles';
import { emptylistStyle, Wrapper } from './EmptyList.style';

const EmptyList = ({ styles, imageUrl, content, content2 }) => {
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
        <div className="vb--component--emptyList-content">
          <span className="bold upperCase">{content}</span>
        </div>
        <div className="vb--component--emptyList-content mgTop">
          <span>{content2}</span>
        </div>
      </div>
    </Wrapper>
  );
};

EmptyList.propTypes = {
  styles: PropTypes.object,
  content: PropTypes.string,
  imageUrl: PropTypes.string,
  content2: PropTypes.string
};

EmptyList.defaultProps = {
  styles: {},
  content: 'No something in the list',
  imageUrl: '/images/emptyWhatchList.png',
  content2: 'You can Add Something'
};

export default EmptyList;
