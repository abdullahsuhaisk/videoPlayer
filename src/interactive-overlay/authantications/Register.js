/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import '../overlay.scss';
import WebFont from 'webfontloader';
import SimpleReactValidator from 'simple-react-validator';
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

  const validator = new SimpleReactValidator({
    // element: (message, className) => <div className="invalid-feedback d-block">{message}</div>,
    className: 'auth-errors',
    messages: {
      email: 'email',
      required: 'Email is required.'
    }
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (validator.allValid()) {
      props.createUserWithEmailAndPassword({
        fullName: data.fullName,
        email: data.email,
        password: data.password
      });
    } else {
      validator.showMessages();
      // this.forceUpdate();
    }
  };

  const handlers = {
    input: (action) => handleChange,
    button: (action) => (e) =>
      action && action.name === 'register'
        ? handleRegister(e)
        : props.actions[action.name](...action.params),
    noop: (action) => () => {}
  };

  return (
    <div style={style}>
      {Widgets.map(({ type, id, Component, action, text, attributes }, key) => {
        if (type === 'input')
          return (
            <Component
              id={id}
              onChange={(handlers[type] || handlers.noop)(action)}
              key={key}
              value={data[id]}
              {...attributes}
            />
          );
        if (type === 'button')
          return (
            <Component
              id={id}
              onClick={(handlers[type] || handlers.noop)(action)}
              key={key}
              value={data[id]}
              {...attributes}>
              {text}
            </Component>
          );
        return (
          <Component
            id={id}
            onClick={(handlers[type] || handlers.noop)(action)}
            key={key}
            {...attributes}>
            {text}
          </Component>
        );
      })}
      <span
        style={closeButton}
        onClick={actions.toggleRegister}
        role="button"
        tabIndex="-1">
        &times;
      </span>
      <span
        style={{
          position: 'fixed',
          bottom: '50px',
          fontSize: '24px',
          color: 'black'
        }}>
        status: {auth.uid ? 'registered' : 'not registered'}
      </span>
    </div>
  );
};

export default InjectAuthOperations(Register, {
  selectActions: ({ createUserWithEmailAndPassword }) => ({
    createUserWithEmailAndPassword
  }),
  selectProps: ({ auth }) => ({ auth })
});
