/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import '../overlay.scss';
import WebFont from 'webfontloader';
import { InjectAuthOperations } from '../../store/redux/auth/authOperations';
import { parseJson } from '../parseStyles';

const Login = (props) => {
  const { json, auth, actions, loginStatus } = props;
  const [data, setData] = useState({ email: '', password: '' });
  const [Widgets, setWidgets] = useState([]);
  const [dummyState, setDummyState] = useState(true);

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

  useEffect(() => {
    popup();
  }, [dummyState]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await props.login({ email: data.email, password: data.password });
    setDummyState(!dummyState);
  };

  const handleLoginWithGoogle = (e) => {
    e.preventDefault();
    props.loginWithGoogle();
  };

  const handleLoginWithFacebook = (e) => {
    e.preventDefault();
    props.loginWithFacebook();
  };

  if (auth.uid) actions.toggleLogin();

  const handlers = {
    input: (action) => handleChange,
    others: (action) => (e) => {
      if (action && action.name === 'login') handleLogin(e);
      else if (action && action.name === 'loginWithGoogle')
        handleLoginWithGoogle(e);
      else if (action && action.name === 'loginWithFacebook')
        handleLoginWithFacebook(e);
      else if (action) actions[action.name](...action.params);
    }
  };

  const popup = () => {
    if (loginStatus && loginStatus === 'error') {
      const notify = document.querySelector('.notify');
      notify.classList.add('notify-active');
      const notifyType = document.querySelector('#notifyType');
      notifyType.classList.add('failure');

      setTimeout(() => {
        notify.classList.remove('notify-active');
        notifyType.classList.remove('failure');
        props.resetErrors();
      }, 2000);
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

      <div className="notify">
        <span id="notifyType">Email or password is incorrect!</span>
      </div>
    </>
  );
};

export default InjectAuthOperations(Login, {
  selectActions: ({
    login,
    loginWithGoogle,
    loginWithFacebook,
    resetErrors
  }) => ({
    login,
    loginWithGoogle,
    loginWithFacebook,
    resetErrors
  }),
  selectProps: ({ auth, loginStatus }) => ({ auth, loginStatus })
});
