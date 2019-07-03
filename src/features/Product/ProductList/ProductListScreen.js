import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Tabs from '../../../components/Tabs/Tabs';
import ProductList from './ProductList';
import ProductListInScene from './ProductListInScene';
import { PLAYER } from '../../../common/constants';

const GET_PLAYER = gql`
  query getPlayerForProductListScreen {
    player @client {
      isStarted
      playingState
    }
  }
`;

const ProductListScreen = ({ styles }) => {
  return (
    <Query query={GET_PLAYER}>
      {({ data: { player } }) => {
        return (
          player.isStarted &&
          player.playingState === PLAYER.PAUSED && (
            <Tabs
              styles={styles}
              tabs={['Products in this scene', 'Products in this video']}
              tabPanels={[<ProductListInScene />, <ProductList />]}
            />
          )
        );
      }}
    </Query>
  );
};

ProductListScreen.propTypes = {
  styles: PropTypes.object
};

ProductListScreen.defaultProps = {
  styles: {}
};

export default ProductListScreen;
