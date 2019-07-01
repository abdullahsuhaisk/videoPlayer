/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Stepper from '../Stepper/Stepper';

const ShoppingCardWrapper = styled.div((props) => ({
  ...props.styles,
  marginTop: '20px',
  width: '685px',
  height: '85px',
  borderRadius: '8px',
  border: 'solid 1px #ebeae9',
  backgroundColor: '#ffffff',
  fontFamily: 'Sans Serif Pro',
  '.vb--shoppingCart-Card-Container': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  '.vb--shoppingCart-Card-Image': {
    width: '84px',
    height: '84px',
    objectFit: 'contain',
    borderRadius: '8px',
    backgroundImage: 'url(/images/ShoppingCartImage.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.16)'
  },
  '.vb--shoppingCart-Card-Content': {
    marginLeft: '-30px',
    fontFamily: 'Sans Serif Pro',
    fontWeight: 'bolder',
    fontStyle: 'normal',
    fontStretch: 'normal',
    color: '#0e273b',
    fontSize: '14px'
  },
  '.vb--shoppingCart-Card-Content-Seller-Info-Container': {
    marginTop: '7px',
    display: 'flex',
    alignItems: 'center',
    '.vb--shoppingCart-Card-Content-Seller': {
      marginRight: '10px'
    },
    '.vb--shoppingCart-Card-Content-Firm': {
      fontSize: '10px',
      fontWeight: 'bolder',
      color: '#00acd8',
      marginTop: '1px'
    }
  },
  '.vb--shoppingCart-Card-buttons-group': {
    display: 'flex',
    width: '65px',
    height: '28px',
    borderRadius: '4px',
    outline: 'none',
    backgroundColor: '#f5f9fc',
    '.button': {
      width: '20px',
      borderRadius: '4px',
      backgroundColor: '#f5f9fc',
      outline: 'none'
    }
  },
  '.vb--shoppingCart-Card-buttons-group-show': {
    borderRadius: '4px',
    boxShadow: '1px 1px 2px 0 rgba(0, 0, 0, 0.16)',
    backgroundColor: '#00acd8',
    width: '27px',
    textAlign: 'center',
    verticalAlign: 'middle',
    paddingTop: '9px',
    color: '#ffffff',
    fontWeight: 'bolder'
  },
  '.vb--shoppingCart-Card-Price': {
    fontWeight: 'bolder',
    fontSize: '15px'
  },
  '.vb--shoppingCart-Card-Piece': {},
  '.vb--shoppingCart-Card-Close': {
    padding: '15px 20px',
    fontSize: '20px',
    color: '#0b2443',
    fontWeight: 'bolder',
    cursor: 'pointer'
  },
  '.btn-nonoutline': {
    outline: 'none'
  }
}));

const ShoppingCartCard = ({
  product,
  productId,
  removeCart,
  onValueIncrement,
  onValueDecrement
}) => {
  const [value, setValue] = useState(1);
  const [price, setPrice] = useState(product.currentPrice);

  useEffect(() => {
    setPrice(product.currentPrice * value);
  }, [value]);

  useEffect(() => {
    // onValueIncrement(product.currentPrice);
  }, []);

  return (
    <ShoppingCardWrapper>
      <div className="vb--shoppingCart-Card-Container">
        <div
          className="vb--shoppingCart-Card-Image"
          style={{ backgroundImage: `url(${product.assets.images[0]}` }}
        />
        <div className="vb--shoppingCart-Card-Content">
          {product && product.name}
          <div className="vb--shoppingCart-Card-Content-Seller-Info-Container">
            <div className="vb--shoppingCart-Card-Content-Seller">Seller :</div>
            <div className="vb--shoppingCart-Card-Content-Firm">
              {product && product.seller}
            </div>
          </div>
        </div>
        <Stepper
          Id={productId}
          price={price}
          onValueIncrement={onValueIncrement}
          onValueDecrement={onValueDecrement}
          value={value}
          setValue={setValue}
          removeCart={removeCart}
        />
        {/* <div className="vb--shoppingCart-Card-buttons-group">
          <button
            className="btn-nonoutline"
            onClick={() => {
              setPiece(piece - 1);
              decremeTotalPrice(product.currentPrice);
            }}>
            -
          </button>
          <div className="vb--shoppingCart-Card-buttons-group-show">
            {piece < 1 ? removeCart(productId) : piece}
          </div>
          <button
            className="btn-nonoutline"
            onClick={() => {
              setPiece(piece + 1);
              updateTotalPrice(product.currentPrice);
            }}>
            +
          </button>
        </div> */}
        <div className="vb--shoppingCart-Card-Price">$ {price.toFixed(2)}</div>
        <div
          className="vb--shoppingCart-Card-Close"
          onClick={() => {
            removeCart(productId);
            onValueDecrement(product.currentPrice);
          }}>
          &times;
        </div>
      </div>
    </ShoppingCardWrapper>
  );
};

export default ShoppingCartCard;
