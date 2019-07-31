import React from 'react';
import WishlistScreen from '../../../features/Wishlist/WishlistScreen';
import AuthScreen from '../../../features/Auth/AuthScreen';
import FavoritesScreen from '../../../features/Favorites/FavoritesScreen';
import LoginForm from '../../../features/Auth/LoginForm';

import WatchListScreen from '../../../features/Watchlist/WatchListScreen';
import ShowConsumersWishList from '../../../features/Wishlist/PreComponent/showConsumersWishList';
import ShoppingCartScreen from '../../../features/ShoppingCart/ShoppingCartScreen';
import ProductListInScene from '../../../features/Product/ProductList/ProductListInScene';
import ProductList from '../../../features/Product/ProductList/ProductList';
import ProductsAll from '../../../features/Product/ProductList/ProductsAll';

export const ComponentsService = {
  // KEY : COMPONENT
  login: LoginForm,
  product: ShowConsumersWishList,
  wishList: WishlistScreen,
  auth: AuthScreen,
  favorites: FavoritesScreen,
  WatchListScreen,
  ShoppingCartScreen,
  productInThisScene: ProductListInScene,
  productsInThisVideo: ProductList,
  suggestedProduct: ProductsAll
};
