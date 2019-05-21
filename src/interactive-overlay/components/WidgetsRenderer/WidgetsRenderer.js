/* eslint-disable react/no-array-index-key */
import React, { useEffect, useMemo } from 'react';
import WebFont from 'webfontloader';
import { parseJson } from '../../parseStyles';

const WidgetsRenderer = (props) => {
  const { data, actions } = props;
  const widgets = useMemo(() => parseJson(data), []);
  // const [widgets, setWidgets] = useState(parseJson(data));

  useEffect(() => {
    widgets.forEach(({ cssProps }) => {
      const { fontFamily, bold, italic } = cssProps;

      if (fontFamily) {
        WebFont.load({
          google: {
            families: [
              `${fontFamily}:400,${bold ? 'b' : ''}${italic ? 'i' : ''}`,
              'sans-serif'
            ]
          }
        });
      }
    });
  }, []);

  return (
    <>
      {widgets.map(({ type, Component, action, text, attributes }, key) => {
        let handler;

        if (action && typeof actions[action.name] === 'function') {
          handler = actions[action.name](...action.params);
        } else {
          handler = () => {};
        }

        if (type === 'input') {
          return <Component onChange={handler} key={key} {...attributes} />;
        }

        return (
          <Component onClick={handler} key={key} {...attributes}>
            {text}
          </Component>
        );
      })}
    </>
  );
};

export default WidgetsRenderer;
