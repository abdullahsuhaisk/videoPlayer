/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { Wrapper, forgotPasswordFormStyles } from './ForgotPasswordForm.style';
import { loadWebFontsFromStyles } from '../../utils/parseStyles';

const SEND_FORGOT_PASSWORD_EMAIL = gql`
  mutation sendPasswordResetEmail($email: String!) {
    sendPasswordResetEmail(email: $email) @client {
      displayName
    }
  }
`;

const ForgotPasswordForm = ({ styles }) => {
  const emailRef = useRef();

  useEffect(() => {
    loadWebFontsFromStyles(forgotPasswordFormStyles);
    loadWebFontsFromStyles(styles);
  }, []);

  return (
    <Mutation mutation={SEND_FORGOT_PASSWORD_EMAIL}>
      {(sendPasswordResetEmail, { data, client }) => {
        return (
          <Wrapper styles={styles} className="vb--forgot-password">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendPasswordResetEmail({
                  variables: { email: emailRef.current.value }
                });
              }}>
              <span
                className="vb--forgot-password-close"
                role="button"
                tabIndex="0"
                onClick={() =>
                  client.writeData({
                    data: {
                      isForgotPasswordFormShowing: false
                    }
                  })
                }>
                &times;
              </span>
              <div className="vb--forgot-password-banner" />
              <span className="vb--forgot-password-text">
                Please enter your email address below to receive an email
                instraction for resetting your password.
              </span>
              <div className="vb--forgot-password-input-container">
                <input type="email" placeholder="Email" ref={emailRef} />
              </div>
              <button className="vb--forgot-password-button" type="submit">
                Send
              </button>
            </form>
          </Wrapper>
        );
      }}
    </Mutation>
  );
};

ForgotPasswordForm.propTypes = {
  styles: PropTypes.object
};

ForgotPasswordForm.defaultProps = {
  styles: {}
};

export default ForgotPasswordForm;
