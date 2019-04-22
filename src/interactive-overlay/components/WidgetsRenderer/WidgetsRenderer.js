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
        const handler = action
          ? () => actions[action.name](...action.params)
          : () => {};

        if (type === 'input')
          return <Component onChange={handler} key={key} {...attributes} />;

        if (type === 'button')
          return (
            <Component onClick={handler} key={key} {...attributes}>
              {text}
            </Component>
          );

        return (
          <Component key={key} {...attributes}>
            {text}
          </Component>
        );
      })}
    </>
  );
};

export default WidgetsRenderer;
