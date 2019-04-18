import videojs from 'video.js';

const vjsComponent = videojs.getComponent('Component');

class vjsOverlayContainer extends vjsComponent {
  constructor(player, options) {
    super(player, options);

    this.addClass('vjs-overlay-container');
  }
}

videojs.registerComponent('vjsOverlayContainer', vjsOverlayContainer);

export default vjsOverlayContainer;
