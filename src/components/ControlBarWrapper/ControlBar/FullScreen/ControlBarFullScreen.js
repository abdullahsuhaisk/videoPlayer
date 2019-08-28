import React from 'react';
import { FullScreenWrapper } from './FullScreen.style';

const ControlBarFullScreen = ({ videoPlayer }) => {
  const fullScreenHnadler = () => {
    if (videoPlayer.isFullscreen()) {
      videoPlayer.exitFullscreen();
    } else {
      videoPlayer.requestFullscreen();
    }
  };
  return (
    <FullScreenWrapper>
      <button
        className="fullScreenBtn"
        onClick={() => {
          fullScreenHnadler();
        }}></button>
    </FullScreenWrapper>
  );
};

export default ControlBarFullScreen;
