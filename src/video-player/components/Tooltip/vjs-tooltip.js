import videojs from 'video.js';

const Plugin = videojs.getPlugin('plugin');

class Tooltip extends Plugin {
  constructor(player, options) {
    super(player, options);
    this.options = options;
    this.addTooltipClass();
  }

  addTooltipClass() {
    this.options.controls.forEach((controlBarComponent) => {
      const el = controlBarComponent.el();
      const controlTextEl = el.getElementsByClassName('vjs-control-text');
      if (controlTextEl.length > 0) {
        videojs.dom.addClass(controlTextEl[0], 'vjs-tooltip');
      }
    });
  }

  removeTooltipClass() {
    this.options.controls.forEach((element) => {
      const controlTextElement = element
        .el()
        .getElementsByClassName('vjs-control-text');
      if (controlTextElement.length > 0) {
        videojs.dom.removeClass(controlTextElement[0], 'vjs-tooltip');
      }
    });
  }

  dispose() {
    this.removeTooltipClass();
    super.dispose();
  }
}

videojs.registerPlugin('tooltip', Tooltip);
export default Tooltip;
