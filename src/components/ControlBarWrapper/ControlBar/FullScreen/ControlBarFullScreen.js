import React from 'react';
import { getVideoJs } from '../../../../hooks/VideoJsHook';

const ControlBarFullScreen = () => {
  const videoPlayer = getVideoJs();
  const fullScreenHnadler = () => {
    if (videoPlayer.isFullscreen()) {
      videoPlayer.exitFullscreen();
    } else {
      videoPlayer.requestFullscreen();
    }
  };
  return (
    <div>
      <button
        className="fullScreenBtn"
        onClick={() => {
          fullScreenHnadler();
        }}></button>
    </div>
  );
};

export default ControlBarFullScreen;
