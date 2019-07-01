import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ModalDialog from '../../../components/ModalDialog/ModalDialog';
import { ProductDetailsWrapper } from './ProductDetailsDialog.style';
import AddToCardButton from '../../../components/Button/AddToCardButton';

const ProductDetailDialog = (props) => {
  const { closeModal, product, addCart, productId } = props;
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
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);
  const clickAddCardButton = () => {
    addCart(productId);
  };

  return (
    <ProductDetailsWrapper>
      <ModalDialog onClose={() => closeModal()} styles={wrapperStyle}>
        <div className="vb--product-details-container">
          <div className="vb--product-detail-dialog-slider">
            <div
              className="vb--product-detail-dialog-slider-image"
              style={{
                backgroundImage: `url(${product && product.assets.images[0]}`
              }}
            />
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
                <button
                  onClick={() => setColor('Blue')}
                  className={color === 'Blue' ? 'active' : null}>
                  Blue
                </button>
                <button
                  onClick={() => setColor('Purple')}
                  className={color === 'Purple' ? 'active' : null}>
                  Purple
                </button>
                <button
                  onClick={() => setColor('Black')}
                  className={color === 'Black' ? 'active' : null}>
                  Black
                </button>
                <button
                  onClick={() => setColor('White')}
                  className={color === 'White' ? 'active' : null}>
                  White
                </button>
              </div>
              <div className="vb--product-detail-dialog-content-features-header">
                Size
              </div>
              <div className="vb--product-detail-dialog-content-features-content">
                <button
                  onClick={() => setSize('64')}
                  className={size === '64' ? 'active' : null}>
                  64 GB
                </button>
                <button
                  onClick={() => setSize('128')}
                  className={size === '128' ? 'active' : null}>
                  128 GB
                </button>
                <button
                  onClick={() => setSize('256')}
                  className={size === '256' ? 'active' : null}>
                  256 GB
                </button>
                <button
                  onClick={() => setSize('512')}
                  className={size === '512' ? 'active' : null}>
                  512 GB
                </button>
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
