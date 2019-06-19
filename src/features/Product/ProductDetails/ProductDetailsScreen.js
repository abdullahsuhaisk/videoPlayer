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
import { InjectUiProps } from '../../../store/redux/ui/uiProps';

const ProductDetailsScreen = ({
  playerPlayingState,
  playerStarted,
  isOpen,
  openDialog,
  closeDialog,
  productId
}) => {
  // console.log( playerPlayingState, playerStarted, isOpen, openDialog, closeDialog, productId );
  return (
    <>
      {/* <ProductDetailDialog isOpen={openModal} closeModal={setOpenModal} product={product} /> */}
      <div>Abc</div>
    </>
  );
};

export default compose(
  InjectProductProps(),
  InjectPlayerProps({
    selectProps: ({ playerPlayingState, playerStarted }) => ({
      playerPlayingState,
      playerStarted
    })
  }),
  InjectUiProps()
)(ProductDetailsScreen);

ProductDetailsScreen.propTypes = {
  playerPlayingState: PropTypes.string.isRequired,
  playerStarted: PropTypes.bool.isRequired,
  styles: PropTypes.object
};

ProductDetailsScreen.defaultProps = {
  styles: {}
};
