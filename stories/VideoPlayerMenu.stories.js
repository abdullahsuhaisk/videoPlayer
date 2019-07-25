import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Overlay from './VideoPause/Components/Overlay/Overlay';
import Header from './VideoPause/Components/Header/Header';
import Submenu from './VideoPause/Components/Submenu/Submenu';
import ProductCardSimple from './VideoPause/Components/Cards/ProductCardSimple/ProductCardSimple';
import ProductCardDiscount from './VideoPause/Components/Cards/ProductCardDiscount/ProductCardDicount';
import ProductCardWishlisted from './VideoPause/Components/Cards/ProductCardWishlisted/ProductCardWishlisted';
import Login from './VideoPause/Components/Login/Login';
import Signup from './VideoPause/Components/Signup/Signup';
import ForgotPassword from './VideoPause/Components/ForgotPassword/ForgotPassword';
import NewPassword from './VideoPause/Components/NewPassword/NewPassword';
import WishlistCollection from './VideoPause/Components/WishlistCollection/WishlistCollection';
import Watchlist from './VideoPause/Components/Watchlist/Watchlist';

const Wrapper = styled.div`
  padding: 5em;
`;

const PaddingDecorator = (storyFn) => <Wrapper>{storyFn()}</Wrapper>;

storiesOf('Video Paused Components', module)
  .addDecorator(PaddingDecorator)
  .add('Overlay', () => <Overlay />)
  .add('Header', () => <Header />)
  .add('Submenu', () => <Submenu />)
  .add('Card', () => <ProductCardSimple />)
  .add('Card2', () => <ProductCardDiscount />)
  .add('Card3', () => <ProductCardWishlisted />)
  .add('Login', () => <Login />)
  .add('Sign up', () => <Signup />)
  .add('Forgot Password', () => <ForgotPassword />)
  .add('New Password', () => <NewPassword />)
  .add('Wishlist Collection', () => <WishlistCollection />)
  .add('Watchlist', () => <Watchlist />);
