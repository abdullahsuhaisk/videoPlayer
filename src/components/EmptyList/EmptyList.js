import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { loadWebFontsFromStyles } from '../../utils/parseStyles';
import { emptylistStyle, Wrapper } from './EmptyList.style';

const EmptyList = ({ styles, image, content }) => {
  useEffect(() => {
    loadWebFontsFromStyles(emptylistStyle);
    loadWebFontsFromStyles(styles);
  }, []);

  return (
    <Wrapper styles={styles}>
      <div className="vb--component--emptyList-container">
        <div
          className="vb--component--emptyList-image"
          style={{
            background:
              'url(/images/emptyWhatchList.png) center center no-repeat'
          }}
        />
        <div className=".vb--component--emptyList-content">{content}</div>
      </div>
    </Wrapper>
  );
};

EmptyList.propTypes = {
  styles: PropTypes.object,
  content: PropTypes.string,
  image: PropTypes.string
};

EmptyList.defaultProps = {
  styles: {},
  content: 'No something in the list',
  image: 'url(/images/emptyWhatchList.png) center center no-repeat'
};

export default EmptyList;
