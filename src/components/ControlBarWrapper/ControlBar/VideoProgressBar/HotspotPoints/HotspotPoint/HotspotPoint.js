import React from 'react';
import { HotspotPointWrapper } from './HotspotPoints.style';

const HotspotPoint = ({ position }) => {
  return (
    <HotspotPointWrapper position={position}>
      <div className="HotspotPoint"></div>
    </HotspotPointWrapper>
  );
};

export default HotspotPoint;
