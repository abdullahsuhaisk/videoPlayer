import React from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ForgotPassword from '../ForgotPassword/ForgotPassword';

const ModalOverlay = (props) => {
  return (
    <div
      className="vibuy--modal-overlay"
      style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <Login />
      <Register />
      <ForgotPassword />
    </div>
  );
};

export default ModalOverlay;
