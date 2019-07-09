import React from 'react';

import { Wrapper } from './ProductWishListItem.style';

const ProductWishListItem = () => {
  return (
    <Wrapper>
      <div className="vb-product-detail-wish-list-item-image">Image</div>
      <div className="vb-product-detail-wish-list-item-name">
        Glasses that I Like
      </div>
      <div className="vb-product-detail-wish-list-item-counter">12 items</div>
      <div className="vb-product-detail-wish-list-item-icon">Icon</div>
    </Wrapper>
  );
};

export default ProductWishListItem;
