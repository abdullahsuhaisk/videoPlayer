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

const styles = {
  '.vb--card-content-seller': { color: 'red' }
};
const FavoritesCard = () => {
  return (
    <FavoritesCardWrapper>
      <CardImage />
      <CardInfo styles={styles} />
      <CardPrice />
      <CardClose />
    </FavoritesCardWrapper>
  );
};

export default FavoritesCard;
