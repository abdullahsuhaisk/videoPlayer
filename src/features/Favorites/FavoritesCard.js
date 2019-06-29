import React, { useState } from 'react';
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
  margin: '15px 15px 15px 70px '
}));

const styles = {
  '.nonActive': {
    display: 'none'
  }
};

const CardStyles = {
  '.vb--card-content-seller': { color: 'red' }
};

const FavoritesCard = ({ product }) => {
  const { name, seller, currentPrice, assets } = product;
  const imageUrl = assets.images[0];
  console.log(imageUrl);

  const imageStyle = {
    '.vb--card-content--image': {
      backgroundImage: `url(${imageUrl})`
    }
  };

  // TODO: SET IMAGE
  // const [isActive, setActive] = useState(true);

  return (
    <FavoritesCardWrapper styles={styles}>
      <CardImage styles={imageStyle} />
      <CardInfo styles={CardStyles} name={name} seller={seller} />
      <CardPrice currentPrice={currentPrice} />
      <CardClose />
    </FavoritesCardWrapper>
  );
};

export default FavoritesCard;
