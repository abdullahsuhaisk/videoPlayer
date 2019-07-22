/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { Wrapper, registerFormStyles } from './RegisterForm.style';
import { loadWebFontsFromStyles } from '../../utils/parseStyles';

const REGISTER = gql`
  mutation register($email: String!, $password: String!) {
    register(email: $email, password: $password) @client {
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

const RegisterForm = ({ styles }) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    loadWebFontsFromStyles(registerFormStyles);
    loadWebFontsFromStyles(styles);
  }, []);

  return (
    <Mutation mutation={REGISTER}>
      {(register, { data, client }) => {
        return (
          <Wrapper styles={styles} className="vb--register">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                register({
                  variables: {
                    email: emailRef.current.value,
                    password: passwordRef.current.value
                  }
                });
              }}>
              <span
                className="vb--register-close"
                role="button"
                tabIndex="0"
                onClick={() =>
                  client.writeData({ data: { isRegisterFormShowing: false } })
                }>
                &times;
              </span>
              <div className="vb--register-banner" />
              <div className="vb--register-input-container">
                <input type="text" placeholder="Full name" />
                <input type="email" placeholder="Email" ref={emailRef} />
                <input
                  type="password"
                  placeholder="Password"
                  ref={passwordRef}
                />
                <span>*Min 6 characters.</span>
              </div>
              <button className="vb--register-button" type="submit">
                Create Account
              </button>
              <div className="vb--register-with-wrapper">
                <span>or log in with</span>
                <div className="vb--register-with-buttons-container">
                  <div
                    className="vb--register-with-google"
                    role="button"
                    tabIndex="-1"
                    onClick={() =>
                      client.mutate({ mutation: LOGIN_WITH_GOOGLE })
                    }
                  />
                  <div
                    className="vb--register-with-facebook"
                    role="button"
                    tabIndex="-1"
                    onClick={() =>
                      client.mutate({ mutation: LOGIN_WITH_FACEBOOK })
                    }
                  />
                </div>
              </div>
              <button
                className="vb--register-login-button"
                onClick={() =>
                  client.writeData({
                    data: {
                      isRegisterFormShowing: false,
                      isLoginFormShowing: true
                    }
                  })
                }>
                Already have an account? <b>Log in</b>
              </button>
            </form>
          </Wrapper>
        );
      }}
    </Mutation>
  );
};

RegisterForm.propTypes = {
  styles: PropTypes.object
};

RegisterForm.defaultProps = {
  styles: {}
};

export default RegisterForm;
