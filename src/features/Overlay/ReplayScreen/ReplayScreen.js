import React from 'react';
// import { PLAYER } from '../../../common/constants';
// import ScreenPauseWrapper from '../../../components/ScreenPauseWrapper/ScreenPauseWrapper';
import WidgetsRenderer from '../../../components/WidgetsRenderer/WidgetsRenderer';

const ReplayScreen = ({ temp }) => {
  return <WidgetsRenderer widgets={[temp.widgets[4]]} />;
};

export default ReplayScreen;
