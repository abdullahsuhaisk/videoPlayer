/* eslint-disable import/no-cycle */
import React, { useState, useEffect } from 'react';
import { loadWebFontsFromStyles } from '../../utils/parseStyles';
import Empty from '../Empty/Empty';
import Tabs from '../Tabs/Tabs';
import Title from '../TitleDescription/TitleDescription';
import Like from '../Like/Like';
import Favorite from '../Favorite/Favorite';
import Share from '../Share/Share';
import ProfileButton from '../ProfileButton/ProfileButton';
import Login from '../../features/Auth/Login';
import Register from '../../features/Auth/Register';
import ForgotPassword from '../../features/Auth/ForgotPassword';
import Slider from '../Slider/Slider';
import ProductCard from '../ProductCard/ProductCard';

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
  Slider,
  ProductCard
};

const WidgetsRenderer = (props) => {
  const { widgets } = props;

  const [renderableWidgets, setRenderableWidgets] = useState([]);

  useEffect(() => {
    const widgetsWithComponentAndProps = widgets.map((widget) => {
      const { type: widgetType, props: widgetProps } = widget;
      const { styles: widgetStyles, children: widgetChildren } = widgetProps;

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