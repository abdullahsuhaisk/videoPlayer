/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import WebFont from 'webfontloader';
import { parseJson } from '../../parseStyles';

const WidgetsRenderer = (props) => {
  const { data, actions } = props;
  const [Widgets] = useState(parseJson(data));

  useEffect(() => {
    Widgets.forEach(({ cssProps }) => {
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
  }, [Widgets]);

  return (
    <>
      {Widgets.map(({ type, Component, action, text, attributes }, key) => {
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
