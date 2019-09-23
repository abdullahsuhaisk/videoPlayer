import React, { useEffect, useState } from 'react';
// import { css } from 'styled-components';
import { ApolloConsumer } from 'react-apollo';
import videoJs from 'video.js';
import VideoProgressBar from '../ControlBarWrapper/ControlBar/VideoProgressBar/VideoProgressBar';
import VolumControl from '../ControlBarWrapper/ControlBar/VolumControl/VolumControl';
import PlayPause from '../ControlBarWrapper/ControlBar/PlayPause/PlayPause';
import JumpToProductRight from '../ControlBarWrapper/ControlBar/JumpToProduct/JumpToProductRight';
import JumpToProductLeft from '../ControlBarWrapper/ControlBar/JumpToProduct/JumpToProductLeft';
import TimeDisplay from '../ControlBarWrapper/ControlBar/TimeDisplay/TimeDisplay';
import ControlBarShoppingIcon from '../ControlBarWrapper/ControlBar/Cart/ControlBarShoppingIcon';
import ControlBarSettings from '../ControlBarWrapper/ControlBar/Settings/ControlBarSettings';
import ControlBarFullScreen from '../ControlBarWrapper/ControlBar/FullScreen/ControlBarFullScreen';

const ControlBarFixed = ({ styles }) => {
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
            <div className="videoControlsContainer">
              <div className="leftContainer">
                <PlayPause />
                <JumpToProductRight />
                <JumpToProductLeft />
                <TimeDisplay videoPlayer={videoPlayer} />
              </div>
              <div className="rightContainer">
                <ControlBarShoppingIcon />
                <VolumControl videoPlayer={videoPlayer} />
                <ControlBarSettings />
                <ControlBarFullScreen videoPlayer={videoPlayer} />
              </div>
            </div>
            <VideoProgressBar videoPlayer={videoPlayer} />
          </div>
        );
      }}
    </ApolloConsumer>
  );
};

export default ControlBarFixed;
