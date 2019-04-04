import React, { useState } from 'react';
import './overlay.scss';
import Square from './common/Square/Square';
import Circle from './common/Circle/Circle';
import Text from './common/Text/Text';
import Image from './common/Image/Image';
import ImageGallery from './common/ImageGallery/ImageGallery';
import Button from './common/Button/Button';
import Input from './common/Input/Input';
import Dialog from './common/Dialog/Dialog';
import Login from './login/Login';
import Register from './login/Register';
import dummyOverlay from './dummyOverlay.json';
import dummyLogin from './dummyLogin.json';
import dummyRegister from './dummyRegister.json';

const Overlay = () => {
  const [tagColor, setTagColor] = useState('#000000');
  const [isOverlayOpen, setOverlayOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  const toggleOverlay = (toggle) => setOverlayOpen(toggle);
  const toggleLogin = (toggle) => setLoginOpen(toggle);
  const toggleRegister = (toggle) => setRegisterOpen(toggle);

  const action = (action) => {
    if (action && action.type === 'openLink') {
      window.open(action.value, '_blank');
    } else if (action && action.type === 'closeOverlay') {
      toggleOverlay(false);
    } else if (action && action.type === 'openOverlay') {
      toggleOverlay(false);
    } else if (action && action.type === 'toggleLogin') {
      toggleLogin(!isLoginOpen);
      toggleRegister(false);
    } else if (action && action.type === 'toggleRegister') {
      toggleRegister(!isRegisterOpen);
      toggleLogin(false);
    }
  };

  const widgetManager = (widgets) => {
    let children = [];

    for (let i = 0; i < widgets.length; i++) {
      const widget = widgets[i];

      if (widget.type === 'square') {
        children.push(
          <Square
            key={i}
            top={widget.settings.top}
            left={widget.settings.left}
            width={widget.settings.width}
            height={widget.settings.height}
            backgroundColor={widget.settings.backgroundColor}
            onClick={() => action(widget.settings.action)}
          />
        );
      } else if (widget.type === 'circle') {
        children.push(
          <Circle
            key={i}
            top={widget.settings.top}
            left={widget.settings.left}
            width={widget.settings.width}
            height={widget.settings.height}
            backgroundColor={widget.settings.backgroundColor}
            onClick={() => action(widget.settings.action)}
          />
        );
      } else if (widget.type === 'image') {
        children.push(
          <Image
            key={i}
            top={widget.settings.top}
            left={widget.settings.left}
            width={widget.settings.width}
            height={widget.settings.height}
            path={widget.settings.path}
            onClick={() => action(widget.settings.action)}
          />
        );
      } else if (widget.type === 'gallery') {
        children.push(
          <ImageGallery
            key={i}
            top={widget.settings.top}
            left={widget.settings.left}
            width={widget.settings.width}
            height={widget.settings.height}
            images={widget.settings.images}
            autoPlay={widget.settings.autoPlay}
            navigation={widget.settings.navigation}
            thumbnail={widget.settings.thumbnail}
          />
        );
      } else if (widget.type === 'text') {
        children.push(
          <Text
            key={i}
            top={widget.settings.top}
            left={widget.settings.left}
            text={widget.settings.text}
            font={widget.settings.font}
            fontSize={widget.settings.fontSize}
            bold={widget.settings.isBold ? 'bold' : ''}
            italic={widget.settings.isItalic ? 'italic' : ''}
            underline={widget.settings.isUnderlined ? 'underline' : ''}
            width={widget.settings.width}
            height={widget.settings.height}
            color={widget.settings.color}
            backgroundColor={widget.settings.backgroundColor}
            align={widget.settings.align}
          />
        );
      } else if (widget.type === 'button') {
        children.push(
          <Button
            key={i}
            text={widget.settings.text}
            top={widget.settings.top}
            left={widget.settings.left}
            width={widget.settings.width}
            height={widget.settings.height}
            font={widget.settings.font}
            fontSize={widget.settings.fontSize}
            bold={widget.settings.isBold ? 'bold' : ''}
            italic={widget.settings.isItalic ? 'italic' : ''}
            underline={widget.settings.isUnderlined ? 'underline' : ''}
            color={widget.settings.color}
            backgroundColor={widget.settings.backgroundColor}
            align={widget.settings.align}
            borderColor={widget.settings.borderColor}
            radius={widget.settings.radius}
            onClick={() => action(widget.settings.action)}
          />
        );
      } else if (widget.type === 'input') {
        children.push(
          <Input
            key={i}
            text={widget.settings.text}
            top={widget.settings.top}
            left={widget.settings.left}
            width={widget.settings.width}
            height={widget.settings.height}
            font={widget.settings.font}
            fontSize={widget.settings.fontSize}
            color={widget.settings.color}
            backgroundColor={widget.settings.backgroundColor}
            placeholder={widget.settings.placeholder}
            type={widget.settings.type}
          />
        );
      }
    }

    return children;
  };

  const dialogChildren = widgetManager(dummyOverlay.overlayWidgets);
  const loginChildren = widgetManager(dummyLogin.loginWidgets);
  const registerChildren = widgetManager(dummyRegister.registerWidgets);

  return (
    <>
      <div className="overlayContainer">
        {isOverlayOpen && (
          <Dialog
            onClose={() => {
              toggleOverlay(false);
              window.player.play();
              window.player.controlBar.show();
              const tag = document.querySelector('.tag');
              tag.classList.remove('hidden');
            }}>
            {dialogChildren}
          </Dialog>
        )}

        {isLoginOpen && (
          <Login
            onClose={() => {
              toggleLogin(false);
              window.player.play();
              window.player.controlBar.show();
            }}>
            {loginChildren}
          </Login>
        )}

        {isRegisterOpen && (
          <Register
            onClose={() => {
              toggleRegister(false);
              window.player.play();
              window.player.controlBar.show();
            }}>
            {registerChildren}
          </Register>
        )}
        <div>
          <button
            onClick={() => {
              window.player.pause();
              window.player.controlBar.hide();
              const tag = document.querySelector('.tag');
              tag.classList.add('hidden');
              toggleLogin(true);
            }}>
            Open Login
          </button>
          <button
            onClick={() => {
              window.player.pause();
              window.player.controlBar.hide();
              const tag = document.querySelector('.tag');
              tag.classList.add('hidden');
              toggleRegister(true);
            }}>
            Open Register
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
          onMouseEnter={() => setTagColor('#00ACD8')}
          onMouseLeave={() => setTagColor('#000000')}
          className="tag static-tag static-3 tag-type-0 hotspot-animation"
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
