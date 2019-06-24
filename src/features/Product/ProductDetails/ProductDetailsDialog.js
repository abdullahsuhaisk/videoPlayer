import React from 'react';
import PropTypes from 'prop-types';
import ModalDialog from '../../../components/ModalDialog/ModalDialog';
import { ProductDetailsWrapper } from './ProductDetailsDialog.style';
import AddToCardButton from '../../../components/Button/AddToCardButton';

const ProductDetailDialog = (props) => {
  //
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
    <ProductDetailsWrapper>
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
          <div className="vb--product-detail-dialog-contents">
            <div className="vb--product-detail-dialog-content-header">
              {product && product.name}
            </div>
            <div className="vb--product-detail-dialog-content-content">
              Brand: {product && product.brand}
            </div>
            <div className="vb--product-detail-dialog-content-content">
              {product && product.inStock === true ? 'InStock' : 'OutofStock'}
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
            <div className="vb--product-detail-dialog-content-features">
              <div className="vb--product-detail-dialog-content-features-header">
                Colors
              </div>
              <div className="vb--product-detail-dialog-content-features-content">
                <button className="active">Blue</button>
                <button>Purple</button>
                <button>Black</button>
                <button>White</button>
              </div>
              <div className="vb--product-detail-dialog-content-features-header">
                Size
              </div>
              <div className="vb--product-detail-dialog-content-features-content">
                <button className="active">64 GB</button>
                <button>128 GB</button>
                <button>256 GB</button>
                <button>512 GB</button>
              </div>
            </div>
            <div className="vb--product-detail-dialog-content-price-and-cartButton">
              <div className="vb--product-card-price-container">
                <div className="vb--product-card-base-price">
                  <span>250.00$</span>
                </div>
                <div className="vb--product-card-discount-rate-and-price">
                  <div className="vb--product-card-discount-rate">
                    <span>%50</span>
                  </div>
                  <div className="vb--product-card-current-price">
                    <span>120.00$</span>
                  </div>
                  <AddToCardButton
                    onClick={clickAddCardButton}
                    styles={{ paddingTop: '9px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalDialog>
    </ProductDetailsWrapper>
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
