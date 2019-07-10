import React from 'react';

import { Wrapper } from './ProductWishListItem.style';

const ProductWishListItem = ({ added, selected, deleted }) => {
  const isAddedClassName = added ? 'already-added' : undefined;
  const isSelectedClassName = selected ? 'selected' : undefined;
  // TODO: Need think, It is not like best solution
  const isDeletedClassName = deleted ? 'already-added' : undefined;

  const deleteIcon = 'url(/images/d-remove.svg)';
  return (
    <Wrapper>
      <div
        className={`vb-product-detail-wish-list-container ${isAddedClassName} ${isSelectedClassName} ${isDeletedClassName}`}>
        <div className="vb-product-detail-wish-list-item-image" />
        <div className="vb-product-detail-wish-list-item-name">
          Glasses that I Like
        </div>
        <div className="vb-product-detail-wish-list-item-counter">12 items</div>
        {added ? (
          <div className="vb-product-detail-wish-list-item-icon" />
        ) : null}
        {deleted ? (
          <div
            className="vb-product-detail-wish-list-item-icon"
            style={{ backgroundImage: deleteIcon }}
          />
        ) : null}
      </div>
    </Wrapper>
  );
};

export default ProductWishListItem;
