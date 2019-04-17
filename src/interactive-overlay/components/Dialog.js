/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import '../overlay.scss';
import WebFont from 'webfontloader';
import { parseJson } from '../parseStyles';

const Dialog = (props) => {
  const { json, actions } = props;
  const [Widgets, setWidgets] = useState([]);

  useEffect(() => {
    setWidgets(parseJson(json));
  }, []);

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

export default Dialog;
