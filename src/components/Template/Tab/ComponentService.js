import React from 'react';
import WishlistScreen from '../../../features/Wishlist/WishlistScreen';
import AuthScreen from '../../../features/Auth/AuthScreen';
import FavoritesScreen from '../../../features/Favorites/FavoritesScreen';
import LoginForm from '../../../features/Auth/LoginForm';
import AllProductsCard from '../../ProductListWrapper/AllProductsCard';
import WatchListScreen from '../../../features/Watchlist/WatchListScreen';

export const ComponentsService = {
  // KEY : COMPONENT
  login: LoginForm,
  product: ({ content }) => <span>{content}</span>,
  wishList: WishlistScreen,
  auth: AuthScreen,
  favorites: FavoritesScreen,
  AllProductsCard,
  WatchListScreen
};
