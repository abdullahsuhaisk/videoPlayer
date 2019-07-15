/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import { PLAYER } from '../../../common/constants';
import ScreenReady from '../../../components/ScreenReady/ScreenReady';

const ReadyScreen = ({ playingState, videoPlayer }) => {
  if (playingState === PLAYER.READY) {
    return (
      <ScreenReady videoPlayer={videoPlayer} playingState={playingState} />
    );
  }
  return null;
};
export default ReadyScreen;
