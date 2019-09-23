// Screen must be smart components
import React from 'react';
import gql from 'graphql-tag';

import ProductDetailsDialog from './ProductDetailsDialog';
import { PLAYER } from '../../../common/constants';
import BaseQueryHoc from '../../../components/HOCS/Grapqhl/BaseQueryHoc';

const GET_PLAYER = gql`
  query getPlayerForProductDetailsScreen {
    player @client {
      isStarted
      playingState
    }
    productIdInDetails @client
  }
`;

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
