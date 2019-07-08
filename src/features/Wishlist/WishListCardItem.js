import React from 'react';
import { WishListCardWrapper } from './WishListCardItem.style';
import CardImage from '../../components/Card/ProductCard/CardImage';
import CardInfo from '../../components/Card/ProductCard/CardInfo';
import AddToCardButton from '../../components/Button/AddToCardButton';
import CardPrice from '../../components/Card/ProductCard/CardPrice';
import CardClose from '../../components/Card/ProductCard/CardClose';

const WishListCardItem = ({ item, styles }) => {
  return (
    <WishListCardWrapper>
      <CardImage />
      <CardInfo
        name="Adidas DB1756 Cosmic 2XS W Lady Shirt"
        seller="Adidas Inc."
        styles={{ marginLeft: '0px' }}
      />
      <AddToCardButton />
      <CardPrice currentPrice={205} />
      <CardClose />
    </WishListCardWrapper>
  );
};

WishListCardItem.defaultProps = {};

export default WishListCardItem;
