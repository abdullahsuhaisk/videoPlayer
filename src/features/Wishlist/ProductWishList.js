import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { ProductWishListStyle, Wrapper } from './ProductWishList.style';
import { loadWebFontsFromStyles } from '../../utils/parseStyles';

const ProductWishList = ({ setWishlist, styles }) => {
  useEffect(() => {
    loadWebFontsFromStyles(ProductWishListStyle);
    loadWebFontsFromStyles(styles);
  }, []);

  return (
    <Wrapper>
      <button onClick={() => setWishlist(false)}>Close Wish List</button>
    </Wrapper>
  );
};

export default ProductWishList;
