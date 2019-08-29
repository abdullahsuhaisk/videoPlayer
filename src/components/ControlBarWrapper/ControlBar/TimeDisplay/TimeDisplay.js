import React, { useCallback } from 'react';
import { getVideoJs } from '../../../../hooks/VideoJsHook';

const TimeDisplay = () => {
  const videoPlayer = getVideoJs();
  const timeHandler = useCallback((time) => {
    const pad = (input) => {
      return input < 10 ? '0' + input : input;
    };
    let timeString = [];
    if (pad(Math.floor(videoPlayer.duration() / 3600)) > 0) {
      timeString.push(pad(Math.floor(time / 3600)));
    }
    if (pad(Math.floor((videoPlayer.duration() % 3600) / 60)) > 0) {
      timeString.push(pad(Math.floor((time % 3600) / 60)));
    }
    if (pad(Math.floor(videoPlayer.duration() % 60)) > 0) {
      timeString.push(pad(Math.floor(time % 60)));
    }
    return timeString.join(':');
  });

  return (
    <div className="timeDisplay">
      <p>{videoPlayer ? timeHandler(videoPlayer.currentTime()) : '00:00'}</p>
      <p className="timeDevider"> / </p>
      <p>{videoPlayer ? timeHandler(videoPlayer.duration()) : '00:00'}</p>
    </div>
  );
};

export default TimeDisplay;
