import React, { useState, useEffect } from 'react';
import { ApolloConsumer } from 'react-apollo';
import videoJs from 'video.js';

const ControlBarHoc = (WrappedComponent) => (props) => {
  console.log('Control Bar Hoc is worked');
  const [videoPlayer, setVideoPlayer] = useState(null); // Which videoPlayer should be renderer
  useEffect(() => {
    const videoPlayerJs = videoJs.getPlayer('vjs_video_3');
    setVideoPlayer(videoPlayerJs);
  }, [videoPlayer]);

  return <WrappedComponent {...props} videoPlayer={videoPlayer} />;
};

export default ControlBarHoc;
