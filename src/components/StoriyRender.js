import React, { Components, useState } from 'react';
import { useCss } from '../features/Overlay/TemplateHook';
import Flickity from 'react-flickity-component';
import 'flickity-imagesloaded';
import Menu from './Menu';
import Overlay from './Zak/VideoPause/Components/Overlay/Overlay';
import Header from './Zak/VideoPause/Components/Header/Header';
import Submenu from './Zak/VideoPause/Components/Submenu/Submenu';
import StaticSubMenu from './Zak/VideoPause/Components/Submenu/StaticSubMenu';
import ProductCardDiscount from './Zak/VideoPause/Components/Cards/ProductCardDiscount/ProductCardDicount';
import ProductCardWishlisted from './Zak/VideoPause/Components/Cards/ProductCardWishlisted/ProductCardWishlisted';
import WishlistCollection from './Zak/VideoPause/Components/WishlistCollection/WishlistCollection';
import Watchlist from './Zak/VideoPause/Components/Watchlist/Watchlist';
import ShoppingCart from './Zak/VideoPause/Components/ShoppingCart/ShoppingCart';
import Login from './Zak/VideoPause/Components/Login/Login';
import ShoppingCartTotal from './Zak/VideoPause/Components/ShoppingCartTotal/ShoppingCartTotal';
// import './Zak/VideoPause/assets/css/storyRender.css';
const StoriyRender = () => {
  useCss();
  const [page, setPage] = useState(1);
  return (
    <>
      <Overlay />
      <Header />
      <Submenu setPage={setPage} page={page} Menu={Menu} />
      {getPage(page, setPage)}
    </>
  );
};

const getPage = (page, setPage) => {
  const pageContent = Menu.filter((content) => content.page == page);
  if (page === 9 || page === 10) {
    return (
      <div className={pageContent[0].flexClass}>
        {pageContent[0].pageComponents.map((component) => component)}
      </div>
    );
  }
  if (page === 6) {
    return (
      <>
        <div className={pageContent[0].flexClass}>
          {pageContent[0].pageComponents.map((component) => component)}
        </div>
        <ShoppingCartTotal />
        <div className="shoopingCart--overlay"></div>
      </>
    );
  }
  if (page === 7 || page === 8) {
    const switchPage = page === 8 ? 7 : 8;
    return (
      <>
        <div className={pageContent[0].flexClass}>
          {pageContent[0].pageComponents.map((component) => component)}
        </div>
        <p className="switchComponents" onClick={() => setPage(switchPage)}>
          Switch Components
        </p>
      </>
    );
  }
  const flickityOptions = {
    cellAlign: 'left',
    contain: true,
    resize: false,
    imagesLoaded: true,
    lazyLoad: true,
    percentPosition: false
  };
  return (
    <>
      <Flickity
        className={pageContent[0].flexClass}
        reloadOnUpdate={true}
        options={flickityOptions}>
        {pageContent[0].pageComponents.map((component) => component)}
      </Flickity>
      <p className="toggleModalComponent" onClick={() => setPage(9)}>
        Product Details Component
      </p>
      <p
        className="toggleModalComponent wishlistModal"
        onClick={() => setPage(10)}>
        Add to wishlist Component
      </p>
    </>
  );
};

export default StoriyRender;
