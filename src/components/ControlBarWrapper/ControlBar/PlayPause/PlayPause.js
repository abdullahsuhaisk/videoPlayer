/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';

import { withApollo } from 'react-apollo';
import { getVideoJs } from '../../../../hooks/VideoJsHook';
import { PLAY, PAUSE } from '../../../../Queries/Player/PlayerMutations';
import PauseIcon from '../../../../assets/icons/PauseIcon.svg';
import PlayIcon from '../../../../assets/icons/PlayIcon.svg';
import GoogleAnalyticsHoc from '../../../HOCS/GoogleAnalyticsHoc';

const PlayPause = ({ position, client }) => {
  // console.log(props);
  const videoPlayer = getVideoJs();
  const playPauseHandler = () => {
    if (videoPlayer.paused()) {
      // Video is paussed we run the Play Handler
      playHandler();
    } else {
      // Video is playing we run the Pause Handler
      pauseHandler();
    }
  };
  const playHandler = () => {
    client.mutate({
      mutation: PLAY
    });
    videoPlayer.play();
  };
  const pauseHandler = () => {
    client.mutate({
      mutation: PAUSE
    });
    videoPlayer.pause();
  };
  const playPauseBtnClass = () => {
    let playPauseBtnClassName = 'playPauseBtn';
    if (videoPlayer) {
      playPauseBtnClassName += !videoPlayer.paused() ? ' playing' : '';
    }
    return playPauseBtnClassName;
  };

  return (
    <div
      onClick={() => playPauseHandler()}
      style={{ height: '100%', width: '50px' }}
      className="plauPauseBtn-wrapper">
      <img
        src={videoPlayer && !videoPlayer.paused() ? PauseIcon : PlayIcon}
        alt="Pause Icon"
        className="playPauseBtn"
      />
      {/* <button className={playPauseBtnClass()}></button> */}
    </div>
  );
};

export default withApollo(
  GoogleAnalyticsHoc(PlayPause, 'Control Bar', 'Play & Pause')
);
