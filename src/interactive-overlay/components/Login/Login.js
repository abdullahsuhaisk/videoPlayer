/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import loginTemplate from '../../templates/loginTemplate.json';
import { InjectAuthOperations } from '../../../store/redux/auth/authOperations';
import useWebFont from '../../hooks/useWebFont';

const StyledLoginComponent = styled.div`
  ${loginTemplate['vibuy--login-component'].styles}
  ${css`
    pointer-events: auto;
  `}
`;

const StyledCloseButton = styled.span`
  ${loginTemplate['vibuy--login-close'].styles}
`;

const StyledLoginImage = styled.div`
  ${loginTemplate['vibuy--login-image'].styles}
`;

const StyledInputContainer = styled.div`
  ${loginTemplate['vibuy--login-input-container'].styles}
`;

const StyledLoginButton = styled.button`
  ${loginTemplate['vibuy--login-button'].styles}
`;

const StyledSocialMediaContainer = styled.div`
  ${loginTemplate['vibuy--login-social-media-login-container'].styles}
`;

const StyledSocialMediaButtons = styled.div`
  ${loginTemplate['vibuy--login-social-media-login-buttons'].styles}
`;

const StyledForgotPassword = styled.span`
  ${loginTemplate['vibuy--login-forgot-password'].styles}
`;

const StyledRegisterButton = styled.button`
  ${loginTemplate['vibuy--login-register-button'].styles}
`;

const Login = (props) => {
  const {
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

  useWebFont(loginTemplate);

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
    <StyledLoginComponent>
      <StyledCloseButton onClick={toggleLoginCb}>&times;</StyledCloseButton>
      <StyledLoginImage />
      <StyledInputContainer>
        <input type="email" placeholder="Email" onChange={emailChangeCb} />
        <input
          type="password"
          placeholder="Password"
          onChange={passwordChangeCb}
        />
      </StyledInputContainer>
      <StyledLoginButton onClick={loginCb}>Login</StyledLoginButton>
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
      <StyledForgotPassword onClick={toggleForgotPasswordCb}>
        I forgot my password!
      </StyledForgotPassword>
      <StyledRegisterButton onClick={toggleRegisterCb}>
        Do not have an account? <b>Create</b>
      </StyledRegisterButton>
    </StyledLoginComponent>
  );
};

export default InjectAuthOperations(Login, {
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
});
