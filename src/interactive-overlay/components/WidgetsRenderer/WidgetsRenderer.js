/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import WebFont from 'webfontloader';
import { parseJson } from '../../parseStyles';

const WidgetsRenderer = (props) => {
  const { data, actions } = props;
  const [widgets, setWidgets] = useState(null);

  useEffect(() => {
    const widgetsData = parseJson(data);
    setWidgets(widgetsData);
  }, [data]);

  useEffect(() => {
    if (widgets) {
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
    }
  }, [widgets]);

  return (
    widgets && (
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
    )
  );
};

export default WidgetsRenderer;
