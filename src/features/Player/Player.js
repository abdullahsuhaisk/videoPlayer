/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import videojs from 'video.js';
import './OverlayContainer/vjsOverlayContainer';
import 'videojs-dock';
import './player.scss';
import './SettingsButton/vjs-settings-button';
import './SettingsMenu/vjs-settings-menu';
import 'videojs-dock/dist/videojs-dock.css';
import './Tooltip/vjs-tooltip';
import { InjectPlayerProps } from '../../store/redux/providers';
import 'videojs-markers';

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
    seek,
    seekTo,
    ready,
    play,
    pause,
    overlayContainerReady,
    currentTimeUpdate
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
    const timeUpdateCb = () => {
      currentTimeUpdate(playerRef.current.currentTime());
    };

    playerRef.current.ready(() => {
      if (volume) {
        playerRef.current.volume(volume);
      }

      playerRef.current.on('timeupdate', timeUpdateCb);
      ready();
    });

    return () => {
      playerRef.current.off('timeupdate', timeUpdateCb);
    };
  }, []);

  useEffect(() => {
    playerRef.current.overlayContainer = playerRef.current.addChild(
      'vjsOverlayContainer',
      {}
    );
    overlayContainerReady(playerRef.current.overlayContainer.el().className);
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
      play();
    });

    playerRef.current.on('pause', () => {
      pause();
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

  useEffect(() => {
    if (playerRef.current && seekTo !== -1) {
      playerRef.current.currentTime(seekTo);
      seek(-1);
    }
  }, [seekTo]);

  // TODO: Setup markers when tags data is ready
  useEffect(() => {
    playerRef.current.markers({
      markerStyle: {
        width: '.3em',
        height: '.3em',
        'background-color': '#fff',
        'border-radius': '50%'
      },
      markerTip: {
        display: true,
        text: (marker) => marker.text || ''
      },
      markers: [
        {
          time: 32.5,
          text: 'marker 1'
        },
        {
          time: 98.2,
          text: 'marker 2'
        }
      ]
    });
  }, []);

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
  ready: PropTypes.func,
  play: PropTypes.func,
  pause: PropTypes.func,
  overlayContainerReady: PropTypes.func,
  currentTimeUpdate: PropTypes.func
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
  ready: () => {},
  play: () => {},
  pause: () => {},
  overlayContainerReady: () => {},
  currentTimeUpdate: () => {}
};

export default InjectPlayerProps({
  selectProps: ({ playing, seekTo }) => ({ playing, seekTo }),
  selectActions: ({
    ready,
    play,
    pause,
    seek,
    overlayContainerReady,
    currentTimeUpdate
  }) => ({
    ready,
    play,
    pause,
    seek,
    overlayContainerReady,
    currentTimeUpdate
  })
})(Player);
