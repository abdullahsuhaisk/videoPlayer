import React from 'react';
import { TimeDisplayWrapper } from './TimeDisplay.style';

const TimeDisplay = ({ videoPlayer }) => {
  const timeHandler = (time) => {
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
  };

  return (
    <TimeDisplayWrapper>
      <p>{videoPlayer ? timeHandler(videoPlayer.currentTime()) : '00:00'}</p>
      <p className="timeDevider"> / </p>
      <p>{videoPlayer ? timeHandler(videoPlayer.duration()) : '00:00'}</p>
    </TimeDisplayWrapper>
  );
};

export default TimeDisplay;
