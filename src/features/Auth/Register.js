/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, registerStyles } from './Register.style';
import { InjectAuthProps } from '../../store/redux/providers';
import { loadWebFontsFromStyles } from '../../utils/parseStyles';

const Register = ({
  styles,
  auth,
  loginStatus,
  loginInfo,
  createUserWithEmailAndPassword,
  loginWithGoogle,
  loginWithFacebook,
  showRegister,
  onShowLogin,
  onShowRegister
}) => {
  if (!showRegister || loginStatus === 'loggedIn' || auth.uid) {
    return null;
  }

  useEffect(() => {
    loadWebFontsFromStyles(registerStyles);
    loadWebFontsFromStyles(styles);
  }, []);

  const registerError = loginInfo.errorMessage;

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleRegisterCb = useCallback(
    (event) => {
      event.preventDefault();
      onShowRegister(!showRegister);
    },
    [showRegister]
  );

  const toggleLoginCb = useCallback((event) => {
    event.preventDefault();
    onShowRegister(false);
    onShowLogin(true);
  }, []);

  const fullnameChangeCb = useCallback((event) => {
    event.preventDefault();
    setFullName(event.target.value);
  }, []);

  const emailChangeCb = useCallback((event) => {
    event.preventDefault();
    setEmail(event.target.value);
  }, []);

  const passwordChangeCb = useCallback((event) => {
    event.preventDefault();
    setPassword(event.target.value);
  }, []);

  const registerCb = useCallback(
    async (event) => {
      event.preventDefault();
      await createUserWithEmailAndPassword({ fullName, email, password });
    },
    [fullName, email, password]
  );

  const loginWithGoogleCb = useCallback((event) => {
    event.preventDefault();
    loginWithGoogle();
  }, []);

  const loginWithFacebookCb = useCallback((event) => {
    event.preventDefault();
    loginWithFacebook();
  }, []);

  return (
    <Wrapper styles={styles} className="vb--register">
      <span
        className="vb--register-close"
        onClick={toggleRegisterCb}
        role="button"
        tabIndex="0">
        &times;
      </span>
      <div className="vb--register-banner" />
      <div className="vb--register-input-container">
        <input
          type="text"
          onChange={fullnameChangeCb}
          placeholder="Full name"
        />
        <input type="email" onChange={emailChangeCb} placeholder="Email" />
        <input
          type="password"
          onChange={passwordChangeCb}
          placeholder="Password"
        />
        <span>*Min 6 characters.</span>
      </div>
      <button className="vb--register-button" onClick={registerCb}>
        Create Account
      </button>
      <div className="vb--register-with-wrapper">
        <span>or log in with</span>
        <div className="vb--register-with-buttons-container">
          <div
            className="vb--register-with-google"
            role="button"
            tabIndex="-1"
            onClick={loginWithGoogleCb}
          />
          <div
            className="vb--register-with-facebook"
            role="button"
            tabIndex="-1"
            onClick={loginWithFacebookCb}
          />
        </div>
      </div>
      <button className="vb--register-login-button" onClick={toggleLoginCb}>
        Already have an account? <b>Log in</b>
      </button>
    </Wrapper>
  );
};

Register.propTypes = {
  styles: PropTypes.object,
  auth: PropTypes.object.isRequired,
  loginStatus: PropTypes.object.isRequired,
  loginInfo: PropTypes.object.isRequired,
  createUserWithEmailAndPassword: PropTypes.func.isRequired,
  loginWithGoogle: PropTypes.func.isRequired,
  loginWithFacebook: PropTypes.func.isRequired,
  showRegister: PropTypes.bool.isRequired,
  onShowLogin: PropTypes.func.isRequired,
  onShowRegister: PropTypes.func.isRequired
};

Register.defaultProps = {
  styles: {}
};

export default InjectAuthProps({
  selectActions: ({
    createUserWithEmailAndPassword,
    loginWithGoogle,
    loginWithFacebook,
    resetErrors,
    onShowLogin,
    onShowRegister
  }) => ({
    createUserWithEmailAndPassword,
    loginWithGoogle,
    loginWithFacebook,
    resetErrors,
    onShowLogin,
    onShowRegister
  }),
  selectProps: ({ showRegister, auth, loginInfo, loginStatus }) => ({
    showRegister,
    auth,
    loginInfo,
    loginStatus
  })
})(Register);
