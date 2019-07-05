/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Stepper from '../../../components/Stepper/Stepper';
import CardImage from '../../../components/Card/ProductCard/CardImage';
import CardInfo from '../../../components/Card/ProductCard/CardInfo';
import CardPrice from '../../../components/Card/ProductCard/CardPrice';
import CardClose from '../../../components/Card/ProductCard/CardClose';

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

const ShoppingCartItem = ({ cartItem, onRemoveItem }) => {
  return (
    <ShoppingCardWrapper>
      <CardImage
        style={{
          backgroundImage: `url(${cartItem.product.image.thumbnailUrl}`
        }}
      />
      <CardInfo
        name={cartItem.product.name}
        seller={cartItem.product.brand.name}
        style={{ marginLeft: '30px' }}
      />
      <Stepper value={cartItem.quantity} onValueChanged={() => {}} />
      <CardPrice currentPrice={cartItem.product.price.toFixed(2)} />
      <CardClose onClose={onRemoveItem} />
    </ShoppingCardWrapper>
  );
};

ShoppingCartItem.propTypes = {
  cartItem: PropTypes.object.isRequired,
  onRemoveItem: PropTypes.func.isRequired
};

export default ShoppingCartItem;
