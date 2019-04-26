import React from 'react';
import ModalDialog from '../ModalDialog/ModalDialog';
import Login from '../Login/Login';
import { InjectAuthOperations } from '../../../store/redux/auth/authOperations';
import Register from '../Register/Register';

const ModalOverlay = (props) => {
  const {
    auth,
    showLogin,
    onShowLogin,
    showRegister,
    onShowRegister,
    showForgotPassword,
    onShowForgotPassword
  } = props;

  return (
    <div
      className="vibuy--modal-overlay"
      style={{ position: 'absolute', width: '100%', height: '100%' }}>
      {(showLogin && (
        <ModalDialog onClose={() => onShowLogin(false)}>
          <Login
            onSwitchToRegister={() => {
              onShowRegister(true);
              onShowLogin(false);
            }}
            onSwitchToForgotPassword={() => {
              onShowForgotPassword(true);
              onShowLogin(false);
            }}
          />
        </ModalDialog>
      )) ||
        // ||
        //   (hotspotModalOpened && (
        //     <ModalDialog onClose={() => setHotspotModalOpened(false)}>
        //       <SafeArea>
        //         <Scaler>
        //           <WidgetsRenderer data={dummyOverlay} />
        //         </Scaler>
        //       </SafeArea>
        //     </ModalDialog>
        //   ))
        (showRegister && (
          <ModalDialog onClose={() => onShowRegister(false)}>
            <Register
              onSwitchToLogin={() => {
                onShowLogin(true);
                onShowRegister(false);
              }}
            />
          </ModalDialog>
        ))
      // ||
      // (showForgotPassword && (
      //   <ModalDialog onClose={() => onShowForgotPassword(false)}>
      //     <ForgotPassword
      //       onSwitchToLogin={() => {
      //         onShowLogin(true);
      //         onShowForgotPassword(false);
      //       }}
      //     />
      //   </ModalDialog>
      // ))
      }
    </div>
  );
};

export default InjectAuthOperations(ModalOverlay, {
  selectProps: ({ auth, showLogin, showRegister, showForgotPassword }) => ({
    auth,
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
