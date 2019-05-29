/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { InjectAuthProps } from '../../../store/redux/providers';

const StyledWrapper = styled.div((props) => ({
  ...props.styles,
  'pointer-events': 'auto'
}));

const Register = (props) => {
  const {
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
  } = props;

  if (!showRegister || loginStatus === 'loggedIn' || auth.uid) {
    return null;
  }

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
    <StyledWrapper styles={styles} className="vibuy--register-widget">
      <span
        className="vibuy--register-close"
        onClick={toggleRegisterCb}
        role="button"
        tabIndex="0">
        &times;
      </span>
      <div className="vibuy--register-login-image" />
      <div className="vibuy--register-input-container">
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
      <button className="vibuy--register-button" onClick={registerCb}>
        Create Account
      </button>
      <div className="vibuy--register-social-media-login-container">
        <span>or log in with</span>
        <div className="vibuy--register-social-media-login-buttons">
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
      <button className="vibuy--register-login-button" onClick={toggleLoginCb}>
        Already have an account? <b>Log in</b>
      </button>
    </StyledWrapper>
  );
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
