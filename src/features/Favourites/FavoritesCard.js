import React from 'react';
import styled from 'styled-components';
import CardImage from '../../components/Card/ProductCard/CardImage';
import CardInfo from '../../components/Card/ProductCard/CardInfo';
import CardPrice from '../../components/Card/ProductCard/CardPrice';
import CardClose from '../../components/Card/ProductCard/CardClose';

const FavoritesCardWrapper = styled.div((props) => ({
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
  margin: '15px'
}));

const cardInfoStyle = {
  marginLeft: '-150px',
  fontFamily: 'Sans Serif Pro',
  fontWeight: 'bolder',
  fontStyle: 'normal',
  fontStretch: 'normal',
  color: '#0e273b',
  fontSize: '14px'
};

const FavoritesCard = () => {
  return (
    <FavoritesCardWrapper>
      <CardImage />
      <CardInfo styles={cardInfoStyle} />
      <CardPrice />
      <CardClose />
    </FavoritesCardWrapper>
  );
};

export default FavoritesCard;
