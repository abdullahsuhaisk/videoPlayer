import React from 'react';
import { loadWebFontsFromStyles } from '../utils/parseStyles';
import Empty from '../components/Empty/Empty';
import Title from '../components/Title/Title';
import Like from '../components/Like/Like';
import ProfileButton from '../components/ProfileButton/ProfileButton';

const widgetList = { Empty, Title, Like, ProfileButton };

const WidgetsRenderer = (props) => {
  const { widgets } = props;

  const [renderableWidgets, setRenderableWidgets] = React.useState([]);

  React.useEffect(() => {
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
