import React from 'react';
import EmptyList from '../../components/EmptyList/EmptyList';

const imageUrl = '/images/no-shop.svg';
const content = 'THERE IS NOTHING IN YOUR CART';
const content2 = 'Explore around to add items in it.';
const styles = {
  '.vb--component--emptyList-image': {
    padding: '0px',
    display: 'inline-block',
    width: '180px',
    height: '180px',
    objectFit: 'contain',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    margin: ' 0 0 20px 0'
  }
};
const EmptyShoppingCart = () => {
  return (
    <EmptyList
      imageUrl={imageUrl}
      styles={styles}
      content={content}
      content2={content2}
    />
  );
};

export default EmptyShoppingCart;
