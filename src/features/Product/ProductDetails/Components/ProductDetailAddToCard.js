import React from 'react';
import AddToCardButton from '../../../../components/Button/AddToCardButton';

const ProductDetailAddToCard = ({ client, productId }) => {
  return (
    <div>
      <AddToCardButton productId={productId} />
      <div className="productdetail--seperator" />
    </div>
  );
};

export default ProductDetailAddToCard;
