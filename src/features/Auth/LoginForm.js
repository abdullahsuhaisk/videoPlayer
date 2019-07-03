/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { Wrapper, loginFormStyles } from './LoginForm.style';
import { loadWebFontsFromStyles } from '../../utils/parseStyles';

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) @client {
      displayName
    }
  }
`;

const LOGIN_WITH_GOOGLE = gql`
  mutation loginWithGoogle {
    loginWithGoogle @client {
      displayName
    }
  }
`;

const LOGIN_WITH_FACEBOOK = gql`
  mutation loginWithFacebook {
    loginWithFacebook @client {
      displayName
    }
  }
`;

const LoginForm = ({ styles }) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    loadWebFontsFromStyles(loginFormStyles);
    loadWebFontsFromStyles(styles);
  }, []);

  return (
    <Mutation mutation={LOGIN}>
      {(login, { data, client }) => {
        return (
          <Wrapper styles={styles} className="vb--login">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                login({
                  variables: {
                    email: emailRef.current.value,
                    password: passwordRef.current.value
                  }
                });
              }}>
              <span
                className="vb--login-close"
                role="button"
                tabIndex="0"
                onClick={() =>
                  client.writeData({ data: { isLoginFormShowing: false } })
                }>
                &times;
              </span>
              <div className="vb--login-banner" />
              <div className="vb--login-input-container">
                <input type="email" placeholder="Email" ref={emailRef} />
                <input
                  type="password"
                  placeholder="Password"
                  ref={passwordRef}
                />
              </div>
              <button className="vb--login-button" type="submit">
                Login
              </button>
              <div className="vb--login-with-wrapper">
                <span>or log in with</span>
                <div className="vb--login-with-buttons-container">
                  <div
                    className="vb--login-with-google"
                    role="button"
                    tabIndex="-1"
                    onClick={() =>
                      client.mutate({ mutation: LOGIN_WITH_GOOGLE })
                    }
                  />
                  <div
                    className="vb--login-with-facebook"
                    role="button"
                    tabIndex="-1"
                    onClick={() =>
                      client.mutate({ mutation: LOGIN_WITH_FACEBOOK })
                    }
                  />
                </div>
              </div>
              <span
                className="vb--login-forgot-password-button"
                role="button"
                tabIndex="0"
                onClick={() =>
                  client.writeData({
                    data: {
                      isLoginFormShowing: false,
                      isForgotPasswordFormShowing: true
                    }
                  })
                }>
                I forgot my password!
              </span>
              <button
                className="vb--login-register-button"
                onClick={() =>
                  client.writeData({
                    data: {
                      isLoginFormShowing: false,
                      isRegisterFormShowing: true
                    }
                  })
                }>
                Do not have an account? <b>Create</b>
              </button>
            </form>
          </Wrapper>
        );
      }}
    </Mutation>
  );
};

LoginForm.propTypes = {
  styles: PropTypes.object
};

LoginForm.defaultProps = {
  styles: {}
};

export default LoginForm;
