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
    <ProductDetailModalDialog>
      <ModalDialog onClose={() => closeModal()} styles={wrapperStyle}>
        <div className="vb--product-details-container">
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
            <div className="vb--product-detail-dialog-content-content">
              Brand: {product && product.brand}
            </div>
            <div className="vb--product-detail-dialog-content-content">
              {product && product.inStock}
            </div>
            <div className="vb--product-detail-dialog-content-content">
              Price: {product && product.currency} {product && product.price}
            </div>
            <div className="vb--product-detail-dialog-content-content">
              {product && product.currentPrice}
            </div>
            <div className="vb--product-detail-dialog-content-content">
              {product && product.discountRate}
            </div>
            <Button>Add Card</Button>
            <AddToCardButton onClick={clickAddCardButton} />
          </div>
        </div>
      </ModalDialog>
    </ProductDetailModalDialog>
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
