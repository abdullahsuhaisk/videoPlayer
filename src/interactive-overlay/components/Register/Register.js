/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import registerTemplate from '../../templates/registerTemplate.json';
import { InjectAuthOperations } from '../../../store/redux/auth/authOperations';
import useWebFont from '../../hooks/useWebFont';

const StyledRegisterComponent = styled.div`
  ${registerTemplate['vibuy--register-component'].styles}
  ${css`
    pointer-events: auto;
  `}
`;

const StyledCloseButton = styled.span`
  ${registerTemplate['vibuy--register-close'].styles}
`;

const StyledLoginImage = styled.div`
  ${registerTemplate['vibuy--register-login-image'].styles}
`;

const StyledInputContainer = styled.div`
  ${registerTemplate['vibuy--register-input-container'].styles}
`;

const StyledRegisterButton = styled.button`
  ${registerTemplate['vibuy--register-button'].styles}
`;

const StyledSocialMediaContainer = styled.div`
  ${registerTemplate['vibuy--register-social-media-login-container'].styles}
`;

const StyledSocialMediaButtons = styled.div`
  ${registerTemplate['vibuy--register-social-media-login-buttons'].styles}
`;

const StyledLoginButton = styled.button`
  ${registerTemplate['vibuy--register-login-button'].styles}
`;

const Register = (props) => {
  const {
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

  useWebFont(registerTemplate);

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
    <StyledRegisterComponent>
      <StyledCloseButton onClick={toggleRegisterCb}>&times;</StyledCloseButton>
      <StyledLoginImage />
      <StyledInputContainer>
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
      </StyledInputContainer>
      <StyledRegisterButton onClick={registerCb}>
        Create Account
      </StyledRegisterButton>
      <StyledSocialMediaContainer>
        <span>or log in with</span>
        <StyledSocialMediaButtons>
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
        </StyledSocialMediaButtons>
      </StyledSocialMediaContainer>
      <StyledLoginButton role="button" tabIndex="-1" onClick={toggleLoginCb}>
        Already have an account? <b>Log in</b>
      </StyledLoginButton>
    </StyledRegisterComponent>
  );
};

export default InjectAuthOperations(Register, {
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
});
