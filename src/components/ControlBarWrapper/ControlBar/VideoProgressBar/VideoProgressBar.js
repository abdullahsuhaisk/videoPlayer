import React from 'react';
import { withApollo } from 'react-apollo';

import HotspotPointsScreen from './HotspotPoints/HotspotPointsScreen';

const VideoProgressBar = ({ videoPlayer }) => {
  const progressBarHandler = () => {
    if (videoPlayer && videoPlayer.currentTime() > 0) {
      return (
        (videoPlayer.currentTime() / videoPlayer.duration()) *
        100
      ).toFixed(2);
    }
    return 0;
  };
  const progressBarClickHandler = (e) => {
    if (e && e.target && e.target.value) {
      const newTime = (
        (parseFloat(e.target.value) * videoPlayer.duration()) /
        100
      ).toFixed(2);
      videoPlayer.currentTime(newTime);
    }
  };

  return (
    <div className="videoProgressBar">
      <input
        type="range"
        value={progressBarHandler()}
        max="100"
        step="0.01"
        onChange={(e) => progressBarClickHandler(e)}
      />
      <progress value={progressBarHandler()} max="100"></progress>
      <HotspotPointsScreen />
    </div>
  );
};

export default withApollo(VideoProgressBar);
