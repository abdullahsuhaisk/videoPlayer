/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

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

const LoginForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <Mutation mutation={LOGIN}>
      {(login, { data, client }) => {
        return (
          <React.Fragment>
            <div className="login">
              <figure className="login--imgWrapper">
                <img
                  className="login--img"
                  alt="login"
                  src="/images/login_image.svg"
                />
              </figure>
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
                <div className="login--emailWrapper">
                  <span className="login--label">Mobile Number or Email</span>
                  <input
                    type="email"
                    className="login--input"
                    placeholder="Email"
                    ref={emailRef}
                  />
                </div>
                <div className="login--passwordWrapper">
                  <span className="login--label">Password</span>
                  <input
                    type="password"
                    className="login--input"
                    placeholder="Password"
                    ref={passwordRef}
                  />
                </div>
                <div className="login--resetWrapper">
                  <div className="login--staySigned">
                    <input
                      type="checkbox"
                      id="stay_signed"
                      className="login--staySigned-checkbox"
                    />{' '}
                    <label
                      className="login--staySigned--label"
                      HtmlFor="stay_signed">
                      Stay signed in
                    </label>
                  </div>
                  <div className="login--forgotPassword">
                    <div
                      className="login--forgotPassword--a"
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
                      Forgot your password?
                    </div>
                  </div>
                </div>
                <div className="login--buttonWrapper">
                  <button className="login--button">Login</button>
                </div>
                <div className="loginWithWrapper">
                  <p className="login--loginWith">or Login with</p>
                  <div className="login--withSocialMedia">
                    <div
                      href="#"
                      className="login--withFacebook"
                      role="button"
                      tabIndex="-1"
                      onClick={() =>
                        client.mutate({ mutation: LOGIN_WITH_GOOGLE })
                      }></div>
                    <div
                      href="#"
                      className="login--withGoogle"
                      role="button"
                      tabIndex="-1"
                      onClick={() =>
                        client.mutate({ mutation: LOGIN_WITH_FACEBOOK })
                      }></div>
                  </div>
                </div>
                <hr className="login--hr" />
                <p className="login-haveAccount">Don’t have an account? </p>
                <div className="login--signupButtonWrapper">
                  <button
                    className="login--signupButton"
                    onClick={() =>
                      client.writeData({
                        data: {
                          isLoginFormShowing: false,
                          isRegisterFormShowing: true
                        }
                      })
                    }>
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </React.Fragment>
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
