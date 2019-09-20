import React, { useEffect, useState } from 'react';
import videoJs from 'video.js';
import { withApollo } from 'react-apollo';
import VideoProgressBar from './ControlBar/VideoProgressBar/VideoProgressBar';

const ControlBarWrapper = (props) => {
  const [videoPlayer, setVideoPlayer] = useState(null); // Which videoPlayer should be renderer
  const { client } = props;
  useEffect(() => {
    const videoPlayerJs = videoJs.getPlayer('vjs_video_3');
    setVideoPlayer(videoPlayerJs);
  }, [videoPlayer]);

  const children = React.Children.map(props.children, (child, index) => {
    return React.cloneElement(child, {
      // PassToProps
      videoPlayer,
      client,
      index
    });
  });
  return (
    <div className="ControlBar">
      <div className="videoControlsContainer">{children}</div>
      <VideoProgressBar videoPlayer={videoPlayer} />
    </div>
  );
};

export default withApollo(ControlBarWrapper);
