import WishlistScreen from '../../features/Wishlist/WishlistScreen';
import AuthScreen from '../../features/Auth/AuthScreen';
import LoginForm from '../../features/Auth/LoginForm';

import WatchListScreen from '../../features/Watchlist/WatchListScreen';
import ShoppingCartScreen from '../../features/ShoppingCart/ShoppingCartScreen';
import ProductListInScene from '../../features/Product/ProductList/ProductListInScene';
import ProductsAll from '../../features/Product/ProductList/ProductsAll';
import SuggestedProducts from '../../features/Product/ProductList/SuggestedProducts';

export const ComponentsService = {
  // KEY : COMPONENT
  // We can getPros client and set the other componets for the getProdLinId hooks
  login: LoginForm,
  wishList: WishlistScreen,
  auth: AuthScreen,
  WatchListScreen,
  ShoppingCartScreen,
  productInThisScene: ProductListInScene,
  productsInThisVideo: ProductsAll,
  suggestedProduct: SuggestedProducts
};
