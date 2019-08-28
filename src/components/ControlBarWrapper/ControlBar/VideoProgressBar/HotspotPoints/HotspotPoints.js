import React from 'react';
import HotspotPoint from './HotspotPoint/HotspotPoint';

const HotspotPoints = ({ videoPlayer }) => {
  const hotspotPointHandler = (time) => {
    if (videoPlayer && videoPlayer.duration() > 0) {
      return (time * 100) / videoPlayer.duration();
    }
    return 0;
  };
  return (
    <>
      <HotspotPoint position={hotspotPointHandler(25)} />
      <HotspotPoint position={hotspotPointHandler(50)} />
      <HotspotPoint position={hotspotPointHandler(80)} />
      <HotspotPoint position={hotspotPointHandler(150)} />
      <HotspotPoint position={hotspotPointHandler(190)} />
    </>
  );
};

export default HotspotPoints;
