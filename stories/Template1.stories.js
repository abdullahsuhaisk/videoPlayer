import React from 'react';
import { storiesOf } from '@storybook/react';
import Overlay from './VideoPause/Template1/Components/Overlay/Overlay'
import Header from './VideoPause/Template1/Components/Header/Header'
import StaticSubMenu from './VideoPause/Template1/Components/Submenu/StaticSubMenu'
import ProductCardDiscount from './VideoPause/Template1/Components/Cards/ProductCardDiscount/ProductCardDicount'
import ProductCardWishlisted from './VideoPause/Template1/Components/Cards/ProductCardWishlisted/ProductCardWishlisted'
import Login from './VideoPause/Template1/Components/Login/Login'
import Signup from './VideoPause/Template1/Components/Signup/Signup'
import ForgotPassword from './VideoPause/Template1/Components/ForgotPassword/ForgotPassword'
import NewPassword from './VideoPause/Template1/Components/NewPassword/NewPassword'
import WishlistCollection from './VideoPause/Template1/Components/WishlistCollection/WishlistCollection'
import Watchlist from './VideoPause/Template1/Components/Watchlist/Watchlist'
import ShoppingCart from './VideoPause/Template1/Components/ShoppingCart/ShoppingCart'
import ShoppingCartTotal from './VideoPause/Template1/Components/ShoppingCartTotal/ShoppingCartTotal'
import Profile from './VideoPause/Template1/Components/Profile/Profile'
import UpdateAdress from './VideoPause/Template1/Components/UpdateAdress/UpdateAdress'
import UpdateProfile from './VideoPause/Template1/Components/UpdateProfile/UpdateProfile'
import ProductDetail from './VideoPause/Template1/Components/ProductDetail/ProductDetail'
import AddToWishlist from './VideoPause/Template1/Components/AddToWishlist/AddToWishlist'
import VideoPlay from './VideoPause/Template1/Components/VideoPlay/VideoPlay'
import Share from './VideoPause/Template1/Components/Share/Share'
import EmptyWishlist from './VideoPause/Template1/Components/EmptyWishlist/EmptyWishlist'
import ShoppingCartCard from './VideoPause/Template1/Components/ShoppingCartCard/ShoppingCartCard'
import PaymentSuccess from './VideoPause/Template1/Components/PaymentSuccess/PaymentSuccess'
import EmptyAdress from './VideoPause/Template1/Components/EmptyAdress/EmptyAdress'
import EmptyCart from './VideoPause/Template1/Components/EmptyCart/EmptyCart'
import EmptyWatchlist from './VideoPause/Template1/Components/EmptyWatchlist/EmptyWatchlist'
import FirstTemplateWrapper from './VideoPause/Template1/Wrapper'

const FirstTemplateDecorator = (storyFn) => <FirstTemplateWrapper>{storyFn()}</FirstTemplateWrapper>;

storiesOf('Template 1', module)
  .addDecorator(FirstTemplateDecorator)
  .add('Overlay', () => <Overlay />)
  .add('Header', () => <Header />)
  .add('Submenu', () => <StaticSubMenu />)
  .add('Product OnWishlist Card', () => <ProductCardDiscount />)
  .add('Product WishlistAdd Card', () => <ProductCardWishlisted />)
  .add('Login', () => <Login />)
  .add('Sign up', () => <Signup />)
  .add('Forgot Password', () => <ForgotPassword />)
  .add('New Password', () => <NewPassword />)
  .add('Wishlist Collection', () => <WishlistCollection />)
  .add('Watchlist', () => <Watchlist />)
  .add('Shopping Cart', () => <ShoppingCart />)
  .add('Shopping Cart Total', () => <ShoppingCartTotal />)
  .add('Profile', () => <Profile />)
  .add('Update Adress', () => <UpdateAdress />)
  .add('Update Profile', () => <UpdateProfile />)
  .add('Product Detail', () => <ProductDetail />)
  .add('Add To Wishlist', () => <AddToWishlist />)
  .add('Vide Player Screen', () => <VideoPlay />)
  .add('Share', () => <Share />)
  .add('Empty Wishlist', () => <EmptyWishlist />)
  .add('Shopping Cart Card', () => <ShoppingCartCard />)
  .add('Payment Success', () => <PaymentSuccess />)
  .add('Empty Adress', () => <EmptyAdress />)
  .add('Empty Cart', () => <EmptyCart />)
  .add('Empty Watchlist', () => <EmptyWatchlist />);