/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, loginStyles } from './Login.style';
import { InjectAuthProps } from '../../store/redux/providers';
import { loadWebFontsFromStyles } from '../../utils/parseStyles';

const Login = ({
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
}) => {
  if (!showLogin || loginStatus === 'loggedIn' || auth.uid) {
    return null;
  }

  useEffect(() => {
    loadWebFontsFromStyles(loginStyles);
    loadWebFontsFromStyles(styles);
  }, []);

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
    <Wrapper styles={styles} className="vb--login">
      <span
        className="vb--login-close"
        onClick={toggleLoginCb}
        role="button"
        tabIndex="0">
        &times;
      </span>
      <div className="vb--login-banner" />
      <div className="vb--login-input-container">
        <input type="email" placeholder="Email" onChange={emailChangeCb} />
        <input
          type="password"
          placeholder="Password"
          onChange={passwordChangeCb}
        />
      </div>
      <button className="vb--login-button" onClick={loginCb}>
        Login
      </button>
      <div className="vb--login-with-wrapper">
        <span>or log in with</span>
        <div className="vb--login-with-buttons-container">
          <div
            className="vb--login-with-google"
            role="button"
            tabIndex="-1"
            onClick={loginWithGoogleCb}
          />
          <div
            className="vb--login-with-facebook"
            role="button"
            tabIndex="-1"
            onClick={loginWithFacebookCb}
          />
        </div>
      </div>
      <span
        className="vb--login-forgot-password-button"
        role="button"
        tabIndex="0"
        onClick={toggleForgotPasswordCb}>
        I forgot my password!
      </span>
      <button className="vb--login-register-button" onClick={toggleRegisterCb}>
        Do not have an account? <b>Create</b>
      </button>
    </Wrapper>
  );
};

Login.propTypes = {
  styles: PropTypes.object,
  auth: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  loginStatus: PropTypes.string,
  loginWithGoogle: PropTypes.func.isRequired,
  loginWithFacebook: PropTypes.func.isRequired,
  loginInfo: PropTypes.object.isRequired,
  showLogin: PropTypes.bool.isRequired,
  onShowLogin: PropTypes.func.isRequired,
  onShowRegister: PropTypes.func.isRequired,
  onShowForgotPassword: PropTypes.func.isRequired
};

Login.defaultProps = {
  styles: {},
  loginStatus: ''
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
