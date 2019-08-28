import React from 'react';
import { storiesOf } from '@storybook/react';
import SecondTmplateWrapper from './VideoPause/Template2/Wrapper'
import ProductDetail from './VideoPause/Template2/Components/ProductDetail/ProductDetail'
import AddToWishlist from './VideoPause/Template2/Components/AddToWishlist/AddToWishlist'
import Comments from './VideoPause/Template2/Components/Comments/Comments'
import ControlBar from './VideoPause/Template2/Components/ControlBar/ControlBar'
import SideProducts from './VideoPause/Template2/Components/SideProducts/SideProducts'
// import SideBar from './VideoPause/Template2/Components/SideBar/SideBar'
import SidebarWishlist from './VideoPause/Template2/Presentation/SideBar/SidebarWishlist';
import SidebarShoppingCart from './VideoPause/Template2/Presentation/SideBar/SidebarShoppingCart';
import SidebarWishlistProducts from './VideoPause/Template2/Presentation/SideBar/SidebarWishlistProducts';
import SidebarWatchlist from './VideoPause/Template2/Presentation/SideBar/SidebarWatchlist';
import Video from './VideoPause/Template2/Presentation/Video';
import Video2 from './VideoPause/Template2/Presentation/Video2';

const SecondTemplateDecorator = (storyFn) => <SecondTmplateWrapper>{storyFn()}</SecondTmplateWrapper>;

storiesOf('Template 2', module)
  .addDecorator(SecondTemplateDecorator)
  .add('Product Detail', () => <ProductDetail />)
  .add('Add To Wishlist', () => <AddToWishlist />)
  .add('Comments', () => <Comments />)
  .add('ControlBar', () => <ControlBar />)
  .add('Side Products', () => <SideProducts />)
  .add('Shopping Cart', () => <SidebarShoppingCart />)
  .add('Wishlist', () => <SidebarWishlist />)
  .add('Wishlist Products', () => <SidebarWishlistProducts />)
  .add('Watchlist', () => <SidebarWatchlist />)
  .add('Video', () => <Video />)
  .add('Video2', () => <Video2 />)
  ;