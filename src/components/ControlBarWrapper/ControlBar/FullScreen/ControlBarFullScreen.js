import React from 'react';
import { getVideoJs } from '../../../../hooks/VideoJsHook';
import FullScreenIcon from '../../../../assets/icons/FullScreenIcon.svg';

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
  if (iOS === false) {
    return (
      <div
        className="fullScreenBtn-wrapper"
        onClick={() => {
          fullScreenHnadler();
        }}>
        <img src={FullScreenIcon} alt="Full Screen" className="fullScreenBtn" />
      </div>
    );
  }
  return null;
};

export default ControlBarFullScreen;
