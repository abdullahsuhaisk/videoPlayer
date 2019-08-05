/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { ApolloConsumer } from 'react-apollo';
import videoJs from 'video.js';
import VideoHeader from './VideoHeader';
import { Wrapper } from './ScreenReady.style';

const ScreenReadyWrapper = ({ children }) => {
  const [videoPlayer, setVideoPlayer] = useState(null); // Which videoPlayer should be renderer

  useEffect(() => {
    // Which video player logic
    const videoPlayerJs = videoJs.getPlayer('vjs_video_3');
    // Set video Player
    setVideoPlayer(videoPlayerJs);
    videoPlayerJs.poster('http://localhost:50192/images/videoThumb.jpg');
  }, [videoPlayer]);
  return (
    <ApolloConsumer>
      {(client) => {
        return (
          <Wrapper>
            <VideoHeader color="#ebeae9" inline={false} />
            <div className="VideoPlay">
              <div
                className="VideoPlay--playBtn"
                onClick={() => {
                  client.writeData({
                    data: {
                      player: {
                        __typename: 'Player',
                        playingState: 'PLAY'
                      }
                    }
                  });
                  videoPlayer.play();
                }}></div>
            </div>
            {children}
          </Wrapper>
        );
      }}
    </ApolloConsumer>
  );
};

export default ScreenReadyWrapper;
