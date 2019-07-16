import React, { useEffect, useState } from 'react';
import videoJs from 'video.js';

import SafeArea from '../../components/SafeArea/SafeArea';
import Scaler from '../../components/Scaler/Scaler';
import ReadyScreen from './ReadyScreen/ReadyScreen';
import PlayingScreen from './PlayingScreen/PlayingScreen';
import PausedScreen from './PausedScreen/PausedScreen';
import { PLAYER } from '../../common/constants';
import ControlBar from '../../components/ScreenPlaying/ControlBar/ControlBar';
import temp from './template.json';
// import AuthScreen from '../Auth/AuthScreen';
// import ProductListScreen from '../Product/ProductList/ProductListScreen';
// import HotspotScreen from '../Hotspot/HotspotScreen';
// import ProductDetailsScreen from '../Product/ProductDetails/ProductDetailsScreen';
// import NavigationScreen from '../NavigationScreen/NavigationScreen';

const LoadJsons = () => {
  // TODO: Set json method will make
  console.log('Template added');
};

const PlayerStateChange = (a) => {
  console.log(a, 'Playin state has changed');
};

const Screen = ({ playingState, videoPlayer, temp }) => {
  // console.log(temp);
  return (
    <>
      {playingState === PLAYER.PLAYING && (
        <PlayingScreen playingState={playingState} videoPlayer={videoPlayer} />
      )}
      {playingState === PLAYER.PAUSED && (
        <PausedScreen
          playingState={playingState}
          videoPlayer={videoPlayer}
          temp={temp}
        />
      )}
      {playingState === PLAYER.READY && (
        <ReadyScreen
          playingState={playingState}
          videoPlayer={videoPlayer}
          temp={temp}
        />
      )}
    </>
  );
};

const OverlayScreen = ({ playingState }) => {
  const [videoPlayer, setVideoPlayer] = useState(null); // Which videoPlayer should be renderer
  //  const [jsonTemplate, setJsonTemplate] = useState();
  // useEffect(() => {
  //   return () => {
  //     setJsonTemplate(temp);
  //     console.log(jsonTemplate);
  //   };
  // }, []);
  // useEffect(() => {
  //   // setJson(LoadJsons());
  //   LoadJsons();
  // }, []);

  useEffect(() => {
    // Which video player logic
    const videoPlayerJs = videoJs.getPlayer('vjs_video_3');
    setVideoPlayer(videoPlayerJs);
    // Set video Player
  }, [videoPlayer]);

  useEffect(() => {
    PlayerStateChange(playingState);
  }, [playingState]);

  return (
    <div
      className="vb--overlay-screen"
      style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <SafeArea>
        <Scaler>
          <Screen
            playingState={playingState}
            videoPlayer={videoPlayer}
            temp={temp}
          />
          {playingState !== PLAYER.READY && (
            <ControlBar videoPlayer={videoPlayer} playingState={playingState} />
          )}

          {/* <HotspotScreen />
          <ProductListScreen />
          <ProductDetailsScreen />
          <NavigationScreen />
          <AuthScreen /> */}
        </Scaler>
      </SafeArea>
    </div>
  );
};

export default OverlayScreen;
