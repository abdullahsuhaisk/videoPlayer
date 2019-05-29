/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { InjectAuthProps } from '../../../store/redux/providers';

const StyledWrapper = styled.div((props) => ({
  ...props.styles,
  'pointer-events': 'auto'
}));

const Login = (props) => {
  const {
    styles,
    auth,
    login,
    loginStatus,
    loginWithGoogle,
    loginWithFacebook,
    loginInfo,
    showLogin,
    onShowLogin,
    onShowRegister,
    onShowForgotPassword
  } = props;

  if (!showLogin || loginStatus === 'loggedIn' || auth.uid) {
    return null;
  }

  const loginError = loginInfo.errorMessage;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleLoginCb = useCallback(
    (event) => {
      event.preventDefault();
      onShowLogin(!showLogin);
    },
    [showLogin]
  );

  const emailChangeCb = useCallback((event) => {
    event.preventDefault();
    setEmail(event.target.value);
  }, []);

  const passwordChangeCb = useCallback((event) => {
    event.preventDefault();
    setPassword(event.target.value);
  }, []);

  const loginCb = useCallback(
    async (event) => {
      event.preventDefault();
      await login({ email, password });
    },
    [email, password]
  );

  const loginWithGoogleCb = useCallback((event) => {
    event.preventDefault();
    loginWithGoogle();
  }, []);

  const loginWithFacebookCb = useCallback((event) => {
    event.preventDefault();
    loginWithFacebook();
  }, []);

  const toggleForgotPasswordCb = useCallback((event) => {
    event.preventDefault();
    onShowLogin(false);
    onShowForgotPassword(true);
  }, []);

  const toggleRegisterCb = useCallback((event) => {
    event.preventDefault();
    onShowLogin(false);
    onShowRegister(true);
  }, []);

  return (
    <StyledWrapper styles={styles} className="vibuy--login-widget">
      <span
        className="vibuy--login-close"
        onClick={toggleLoginCb}
        role="button"
        tabIndex="0">
        &times;
      </span>
      <div className="vibuy--login-image" />
      <div className="vibuy--login-input-container">
        <input type="email" placeholder="Email" onChange={emailChangeCb} />
        <input
          type="password"
          placeholder="Password"
          onChange={passwordChangeCb}
        />
      </div>
      <button className="vibuy--login-button" onClick={loginCb}>
        Login
      </button>
      <div className="vibuy--login-social-media-login-container">
        <span>or log in with</span>
        <div className="vibuy--login-social-media-login-buttons">
          <div
            className="login-google"
            role="button"
            tabIndex="-1"
            onClick={loginWithGoogleCb}
          />
          <div
            className="login-facebook"
            role="button"
            tabIndex="-1"
            onClick={loginWithFacebookCb}
          />
        </div>
      </div>
      <span
        className="vibuy--login-forgot-password"
        role="button"
        tabIndex="0"
        onClick={toggleForgotPasswordCb}>
        I forgot my password!
      </span>
      <button
        className="vibuy--login-register-button"
        onClick={toggleRegisterCb}>
        Do not have an account? <b>Create</b>
      </button>
    </StyledWrapper>
  );
};

export default InjectAuthProps({
  selectActions: ({
    login,
    loginWithGoogle,
    loginWithFacebook,
    resetErrors,
    onShowLogin,
    onShowRegister,
    onShowForgotPassword
  }) => ({
    login,
    loginWithGoogle,
    loginWithFacebook,
    resetErrors,
    onShowLogin,
    onShowRegister,
    onShowForgotPassword
  }),
  selectProps: ({ showLogin, auth, loginStatus, loginInfo }) => ({
    showLogin,
    auth,
    loginStatus,
    loginInfo
  })
})(Login);
