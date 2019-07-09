import React from 'react';

import { Wrapper } from './ProductWishListItem.style';

const ProductWishListItem = ({ added, selected }) => {
  const isAddedClassName = added ? 'already-added' : undefined;
  const isSelectedClassName = selected ? 'selected' : undefined;
  return (
    <Wrapper>
      <div
        className={`vb-product-detail-wish-list-container ${isAddedClassName} ${isSelectedClassName}`}>
        <div className="vb-product-detail-wish-list-item-image" />
        <div className="vb-product-detail-wish-list-item-name">
          Glasses that I Like
        </div>
        <div className="vb-product-detail-wish-list-item-counter">12 items</div>
        {added ? (
          <div className="vb-product-detail-wish-list-item-icon" />
        ) : null}
      </div>
    </Wrapper>
  );
};

export default ProductWishListItem;
