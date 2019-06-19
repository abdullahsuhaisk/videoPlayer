// Screen must be smart components
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import ProductDetailDialog from './ProductDetailDialog';

import {
  InjectProductProps,
  InjectPlayerProps
} from '../../../store/redux/providers';
import { InjectProductDetailProps } from '../../../store/redux/productDetail/productDetailProps';

const ProductDetailsScreen = ({
  playerPlayingState,
  playerStarted,
  isOpenProductDetailDialog,
  openProductDetailDialog,
  closeProductDetailDialog, // Dialog's close method, it's pass to Modal
  productId
}) => {
  console.log(isOpenProductDetailDialog);
  return (
    <>
      <ProductDetailDialog
        isOpen={isOpenProductDetailDialog}
        closeModal={closeProductDetailDialog}
      />
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
  InjectProductDetailProps()
)(ProductDetailsScreen);

ProductDetailsScreen.propTypes = {
  playerPlayingState: PropTypes.string.isRequired,
  playerStarted: PropTypes.bool.isRequired,
  styles: PropTypes.object
};

ProductDetailsScreen.defaultProps = {
  styles: {}
};
