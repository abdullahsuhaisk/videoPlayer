/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { forgotPasswordFormStyles } from './ForgotPasswordForm.style';
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
          <React.Fragment>
            <div className="forgotPassword">
              <figure className="forgotPassword--imgWrapper">
                <img
                  className="forgotPassword--img"
                  src="/images/login_image.svg"
                  alt="forgot password"
                />
              </figure>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendPasswordResetEmail({
                    variables: { email: emailRef.current.value }
                  });
                }}>
                <div className="forgotPassword--emailWrapper">
                  <span className="forgotPassword--label">
                    Enter your email address or phone number to help us identify
                    you
                  </span>
                  <input
                    type="text"
                    className="forgotPassword--input"
                    placeholder="Email"
                    ref={emailRef}
                  />
                </div>
                <div className="forgotPassword--buttonWrapper">
                  <button className="forgotPassword--button" type="submit">
                    Send
                  </button>
                </div>
                <div className="forgotPassword--signupButtonWrapper">
                  <button className="forgotPassword--signupButton">Back</button>
                </div>
              </form>
            </div>
          </React.Fragment>
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
