import React, { useState, useEffect } from 'react';
import { loadWebFontsFromStyles } from '../utils/parseStyles';
import Empty from '../components/Empty/Empty';
import Tabs from '../components/Tabs/Tabs';
import Title from '../components/Title/Title';
import Like from '../components/Like/Like';
import Favorite from '../components/Favorite/Favorite';
import Share from '../components/Share/Share';
import ProfileButton from '../components/ProfileButton/ProfileButton';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import ForgotPassword from '../components/ForgotPassword/ForgotPassword';

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
  ForgotPassword
};

const WidgetsRenderer = (props) => {
  const { widgets } = props;

  const [renderableWidgets, setRenderableWidgets] = useState([]);

  useEffect(() => {
    const widgetsWithComponentAndProps = widgets.map((widget) => {
      const { type: widgetType, props: widgetProps } = widget;
      const { styles: widgetStyles, children: widgetChildren } = widgetProps;

      loadWebFontsFromStyles(widgetStyles);

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
