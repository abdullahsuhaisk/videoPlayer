import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Overlay from '../src/components/Zak/VideoPause/Components/Overlay/Overlay'
import Header from '../src/components/Zak/VideoPause/Components/Header/Header'
import StaticSubMenu from '../src/components/Zak/VideoPause/Components/Submenu/StaticSubMenu'
import ProductCardDiscount from '../src/components/Zak/VideoPause/Components/Cards/ProductCardDiscount/ProductCardDicount'
import ProductCardWishlisted from '../src/components/Zak/VideoPause/Components/Cards/ProductCardWishlisted/ProductCardWishlisted'
import Login from '../src/components/Zak/VideoPause/Components/Login/Login'
import Signup from '../src/components/Zak/VideoPause/Components/Signup/Signup'
import ForgotPassword from '../src/components/Zak/VideoPause/Components/ForgotPassword/ForgotPassword'
import NewPassword from '../src/components/Zak/VideoPause/Components/NewPassword/NewPassword'
import WishlistCollection from '../src/components/Zak/VideoPause/Components/WishlistCollection/WishlistCollection'
import Watchlist from '../src/components/Zak/VideoPause/Components/Watchlist/Watchlist'
import ShoppingCart from '../src/components/Zak/VideoPause/Components/ShoppingCart/ShoppingCart'
import ShoppingCartTotal from '../src/components/Zak/VideoPause/Components/ShoppingCartTotal/ShoppingCartTotal'
import Profile from '../src/components/Zak/VideoPause/Components/Profile/Profile'
import UpdateAdress from '../src/components/Zak/VideoPause/Components/UpdateAdress/UpdateAdress'

const Wrapper = styled.div`
  padding: 5em;
`;

const PaddingDecorator = (storyFn) => <Wrapper>{storyFn()}</Wrapper>;

storiesOf('Video Paused Components', module)
  .addDecorator(PaddingDecorator)
  .add('Overlay', () => <Overlay />)
  .add('Header', () => <Header />)
  .add('Submenu', () => <StaticSubMenu />)
  .add('On Wishlist Card', () => <ProductCardDiscount />)
  .add('Add to Wishlist Card', () => <ProductCardWishlisted />)
  .add('Login', () => <Login />)
  .add('Sign up', () => <Signup />)
  .add('Forgot Password', () => <ForgotPassword />)
  .add('New Password', () => <NewPassword />)
  .add('Wishlist Collection', () => <WishlistCollection />)
  .add('Watchlist', () => <Watchlist />)
  .add('Shopping Cart', () => <ShoppingCart />)
  .add('Shopping Cart Total', () => <ShoppingCartTotal />)
  .add('Profile', () => <Profile />)
  .add('Update Adress', () => <UpdateAdress />);
