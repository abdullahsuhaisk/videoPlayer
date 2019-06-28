import React from 'react';
import FavoritesCard from './FavoritesCard';

const FavoritesScreen = () => {
  return (
    <div style={{ padding: '40px', overflowY: 'scroll', height: '500px' }}>
      <FavoritesCard styles={{ display: 'none' }} />
      <FavoritesCard />
      <FavoritesCard />
      <FavoritesCard />
      <FavoritesCard />
      <FavoritesCard />
      <FavoritesCard />

      <FavoritesCard />
    </div>
  );
};

export default FavoritesScreen;
