import React, { useEffect, useState } from 'react';
import videoJs from 'video.js';
import { Query } from 'react-apollo';

// import './overlay.css';
import SafeArea from '../../components/SafeArea/SafeArea';
import Scaler from '../../components/Scaler/Scaler';
import ReadyScreen from './ReadyScreen/ReadyScreen';
import PlayingScreen from './PlayingScreen/PlayingScreen';
import PausedScreen from './PausedScreen/PausedScreen';
import { PLAYER } from '../../common/constants';
// import ControlBarScreen from '../ControlBar/ControlBarScreen';
import { useTemplate, useCss } from './TemplateHook';
// import ControlBarWrapper from '../../components/ControlBarWrapper/ControlBarWrapper';
import VideoControlBarScreen from '../../components/ControlBarWrapper/VideoControlBarScreen';
import { GET_LAYOUT } from '../../Queries/Player/PlayerQueries';

// import ControlBarScreen from '../../components/ControlBarWrapper/ControlBar/ControlBarScreen';
// import StoriyRender from '../../components/StoriyRender';

const Screen = ({ playingState, videoPlayer }) => {
  const template = useTemplate();
  useCss();
  // TODO: Need a template system
  return (
    <Query query={GET_LAYOUT}>
      {({ data: { layout } }) => {
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

const OverlayScreen = ({ playingState }) => {
  const [videoPlayer, setVideoPlayer] = useState(null); // Which videoPlayer should be renderer

  useEffect(() => {
    // Which video player logic
    const videoPlayerJs = videoJs.getPlayer('vjs_video_3');
    setVideoPlayer(videoPlayerJs);
    // Set video Player
  }, [videoPlayer]);

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

export default OverlayScreen;
