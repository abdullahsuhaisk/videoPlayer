import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// import { loadWebFontsFromStyles } from '../../utils/parseStyles';
// import { emptylistStyle, Wrapper } from './EmptyList.style';

const EmptyList = () => {
  // useEffect(() => {
  //   loadWebFontsFromStyles(emptylistStyle);
  //   loadWebFontsFromStyles(styles);
  // }, []);

  return (
    <div className="EmptyCart">
      <i className="EmptyCart--icon"></i>
      <p className="EmptyCart--p-bold">THERE IS NOTHING IN YOUR CART</p>
      <p className="EmptyCart--p-light">Explore around to add items in it.</p>
    </div>
  );
};

// EmptyList.propTypes = {
//   styles: PropTypes.object,
//   content: PropTypes.string,
//   imageUrl: PropTypes.string,
//   content2: PropTypes.string
// };

// EmptyList.defaultProps = {
//   styles: {},
//   content: 'No something in the list',
//   imageUrl: '/images/emptyWhatchList.png',
//   content2: 'You can Add Something'
// };

export default EmptyList;
