import React from 'react';

const ControlBarFullScreen = ({ videoPlayer }) => {
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
