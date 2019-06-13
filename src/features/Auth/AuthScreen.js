import React from 'react';
import PropTypes from 'prop-types';
import ProfileButton from './ProfileButton';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import { InjectPlayerProps } from '../../store/redux/providers';
import { playingState } from '../../store/redux/player/playerActions';

const AuthScreen = ({ playerPlayingState, playerStarted }) => {
  return (
    <>
      {playerStarted && playerPlayingState === playingState.PAUSED && (
        <ProfileButton />
      )}
      <Login />
      <Register />
      <ForgotPassword />
    </>
  );
};

AuthScreen.propTypes = {
  playerPlayingState: PropTypes.string.isRequired,
  playerStarted: PropTypes.bool.isRequired
};

export default InjectPlayerProps({
  selectProps: ({ playerPlayingState, playerStarted }) => ({
    playerPlayingState,
    playerStarted
  })
})(AuthScreen);
