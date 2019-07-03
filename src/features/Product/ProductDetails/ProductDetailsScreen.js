// Screen must be smart components
import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ProductDetailsDialog from './ProductDetailsDialog';
import { PLAYER } from '../../../common/constants';

const GET_PLAYER = gql`
  query getPlayerForProductDetailsScreen {
    player @client {
      isStarted
      playingState
    }
    productIdInDetails @client
  }
`;

const ProductDetailsScreen = () => {
  return (
    <Query query={GET_PLAYER}>
      {({ data: { player, productIdInDetails } }) => {
        if (!player || !productIdInDetails) {
          return null;
        }

        if (player.isStarted && player.playingState === PLAYER.PAUSED) {
          return <ProductDetailsDialog productId={productIdInDetails} />;
        }

        return null;
      }}
    </Query>
  );
};

export default ProductDetailsScreen;
