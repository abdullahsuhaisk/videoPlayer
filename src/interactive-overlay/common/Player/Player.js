import React from "react";
import "../../overlay.scss";
import Overlay from "../../InteractiveOverlay";
import "video.js/dist/video-js.css";
import videojs from "video.js";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const { width, height, controls, poster, sources, loop, muted, aspectRatio, autoplay, fluid, volume, onReady } = this.props;

    this.player = window.player = videojs(this.videoRef.current, {
      width,
      height,
      controls,
      poster,
      sources,
      loop,
      muted,
      autoplay: autoplay ? videojs.browser.IS_IOS || videojs.browser.IS_ANDROID ? "muted" : true : false,
      aspectRatio,
      fluid,
      liveui: true
    });

    this.player.ready(() => {
      if (volume) {
        this.volume(volume);
      }

      if (onReady) {
        onReady();
      }
    });

    this.hideBigPlayButton();
  }

  hideBigPlayButton() {
    const bigPlayButton = this.player.getChild("bigPlayButton");

    if (bigPlayButton) {
      bigPlayButton.hide();
    }
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  volume(value) {
    if (this.player) {
      return this.player.volume(value);
    }
  }

  render() {
    const playsInline = videojs.browser.TOUCH_ENABLED ? { playsInline: true } : {};

    return (
      <div className="playerContainer">
        <div data-vjs-player>
          <video ref={this.videoRef} className="video-js" {...playsInline} />
          <Overlay />
        </div>
      </div>
    );
  }
}

export default Player;
