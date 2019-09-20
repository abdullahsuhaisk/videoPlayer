import React from 'react';
import PlayPause from '../ControlBarWrapper/ControlBar/PlayPause/PlayPause';
import JumpToProductRight from '../ControlBarWrapper/ControlBar/JumpToProduct/JumpToProductRight';
import JumpToProductLeft from '../ControlBarWrapper/ControlBar/JumpToProduct/JumpToProductLeft';
import TimeDisplay from '../ControlBarWrapper/ControlBar/TimeDisplay/TimeDisplay';

const ControlbarFixed = () => {
  return (
    <div className="videoControlsContainer">
      <div className="rightContainer">
        <PlayPause />
        <JumpToProductRight />
        <JumpToProductLeft />
        <TimeDisplay />
      </div>
      <div className="leftContainer"></div>;
    </div>
  );
};

export default ControlbarFixed;
