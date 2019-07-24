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
// Wrapper Section //
import ScreenReadyWrapper from '../ScreenReadyWrapper/ScreenReady';
import ScreenPlayingWrapper from '../ScreenPlayingWrapper/ScreenPlayingWrapper';
import ControlBarWrapper from '../ControlBarWrapper/ControlBarWrapper';
import ScreenPauseWrapper from '../ScreenPauseWrapper/ScreenPauseWrapper';
// Wrapper Section //

// Screen Section Screen has all of logic and own State //
import ProductListScreen from '../../features/Product/ProductList/ProductListScreen';
import NavigationScreen from '../../features/NavigationScreen/NavigationScreen';
import HotspotScreen from '../../features/Hotspot/HotspotScreen';
import AuthScreen from '../../features/Auth/AuthScreen';
import ProductDetailScreen from '../../features/Product/ProductDetails/ProductDetailsScreen';
import ControlBarScreen from '../../features/ControlBar/ControlBarScreen';
// Screen Section //

// Tab Component //
import { Tab } from '../Template/Tab/Tab';
import TabWrapper from '../Template/Tab/TabWrapper';
import Header from '../Template/Header';
// Tab Component //

// import ProductCardWishlisted from '../Usame/VideoPause/Components/Cards/ProductCardWishlisted/ProductCardWishlisted';
import NavigationWrapper from '../NavigationWrapper/NavigationWrapper';
import ProductListCard from '../ProductListWrapper/ProductListCard';

import AllProductsCard from '../ProductListWrapper/AllProductsCard';
import ShoppingCartScreen from '../../features/ShoppingCart/ShoppingCartScreen';

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
  TabWrapper,
  Tab,
  Header,
  ProductListCard,
  AllProductsCard,
  ShoppingCartScreen
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
