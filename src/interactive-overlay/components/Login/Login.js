import React, { useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import loginTemplate from '../../templates/loginTemplate.json';
import { InjectAuthOperations } from '../../../store/redux/auth/authOperations';

const StyledLoginComponent = styled.div`
  ${loginTemplate['vibuy--login-component'].styles}
  ${css`
    pointer-events: auto;
  `}
`;

const StyledCloseButton = styled.span`
  ${loginTemplate['vibuy--login-close'].styles}
`;

const StyledImage = styled.div`
  ${loginTemplate['vibuy--login-image'].styles}
`;

const StyledEmail = styled.input`
  ${loginTemplate['vibuy--login-email'].styles}
`;

const StyledPassword = styled.input`
  ${loginTemplate['vibuy--login-password'].styles}
`;

const StyledLogin = styled.button`
  ${loginTemplate['vibuy--login'].styles}
`;

const StyledLoginWith = styled.span`
  ${loginTemplate['vibuy--login-with'].styles}
`;

const StyledLoginWithGoogle = styled.div`
  ${loginTemplate['vibuy--login-with-google'].styles}
`;

const StyledLoginWithFacebook = styled.div`
  ${loginTemplate['vibuy--login-with-facebook'].styles}
`;

const StyledForgotPassword = styled.span`
  ${loginTemplate['vibuy--forgot-password'].styles}
`;

const StyledCreateAccount = styled.button`
  ${loginTemplate['vibuy--create-account'].styles}
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

  const loginCb = useCallback(async (event) => {
    event.preventDefault();
    await login({ email, password });
  }, []);

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
      <StyledCloseButton onClick={toggleLoginCb}>x</StyledCloseButton>
      <StyledImage />
      <StyledEmail placeholder="Email" onChange={emailChangeCb} />
      <StyledPassword placeholder="Password" onChange={passwordChangeCb} />
      <StyledLogin onClick={loginCb}>Login</StyledLogin>
      <StyledLoginWith>or log in with</StyledLoginWith>
      <StyledLoginWithGoogle onClick={loginWithGoogleCb} />
      <StyledLoginWithFacebook onClick={loginWithFacebookCb} />
      <StyledForgotPassword onClick={toggleForgotPasswordCb}>
        I forgot my password!
      </StyledForgotPassword>
      <StyledCreateAccount onClick={toggleRegisterCb}>
        Do not have an account? <b>Create</b>
      </StyledCreateAccount>
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
