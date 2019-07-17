import React from 'react';
import WidgetsRenderer from '../../components/WidgetsRenderer/WidgetsRenderer';
import { PLAYER } from '../../common/constants';
import { Wrapper } from './ScreenPause.style';
import template from './template.json';

const ScreenPause = ({ playingState, temp }) => {
  if (playingState === PLAYER.PAUSED) {
    return (
      <Wrapper>
        <div className="vb-paused-screen-container">
          ScreenPaused
          <WidgetsRenderer widgets={[temp.widgets[0]]} />
        </div>
      </Wrapper>
    );
  }
  return null;
};

export default ScreenPause;
