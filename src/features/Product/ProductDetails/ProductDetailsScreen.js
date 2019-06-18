// Screen must be smart components
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import ProductDetailDialog from './ProductDetailDialog';
import {
  InjectProductProps,
  InjectHotspotProps,
  InjectPlayerProps
} from '../../../store/redux/providers';

const ProductDetailsScreen = ({ playerPlayingState, playerStarted }) => {
  return (
    <>
      {/* <ProductDetailDialog isOpen={openModal} closeModal={setOpenModal} product={product} /> */}
      <div>Abc</div>
    </>
  );
};

export default compose(
  InjectProductProps(),
  InjectHotspotProps({
    selectProps: ({ hotspots, activeHotspotIds }) => ({
      hotspots,
      activeHotspotIds
    })
  }),
  InjectPlayerProps({
    selectProps: ({ playerPlayingState, playerStarted }) => ({
      playerPlayingState,
      playerStarted
    })
  })
)(ProductDetailsScreen);

ProductDetailsScreen.propTypes = {
  playerPlayingState: PropTypes.string.isRequired,
  playerStarted: PropTypes.bool.isRequired,
  styles: PropTypes.object
};

ProductDetailsScreen.defaultProps = {
  styles: {}
};
