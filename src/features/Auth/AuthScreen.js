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
                player.playingState === PLAYER.PAUSED && <ProfileButton />}
              {isLoggedIn === false && isLoginFormShowing === true && (
                <LoginForm />
              )}
              {isLoggedIn === false && isRegisterFormShowing === true && (
                <RegisterForm />
              )}
              {isLoggedIn === false && isForgotPasswordFormShowing === true && (
                <ForgotPasswordForm />
              )}
            </>
          );
        }}
      </Query>
    </>
  );
};

export default AuthScreen;
