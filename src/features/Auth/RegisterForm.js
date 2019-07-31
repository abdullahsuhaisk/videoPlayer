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
          <React.Fragment>
            <div className="signup">
              <figure className="signup--imgWrapper">
                <img className="signup--img" src="/images/login_image.svg" />
              </figure>
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
                <div className="signup--emailWrapper">
                  <span className="signup--label">Mobile Number or Email</span>
                  <input type="email" placeholder="Email" ref={emailRef} />
                </div>
                <div className="signup--passwordWrapper">
                  <span className="signup--label">Password</span>
                  <input
                    type="password"
                    className="signup--input"
                    placeholder="Password"
                    ref={passwordRef}
                  />
                </div>
                <span className="signup--minChar">*Min 6 characters</span>
                <div className="signup--buttonWrapper">
                  <button className="signup--button" type="submit">
                    Sign up
                  </button>
                </div>
                <div className="signupWithWrapper">
                  <p className="signup--signupWith">or Signup with</p>
                  <div className="signup--withSocialMedia">
                    <div
                      className="signup--withFacebook"
                      className="vb--register-with-facebook"
                      role="button"
                      tabIndex="-1"
                      onClick={() =>
                        client.mutate({ mutation: LOGIN_WITH_FACEBOOK })
                      }></div>
                    <div
                      className="signup--withGoogle"
                      className="vb--register-with-google"
                      role="button"
                      tabIndex="-1"
                      onClick={() =>
                        client.mutate({ mutation: LOGIN_WITH_GOOGLE })
                      }></div>
                  </div>
                </div>
                <hr className="signup--hr" />
                <p className="signup-haveAccount">Have an account? </p>
                <div className="signup--signupButtonWrapper">
                  <button
                    className="signup--signupButton"
                    onClick={() =>
                      client.writeData({
                        data: {
                          isRegisterFormShowing: false,
                          isLoginFormShowing: true
                        }
                      })
                    }>
                    Login
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

RegisterForm.propTypes = {
  styles: PropTypes.object
};

RegisterForm.defaultProps = {
  styles: {}
};

export default RegisterForm;
