/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import { PLAYER } from '../../../common/constants';
// import ScreenReady from '../../../components/ScreenReady/ScreenReady';
import WidgetsRenderer from '../../../components/WidgetsRenderer/WidgetsRenderer';

const ReadyScreen = ({ playingState, temp }) => {
  if (playingState === PLAYER.READY) {
    return <WidgetsRenderer widgets={[temp.widgets[1]]} />;
  }
  return null;
};
export default ReadyScreen;
