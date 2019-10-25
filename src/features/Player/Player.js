/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import videojs from 'video.js';
// import 'videjsmarker';
import './player.scss';
import './SettingsButton/vjs-settings-button';
import 'videojs-landscape-fullscreen';
// import './SettingsMenu/vjs-settings-menu';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import './OverlayContainer/vjsOverlayContainer';
import { PLAYER } from '../../common/constants';
// import { getProdLinkUniqueId } from '../../hooks/ProdLinkHook';

// TODO: remove this when browser console debug is not necessary
window.videojs = videojs;

const GET_PLAYER = gql`
  query getPlayerForPlayer {
    player @client {
      playingState
      seekTo
    }
  }
`;

// const GET_HOTSPOTS = gql`
//   query getHotspotsForPlayer($prodLinkId: Int, $prodLinkUniqueId: String) {
//     prodLink(prodLinkId: $prodLinkId, prodLinkUniqueId: $prodLinkUniqueId) {
//       id
//       uniqueId
//       hotSpots {
//         id
//         in
//       }
//     }
//   }
// `;

const Player = ({ width, height, poster, sources }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const apolloClientRef = useRef(null);
  const { i18n } = useTranslation();
  // const prodLinkUniqueId = getProdLinkUniqueId();

  useEffect(() => {
    videojs.addLanguage(
      i18n.language,
      i18n.getResource(i18n.language, i18n.options.defaultNS[0], 'player')
    );
  }, []);

  useEffect(() => {
    playerRef.current = videojs(videoRef.current, {
      // poster,
      controls: false,
      sources,
      responsive: true,
      liveui: true,
      textTrackSettings: false,
      controlBar: {
        playbackRateMenuButton: true,
        subsCapsButton: true,
        descriptionsButton: true,
        chaptersButton: true,
        audioTrackButton: true
      },
      playbackRates: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
      language: i18n.language,
      nativeVideoTracks: false
    });

    // TODO: remove this when browser console debug is not necessary
    window.player = playerRef.current;

    return () => {
      playerRef.current.dispose();
    };
  }, []);

  useEffect(() => {
    // console.log(playerRef.current);
    playerRef.current.landscapeFullscreen({
      fullscreen: {
        enterOnRotate: true, // Enter fullscreen mode on rotating the device in landscape
        alwaysInLandscapeMode: true, // Always enter fullscreen in landscape mode even when device is in portrait mode (works on chromium, firefox, and ie >= 11)
        iOS: true
      }
    });
  }, []);

  // useEffect(() => {
  //   videojs(
  //     videoRef.current.use('*', (player) => {
  //       return {
  //         setSource(srcObj, next) {
  //           // pass null as the first argument to indicate that the source is not rejected
  //           next(null, srcObj);
  //         }
  //       };
  //     })
  //   );
  // }, []);

  // useEffect(() => {
  //   playerRef.current.markers({
  //     markerStyle: {
  //       width: '.3em',
  //       height: '.3em',
  //       'background-color': '#fff',
  //       'border-radius': '50%'
  //     },
  //     markerTip: {
  //       display: true,
  //       text: (marker) => marker.text || ''
  //     },
  //     markers: []
  //   });

  // const addMarkers = async () => {
  //   // TODO: set prodLinkId
  //   const { data } = await apolloClientRef.current.query({
  //     query: GET_HOTSPOTS,
  //     variables: { prodLinkUniqueId }
  //   });
  //   const { hotSpots } = data.prodLink;
  //   const markers = hotSpots.reduce((acc, hotspot) => {
  //     acc.push({ time: hotspot.in, text: `Hotspot: ${hotspot.id}` });
  //     return acc;
  //   }, []);

  //   playerRef.current.markers.add(markers);
  // };

  // playerRef.current.one('loadedmetadata', () => addMarkers());
  // }, []);

  useEffect(() => {
    const onReady = () => {
      apolloClientRef.current.writeData({
        data: {
          player: { __typename: 'Player', isReady: true }
        }
      });
    };

    const onPlay = () => {
      apolloClientRef.current.writeData({
        data: {
          player: { __typename: 'Player', playingState: PLAYER.PLAYING }
        }
      });
    };

    const onPause = () => {
      apolloClientRef.current.writeData({
        data: {
          player: {
            __typename: 'Player',
            playingState: playerRef.current.scrubbing()
              ? PLAYER.SCRUBBING
              : PLAYER.PAUSED
          }
        }
      });
    };

    const onTimeUpdate = () => {
      apolloClientRef.current.writeData({
        data: {
          player: {
            __typename: 'Player',
            currentTime: playerRef.current.currentTime()
          }
        }
      });
    };

    const onStateChanged = (event) => {
      const { settingsMenuOpened } = event.changes;

      if (!settingsMenuOpened) {
        return;
      }

      playerRef.current.toggleClass(
        'vjs-settings-opened',
        settingsMenuOpened.to
      );
    };

    playerRef.current.on('ready', onReady);
    playerRef.current.on('play', onPlay);

    playerRef.current.one('play', () => {
      apolloClientRef.current.writeData({
        data: {
          player: { __typename: 'Player', isStarted: true }
        }
      });
    });

    playerRef.current.on('pause', onPause);
    playerRef.current.on('timeupdate', onTimeUpdate);
    playerRef.current.on('statechanged', onStateChanged);

    return () => {
      playerRef.current.off('ready', onReady);
      playerRef.current.off('play', onPlay);
      playerRef.current.off('pause', onPause);
      playerRef.current.off('timeupdate', onTimeUpdate);
      playerRef.current.off('statechanged', onStateChanged);
    };
  }, []);

  useEffect(() => {
    playerRef.current.overlayContainer = playerRef.current.addChild(
      'vjsOverlayContainer',
      {}
    );

    apolloClientRef.current.writeData({
      data: {
        player: {
          __typename: 'Player',
          overlayContainerClassName: playerRef.current.overlayContainer.el()
            .className
        }
      }
    });
  }, []);

  // useEffect(() => {
  //   const { controlBar } = playerRef.current;

  //   if (controlBar) {
  //     controlBar.settingsButton = controlBar.addChild(
  //       'vjsSettingsButton',
  //       {},
  //       controlBar.children().length - 1
  //     );
  //     playerRef.current.settingsMenu = playerRef.current.addChild(
  //       'vjsSettingsMenu'
  //     );
  //   }
  // }, []);

  const handlePlayingState = useCallback(
    (newPlayingState) => {
      if (playerRef.current !== null) {
        if (newPlayingState === PLAYER.PLAYING) {
          playerRef.current.play();
        } else if (newPlayingState === PLAYER.PAUSED) {
          playerRef.current.pause();
        }
      }
    },
    [playerRef.current]
  );

  const handleSeek = useCallback(
    (seekTo) => {
      if (playerRef.current !== null && seekTo !== -1) {
        playerRef.current.currentTime(seekTo);
        apolloClientRef.current.writeData({
          data: {
            player: { __typename: 'Player', seekTo: -1 }
          }
        });
      }
    },
    [playerRef.current]
  );

  return (
    <Query query={GET_PLAYER}>
      {({ data: { player }, client }) => {
        apolloClientRef.current = client;
        handlePlayingState(player.playingState);
        handleSeek(player.seekTo);

        return (
          <div
            className="vb--player-wrapper"
            style={{
              width: typeof width === 'string' ? width : `${width}px`,
              height: typeof height === 'string' ? height : `${height}px`
            }}>
            <div
              data-vjs-player
              className="vb--player"
              style={{ width: '100%', height: '100%' }}>
              <video
                ref={videoRef}
                className="vb--video vjs-vb video-js"
                crossOrigin="anonymous"
                preload="none"
                playsInline
                disablePictureInPicture
                controlsList="nodownload"
              />
            </div>
          </div>
        );
      }}
    </Query>
  );
};

Player.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  // poster: PropTypes.string.isRequired,
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
  ).isRequired
};

Player.defaultProps = {
  width: '100%',
  height: '100%'
};

export default Player;
