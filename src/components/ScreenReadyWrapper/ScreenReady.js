/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { ApolloConsumer } from 'react-apollo';
import videoJs from 'video.js';

import { Wrapper } from './ScreenReady.style';

const ScreenReadyWrapper = ({ children }) => {
  const [videoPlayer, setVideoPlayer] = useState(null); // Which videoPlayer should be renderer

  useEffect(() => {
    // Which video player logic
    const videoPlayerJs = videoJs.getPlayer('vjs_video_3');
    setVideoPlayer(videoPlayerJs);
    // Set video Player
  }, [videoPlayer]);
  return (
    <ApolloConsumer>
      {(client) => {
        return (
          <Wrapper>
            <div className="container-ready-screen">
              <div
                role="button"
                className="container-button"
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
                }}
              />
            </div>
            {children}
          </Wrapper>
        );
      }}
    </ApolloConsumer>
  );
};

export default ScreenReadyWrapper;
