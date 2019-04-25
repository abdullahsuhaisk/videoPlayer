import React, { useState } from 'react';
import ModalDialog from '../ModalDialog/ModalDialog';
import Login from '../Login/Login';
import SafeArea from '../SafeArea/SafeArea';
import Scaler from '../Scaler/Scaler';
import WidgetsRenderer from '../WidgetsRenderer/WidgetsRenderer';
import dummyOverlay from '../../dummyOverlay.json';

const ModalOverlay = (props) => {
  const [loginModalOpened, setLoginModalOpened] = useState(false);
  const [hotspotModalOpened, setHotspotModalOpened] = useState(false);

  return (
    <div
      className="vibuy--modal-overlay"
      style={{ position: 'absolute', width: '100%', height: '100%' }}>
      {(loginModalOpened && (
        <ModalDialog onClose={() => setLoginModalOpened(false)}>
          <Login />
        </ModalDialog>
      )) ||
        (hotspotModalOpened && (
          <ModalDialog onClose={() => setHotspotModalOpened(false)}>
            <SafeArea>
              <Scaler>
                <WidgetsRenderer data={dummyOverlay} />
              </Scaler>
            </SafeArea>
          </ModalDialog>
        ))}
    </div>
  );
};

export default ModalOverlay;
