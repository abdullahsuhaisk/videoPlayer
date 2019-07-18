import React from 'react';
import { storiesOf } from '@storybook/react';
import Overlay from './VideoPause/Components/Overlay/Overlay';
import Header from './VideoPause/Components/Header/Header';
import Submenu from './VideoPause/Components/Submenu/Submenu';
import ProductCardSimple from './VideoPause/Components/Cards/ProductCardSimple/ProductCardSimple';
import ProductCardDiscount from './VideoPause/Components/Cards/ProductCardDiscount/ProductCardDicount';
import ProductCardWishlisted from './VideoPause/Components/Cards/ProductCardWishlisted/ProductCardWishlisted';

import dp from './VideoPause/assets/dp.png';

storiesOf('Video Paused Components', module)
  .add('Overlay', () => <Overlay />)
  .add('Header', () => <Header profileImage={dp} />)
  .add('Submenu', () => <Submenu />)
  .add('Card', () => <ProductCardSimple />)
  .add('Card2', () => <ProductCardDiscount />)
  .add('Card3', () => <ProductCardWishlisted />);
