import React, { Components, useState } from 'react';
import { useCss } from '../features/Overlay/TemplateHook';
import Menu from './Menu';
import LoginForm from '../features/Auth/LoginForm';
import Overlay from './Zak/VideoPause/Components/Overlay/Overlay';
import Header from './Zak/VideoPause/Components/Header/Header';
import Submenu from './Zak/VideoPause/Components/Submenu/Submenu';
import ProductCardDiscount from './Zak/VideoPause/Components/Cards/ProductCardDiscount/ProductCardDicount';
import ProductCardWishlisted from './Zak/VideoPause/Components/Cards/ProductCardWishlisted/ProductCardWishlisted';

const StoriyRender = () => {
  useCss();
  const [page, setPage] = useState(1);
  return (
    <>
      <Overlay />
      <Header />
      <Submenu setPage={setPage} page={page} Menu={Menu} />
      {getPage(page)}
    </>
  );
};

const getPage = (page) => {
  const pageContent = Menu.filter((content) => content.page == page);
  return (
    <div className={pageContent[0].flexClass}>
      {pageContent[0].pageComponents.map((component) => component)}
    </div>
  );
};

export default StoriyRender;
