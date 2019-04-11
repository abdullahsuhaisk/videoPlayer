/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import '../overlay.scss';
import WebFont from 'webfontloader';
import { parseJson } from '../parseStyles';

const ForgotPassword = (props) => {
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

  const style = {
    width: '100%',
    height: '100%',
    background: '#0006',
    position: 'relative'
  };

  const closeButton = {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: '15px 20px',
    fontSize: '30px',
    color: '#FFF',
    cursor: 'pointer'
  };

  return (
    <div style={style}>
      {Widgets.map(({ type, Component, action, text, attributes }, key) => {
        const handler = action
          ? () => props.actions[action.name](...action.params)
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
      <span
        style={closeButton}
        onClick={actions.toggleForgotPassword}
        role="button"
        tabIndex="-1">
        &times;
      </span>
    </div>
  );
};

export default ForgotPassword;
