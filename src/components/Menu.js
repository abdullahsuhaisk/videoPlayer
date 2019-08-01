import React from 'react';
import ProductCardDiscount from './Zak/VideoPause/Components/Cards/ProductCardDiscount/ProductCardDicount';
import ProductCardWishlisted from './Zak/VideoPause/Components/Cards/ProductCardWishlisted/ProductCardWishlisted';
import WishlistCollection from './Zak/VideoPause/Components/WishlistCollection/WishlistCollection';
import Watchlist from './Zak/VideoPause/Components/Watchlist/Watchlist';
import ShoppingCart from './Zak/VideoPause/Components/ShoppingCart/ShoppingCart';

const Menu = [
  {
    page: 1,
    name: 'Products in this Scene',
    flexClass: 'VideoPlayerContainer',
    haveBullet: false,
    pageComponents: [
      <ProductCardWishlisted />,
      <ProductCardWishlisted />,
      <ProductCardDiscount />,
      <ProductCardWishlisted />,
      <ProductCardWishlisted />,
      <ProductCardWishlisted />,
      <ProductCardWishlisted />,
      <ProductCardDiscount />
    ]
  },
  {
    page: 2,
    name: 'All Products',
    flexClass: 'VideoPlayerContainer',
    haveBullet: false,
    pageComponents: [
      <ProductCardWishlisted />,
      <ProductCardWishlisted />,
      <ProductCardDiscount />,
      <ProductCardDiscount />,
      <ProductCardWishlisted />,
      <ProductCardWishlisted />
    ]
  },
  {
    page: 3,
    name: 'Suggested Products',
    flexClass: 'VideoPlayerContainer',
    haveBullet: false,
    pageComponents: [
      <ProductCardDiscount />,
      <ProductCardDiscount />,
      <ProductCardDiscount />,
      <ProductCardWishlisted />,
      <ProductCardWishlisted />
    ]
  },
  {
    page: 4,
    name: 'Wishlist',
    flexClass: 'VideoPlayerContainer',
    haveBullet: true,
    pageComponents: [
      <WishlistCollection />,
      <WishlistCollection />,
      <WishlistCollection />
    ]
  },
  {
    page: 5,
    name: 'Watchlist',
    flexClass: 'VideoPlayerContainer',
    haveBullet: false,
    pageComponents: [
      <Watchlist />,
      <Watchlist />,
      <Watchlist />,
      <Watchlist />,
      <Watchlist />
    ]
  },
  {
    page: 6,
    name: 'Shopping Cart',
    flexClass: 'd-flex-column',
    haveBullet: false,
    pageComponents: [<ShoppingCart />, <ShoppingCart />, <ShoppingCart />]
  }
];

export default Menu;
