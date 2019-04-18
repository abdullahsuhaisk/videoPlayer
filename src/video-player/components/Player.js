/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import videojs from 'video.js';
import 'videojs-dock';
import './player.scss';
import './SettingsButton/vjs-settings-button';
import './SettingsMenu/vjs-settings-menu';
import '../../../node_modules/videojs-dock/dist/videojs-dock.css';
import './Tooltip/vjs-tooltip';
import { InjectPlayerOperations } from '../../store/redux/player/playerOperations';

window.videojs = videojs;

const Player = (props) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const { i18n } = useTranslation();

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
    title,
    description,
    playing,
    onReady,
    onPlay,
    onPause
  } = props;

  useEffect(() => {
    videojs.addLanguage(
      i18n.language,
      i18n.getResource(i18n.language, i18n.options.defaultNS[0], 'player')
    );
  }, []);

  useEffect(() => {
    let isAutoplay = false;

    if (autoplay) {
      isAutoplay =
        videojs.browser.IS_IOS || videojs.browser.IS_ANDROID ? 'muted' : true;
    }

    playerRef.current = videojs(videoRef.current, {
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
      language: i18n.language
    });

    window.player = playerRef.current;

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
      }
    };
  }, []);

  useEffect(() => {
    playerRef.current.ready(() => {
      if (volume) {
        playerRef.current.volume(volume);
      }

      if (onReady) {
        onReady();
      }
    });
  }, []);

  useEffect(() => {
    const { controlBar } = playerRef.current;

    if (controlBar) {
      controlBar.settingsButton = controlBar.addChild(
        'vjsSettingsButton',
        {},
        controlBar.children().length - 1
      );
      playerRef.current.settingsMenu = playerRef.current.addChild(
        'vjsSettingsMenu'
      );
    }
  }, []);

  useEffect(() => {
    if (title || description) {
      playerRef.current.dock({
        title,
        description
      });
    }
  }, []);

  useEffect(() => {
    const {
      playToggle,
      volumePanel,
      settingsButton,
      fullscreenToggle
    } = playerRef.current.controlBar;
    playerRef.current.tooltip({
      controls: [playToggle, volumePanel, settingsButton, fullscreenToggle]
    });
  }, []);

  useEffect(() => {
    playerRef.current.on('statechanged', (event) => {
      const { settingsMenuOpened } = event.changes;

      if (!settingsMenuOpened) {
        return;
      }

      playerRef.current.toggleClass(
        'vjs-settings-opened',
        settingsMenuOpened.to
      );
    });

    playerRef.current.on('play', () => {
      onPlay();
    });

    playerRef.current.on('pause', () => {
      onPause();
    });
  }, []);

  useEffect(() => {
    if (playerRef.current) {
      if (playing) {
        playerRef.current.play();
      } else {
        playerRef.current.pause();
      }
    }
  }, [playing]);

  return (
    <div
      className="vibuy--player-wrapper"
      style={{
        width: typeof width === 'string' ? width : `${width}px`,
        height: typeof height === 'string' ? height : `${height}px`
      }}>
      <div
        data-vjs-player
        className="vibuy--player"
        style={{ width: '100%', height: '100%' }}>
        <video
          ref={videoRef}
          className="vibuy--video vjs-vibuy video-js"
          crossOrigin="anonymous"
          playsInline={videojs.browser.TOUCH_ENABLED ? true : undefined}
        />
      </div>
    </div>
  );
};

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
  title: PropTypes.string,
  description: PropTypes.string,
  playing: PropTypes.bool,
  onReady: PropTypes.func,
  onPlay: PropTypes.func,
  onPause: PropTypes.func
};

Player.defaultProps = {
  width: '100%',
  height: '100%',
  controls: true,
  poster: '',
  loop: false,
  muted: false,
  volume: 0.5,
  autoplay: false,
  aspectRatio: undefined,
  fluid: false,
  title: '',
  description: '',
  playing: false,
  onReady: () => {},
  onPlay: () => {},
  onPause: () => {}
};

export default InjectPlayerOperations(Player, {
  selectProps: ({ playing }) => ({ playing }),
  selectActions: ({ onPlay, onPause }) => ({ onPlay, onPause })
});
