/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import './overlay.scss';
import Dialog from './components/Dialog';
import Hotspot from './components/Hotspot';
import Login from './authantications/Login';
import Register from './authantications/Register';
import ForgotPassword from './authantications/ForgotPassword';
import dummyOverlay from './dummyOverlay.json';
import dummyLogin from './dummyLogin.json';
import dummyRegister from './dummyRegister.json';
import dummyForgotPassword from './dummyForgotPassword.json';

const Overlay = () => {
  const [isOverlayOpen, setOverlayOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const [isForgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(true);

  const actions = {
    openLink: (url) => window.open(url, '_blank'),
    toggleOverlay: () => {
      setMenuOpen(isOverlayOpen);
      if (isOverlayOpen) play();
      else pause();
      setOverlayOpen(!isOverlayOpen);
    },
    toggleLogin: () => {
      setMenuOpen(isLoginOpen);
      if (isLoginOpen) play();
      else pause();
      setLoginOpen(!isLoginOpen);
      setRegisterOpen(false);
      setForgotPasswordOpen(false);
    },
    toggleRegister: () => {
      setMenuOpen(isRegisterOpen);
      if (isRegisterOpen) play();
      else pause();
      setRegisterOpen(!isRegisterOpen);
      setLoginOpen(false);
      setForgotPasswordOpen(false);
    },
    toggleForgotPassword: () => {
      setMenuOpen(isForgotPasswordOpen);
      if (isForgotPasswordOpen) play();
      else pause();
      setForgotPasswordOpen(!isForgotPasswordOpen);
      setLoginOpen(false);
      setRegisterOpen(false);
    }
  };

  const pause = () => {
    window.player.pause();
    window.player.controlBar.hide();
    const tag = document.querySelector('.tag');
    tag.classList.add('hidden');
  };

  const play = () => {
    window.player.play();
    window.player.controlBar.show();
    const tag = document.querySelector('.tag');
    tag.classList.remove('hidden');
  };

  return (
    <>
      <div className="overlayContainer">
        {isOverlayOpen && <Dialog json={dummyOverlay} actions={actions} />}

        {isLoginOpen && <Login json={dummyLogin} actions={actions} />}

        {isRegisterOpen && <Register json={dummyRegister} actions={actions} />}

        {isForgotPasswordOpen && (
          <ForgotPassword json={dummyForgotPassword} actions={actions} />
        )}

        {isMenuOpen && (
          <div
            style={{
              position: 'fixed',
              bottom: 0,
              fontSize: '16px',
              color: '#000c'
            }}>
            <button onClick={actions.toggleLogin}>Open Login</button>
            <button onClick={actions.toggleRegister}>Open Register</button>
            <button onClick={actions.toggleForgotPassword}>
              Forgot Password
            </button>
          </div>
        )}
        <Hotspot actions={actions} />
      </div>
    </>
  );
};

export default Overlay;
