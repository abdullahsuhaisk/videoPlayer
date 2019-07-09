import React from 'react';
import EmptyWishList from './EmptyWishList';
import WishListGroupItem from './WishListGroupItem';
import WishListGroup from './WishListGroup';
import WishListCardItem from './WishListCardItem';

const data = [
  {
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
  {
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
  {
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
];

const WishlistScreen = () => {
  return (
    <div style={{ width: '100%', height: '500px', overflow: 'scroll' }}>
      <div style={{ margin: '10px' }}>
        {data.map((product) => (
          <WishListCardItem product={product} />
        ))}
      </div>
      <EmptyWishList />
      <div style={{ margin: '10px' }}>
        <WishListGroup />
      </div>
      <WishListGroupItem />
    </div>
  );
};

export default WishlistScreen;
