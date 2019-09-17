import React, { useEffect, useState } from 'react';
// import { css } from 'styled-components';
import { ApolloConsumer } from 'react-apollo';
import videoJs from 'video.js';
import VideoProgressBar from './VideoProgressBar/VideoProgressBar';
import VolumControl from './VolumControl/VolumControl';
import TimeDisplay from './TimeDisplay/TimeDisplay';
import PlayPause from './PlayPause/PlayPause';
import JumpToProduct from './JumpToProduct/JumpToProductWrapper';
import ControlBarShoppingIcon from './Cart/ControlBarShoppingIcon';
import ControlBarSettings from './Settings/ControlBarSettings';
import ControlBarFullScreen from './FullScreen/ControlBarFullScreen';
// import { composeInitialProps } from 'react-i18next';

const ControlBarScreen = ({ styles }) => {
  // TODO: WHEN HTML CAME PLASE UPDATE ONCLICK METHODS
  const [videoPlayer, setVideoPlayer] = useState(null); // Which videoPlayer should be renderer
  // const [position, setPosition] = useState(0); // Which videoPlayer should be renderer
  useEffect(() => {
    const videoPlayerJs = videoJs.getPlayer('vjs_video_3');
    setVideoPlayer(videoPlayerJs);
  }, [videoPlayer]);

  return (
    <ApolloConsumer>
      {(client) => {
        return (
          <div className="ControlBar">
            <VideoProgressBar videoPlayer={videoPlayer} />
            <div className="videoControlsContainer">
              <div className="leftContainer">
                <PlayPause videoPlayer={videoPlayer} client={client} />
                <JumpToProduct />
                <VolumControl videoPlayer={videoPlayer} />
                <TimeDisplay videoPlayer={videoPlayer} />
              </div>
              <div className="rightContainer">
                <ControlBarShoppingIcon />
                <ControlBarSettings />
                <ControlBarFullScreen videoPlayer={videoPlayer} />
              </div>
            </div>
          </div>
        );
      }}
    </ApolloConsumer>
  );
};

export default ControlBarScreen;
