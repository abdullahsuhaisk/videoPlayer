import React, { Components, useState } from 'react';
import { useCss } from '../features/Overlay/TemplateHook';
import Flickity from 'react-flickity-component';
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

const StoriyRender = () => {
  useCss();
  // const [page, setPage] = useState(1);
  const flickityOptions = {
    cellAlign: 'left',
    contain: true,
    resize: false
  };
  return (
    <>
      <Overlay />
      <Header />
      <StaticSubMenu />
      {/* use Flickity Component with  className="VideoPlayerContainer" as a Container in  All Products, Suggested Products, Wishlist, Watchlist Pages*/}
      {/* use a Div with className="VideoPlayerContainer flex-column" as a Container in Shopping Cart page*/}
      <Flickity
        className="VideoPlayerContainer"
        reloadOnUpdate={true}
        options={flickityOptions}>
        <ProductCardWishlisted />
        <ProductCardWishlisted />
        <ProductCardWishlisted />
        <ProductCardDiscount />
        <ProductCardWishlisted />
        <ProductCardWishlisted />
        <ProductCardDiscount />
        <ProductCardWishlisted />
        <ProductCardWishlisted />
      </Flickity>
      {/* <Submenu setPage={setPage} page={page} Menu={Menu} /> */}
      {/* {getPage(page)} */}
    </>
  );
};

// const getPage = (page) => {
//   const pageContent = Menu.filter((content) => content.page == page);
//   const flickityOptions = {
//       cellAlign: 'left',
//       contain: true,
//       resize: false
//   }
//   return (
//       <Flickity className={pageContent[0].flexClass} reloadOnUpdate={true} options={flickityOptions} >
//         {pageContent[0].pageComponents.map((component) => component)}
//       </Flickity>
//   );
// };

export default StoriyRender;
