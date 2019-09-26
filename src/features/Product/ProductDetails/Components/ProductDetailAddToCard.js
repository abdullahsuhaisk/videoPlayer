import React from 'react';
import AddToCardButton from '../../../../components/Button/AddToCardButton';
import BaseQueryHoc from '../../../../components/HOCS/Grapqhl/BaseQueryHoc';
import { GET_PLAYER } from '../../../../Queries/Player/PlayerQueries';

const ProductDetailAddToCard = ({ data }) => {
  const productId = data.productIdInDetails;
  return (
    <div>
      <AddToCardButton productId={productId} />
    </div>
  );
};

export default BaseQueryHoc(ProductDetailAddToCard, GET_PLAYER);
