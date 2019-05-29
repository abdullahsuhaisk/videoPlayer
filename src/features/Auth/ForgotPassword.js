/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback } from 'react';
import styled from 'styled-components';
import { InjectAuthProps } from '../../store/redux/providers';

const StyledWrapper = styled.div((props) => ({
  ...props.styles,
  'pointer-events': 'auto'
}));

const ForgotPassword = (props) => {
  const {
    styles,
    loginStatus,
    auth,
    showForgotPassword,
    onShowLogin,
    onShowForgotPassword
  } = props;

  if (!showForgotPassword || loginStatus === 'loggedIn' || auth.uid) {
    return null;
  }

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
    <StyledWrapper styles={styles} className="vibuy--forgot-password-widget">
      <span
        className="vibuy--forgot-password-close"
        role="button"
        tabIndex="0"
        onClick={toggleForgotPasswordCb}>
        &times;
      </span>
      <div className="vibuy--forgot-password-image" />
      <span className="vibuy--forgot-password-text">
        Please enter your email address below to receive an email instraction
        for resetting your password.
      </span>
      <div className="vibuy--forgot-password-input-container">
        <input type="email" placeholder="Email" />
      </div>
      <button className="vibuy--forgot-password-button" onClick={toggleLoginCb}>
        Send
      </button>
    </StyledWrapper>
  );
};

export default InjectAuthProps({
  selectActions: ({ onShowLogin, onShowForgotPassword }) => ({
    onShowLogin,
    onShowForgotPassword
  }),
  selectProps: ({ loginStatus, auth, showForgotPassword }) => ({
    loginStatus,
    auth,
    showForgotPassword
  })
})(ForgotPassword);
