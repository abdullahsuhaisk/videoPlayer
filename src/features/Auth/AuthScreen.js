import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ProfileButton from './ProfileButton';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import ForgotPasswordForm from './ForgotPasswordForm';
import { PLAYER } from '../../common/constants';

const GET_PLAYER_AND_AUTH_STATE = gql`
  query getPlayerAndAuthStateForAuthScreen {
    player @client {
      isStarted
      playingState
    }
    isLoggedIn @client
    isLoginFormShowing @client
    isRegisterFormShowing @client
    isForgotPasswordFormShowing @client
    isProfileOpen @client
  }
`;

const AuthScreen = () => {
  return (
    <>
      <Query query={GET_PLAYER_AND_AUTH_STATE}>
        {({
          data: {
            player,
            isLoggedIn,
            isLoginFormShowing,
            isRegisterFormShowing,
            isForgotPasswordFormShowing
          }
        }) => {
          return (
            <>
              {player &&
                player.isStarted &&
                player.playingState === PLAYER.PAUSED &&
                //<ProfileButton />
                null}
              {isLoggedIn === false && isLoginFormShowing === true && (
                <div style={{ pointerEvents: 'auto' }} className="Auth">
                  <LoginForm />
                </div>
              )}
              {isLoggedIn === false && isRegisterFormShowing === true && (
                <div style={{ pointerEvents: 'auto' }} className="Auth">
                  <RegisterForm />
                </div>
              )}
              {isLoggedIn === false && isForgotPasswordFormShowing === true && (
                <div style={{ pointerEvents: 'auto' }} className="Auth">
                  <ForgotPasswordForm />
                </div>
              )}
            </>
          );
        }}
      </Query>
    </>
  );
};

export default AuthScreen;
