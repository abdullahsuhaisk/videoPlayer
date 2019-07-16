import React from 'react';
import { ApolloConsumer } from 'react-apollo';

import { Wrapper } from './ControlBar.style';

const ControlBar = ({ styles, videoPlayer, playingState }) => {
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

export default ControlBar;
