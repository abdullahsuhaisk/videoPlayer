import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import SafeArea from '../SafeArea/SafeArea';
import ModalDialog from '../ModalDialog/ModalDialog';
import WidgetsRenderer from '../WidgetsRenderer/WidgetsRenderer';
import dummyOverlayData from '../../dummyOverlay';
import Login from '../Login/Login';

const ModalOverlay = (props) => {
  const { children } = props;
  const containerRef = useRef(null);
  const [hotspotModalOpened, setHotspotModalOpened] = useState(true);

  const actions = {
    openLink: (url) => window.open(url, '_blank')
  };

  return (
    <div
      className="vibuy--modal-overlay"
      style={{ position: 'absolute', width: '100%', height: '100%' }}
      ref={containerRef}>
      <ModalDialog
        show={hotspotModalOpened}
        onClose={() => setHotspotModalOpened(false)}>
        <SafeArea aspectRatio={16 / 9} containerRef={containerRef}>
          <WidgetsRenderer data={dummyOverlayData} actions={actions} />
          {children}
        </SafeArea>
      </ModalDialog>
    </div>
  );
};

ModalOverlay.propTypes = {
  children: PropTypes.node
};

ModalOverlay.defaultProps = {
  children: null
};

export default ModalOverlay;
