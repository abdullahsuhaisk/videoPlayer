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
import SuggestedProducts from '../../../features/Product/ProductList/SuggestedProducts';

export const ComponentsService = {
  // KEY : COMPONENT
  // We can getPros client and set the other componets for the getProdLinId hooks
  login: LoginForm,
  product: ShowConsumersWishList,
  wishList: WishlistScreen,
  auth: AuthScreen,
  favorites: FavoritesScreen,
  WatchListScreen,
  ShoppingCartScreen,
  productInThisScene: ProductListInScene,
  productsInThisVideo: ProductsAll,
  suggestedProduct: SuggestedProducts
};
