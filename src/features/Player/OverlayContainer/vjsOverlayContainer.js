import videojs from 'video.js';

const vjsComponent = videojs.getComponent('Component');

class vjsOverlayContainer extends vjsComponent {
  constructor(player, options) {
    super(player, options);

    this.addClass('vjs-overlay-container');
    this.el().style.position = 'relative';
    this.el().style.width = '100%';
    this.el().style.height = '100%';
    this.el().style.pointerEvents = 'none';
  }
}

videojs.registerComponent('vjsOverlayContainer', vjsOverlayContainer);

export default vjsOverlayContainer;
