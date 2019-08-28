import React from 'react';

const ControlBar = () => {
  return (
    <div className="ControlBar">
        <div className="leftContainer">
          <i className="playPauseBtn"></i>
          <i className="next-product"></i>
          <i className="prev-product"></i>
          <p className="videoTime">1:28 / 3:32</p>
        </div>
        <div className="rightContainer">
          <i className="user"></i>
          <i className="sound"></i>
          <i className="settings"></i>
          <i className="full-screen"></i>
        </div>
    </div>
  );
};

export default ControlBar;