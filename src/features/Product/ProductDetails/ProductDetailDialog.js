import React, { useState } from 'react';
import ModalDialog from '../../../components/ModalDialog/ModalDialog';

const ProductDetailDialog = (props) => {
  const { isOpen, closeModal } = props;
  if (!isOpen) {
    return null;
  }
  return (
    <ModalDialog onClose={() => closeModal()}>
      <div>deneme</div>
    </ModalDialog>
  );
};
export default ProductDetailDialog;
