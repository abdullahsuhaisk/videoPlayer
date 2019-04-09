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
    onReady
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

  return (
    <div>
      <div data-vjs-player>
        <video
          ref={videoRef}
          className="vjs-vibuy video-js"
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
  title: '',
  description: '',
  onReady: () => {}
};

export default Player;
