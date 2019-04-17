/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect, useCallback } from 'react';
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
import { InjectAuthOperations } from '../store/redux/auth/authOperations';
import { getCssProperties } from './utils/common';

const Overlay = (props) => {
  const { auth } = props;

  const [isOverlayOpen, setOverlayOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const [isForgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(true);

  const [scale, setScale] = useState(1);
  const [blackLineLeftRight, setBlackLineLeftRight] = useState(0);
  const [blackLineTopBottom, setBlackLineTopBottom] = useState(0);

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

  const closeAction = () => {
    if (
      isOverlayOpen &&
      !isLoginOpen &&
      !isRegisterOpen &&
      !isForgotPasswordOpen
    )
      actions.toggleOverlay();
    if (isLoginOpen) actions.toggleLogin();
    if (isRegisterOpen) actions.toggleRegister();
    if (isForgotPasswordOpen) actions.toggleForgotPassword();
  };

  const handleSignout = () => {
    props.signOut();
  };

  const resizeCb = useCallback(() => {
    const width = parseInt(getCssProperties('inner-overlay').width, 10);
    const originalWidth = 1000;

    const scaleFactor = width / originalWidth;

    setScale(scaleFactor);
    resetOverlayPosition();
  }, []);

  const resetOverlayPosition = useCallback(() => {
    let playerRatio = 0;
    const videoRatio = 16 / 9;

    const playerWidth = window.player.currentWidth();

    const playerHeight = window.player.currentHeight();

    playerRatio = playerWidth / playerHeight;

    if (playerRatio >= videoRatio) {
      // which means black lines at left and right
      const overlayHeight = playerHeight;
      const overlayWidth = overlayHeight * videoRatio;

      const blackLine = (playerWidth - overlayWidth) / 2;

      setBlackLineLeftRight(blackLine < 1 ? 0 : blackLine);
      setBlackLineTopBottom(0);
    } else {
      // which means black lines at top and bottom
      const overlayWidth = playerWidth;
      const overlayHeight = overlayWidth / videoRatio;

      const blackLine = (playerHeight - overlayHeight) / 2;

      setBlackLineTopBottom(blackLine < 1 ? 0 : blackLine);
      setBlackLineLeftRight(0);
    }
  });

  useEffect(() => {
    resizeCb();
    window.addEventListener('resize', resizeCb);
    window.addEventListener('fullscreenchange', resetOverlayPosition);
  }, []);

  const shadowBackground = {
    width: '100%',
    height: '100%',
    background:
      isOverlayOpen || isLoginOpen || isRegisterOpen || isForgotPasswordOpen
        ? '#0006'
        : '#0000',
    position: 'relative'
  };

  const overlayContainer = {
    position: 'absolute',
    top: blackLineTopBottom,
    right: blackLineLeftRight,
    bottom: blackLineTopBottom,
    left: blackLineLeftRight,
    transition: 'opacity 0.4',
    overflow: 'hidden'
  };

  return (
    <div id="overlay" style={overlayContainer}>
      <div id="inner-overlay" style={shadowBackground}>
        <div
          style={{
            transformOrigin: 0,
            transform: `scale(${scale})`
          }}>
          {isOverlayOpen && <Dialog json={dummyOverlay} actions={actions} />}

          {isLoginOpen && <Login json={dummyLogin} actions={actions} />}

          {isRegisterOpen && (
            <Register json={dummyRegister} actions={actions} />
          )}

          {isForgotPasswordOpen && (
            <ForgotPassword json={dummyForgotPassword} actions={actions} />
          )}
        </div>
        {isMenuOpen && (
          <div
            style={{
              position: 'fixed',
              bottom: 0,
              fontSize: '16px',
              color: '#000c'
            }}>
            <button onClick={actions.toggleLogin}>Open Login</button> |
            <button onClick={actions.toggleRegister}>Open Register</button> |
            <button onClick={actions.toggleForgotPassword}>
              Forgot Password
            </button>
            |
            {auth.uid && (
              <>
                <span> Logged in as: {auth.email} | </span>
                <button onClick={handleSignout}>Sign out</button>
              </>
            )}
          </div>
        )}
        {(isOverlayOpen ||
          isLoginOpen ||
          isRegisterOpen ||
          isForgotPasswordOpen) && (
          <span
            className="close-button"
            onClick={closeAction}
            role="button"
            tabIndex="-1">
            &times;
          </span>
        )}
        <Hotspot actions={actions} />
      </div>
    </div>
  );
};

export default InjectAuthOperations(Overlay, {
  selectActions: ({ signOut }) => ({ signOut }),
  selectProps: ({ auth }) => ({ auth })
});
