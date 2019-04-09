/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { InjectAuthOperations } from '../store/redux/auth/authOperations';

const Login = (props) => {
  const { children } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

  const handleChange = (e) => {
    if (e.target.id === 'email') setEmail(e.target.value);
    if (e.target.id === 'password') setPassword(e.target.value);
  };

  return (
    <div style={style}>
      {children}
      <span
        style={closeButton}
        onClick={() => props.onClose()}
        role="button"
        tabIndex="-1">
        &times;
      </span>
    </div>
  );
};

export default InjectAuthOperations(Login);
