import React from 'react';
import ReactDOM from 'react-dom';
import videojs from 'video.js';
import SettingsMenu from './SettingsMenu';
import { Provider } from '../../context/playerContext';

const vjsComponent = videojs.getComponent('Component');

class vjsSettingsMenu extends vjsComponent {
  constructor(player, options) {
    super(player, options);

    player.ready(() => this.mount());
    this.on('dispose', () => this.unmount());
  }

  mount = () => {
    ReactDOM.render(
      <Provider value={{ player: this.player() }}>
        <SettingsMenu vjsComponent={this} />
      </Provider>,
      this.el()
    );
    document.addEventListener('click', this.handleMenuShow);
    this.player().on('statechanged', this.playerStateChanged);
    this.player().on('userinactive', this.userInactive);
  };

  unmount = () => {
    document.removeEventListener('click', this.handleMenuShow);
    this.player().off('statechanged', this.playerStateChanged);
    this.player().off('userinactive', this.userInactive);
    ReactDOM.unmountComponentAtNode(this.el());
  };

  isMenuRelatedElement = (element) => {
    const targetElement =
      element.tagName.toLowerCase() === 'button'
        ? element
        : element.parentElement;

    if (
      targetElement !== null &&
      (videojs.dom.hasClass(targetElement, 'vjs-settings-control') ||
        videojs.dom.hasClass(targetElement, 'vjs-menuitem') ||
        videojs.dom.hasClass(targetElement, 'vjs-panel-title'))
    ) {
      return true;
    }

    return false;
  };

  handleMenuShow = (event) => {
    if (this.isMenuRelatedElement(event.target)) {
      return;
    }

    this.player().setState({ settingsMenuOpened: false });
  };

  playerStateChanged = (event) => {
    const { settingsMenuOpened } = event.changes;

    if (!settingsMenuOpened) {
      return;
    }

    if (settingsMenuOpened.to) {
      this.show();
    } else {
      this.hide();
    }
  };

  userInactive = () => {
    if (!this.player().paused()) {
      this.player().setState({ settingsMenuOpened: false });
    }
  };

  createEl() {
    const el = super.createEl('div', {
      className: 'vjs-settings-menu vjs-hidden'
    });

    return el;
  }
}

videojs.registerComponent('vjsSettingsMenu', vjsSettingsMenu);

export default vjsSettingsMenu;
