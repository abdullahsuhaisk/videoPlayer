import React from 'react';
import WishlistScreen from '../../../features/Wishlist/WishlistScreen';
import AuthScreen from '../../../features/Auth/AuthScreen';
import FavoritesScreen from '../../../features/Favorites/FavoritesScreen';
import LoginForm from '../../../features/Auth/LoginForm';
import AllProductsCard from '../../Product/AllProductsCard';
import WatchListScreen from '../../../features/Watchlist/WatchListScreen';
import ShowConsumersWishList from '../../../features/Wishlist/PreComponent/showConsumersWishList';

export const ComponentsService = {
  // KEY : COMPONENT
  login: LoginForm,
  product: ShowConsumersWishList,
  wishList: WishlistScreen,
  auth: AuthScreen,
  favorites: FavoritesScreen,
  AllProductsCard,
  WatchListScreen
};
