/* eslint-disable import/no-cycle */
import React, { useState, useEffect } from 'react';
import { loadWebFontsFromStyles } from '../../utils/parseStyles';
import Empty from '../Empty/Empty';
import Tabs from '../Tabs/Tabs';
import Title from '../TitleDescription/TitleDescription';
import Like from '../Like/Like';
import Favorite from '../Favorite/Favorite';
import Share from '../Share/Share';
import ProfileButton from '../../features/Auth/ProfileButton';
import Login from '../../features/Auth/LoginForm';
import Register from '../../features/Auth/RegisterForm';
import ForgotPassword from '../../features/Auth/ForgotPasswordForm';
import ScreenReadyWrapper from '../ScreenReadyWrapper/ScreenReady';
import ScreenPlayingWrapper from '../ScreenPlayingWrapper/ScreenPlayingWrapper';
import ControlBarWrapper from '../ControlBarWrapper/ControlBarWrapper';
import ScreenPauseWrapper from '../ScreenPauseWrapper/ScreenPauseWrapper';
// Below components are broking Ready Screen
import ProductListScreen from '../../features/Product/ProductList/ProductListScreen';
import NavigationScreen from '../../features/NavigationScreen/NavigationScreen';
import HotspotScreen from '../../features/Hotspot/HotspotScreen';
import AuthScreen from '../../features/Auth/AuthScreen';
import ProductDetailScreen from '../../features/Product/ProductDetails/ProductDetailsScreen';
import ControlBarScreen from '../../features/ControlBar/ControlBarScreen';
// import ProductCardWishlisted from '../Usame/VideoPause/Components/Cards/ProductCardWishlisted/ProductCardWishlisted';
import NavigationWrapper from '../NavigationWrapper/NavigationWrapper';
import ProductPauseWrapper from '../ProductListWrapper/ProductPauseWrapper';
import ProductListHeader from '../ProductListWrapper/ProductListHeader';
import ProductListSubmenu from '../ProductListWrapper/ProductListSubmenu';
import ProductListCard from '../ProductListWrapper/ProductListCard';
import ProductListSubMenusItem from '../ProductListWrapper/ProductListSubMenusItem';
import ProductInThisScene from '../ProductListWrapper/ProductInThisScene';
import AllProducts from '../ProductListWrapper/AllProducts';
import AllProductsCard from '../ProductListWrapper/AllProductsCard';
import ShoppingCartScreen from '../../features/ShoppingCart/ShoppingCartScreen';
import { Tab } from '../Template/Tab/Tab';

const widgetList = {
  Empty,
  Tabs,
  Title,
  Like,
  Favorite,
  Share,
  ProfileButton,
  Login,
  Register,
  ForgotPassword,
  ScreenReadyWrapper,
  ScreenPlayingWrapper,
  ControlBarWrapper,
  ScreenPauseWrapper,
  ProductListScreen,
  NavigationScreen,
  AuthScreen,
  HotspotScreen,
  ProductDetailScreen,
  ControlBarScreen,
  // ProductCardWishlisted,
  NavigationWrapper,
  ProductPauseWrapper,
  ProductListHeader,
  ProductListSubmenu,
  ProductListCard,
  ProductListSubMenusItem,
  ProductInThisScene,
  AllProducts,
  AllProductsCard,
  ShoppingCartScreen,
  Tab
};

const WidgetsRenderer = (props) => {
  const { widgets } = props;

  const [renderableWidgets, setRenderableWidgets] = useState([]);

  useEffect(() => {
    const widgetsWithComponentAndProps = widgets.map((widget) => {
      const { type: widgetType, props: widgetProps } = widget;
      const { styles: widgetStyles, children: widgetChildren } = widgetProps;
      // Above the section I can write new props thing
      if (widgetStyles) {
        loadWebFontsFromStyles(widgetStyles);
      }

      return {
        Component: widgetList[widgetType],
        props: {
          ...Object.keys(widgetProps)
            .filter((p) => p !== 'children')
            .reduce((acc, p) => {
              acc[p] = widgetProps[p];
              return acc;
            }, {})
        },
        children: widgetChildren
      };
    });

    setRenderableWidgets(widgetsWithComponentAndProps);
  }, []);

  return renderableWidgets.map((widget, index) => (
    <widget.Component {...widget.props} key={index}>
      {widget.children && <WidgetsRenderer widgets={widget.children} />}
    </widget.Component>
  ));
};

export default WidgetsRenderer;
