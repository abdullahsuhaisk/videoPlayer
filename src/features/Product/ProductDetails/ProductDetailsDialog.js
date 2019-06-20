import React from 'react';
import PropTypes from 'prop-types';
import ModalDialog from '../../../components/ModalDialog/ModalDialog';
import { ProductDetailModalDialog } from './ProductDetailsDialog.style';
import Button from '../../../components/Button/Button';
import AddToCardButton from '../../../components/Button/AddToCardButton';

const ProductDetailDialog = (props) => {
  const { closeModal, product } = props;
  const wrapperStyle = {
    Wrapper: {
      zIndex: '1',
      top: '50px',
      left: '100px',
      width: '80%',
      height: '80%',
      borderRadius: '8px'
    },
    CloseButton: { color: 'black' }
  };
  const clickAddCardButton = () => {
    console.log('Clicked');
  };
  return (
    <ModalDialog onClose={() => closeModal()} styles={wrapperStyle}>
      <ProductDetailModalDialog>
        <div className="vb--product-detail-dialog-slider">
          <div className="vb--product-detail-dialog-slider-image">
            <img
              src={product && product.assets.images[0]}
              alt="images"
              style={{ width: 300 }}
            />
          </div>
        </div>
        <div className="vb--product-detail-dialog-content">
          <div className="vb--product-detail-dialog-content-header">
            {product && product.name}
          </div>
          <div>Brand: {product && product.brand}</div>
          <div>{product && product.inStock}</div>
          <div>
            Price: {product && product.currency} {product && product.price}
          </div>
          <div>{product && product.currentPrice}</div>
          <div>{product && product.discountRate}</div>
          <Button>Add Card</Button>
          <AddToCardButton onClick={clickAddCardButton} />
        </div>
      </ProductDetailModalDialog>
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
