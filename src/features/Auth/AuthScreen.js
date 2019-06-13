import React from 'react';
import ProfileButton from './ProfileButton';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';

const AuthScreen = () => {
  return (
    <>
      <ProfileButton />
      <Login />
      <Register />
      <ForgotPassword />
    </>
  );
};

export default AuthScreen;
