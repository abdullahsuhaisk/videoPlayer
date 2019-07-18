import React from 'react';
import { storiesOf } from '@storybook/react';
import VideoPauseMenu from './VideoPause/VideoPauseMenu';
import Overlay from './VideoPause/Components/Overlay/Overlay';
import Header from './VideoPause/Components/Header/Header';
import Submenu from './VideoPause/Components/Submenu/Submenu';
import ProductCards from './VideoPause/Components/Cards/ProductCard';

import dp from './VideoPause/assets/dp.png';
import fav from './VideoPause/assets/fav.png';
import like from './VideoPause/assets/like.png';
import share from './VideoPause/assets/share.png';
import cardimg from './VideoPause/assets/cardimg.png';

storiesOf('Video Paused Menu', module).add('main menu', () => (
  <VideoPauseMenu />
));

storiesOf('Video Paused Components', module)
  .add('Overlay', () => <Overlay />)
  .add('Header', () => <Header profileImage={dp} />)
  .add('Submenu', () => (
    <Submenu
      statsData={[
        {
          imgUrl: like,
          numbers: 213
        },
        {
          imgUrl: fav,
          numbers: 213
        },
        {
          imgUrl: share,
          numbers: 213
        }
      ]}
    />
  ))
  .add('Cards', () => (
    <ProductCards
      cardImg={cardimg}
      productData={[
        {
          imgUrl: cardimg,
          name: 'Pierre Cardin Women Red Glasses',
          price: '71 $',
          discount: '50%',
          oldPrice: '149.50',
          stock: 'in stock'
        }
      ]}
    />
  ));
