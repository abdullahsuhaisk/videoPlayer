import React from 'react';
import Overlay from '../Components/Overlay/Overlay';
import ControlBar from '../Components/ControlBar/ControlBar';
import SidebarShoppingCart from './SideBar/SidebarShoppingCart';
import PauseHeader from '../Components/PauseHeader/PauseHeader';

const Video = () => {
  return (
    <div className="videoContainer">
      <Overlay />
      <PauseHeader />
      {/* <SidebarShoppingCart /> */}
      <ControlBar />
    </div>
  );
};

export default Video;