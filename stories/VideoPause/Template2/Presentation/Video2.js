import React from 'react';
import Overlay from '../Components/Overlay/Overlay';
import ControlBar from '../Components/ControlBar/ControlBar';
import SidebarWatchlist from './SideBar/SidebarWatchlist';

const Video2 = () => {
  return (
    <div className="videoContainer">
      <Overlay />
      <SidebarWatchlist />
      <ControlBar />
    </div>
  );
};

export default Video2;