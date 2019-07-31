import React from 'react';
import PropTypes from 'prop-types';

import { WishListCardWrapper } from './WishListCardItem.style';
import CardImage from '../../../components/Card/ProductCard/CardImage';
import CardInfo from '../../../components/Card/ProductCard/CardInfo';
import AddToCardButton from '../../../components/Button/AddToCardButton';
import CardPrice from '../../../components/Card/ProductCard/CardPrice';
import CardClose from '../../../components/Card/ProductCard/CardClose';

const WishListCardItem = ({ product, styles }) => {
  const { name, seller, currentPrice, assets } = product;
  const imageUrl = assets.images[0];
  const ImageStyle = {
    backgroundImage: `url(${imageUrl})`
  };

  return (
    <WishListCardWrapper styles={styles}>
      <CardImage style={ImageStyle} />
      <CardInfo name={name} seller={seller} styles={{ marginLeft: '-25px' }} />
      <AddToCardButton />
      <CardPrice currentPrice={currentPrice} styles={{ fontSize: '20px' }} />
      <CardClose />
    </WishListCardWrapper>
  );
};
CardInfo.propTypes = {
  styles: PropTypes.object,
  product: PropTypes.object.isRequired
};

WishListCardItem.defaultProps = {
  styles: {}
};

export default WishListCardItem;
