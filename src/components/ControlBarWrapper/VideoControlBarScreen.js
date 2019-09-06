import React from 'react';
import WidgetsRenderer from '../WidgetsRenderer/WidgetsRenderer';

const VideoControlBarScreen = ({ temp }) => {
  return <WidgetsRenderer widgets={[temp.widgets[3]]} />;
};

export default VideoControlBarScreen;
