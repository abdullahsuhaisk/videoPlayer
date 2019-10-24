import React from 'react';
import { getVideoJs } from '../../../../hooks/VideoJsHook';

const ControlBarFullScreen = () => {
  const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
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
      {iOS === true ? null : (
        <button
          className="fullScreenBtn"
          onClick={() => {
            fullScreenHnadler();
          }}></button>
      )}
    </div>
  );
};

export default ControlBarFullScreen;
