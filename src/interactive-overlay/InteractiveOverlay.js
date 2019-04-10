/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import './overlay.scss';
import Dialog from './components/Dialog/Dialog';
import Login from './login/Login';
import Register from './login/Register';
import ForgotPassword from './login/ForgotPassword';
import dummyOverlay from './dummyOverlay.json';
import dummyLogin from './dummyLogin.json';
import dummyRegister from './dummyRegister.json';
import dummyForgotPassword from './dummyForgotPassword.json';

const Overlay = () => {
  const [tagColor, setTagColor] = useState('#000000');
  const [isOverlayOpen, setOverlayOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const [isForgotPasswordOpen, setForgotPasswordOpen] = useState(false);

  const toggleOverlay = (toggle) => setOverlayOpen(toggle);
  const toggleLogin = (toggle) => setLoginOpen(toggle);
  const toggleRegister = (toggle) => setRegisterOpen(toggle);
  const toggleForgotPassword = (toggle) => setForgotPasswordOpen(toggle);

  const actions = {
    signIn: (url) => console.log(url),
    openLink: (url) => window.open(url, '_blank'),
    closeOverlay: () => toggleOverlay(false),
    openOverlay: () => toggleOverlay(true),
    toggleLogin: () => {
      toggleLogin(!isLoginOpen);
      toggleRegister(false);
      toggleForgotPassword(false);
    },
    toggleRegister: () => {
      toggleRegister(!isRegisterOpen);
      toggleLogin(false);
      toggleForgotPassword(false);
    },
    toggleForgotPassword: () => {
      toggleForgotPassword(!isForgotPasswordOpen);
      toggleLogin(false);
      toggleRegister(false);
    }
  };

  return (
    <>
      <div className="overlayContainer">
        {isOverlayOpen && (
          <Dialog
            json={dummyOverlay}
            onClose={() => {
              toggleOverlay(false);
              window.player.play();
              window.player.controlBar.show();
              const tag = document.querySelector('.tag');
              tag.classList.remove('hidden');
            }}
            actions={actions}
          />
        )}

        {isLoginOpen && (
          <Login
            json={dummyLogin}
            onClose={() => {
              toggleLogin(false);
              window.player.play();
              window.player.controlBar.show();
            }}
            actions={actions}
          />
        )}

        {isRegisterOpen && (
          <Register
            json={dummyRegister}
            onClose={() => {
              toggleRegister(false);
              window.player.play();
              window.player.controlBar.show();
            }}
            actions={actions}
          />
        )}

        {isForgotPasswordOpen && (
          <ForgotPassword
            json={dummyForgotPassword}
            onClose={() => {
              toggleForgotPassword(false);
              window.player.play();
              window.player.controlBar.show();
            }}
            actions={actions}
          />
        )}
        <div>
          <button
            onClick={() => {
              window.player.pause();
              window.player.controlBar.hide();
              toggleLogin(true);
            }}>
            Open Login
          </button>
          <button
            onClick={() => {
              window.player.pause();
              window.player.controlBar.hide();
              toggleRegister(true);
            }}>
            Open Register
          </button>
          <button
            onClick={() => {
              window.player.pause();
              window.player.controlBar.hide();
              toggleForgotPassword(true);
            }}>
            Forgot Password
          </button>
        </div>
        <div
          onClick={() => {
            window.player.pause();
            window.player.controlBar.hide();
            const tag = document.querySelector('.tag');
            tag.classList.add('hidden');
            toggleOverlay(true);
          }}
          role="button"
          tabIndex="-1"
          onMouseEnter={() => setTagColor('#00ACD8')}
          onMouseLeave={() => setTagColor('#000000')}
          className="tag"
          style={{
            width: '16.5256%',
            height: '21.0145%',
            position: 'absolute',
            display: 'block',
            visibility: 'visible',
            cursor: 'pointer'
          }}>
          <div
            className="tag-inner-box"
            style={{ width: '100%', height: '100%' }}>
            <div
              className="outer-circle"
              style={{
                left: '50%',
                top: '50%',
                width: '30px',
                height: '30px',
                position: 'absolute',
                marginLeft: '-20px',
                marginTop: '-15px',
                transition: 'all .3s'
              }}>
              <svg
                height="100%"
                version="1.1"
                width="100%"
                viewBox="0 0 30 30"
                preserveAspectRatio="xMinYMin"
                style={{ overflow: 'hidden', position: 'relative' }}>
                <defs style={{ WebkitTapHighlightColor: '#0000' }} />
                <circle
                  cx="15"
                  cy="15"
                  r="15"
                  fill={tagColor}
                  stroke="none"
                  style={{ WebkitTapHighlightColor: '#0000' }}
                />
                <path
                  fill="none"
                  stroke="#ffffff"
                  d="M15,7.5L15,22.5M7.5,15L22.5,15"
                  strokeWidth="3"
                  strokeLinecap="round"
                  style={{
                    WebkitTapHighlightColor: '#0000',
                    strokeLinecap: 'round'
                  }}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overlay;
