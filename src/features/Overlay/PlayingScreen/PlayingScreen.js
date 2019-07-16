import React from 'react';
import { PLAYER } from '../../../common/constants';
import ControlBar from '../../../components/ScreenPlaying/ControlBar/ControlBar';

const PlayingScreen = ({ playingState, videoPlayer }) => {
  if (playingState !== PLAYER.READY) {
    return <ControlBar videoPlayer={videoPlayer} playingState={playingState} />;
  }
  if (playingState === PLAYER.PLAYING) {
    return <div>abc</div>;
  }
  return null;
};

export default PlayingScreen;
