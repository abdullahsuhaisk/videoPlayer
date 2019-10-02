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
    // Set video Player
    setVideoPlayer(videoPlayerJs);
  }, [videoPlayer]);
  return (
    <ApolloConsumer>
      {(client) => {
        return (
          <Wrapper>
            <div className="VideoPlay">
              <div className="VideoPlay--playBtn-shadow">
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
            </div>
            {children}
          </Wrapper>
        );
      }}
    </ApolloConsumer>
  );
};

export default ScreenReadyWrapper;
