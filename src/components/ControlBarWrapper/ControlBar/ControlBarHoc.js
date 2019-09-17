import React, { useState } from 'react';
import { ApolloConsumer } from 'react-apollo';
import videoJs from 'video.js';

const ControlBarHoc = (WrappedComponent) => (props) => {
  const [videoPlayer, setVideoPlayer] = useState(
    videoJs.getPlayer('vjs_video_3')
  ); // Which videoPlayer should be renderer

  return (
    <ApolloConsumer>
      {(client) => {
        return (
          <WrappedComponent
            {...props}
            videoPlayer={videoPlayer}
            setVideoPlayer={setVideoPlayer}
            client={client}
          />
        );
      }}
    </ApolloConsumer>
  );
};

export default ControlBarHoc;
