import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { ProductWishListStyle, Wrapper } from './ProductWishList.style';
import { loadWebFontsFromStyles } from '../../../utils/parseStyles';
import ProductWishListItem from './ProductWishListItem';

const ProductWishList = ({ setWishlist, styles }) => {
  useEffect(() => {
    loadWebFontsFromStyles(ProductWishListStyle);
    loadWebFontsFromStyles(styles);
  }, []);

  return (
    <Wrapper>
      <div className="vb-product-wish-list-container">
        <span>Add this item to wishlist</span>
        <div className="vb-product-wish-list-search-container">
          <span className="icon" />
        </div>
        <ProductWishListItem selected />
        <ProductWishListItem />
        <ProductWishListItem added />
      </div>
    </Wrapper>
  );
};

ProductWishList.defaultProps = {
  styles: {}
};

export default ProductWishList;
