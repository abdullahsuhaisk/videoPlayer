import React from 'react';

const PlayPause = ({ videoPlayer, client }) => {
  const playPauseHandler = () => {
    if (videoPlayer.paused()) {
      //Video is paussed we run the Play Handler
      playHandler();
    } else {
      //Video is playing we run the Pause Handler
      pauseHandler();
    }
  };
  const playHandler = () => {
    client.writeData({
      data: {
        player: {
          __typename: 'Player',
          playingState: ' PLAY'
        },
        isLoginFormShowing: false,
        isProfileOpen: false
      }
    });
    videoPlayer.play();
  };
  const pauseHandler = () => {
    client.writeData({
      data: {
        player: {
          __typename: 'Player',
          playingState: 'PAUSE'
        }
      }
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
    <div>
      <button
        className={playPauseBtnClass()}
        onClick={() => playPauseHandler()}></button>
    </div>
  );
};

export default PlayPause;
