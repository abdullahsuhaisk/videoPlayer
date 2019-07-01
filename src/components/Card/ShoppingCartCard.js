/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Stepper from '../Stepper/Stepper';
import CardImage from './ProductCard/CardImage';
import CardInfo from './ProductCard/CardInfo';
import CardPrice from './ProductCard/CardPrice';
import CardClose from './ProductCard/CardClose';

const ShoppingCardWrapper = styled.div((props) => ({
  ...props.styles,
  width: '685px',
  height: '85px',
  borderRadius: '8px',
  border: 'solid 1px #ebeae9',
  backgroundColor: '#ffffff',
  fontFamily: 'Sans Serif Pro',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '15px 15px 15px 70px '
}));

const ShoppingCartCard = ({ product, productId, removeCart }) => {
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
      <CardImage
        style={{ backgroundImage: `url(${product.assets.images[0]}` }}
      />
      <CardInfo
        name={product.name}
        seller={product.seller}
        style={{ marginLeft: '30px' }}
      />
      <Stepper
        Id={productId}
        value={value}
        setValue={setValue}
        price={price}
        removeCart={removeCart}
      />
      <CardPrice currentPrice={price.toFixed(2)} />
      <CardClose closeMethod={removeCart} id={productId} />
    </ShoppingCardWrapper>
  );
};

export default ShoppingCartCard;

/* 
<div className="vb--shoppingCart-Card-buttons-group">
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
        </div> 
*/
