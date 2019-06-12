import React from 'react';
import ProfileButton from './ProfileButton';
import Login from './Login';
import Register from './Register';

const AuthScreen = () => {
  return (
    <>
      <ProfileButton />
      <Login />
      <Register />
    </>
  );
};

export default AuthScreen;
