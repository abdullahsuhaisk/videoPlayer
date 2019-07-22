import React from 'react';
// import { PLAYER } from '../../../common/constants';
// import ScreenPauseWrapper from '../../../components/ScreenPauseWrapper/ScreenPauseWrapper';
import WidgetsRenderer from '../../../components/WidgetsRenderer/WidgetsRenderer';

const PausedScreen = ({ temp }) => {
  return <WidgetsRenderer widgets={[temp.widgets[0]]} />;
};

export default PausedScreen;
