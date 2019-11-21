import React, { useEffect, useCallback } from 'react';
import { withApollo } from 'react-apollo';

import HotspotPointsScreen from './HotspotPoints/HotspotPointsScreen';

const VideoProgressBar = ({ videoPlayer, client }) => {
  if (
    videoPlayer &&
    videoPlayer.currentTime().toFixed(9) >=
      videoPlayer.duration().toFixed(9) - 0.35
  ) {
    client.writeData({
      data: {
        player: {
          __typename: 'Player',
          playingState: 'REPLAY',
          isReady: false
        },
        isLoginFormShowing: false,
        isProfileOpen: false
      }
    });
    videoPlayer.paused();
  }

  const progressBarHandler = useCallback(() => {
    if (videoPlayer && videoPlayer.currentTime() > 0) {
      return (
        (videoPlayer.currentTime() / videoPlayer.duration()) *
        100
      ).toFixed(2);
    }
    return 0;
  });

  const progressBarClickHandler = useCallback((e) => {
    if (e && e.target && e.target.value) {
      const newTime = (
        (parseFloat(e.target.value) * videoPlayer.duration()) /
        100
      ).toFixed(2);
      videoPlayer.currentTime(newTime);
    }
  });

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
      <HotspotPointsScreen client={client} />
    </div>
  );
};

export default withApollo(VideoProgressBar);
