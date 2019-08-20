import React, { useEffect, useState } from 'react';
import { css } from 'styled-components';
import { ApolloConsumer } from 'react-apollo';
import videoJs from 'video.js';
import { Wrapper } from './ControlBar.style';
import VideoProgressBar from './VideoProgressBar/VideoProgressBar';
import VolumControl from './VolumControl/VolumControl';
import TimeDisplay from './TimeDisplay/TimeDisplay';
import PlayPause from './PlayPause/PlayPause';
import JumpToProduct from './JumpToProduct/JumpToProduct';
import Cart from './Cart/Cart';
import Settings from './Settings/Settings';
import FullScreen from './FullScreen/FullScreen';
import { composeInitialProps } from 'react-i18next';

const ControlBarScreen = ({ styles }) => {
  // TODO: WHEN HTML CAME PLASE UPDATE ONCLICK METHODS
  const [videoPlayer, setVideoPlayer] = useState(null); // Which videoPlayer should be renderer
  const [position, setPosition] = useState(0); // Which videoPlayer should be renderer
  useEffect(() => {
    const videoPlayerJs = videoJs.getPlayer('vjs_video_3');
    setVideoPlayer(videoPlayerJs);
  }, [videoPlayer]);

  return (
    <ApolloConsumer>
      {(client) => {
        return (
          <Wrapper styles={styles}>
            <VideoProgressBar videoPlayer={videoPlayer} />
            <div className="videoControlsContainer">
              <div className="leftContainer">
                <PlayPause videoPlayer={videoPlayer} client={client} />
                <JumpToProduct />
                <VolumControl videoPlayer={videoPlayer} />
                <TimeDisplay videoPlayer={videoPlayer} />
              </div>
              <div className="rightContainer">
                <Cart />
                <Settings />
                <FullScreen videoPlayer={videoPlayer} />
              </div>
            </div>
          </Wrapper>
        );
      }}
    </ApolloConsumer>
  );
};

export default ControlBarScreen;
