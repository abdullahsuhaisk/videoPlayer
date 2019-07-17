import React from 'react';
import { PLAYER } from '../../../common/constants';
import ScreenPause from '../../../components/ScreenPause/ScreenPause';

const PausedScreen = ({ playingState, videoPlayer, temp }) => {
  if (playingState === PLAYER.PAUSED) {
    return (
      <ScreenPause
        videoPlayer={videoPlayer}
        playingState={playingState}
        temp={temp}
      />
    );
  }
  return null;
};

export default PausedScreen;
