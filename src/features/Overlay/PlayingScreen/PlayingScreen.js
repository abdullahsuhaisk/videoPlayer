import React from 'react';
import WidgetsRenderer from '../../../components/WidgetsRenderer/WidgetsRenderer';

const PlayingScreen = ({ temp, playingState }) => {
  return <WidgetsRenderer widgets={[temp.widgets[2]]} />;
};

export default PlayingScreen;
