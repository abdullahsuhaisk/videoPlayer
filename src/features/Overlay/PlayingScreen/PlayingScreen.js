import React from 'react';
import { PLAYER } from '../../../common/constants';
import ControlBar from '../../../components/ScreenPlaying/ControlBar/ControlBar';

const PlayingScreen = ({ playingState, videoPlayer }) => {
  if (playingState === PLAYER.PLAYING) {
    return <ControlBar videoPlayer={videoPlayer} playingState={playingState} />;
  }
  return null;
};

export default PlayingScreen;
