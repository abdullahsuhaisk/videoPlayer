import React, { useEffect, useState } from 'react';

import { ApolloConsumer } from 'react-apollo';
import videoJs from 'video.js';

import { Wrapper } from './ControlBar.style';

const ControlBarScreen = ({ styles }) => {
  // TODO: WHEN HTML CAME PLASE UPDATE ONCLICK METHODS
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
          <Wrapper styles={styles}>
            <div className="">
              <button
                onClick={() => {
                  client.writeData({
                    data: {
                      player: {
                        __typename: 'Player',
                        playingState: 'PAUSE'
                      }
                    }
                  });
                  videoPlayer.pause();
                }}>
                Pause Button
              </button>
              <button
                onClick={() => {
                  client.writeData({
                    data: {
                      player: {
                        __typename: 'Player',
                        playingState: 'PAUSE'
                      }
                    }
                  });
                  videoPlayer.pause();
                }}>
                Pause Button
              </button>
              <button
                onClick={() => {
                  client.writeData({
                    data: {
                      player: {
                        __typename: 'Player',
                        playingState: 'PAUSE'
                      }
                    }
                  });
                  videoPlayer.play();
                }}>
                Play Button
              </button>
            </div>
          </Wrapper>
        );
      }}
    </ApolloConsumer>
  );
};

export default ControlBarScreen;
