import React from 'react';
import { PLAYER } from '../../../common/constants';
//import ScreenPauseWrapper from '../../../components/ScreenPauseWrapper/ScreenPauseWrapper';
import WidgetsRenderer from '../../../components/WidgetsRenderer/WidgetsRenderer';

const PausedScreen = ({ playingState, videoPlayer, temp }) => {
  if (playingState === PLAYER.PAUSED) {
    return <WidgetsRenderer widgets={[temp.widgets[0]]} />;
  }
  return null;
};

export default PausedScreen;
