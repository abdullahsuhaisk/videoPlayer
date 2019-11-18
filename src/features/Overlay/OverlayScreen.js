/* eslint-disable no-lonely-if */
import React, { useEffect, useState } from 'react';
import videoJs from 'video.js';
import { Query, withApollo } from 'react-apollo';
import { PAUSE, PLAY } from '../../Queries/Player/PlayerMutations';
// import './overlay.css';
import SafeArea from '../../components/SafeArea/SafeArea';
import Scaler from '../../components/Scaler/Scaler';
import ReadyScreen from './ReadyScreen/ReadyScreen';
import PlayingScreen from './PlayingScreen/PlayingScreen';
import PausedScreen from './PausedScreen/PausedScreen';
import { PLAYER } from '../../common/constants';
import VideoControlBarScreen from '../../components/ControlBarWrapper/VideoControlBarScreen';
import { GET_LAYOUT } from '../../Queries/Player/PlayerQueries';

import template3 from '../../components/Template3/Template3.json';
import template2 from './template.json';
import { timeout } from 'q';

function deleteCustomCss() {
  const elements = document.querySelectorAll('link[rel=stylesheet]');
  // console.log(elements);
  for (let i = 0; i < elements.length; i++) {
    // console.log(elements[i].href);
    if (
      elements[i].href ===
        'https://vibuy-player.appspot.com/css/template3mobile.css' ||
      'https://vibuy-player.appspot.com/css/template3.css'
    ) {
      elements[i].parentNode.removeChild(elements[i]);
    }
  }
}

function addCustomCss(url) {
  // it must to move index.js
  deleteCustomCss();
  const link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('type', 'text/css');
  link.setAttribute('href', url);
  document.getElementsByTagName('head')[0].appendChild(link);
}

const LoadJsons = async (TMP) => {
  // TODO: Set json method will make
  // return temp;
  return TMP;
};

const Screen = ({ playingState, videoPlayer }) => {
  const [template, setTemplate] = useState(template3);
  const [templateType, seTtemplateType] = useState('Normal');
  useEffect(() => {
    LoadJsons(template).then((res) => {
      setTemplate(res);
    });
  }, []);
  useEffect(() => {
    // addCustomCss('/css/overlay.css');
    // addCustomCss('/css/template3.css');
    // addCustomCss('/css/template3mobile.css');
  }, []);

  useEffect(() => {
    // console.log('Template has been changed');
    if (templateType === 'Normal') {
      LoadJsons(template3).then((res) => {
        setTemplate(res);
      });
      addCustomCss('/css/template3.css');
    } else if (templateType === 'Mobile') {
      LoadJsons(template3).then((res) => {
        setTemplate(res);
      });
      addCustomCss('/css/template3mobile.css');
    }
  }, [templateType]);

  return (
    <Query query={GET_LAYOUT}>
      {({ data: { layout } }) => {
        if (layout.width < 851) seTtemplateType('Mobile');
        else seTtemplateType('Normal');

        return (
          <>
            {playingState === PLAYER.PLAYING && template && (
              <PlayingScreen temp={template} />
            )}
            {playingState === PLAYER.PAUSED && template && (
              <PausedScreen
                playingState={playingState}
                videoPlayer={videoPlayer}
                temp={template}
              />
            )}
            {playingState === PLAYER.READY && template && (
              <ReadyScreen
                playingState={playingState}
                videoPlayer={videoPlayer}
                temp={template}
              />
            )}
            {// TODO: We must move to inside Player Component
            playingState !== PLAYER.READY && template && (
              <VideoControlBarScreen
                videoPlayer={videoPlayer}
                playingState={playingState}
                temp={template}
              />
            )}
          </>
        );
      }}
    </Query>
  );
};

const OverlayScreen = ({ playingState, client }) => {
  const [videoPlayer, setVideoPlayer] = useState(null); // Which videoPlayer should be renderer

  useEffect(() => {
    // Which video player logic
    const videoPlayerJs = videoJs.getPlayer('vjs_video_3');
    setVideoPlayer(videoPlayerJs);
    // Set video Player
    document.addEventListener('keyup', KeyPressHandler);
  }, [videoPlayer]);

  const KeyPressHandler = (e) => {
    if (videoPlayer && !videoPlayer.paused()) {
      if (e.code === 'Space') {
        client.mutate({
          mutation: PAUSE
        });
        videoPlayer.pause();
      }

      if (e.code === 'ArrowRight') {
        if (videoPlayer.currentTime() + 5 < videoPlayer.duration()) {
          videoPlayer.currentTime(videoPlayer.currentTime() + 5);
        }
      }
      if (e.code === 'ArrowLeft') {
        videoPlayer.currentTime(videoPlayer.currentTime() - 5);
      }
    } else {
      if (videoPlayer) {
        if (e.code === 'Space') {
          client.mutate({
            mutation: PLAY
          });
          videoPlayer.play();
        }
        if (e.code === 'ArrowRight') {
          if (videoPlayer.currentTime() + 5 < videoPlayer.duration()) {
            videoPlayer.currentTime(videoPlayer.currentTime() + 5);
          }
        }
        if (e.code === 'ArrowLeft') {
          videoPlayer.currentTime(videoPlayer.currentTime() - 5);
        }
      }
    }
  };

  // useEffect(() => {
  //   // TODO:You can turn back initial state
  //   PlayerStateChange(playingState);
  // }, [playingState]);

  return (
    <div
      className="vb--overlay-screen"
      style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <SafeArea>
        <Scaler>
          <Screen playingState={playingState} videoPlayer={videoPlayer} />
        </Scaler>
      </SafeArea>
    </div>
  );
};

export default withApollo(OverlayScreen);
