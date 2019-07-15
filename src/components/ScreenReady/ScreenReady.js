/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { ApolloConsumer } from 'react-apollo';

import { PLAYER } from '../../common/constants';
import { Wrapper } from './ScreenReady.style';

const ScreenReady = ({ playingState, videoPlayer }) => {
  if (playingState === PLAYER.READY) {
    return (
      <ApolloConsumer>
        {(client) => {
          return (
            <Wrapper>
              <div className="container">
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
            </Wrapper>
          );
        }}
      </ApolloConsumer>
    );
  }
  return null;
};
export default ScreenReady;
