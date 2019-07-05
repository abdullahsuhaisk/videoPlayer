import React from 'react';
import EmptyList from '../../components/EmptyList/EmptyList';

const ImageUrl = '/images/emptyWhatchList.png';
const content = 'No vıdeo ın watchlıst';
const styles = {
  '.vb--component--emptyList-image': {
    padding: '0px',
    display: 'inline-block',
    width: '220px',
    height: '220px',
    objectFit: 'contain',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  }
};

// Empty watchList inheritance EmptyList.
// Emptylist is a base EmptyContent Component, it gives imageUrl style and content
// WatchList wishlist and favoritesList can derived EmptyList component

const EmptyWatchList = () => {
  return <EmptyList ImageUrl={ImageUrl} styles={styles} content={content} />;
};

export default EmptyWatchList;
