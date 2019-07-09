import React from 'react';
import FavoritesCard from './FavoritesCard';
import EmptyFavoriteList from './EmptyFavoriteList';

const products = {
  'product-1': {
    name: 'Turtleneck Sweater',
    brand: 'Valentino',
    assets: {
      images: ['/images/products/product-1.jpg']
    },
    currency: '$',
    price: 0,
    discountRate: 0,
    currentPrice: 74.98,
    inStock: true,
    seller: ' Adidas INC.'
  },
  'product-2': {
    name: 'Women Red Classes',
    brand: 'Pierre Cardin',
    assets: {
      images: ['/images/products/product-2.jpg']
    },
    price: 250.0,
    discountRate: 50,
    currentPrice: 120.0,
    currency: '$',
    inStock: false,
    seller: ' Pierre INC.'
  },
  'product-3': {
    name: 'Turtleneck Sweater 2',
    brand: 'Valentino',
    assets: {
      images: ['/images/products/product-3.jpg']
    },
    currency: '$',
    price: 0,
    discountRate: 0,
    currentPrice: 78.98,
    inStock: true,
    seller: 'NİKE INC.'
  }
};

const FavoritesScreen = () => {
  return (
    <div style={{ padding: '40px', overflowY: 'scroll', height: '500px' }}>
      <FavoritesCard product={products['product-1']} />
      <FavoritesCard product={products['product-2']} />
      <FavoritesCard product={products['product-3']} />
      <EmptyFavoriteList />
    </div>
  );
};

export default FavoritesScreen;
