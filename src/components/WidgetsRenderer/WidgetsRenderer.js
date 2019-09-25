/* eslint-disable import/no-cycle */
import React, { useState, useEffect } from 'react';
import { loadWebFontsFromStyles } from '../../utils/parseStyles';
import Empty from '../Empty/Empty';
// import Tabs from '../Tabs/Tabs';
import Title from '../TitleDescription/TitleDescription';
// import Like from '../Like/Like';
import ProfileButton from '../../features/Auth/ProfileButton';
import Login from '../../features/Auth/LoginForm';
import Register from '../../features/Auth/RegisterForm';
import ForgotPassword from '../../features/Auth/ForgotPasswordForm';
// Wrapper Section //
import ScreenReadyWrapper from '../ScreenReadyWrapper/ScreenReady';
import ScreenPlayingWrapper from '../ScreenPlayingWrapper/ScreenPlayingWrapper';
import ScreenPauseWrapper from '../ScreenPauseWrapper/ScreenPauseWrapper';
import ScreenPauseOverlayComponent from '../ScreenPauseWrapper/ScreenPauseOverlayComponent';

// Wrapper Section //

// Control Bar
import ControlBarWrapper from '../ControlBarWrapper/ControlBarWrapper';
import ControlBarScreen from '../ControlBarWrapper/ControlBar/ControlBarScreenReady';
import VideoProgressBar from '../ControlBarWrapper/ControlBar/VideoProgressBar/VideoProgressBar';
import PlayPause from '../ControlBarWrapper/ControlBar/PlayPause/PlayPause';
import VolumControl from '../ControlBarWrapper/ControlBar/VolumControl/VolumControl';
import TimeDisplay from '../ControlBarWrapper/ControlBar/TimeDisplay/TimeDisplay';
import ControlBarShoppingIcon from '../ControlBarWrapper/ControlBar/Cart/ControlBarShoppingIcon';
import ControlBarSettings from '../ControlBarWrapper/ControlBar/Settings/ControlBarSettings';
import ControlBarRightWrapper from '../ControlBarWrapper/ControlBarRightWrapper';
import ControlBarLeftWrapper from '../ControlBarWrapper/ControlBarLeftWrapper';
import JumpToProductWrapper from '../ControlBarWrapper/ControlBar/JumpToProduct/JumpToProductWrapper';
import JumpToProductLeft from '../ControlBarWrapper/ControlBar/JumpToProduct/JumpToProductLeft';
import JumpToProductRight from '../ControlBarWrapper/ControlBar/JumpToProduct/JumpToProductRight';
import ControlBarFullScreen from '../ControlBarWrapper/ControlBar/FullScreen/ControlBarFullScreen';

// Control Bar

// Screen Section Screen has all of logic and own State //
// import ProductListScreen from '../../features/Product/ProductList/ProductListScreen';
import HotspotContainer from '../../features/Hotspot/HotspotContainer';
import AuthScreen from '../../features/Auth/AuthScreen';
import ProductDetailScreen from '../../features/Product/ProductDetails/ProductDetailsScreen';

// Screen Section //

// Tab Component //
import Tab from '../Tab/Tab';
import TabWrapper from '../Tab/TabWrapper';
import Header from '../Header/Header';
// Tab Component //

import ProductListCard from '../ProductListWrapper/ProductListCard';
import ShoppingCartScreen from '../../features/ShoppingCart/ShoppingCartScreen';
import ScreenReadyComponent from '../ScreenReadyWrapper/ScreenReadyComponent';
import ProfileScreen from '../../features/ProfileNew/ProfileScreen';
import AddToWishListScreen from '../../features/Wishlist/AddToWishListFromProductCard/AddToWishListScreen';
import ControlBarFixed from '../Template3/ControlbarFixed';
import HotSpotsPointerContainer from '../HotspotPointer/HotSpotsPointerContainer';

//

//

const widgetList = {
  Empty,
  Title,
  ProfileButton,
  Login,
  Register,
  ForgotPassword,
  ScreenReadyWrapper,
  ScreenPlayingWrapper,
  ControlBarWrapper,
  ScreenPauseWrapper,
  AuthScreen,
  HotspotContainer,
  ProductDetailScreen,
  ControlBarScreen,
  PlayPause,
  VideoProgressBar,
  VolumControl,
  TimeDisplay,
  ControlBarShoppingIcon,
  ControlBarSettings,
  ControlBarRightWrapper,
  ControlBarLeftWrapper,
  ControlBarFullScreen,
  JumpToProductWrapper,
  JumpToProductLeft,
  JumpToProductRight,
  // ProductCardWishlisted,
  TabWrapper,
  Tab,
  Header,
  ProductListCard,
  ShoppingCartScreen,
  ScreenPauseOverlayComponent,
  ScreenReadyComponent,
  ProfileScreen,
  AddToWishListScreen,
  ControlBarFixed,
  HotSpotsPointerContainer
};

const WidgetsRenderer = (props) => {
  const { widgets } = props;

  const [renderableWidgets, setRenderableWidgets] = useState([]);

  useEffect(() => {
    const widgetsWithComponentAndProps = widgets.map((widget) => {
      // console.log(widget);
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
