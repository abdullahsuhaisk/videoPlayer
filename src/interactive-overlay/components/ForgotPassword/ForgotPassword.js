/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';
import forgotPasswordTemplate from '../../templates/forgotPasswordTemplate.json';
import { InjectAuthOperations } from '../../../store/redux/auth/authOperations';
import useWebFont from '../../hooks/useWebFont';

const StyledForgotPasswordComponent = styled.div`
  ${forgotPasswordTemplate['vibuy--forgot-password-component'].styles}
  ${css`
    pointer-events: auto;
  `}
`;

const StyledCloseButton = styled.span`
  ${forgotPasswordTemplate['vibuy--forgot-password-close'].styles}
`;

const StyledImage = styled.div`
  ${forgotPasswordTemplate['vibuy--forgot-password-image'].styles}
`;

const StyledText = styled.span`
  ${forgotPasswordTemplate['vibuy--forgot-password-text'].styles}
`;

const StyledInputContainer = styled.div`
  ${forgotPasswordTemplate['vibuy--forgot-password-input-container'].styles}
`;

const StyledSendButton = styled.button`
  ${forgotPasswordTemplate['vibuy--forgot-password-button'].styles}
`;

const ForgotPassword = (props) => {
  const {
    loginStatus,
    auth,
    showForgotPassword,
    onShowLogin,
    onShowForgotPassword
  } = props;

  if (!showForgotPassword || loginStatus === 'loggedIn' || auth.uid) {
    return null;
  }

  useWebFont(forgotPasswordTemplate);

  const toggleLoginCb = useCallback((event) => {
    event.preventDefault();
    onShowForgotPassword(false);
    onShowLogin(true);
  }, []);

  const toggleForgotPasswordCb = useCallback((event) => {
    event.preventDefault();
    onShowForgotPassword(false);
  }, []);

  return (
    <StyledForgotPasswordComponent>
      <StyledCloseButton onClick={toggleForgotPasswordCb}>
        &times;
      </StyledCloseButton>
      <StyledImage />
      <StyledText>
        Please enter your email address below to receive an email instraction
        for resetting your password.
      </StyledText>
      <StyledInputContainer>
        <input type="email" placeholder="Email" />
      </StyledInputContainer>
      <StyledSendButton onClick={toggleLoginCb}>Send</StyledSendButton>
    </StyledForgotPasswordComponent>
  );
};

export default InjectAuthOperations(ForgotPassword, {
  selectActions: ({ onShowLogin, onShowForgotPassword }) => ({
    onShowLogin,
    onShowForgotPassword
  }),
  selectProps: ({ loginStatus, auth, showForgotPassword }) => ({
    loginStatus,
    auth,
    showForgotPassword
  })
});
