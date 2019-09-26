// Screen must be smart components
import React from 'react';
import ProductDetailsDialog from './ProductDetailsDialog';
import { PLAYER } from '../../../common/constants';
import BaseQueryHoc from '../../../components/HOCS/Grapqhl/BaseQueryHoc';
import { GET_PLAYER } from '../../../Queries/Player/PlayerQueries';

const ProductDetailsScreen = ({ data }) => {
  const { player, productIdInDetails } = data;
  if (!player || !productIdInDetails) {
    return null;
  }
  if (player.isStarted && player.playingState === PLAYER.PAUSED) {
    return <ProductDetailsDialog productId={productIdInDetails} />;
  }
  return null;
};

export default BaseQueryHoc(ProductDetailsScreen, GET_PLAYER);
