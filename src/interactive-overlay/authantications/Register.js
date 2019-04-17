/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import '../overlay.scss';
import WebFont from 'webfontloader';
import { InjectAuthOperations } from '../store/redux/auth/authOperations';
import { parseJson } from '../parseStyles';

const Register = (props) => {
  const { json, auth, actions } = props;
  const [data, setData] = useState({ fullName: '', email: '', password: '' });
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

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    props.createUserWithEmailAndPassword({
      fullName: data.fullName,
      email: data.email,
      password: data.password
    });
  };

  const handleLoginWithGoogle = (e) => {
    e.preventDefault();
    props.loginWithGoogle();
  };

  const handleLoginWithFacebook = (e) => {
    e.preventDefault();
    props.loginWithFacebook();
  };

  const handlers = {
    input: (action) => handleChange,
    others: (action) => (e) => {
      if (action && action.name === 'register') handleRegister(e);
      else if (action && action.name === 'loginWithGoogle')
        handleLoginWithGoogle(e);
      else if (action && action.name === 'loginWithFacebook')
        handleLoginWithFacebook(e);
      else if (action) actions[action.name](...action.params);
    }
  };

  return (
    <>
      {Widgets.map(({ type, id, Component, action, text, attributes }, key) => {
        if (type === 'input')
          return (
            <Component
              id={id}
              onChange={(handlers[type] || handlers.others)(action)}
              key={key}
              value={data[id]}
              {...attributes}
            />
          );
        if (type === 'button')
          return (
            <Component
              id={id}
              onClick={(handlers[type] || handlers.others)(action)}
              key={key}
              value={data[id]}
              {...attributes}>
              {text}
            </Component>
          );
        return (
          <Component
            id={id}
            onClick={(handlers[type] || handlers.others)(action)}
            key={key}
            {...attributes}>
            {text}
          </Component>
        );
      })}
    </>
  );
};

export default InjectAuthOperations(Register, {
  selectActions: ({
    createUserWithEmailAndPassword,
    loginWithGoogle,
    loginWithFacebook
  }) => ({
    createUserWithEmailAndPassword,
    loginWithGoogle,
    loginWithFacebook
  }),
  selectProps: ({ auth }) => ({ auth })
});
