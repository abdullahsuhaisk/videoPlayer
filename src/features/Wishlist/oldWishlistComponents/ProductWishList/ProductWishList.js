import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { ProductWishListStyle, Wrapper } from './ProductWishList.style';
// import { loadWebFontsFromStyles } from '../../../utils/parseStyles';
import ProductWishListItem from './ProductWishListItem';
import Button from '../../../../components/Button/Button';
import { loadWebFontsFromStyles } from '../../../../utils/parseStyles';

const ProductWishList = ({ setWishlist, styles }) => {
  useEffect(() => {
    loadWebFontsFromStyles(ProductWishListStyle);
    loadWebFontsFromStyles(styles);
  }, []);

  return (
    // TODO: Search Component is only showing but it will be make
    <Wrapper>
      <div className="vb-product-wish-list-container">
        <span>Add this item to wishlist</span>
        <div className="vb-product-wish-list-search-container">
          <span className="icon" />
        </div>
        <ProductWishListItem selected />
        <ProductWishListItem />
        <ProductWishListItem added />
        <ProductWishListItem deleted />
        <Button>Create new List</Button>
        <Button>Done</Button>
      </div>
    </Wrapper>
  );
};

ProductWishList.defaultProps = {
  styles: {}
};

ProductWishList.propTypes = {
  styles: PropTypes.object,
  setWishlist: PropTypes.func.isRequired
};

export default ProductWishList;
