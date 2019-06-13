/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, forgotPasswordStyles } from './ForgotPassword.style';
import { InjectAuthProps } from '../../store/redux/providers';
import { loadWebFontsFromStyles } from '../../utils/parseStyles';

const ForgotPassword = ({
  styles,
  loginStatus,
  auth,
  showForgotPassword,
  onShowLogin,
  onShowForgotPassword
}) => {
  if (!showForgotPassword || loginStatus === 'loggedIn' || auth.uid) {
    return null;
  }

  useEffect(() => {
    loadWebFontsFromStyles(forgotPasswordStyles);
    loadWebFontsFromStyles(styles);
  }, []);

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
    <Wrapper styles={styles} className="vb--forgot-password">
      <span
        className="vb--forgot-password-close"
        role="button"
        tabIndex="0"
        onClick={toggleForgotPasswordCb}>
        &times;
      </span>
      <div className="vb--forgot-password-banner" />
      <span className="vb--forgot-password-text">
        Please enter your email address below to receive an email instraction
        for resetting your password.
      </span>
      <div className="vb--forgot-password-input-container">
        <input type="email" placeholder="Email" />
      </div>
      <button className="vb--forgot-password-button" onClick={toggleLoginCb}>
        Send
      </button>
    </Wrapper>
  );
};

ForgotPassword.propTypes = {
  styles: PropTypes.object,
  loginStatus: PropTypes.string,
  auth: PropTypes.object.isRequired,
  showForgotPassword: PropTypes.bool.isRequired,
  onShowLogin: PropTypes.func.isRequired,
  onShowForgotPassword: PropTypes.func.isRequired
};

ForgotPassword.defaultProps = {
  styles: {},
  loginStatus: ''
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
