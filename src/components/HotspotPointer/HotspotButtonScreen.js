import React from 'react';
import HotspotButton from './HotspotButton';

const HotspotButtonScreen = ({ hotspots, setProductIdForDetail }) => {
  if (hotspots)
    return hotspots.map((hotspot) => {
      if (hotspot.fixedPosition === null) return null;
      const top = `${hotspot.fixedPosition.y * 100}%`;
      const left = `${hotspot.fixedPosition.x * 100}%`;
      return (
        <HotspotButton
          top={top}
          left={left}
          key={hotspot.id}
          ProductId={hotspot.productId}
          setProductIdForDetail={setProductIdForDetail}
        />
      );
    });
  return null;
};

HotspotButtonScreen.defaultProps = {
  top: '50%',
  left: '50%'
};

export default HotspotButtonScreen;
