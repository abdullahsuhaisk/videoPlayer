/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import PropTypes from 'prop-types';
import videojs from 'video.js';
import './player.scss';
import './SettingsButton/vjs-settings-button';
import './SettingsMenu/vjs-settings-menu';

window.videojs = videojs;

class Player extends React.Component {
  static availableLanguages = ['en', 'tr', 'es'];

  static defaultLanguage = 'en';

  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  async componentDidMount() {
    const {
      width,
      height,
      controls,
      poster,
      sources,
      loop,
      muted,
      aspectRatio,
      autoplay,
      fluid,
      volume,
      onReady
    } = this.props;

    const language = await this.addLanguage();
    let isAutoplay = false;

    if (autoplay) {
      isAutoplay =
        videojs.browser.IS_IOS || videojs.browser.IS_ANDROID ? 'muted' : true;
    }

    this.player = videojs(this.videoRef.current, {
      width,
      height,
      controls,
      poster,
      sources,
      loop,
      muted,
      autoplay: isAutoplay,
      aspectRatio,
      fluid,
      responsive: true,
      liveui: true,
      textTrackSettings: false,
      controlBar: {
        playbackRateMenuButton: false,
        subsCapsButton: false,
        descriptionsButton: false,
        chaptersButton: false,
        audioTrackButton: false
      },
      playbackRates: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
      language
    });

    window.player = this.player;

    this.addChildComponents();

    this.player.ready(() => {
      if (volume) {
        this.volume(volume);
      }

      if (onReady) {
        onReady();
      }
    });

    // this.hideBigPlayButton();
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  getLanguage() {
    const { language } = this.props;
    const userLang =
      language ||
      navigator.language ||
      navigator.browserLanguage ||
      navigator.userLanguage;

    return Player.availableLanguages.includes(userLang)
      ? userLang
      : Player.defaultLanguage;
  }

  addLanguage() {
    return new Promise((resolve) => {
      const language = this.getLanguage();

      if (language !== Player.defaultLanguage) {
        videojs.xhr(
          {
            method: 'GET',
            uri: `${process.env.REACT_APP_BASE_URL}/lang/${language}.json`,
            headers: {
              'Content-Type': 'application/json'
            }
          },
          (error, result) => {
            if (!error) {
              try {
                const languageData = JSON.parse(result.body);
                videojs.addLanguage(language, languageData);
                resolve(language);
              } catch (err) {
                resolve(Player.defaultLanguage);
              }
            } else {
              resolve(Player.defaultLanguage);
            }
          }
        );
      } else {
        resolve(Player.defaultLanguage);
      }
    });
  }

  addChildComponents() {
    const { controlBar } = this.player;

    if (controlBar) {
      controlBar.settingsButton = controlBar.addChild(
        'vjsSettingsButton',
        {},
        controlBar.children().length - 1
      );
      this.player.settingsMenu = this.player.addChild('vjsSettingsMenu');
    }
  }

  hideBigPlayButton() {
    const bigPlayButton = this.player.getChild('bigPlayButton');

    if (bigPlayButton) {
      bigPlayButton.hide();
    }
  }

  volume(value) {
    if (this.player) {
      return this.player.volume(value);
    }

    return value;
  }

  render() {
    return (
      <div>
        <div data-vjs-player>
          <video
            ref={this.videoRef}
            className="vjs-vibuy video-js"
            crossOrigin="anonymous"
            playsInline={videojs.browser.TOUCH_ENABLED ? true : undefined}
          />
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  controls: PropTypes.bool,
  poster: PropTypes.string,
  sources: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      type: PropTypes.oneOf([
        'video/mp4',
        'video/webm',
        'application/x-mpegURL',
        'application/vnd.apple.mpegURL',
        'application/dash+xml'
      ]).isRequired
    })
  ).isRequired,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  volume: PropTypes.number,
  autoplay: PropTypes.bool,
  aspectRatio: PropTypes.oneOf([undefined, '16:9', '4:3']),
  fluid: PropTypes.bool,
  language: PropTypes.oneOf(Player.availableLanguages),
  onReady: PropTypes.func
};

Player.defaultProps = {
  width: 800,
  height: 450,
  controls: true,
  poster: '',
  loop: false,
  muted: false,
  volume: 0.5,
  autoplay: false,
  aspectRatio: undefined,
  fluid: false,
  language: 'en',
  onReady: () => {}
};

export default Player;
