import React from 'react';
import PropTypes from 'prop-types';
import ModalDialog from '../../../components/ModalDialog/ModalDialog';

const ProductDetailDialog = (props) => {
  const { closeModal, product } = props;
  return (
    <ModalDialog onClose={() => closeModal()}>
      <div>{product && product.name}</div>
      <div>{product && product.brand}</div>
      <div>{product && product.inStock}</div>
      <div>{product && product.currency}</div>
      <div>{product && product.currentPrice}</div>
      <div>{product && product.discountRate}</div>
      <div>{product && product.price}</div>
      <div>{product && product.currency}</div>
      <img
        src={product && product.assets.images[0]}
        alt="images"
        style={{ width: 100 }}
      />
    </ModalDialog>
  );
};
ProductDetailDialog.propTypes = {
  closeModal: PropTypes.func.isRequired,
  product: PropTypes.object
};

ProductDetailDialog.defaultProps = {
  product: null
};
export default ProductDetailDialog;
