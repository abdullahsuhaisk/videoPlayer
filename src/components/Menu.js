import React from 'react';
import ProductCardDiscount from './Zak/VideoPause/Components/Cards/ProductCardDiscount/ProductCardDicount';
import ProductCardWishlisted from './Zak/VideoPause/Components/Cards/ProductCardWishlisted/ProductCardWishlisted';
import WishlistCollection from './Zak/VideoPause/Components/WishlistCollection/WishlistCollection';
import Watchlist from './Zak/VideoPause/Components/Watchlist/Watchlist';
import ShoppingCart from './Zak/VideoPause/Components/ShoppingCart/ShoppingCart';
import ShoppingCartTotal from './Zak/VideoPause/Components/ShoppingCartTotal/ShoppingCartTotal';
import Profile from './Zak/VideoPause/Components/Profile/Profile';
import UpdateProfile from './Zak/VideoPause/Components/UpdateProfile/UpdateProfile';
import UpdateAdress from './Zak/VideoPause/Components/UpdateAdress/UpdateAdress';
import ProductDetail from './Zak/VideoPause/Components/ProductDetail/ProductDetail';
import AddToWishlist from './Zak/VideoPause/Components/AddToWishlist/AddToWishlist';

const Menu = [
  {
    page: 1,
    name: 'Products in this Scene',
    display: true,
    flexClass: 'VideoPlayerContainer',
    haveBullet: false,
    pageComponents: [
      <ProductCardWishlisted />,
      <ProductCardWishlisted />,
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
    display: true,
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
    display: true,
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
    display: true,
    flexClass: 'WishlistContainer',
    haveBullet: true,
    pageComponents: [
      <WishlistCollection />,
      <WishlistCollection />,
      <WishlistCollection />,
      <WishlistCollection />,
      <WishlistCollection />
    ]
  },
  {
    page: 5,
    name: 'Watchlist',
    display: true,
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
    display: true,
    flexClass: 'ShoppingCartContainer',
    haveBullet: false,
    pageComponents: [
      <ShoppingCart />,
      <ShoppingCart />,
      <ShoppingCart />,
      <ShoppingCart />,
      <ShoppingCart />,
      <ShoppingCart />
    ]
  },
  {
    page: 7,
    name: 'Profile',
    display: false,
    flexClass: 'VideoPlayerContainer',
    haveBullet: false,
    pageComponents: [<Profile />]
  },
  {
    page: 8,
    name: 'Update Components',
    display: false,
    flexClass: 'VideoPlayerContainer flex-row',
    haveBullet: false,
    pageComponents: [<UpdateProfile />, <UpdateAdress />]
  },
  {
    page: 9,
    name: 'Product Details',
    display: false,
    flexClass: '',
    haveBullet: false,
    pageComponents: [<ProductDetail />]
  },
  {
    page: 10,
    name: 'Add to wishlist',
    display: false,
    flexClass: '',
    haveBullet: false,
    pageComponents: [<AddToWishlist />]
  }
];

export default Menu;
