import React, { useEffect, useState } from 'react';
import { css } from 'styled-components';
import { ApolloConsumer } from 'react-apollo';
import videoJs from 'video.js';
import * as Dom from './Dom';
import { Wrapper, VideoProgressBar, HotspotPoint } from './ControlBar.style';
import { composeInitialProps } from 'react-i18next';

const ControlBarScreen = ({ styles }) => {
  // TODO: WHEN HTML CAME PLASE UPDATE ONCLICK METHODS
  const [videoPlayer, setVideoPlayer] = useState(null); // Which videoPlayer should be renderer
  const [position, setPosition] = useState(0); // Which videoPlayer should be renderer
  let videoProgressBarRef = React.createRef();
  useEffect(() => {
    const videoPlayerJs = videoJs.getPlayer('vjs_video_3');
    setVideoPlayer(videoPlayerJs);
  }, [videoPlayer]);
  const playPauseHandler = (client) => {
    if (videoPlayer.paused()) {
      //Video is paussed we run the Play Handler
      playHandler(client);
    } else {
      //Video is playing we run the Pause Handler
      pauseHandler(client);
    }
  };
  const playHandler = (client) => {
    client.writeData({
      data: {
        player: {
          __typename: 'Player',
          playingState: ' PLAY'
        }
      }
    });
    videoPlayer.play();
  };
  const pauseHandler = (client) => {
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
  const fullScreenHnadler = () => {
    if (videoPlayer.isFullscreen()) {
      videoPlayer.exitFullscreen();
    } else {
      videoPlayer.requestFullscreen();
    }
  };
  const volumeHandler = (e) => {
    if (videoPlayer) {
      if (e) {
        videoPlayer.volume(e.target.value / 100);
      } else if (videoPlayer.currentTime() == 0) {
        videoPlayer.volume(0.5);
      }
      return videoPlayer.volume() * 100;
    }
    return 0;
  };
  const playPauseBtnClass = () => {
    let playPauseBtnClassName = 'playPauseBtn';
    if (videoPlayer) {
      playPauseBtnClassName += !videoPlayer.paused() ? ' playing' : '';
    }
    return playPauseBtnClassName;
  };
  const soundsIconClass = () => {
    let soundsIconClassName = 'soundIcon';
    if (videoPlayer) {
      soundsIconClassName += videoPlayer.muted() ? ' muted' : '';
    }
    return soundsIconClassName;
  };
  const timeHandler = (time) => {
    const pad = (input) => {
      return input < 10 ? '0' + input : input;
    };
    let timeString = [];
    if (pad(Math.floor(videoPlayer.duration() / 3600)) > 0) {
      timeString.push(pad(Math.floor(time / 3600)));
    }
    if (pad(Math.floor((videoPlayer.duration() % 3600) / 60)) > 0) {
      timeString.push(pad(Math.floor((time % 3600) / 60)));
    }
    if (pad(Math.floor(videoPlayer.duration() % 60)) > 0) {
      timeString.push(pad(Math.floor(time % 60)));
    }
    return timeString.join(':');
  };
  const soundsOffHandler = () => {
    videoPlayer.muted(!videoPlayer.muted());
  };
  const hotspotPointHandler = (time) => {
    if (videoPlayer && videoPlayer.duration() > 0) {
      return (time * 100) / videoPlayer.duration();
    }
    return 0;
  };
  const progressBarHandler = () => {
    if (videoPlayer && videoPlayer.currentTime() > 0) {
      return (
        (videoPlayer.currentTime() / videoPlayer.duration()) *
        100
      ).toFixed(2);
    }
    return 0;
  };
  const progressBarClickHandler = (e) => {
    // TODO : Fix time gap problem !
    const node = videoProgressBarRef.current;
    const newTime = Dom.getPointerPosition(node, e).x * videoPlayer.duration();
    videoPlayer.currentTime(newTime);

    // console.log("current time =>" + timeHandler(newTime));
    // console.log("new time =>" + newTime);
    // console.log("progressBar =>" + progressBarHandler(newTime));
  };
  const settingsHandler = () => {
    // TODO: Add sttings handler
    return;
  };
  const cartHandler = () => {
    return;
  };
  return (
    <ApolloConsumer>
      {(client) => {
        return (
          <Wrapper styles={styles}>
            <VideoProgressBar
              ref={videoProgressBarRef}
              progressValue={progressBarHandler()}
              onClick={(e) => progressBarClickHandler(e)}></VideoProgressBar>
            <HotspotPoint timeValue={hotspotPointHandler(12)}></HotspotPoint>
            <HotspotPoint timeValue={hotspotPointHandler(45)}></HotspotPoint>
            <HotspotPoint timeValue={hotspotPointHandler(65)}></HotspotPoint>
            <HotspotPoint timeValue={hotspotPointHandler(95)}></HotspotPoint>
            <HotspotPoint timeValue={hotspotPointHandler(142)}></HotspotPoint>
            <div className="videoControlsContainer">
              <div className="leftContainer">
                <button
                  className={playPauseBtnClass()}
                  onClick={() => playPauseHandler(client)}></button>
                <div className="volumControlContainer">
                  <i
                    className={soundsIconClass()}
                    onClick={() => {
                      soundsOffHandler();
                    }}></i>
                  <input
                    className="volumControl"
                    type="range"
                    min="0"
                    value={volumeHandler()}
                    onChange={(e) => volumeHandler(e)}
                    max="100"
                  />
                </div>
                <div className="timeContainer">
                  <p>
                    {videoPlayer
                      ? timeHandler(videoPlayer.currentTime())
                      : '00:00'}
                  </p>
                  <p className="timeDevider"> / </p>
                  <p>
                    {videoPlayer
                      ? timeHandler(videoPlayer.duration())
                      : '00:00'}
                  </p>
                </div>
              </div>
              <div className="rightContainer">
                <button
                  className="cartBtn"
                  onClick={() => {
                    cartHandler();
                  }}></button>
                <button
                  className="settingsBtn"
                  onClick={() => {
                    settingsHandler();
                  }}></button>
                <button
                  className="fullScreenBtn"
                  onClick={() => {
                    fullScreenHnadler();
                  }}></button>
              </div>
            </div>
          </Wrapper>
        );
      }}
    </ApolloConsumer>
  );
};

export default ControlBarScreen;
