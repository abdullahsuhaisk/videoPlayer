/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import './overlay.scss';
import Dialog from './components/Dialog/Dialog';
import Login from './login/NewLogin';
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

  // const action = (act) => {
  //   if (act && act.type === 'openLink') {
  //     window.open(act.value, '_blank');
  //   } else if (act && act.type === 'closeOverlay') {
  //     toggleOverlay(false);
  //   } else if (act && act.type === 'openOverlay') {
  //     toggleOverlay(false);
  //   } else if (act && act.type === 'toggleLogin') {
  //     toggleLogin(!isLoginOpen);
  //     toggleRegister(false);
  //     toggleForgotPassword(false);
  //   } else if (act && act.type === 'toggleRegister') {
  //     toggleRegister(!isRegisterOpen);
  //     toggleLogin(false);
  //     toggleForgotPassword(false);
  //   } else if (act && act.type === 'toggleForgotPassword') {
  //     toggleForgotPassword(!isForgotPasswordOpen);
  //     toggleLogin(false);
  //     toggleRegister(false);
  //   }
  // };

  // const widgetManager = (widgets) => {
  //   const children = [];
  //   for (let i = 0; i < widgets.length; i += 1) {
  //     const widget = widgets[i];

  //     if (widget.id === 'square') {
  //       children.push(
  //         <Square
  //           key={i}
  //           top={widget.settings.top}
  //           left={widget.settings.left}
  //           width={widget.settings.width}
  //           height={widget.settings.height}
  //           backgroundColor={widget.settings.backgroundColor}
  //           onClick={() => {}}
  //         />
  //       );
  //     } else if (widget.id === 'circle') {
  //       children.push(
  //         <Circle
  //           key={i}
  //           top={widget.settings.top}
  //           left={widget.settings.left}
  //           width={widget.settings.width}
  //           height={widget.settings.height}
  //           backgroundColor={widget.settings.backgroundColor}
  //           onClick={() => action(widget.settings.action)}
  //         />
  //       );
  //     } else if (widget.id === 'image') {
  //       children.push(
  //         <Image
  //           key={i}
  //           top={widget.settings.top}
  //           left={widget.settings.left}
  //           width={widget.settings.width}
  //           height={widget.settings.height}
  //           path={widget.settings.path}
  //           onClick={() => action(widget.settings.action)}
  //         />
  //       );
  //     } else if (widget.id === 'gallery') {
  //       children.push(
  //         <ImageGallery
  //           key={i}
  //           top={widget.settings.top}
  //           left={widget.settings.left}
  //           width={widget.settings.width}
  //           height={widget.settings.height}
  //           images={widget.settings.images}
  //           autoPlay={widget.settings.autoPlay}
  //           navigation={widget.settings.navigation}
  //           thumbnail={widget.settings.thumbnail}
  //         />
  //       );
  //     } else if (widget.id === 'text') {
  //       children.push(
  //         <Text
  //           key={i}
  //           top={widget.settings.top}
  //           left={widget.settings.left}
  //           text={widget.settings.text}
  //           font={widget.settings.font}
  //           fontSize={widget.settings.fontSize}
  //           bold={widget.settings.isBold ? 'bold' : ''}
  //           italic={widget.settings.isItalic ? 'italic' : ''}
  //           underline={widget.settings.isUnderlined ? 'underline' : ''}
  //           width={widget.settings.width}
  //           height={widget.settings.height}
  //           color={widget.settings.color}
  //           backgroundColor={widget.settings.backgroundColor}
  //           align={widget.settings.align}
  //         />
  //       );
  //     } else if (widget.id === 'button') {
  //       children.push(
  //         <Button
  //           key={i}
  //           text={widget.settings.text}
  //           top={widget.settings.top}
  //           left={widget.settings.left}
  //           width={widget.settings.width}
  //           height={widget.settings.height}
  //           font={widget.settings.font}
  //           fontSize={widget.settings.fontSize}
  //           bold={widget.settings.isBold ? 'bold' : ''}
  //           italic={widget.settings.isItalic ? 'italic' : ''}
  //           underline={widget.settings.isUnderlined ? 'underline' : ''}
  //           color={widget.settings.color}
  //           backgroundColor={widget.settings.backgroundColor}
  //           align={widget.settings.align}
  //           borderColor={widget.settings.borderColor}
  //           radius={widget.settings.radius}
  //           onClick={() => action(widget.settings.action)}
  //         />
  //       );
  //     } else if (widget.id === 'input') {
  //       children.push(
  //         <Input
  //           key={i}
  //           text={widget.settings.text}
  //           top={widget.settings.top}
  //           left={widget.settings.left}
  //           width={widget.settings.width}
  //           height={widget.settings.height}
  //           font={widget.settings.font}
  //           fontSize={widget.settings.fontSize}
  //           color={widget.settings.color}
  //           backgroundColor={widget.settings.backgroundColor}
  //           placeholder={widget.settings.placeholder}
  //           type={widget.settings.type}
  //         />
  //       );
  //     }
  //   }

  //   return children;
  // };

  // const dialogChildren = widgetManager(dummyOverlay.widgets);
  // const loginChildren = widgetManager(dummyLogin.widgets);
  // const registerChildren = widgetManager(dummyRegister.widgets);
  // const forgotPasswordChildren = widgetManager(dummyForgotPassword.widgets);

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
