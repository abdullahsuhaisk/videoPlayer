// Screen must be smart components
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import ProductDetailDialog from './ProductDetailsDialog';

import {
  InjectPlayerProps,
  InjectProductProps
} from '../../../store/redux/providers';
import { InjectProductDetailProps } from '../../../store/redux/productDetail/productDetailProps';
import { playingState } from '../../../store/redux/player/playerActions';

const ProductDetailsScreen = ({
  playerPlayingState,
  playerStarted,
  isOpenProductDetailDialog, // Modal Toggle
  closeProductDetailDialog, // Dialog's close method, it pass to Modal
  productId, // it came ProductDetail reducer
  products
}) => {
  const [productInDetail, setProductInDetail] = React.useState(null);

  React.useEffect(() => {
    const detailProduct = products[productId];
    setProductInDetail(detailProduct);
  }, [productId]);

  return (
    playerStarted &&
    playerPlayingState === playingState.PAUSED &&
    (productId && isOpenProductDetailDialog && (
      <>
        <ProductDetailDialog
          closeModal={closeProductDetailDialog}
          product={productInDetail}
        />
      </>
    ))
  );
};

ProductDetailsScreen.propTypes = {
  playerPlayingState: PropTypes.string.isRequired,
  playerStarted: PropTypes.bool.isRequired,
  styles: PropTypes.object,
  productId: PropTypes.string
};

ProductDetailsScreen.defaultProps = {
  styles: {}
};

export default compose(
  InjectPlayerProps({
    selectProps: ({ playerPlayingState, playerStarted }) => ({
      playerPlayingState,
      playerStarted
    })
  }),
  InjectProductDetailProps({
    selectProps: ({ productId, isOpenProductDetailDialog }) => ({
      productId,
      isOpenProductDetailDialog
    }),
    selectActions: ({ closeProductDetailDialog }) => ({
      closeProductDetailDialog
    })
  }),
  InjectProductProps({
    selectProps: ({ products }) => ({ products })
  })
)(ProductDetailsScreen);
