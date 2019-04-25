import React, { useState } from 'react';
import ModalDialog from '../ModalDialog/ModalDialog';
import Login from '../Login/Login';
import SafeArea from '../SafeArea/SafeArea';
import Scaler from '../Scaler/Scaler';
import WidgetsRenderer from '../WidgetsRenderer/WidgetsRenderer';
import dummyOverlay from '../../dummyOverlay.json';
import { InjectAuthOperations } from '../../../store/redux/auth/authOperations';
import Register from '../Register/Register';

const ModalOverlay = (props) => {
  const {
    showLogin,
    onShowLogin,
    showRegister,
    onShowRegister,
    showForgotPassword,
    onShowForgotPassword
  } = props;
  const [hotspotModalOpened, setHotspotModalOpened] = useState(false);

  return (
    <div
      className="vibuy--modal-overlay"
      style={{ position: 'absolute', width: '100%', height: '100%' }}>
      {(showLogin && (
        <ModalDialog onClose={() => onShowLogin(false)}>
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
        )) ||
        (showRegister && (
          <ModalDialog onClose={() => onShowRegister(false)}>
            <Register />
          </ModalDialog>
        ))}
    </div>
  );
};

export default InjectAuthOperations(ModalOverlay, {
  selectProps: ({ showLogin, showRegister, showForgotPassword }) => ({
    showLogin,
    showRegister,
    showForgotPassword
  }),
  selectActions: ({ onShowLogin, onShowRegister, onShowForgotPassword }) => ({
    onShowLogin,
    onShowRegister,
    onShowForgotPassword
  })
});
