import React from 'react';
import { PLAYER } from '../../../common/constants';
import ScreenPause from '../../../components/ScreenPause/ScreenPause';

const PausedScreen = ({ playingState, videoPlayer }) => {
  if (playingState === PLAYER.PAUSED) {
    return (
      <ScreenPause videoPlayer={videoPlayer} playingState={playingState} />
    );
  }
  return null;
};

export default PausedScreen;
