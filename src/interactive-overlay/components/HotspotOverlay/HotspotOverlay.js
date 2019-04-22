import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import SafeArea from '../SafeArea/SafeArea';
import Hotspot from '../Hotspot';

const HotspotOverlay = (props) => {
  const { children } = props;
  const containerRef = useRef(null);

  const actions = {
    toggleOverlay: () => {}
  };

  return (
    <div
      className="vibuy--hotspot-overlay"
      style={{ position: 'absolute', width: '100%', height: '100%' }}
      ref={containerRef}>
      <SafeArea containerRef={containerRef} aspectRatio={16 / 9}>
        <Hotspot actions={actions} />
        {children}
      </SafeArea>
    </div>
  );
};

HotspotOverlay.propTypes = {
  children: PropTypes.node
};

HotspotOverlay.defaultProps = {
  children: null
};

export default HotspotOverlay;
