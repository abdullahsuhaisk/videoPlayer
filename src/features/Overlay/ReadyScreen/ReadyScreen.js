/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { ApolloConsumer } from 'react-apollo';
import videojs from 'video.js';

import { PLAYER } from '../../../common/constants';
import { Wrapper } from './ReadyScreen.style';

const ReadyScreen = ({ playingState, children }) => {
  console.log('a');
  const player = videojs.getPlayer('vjs_video_3');

  if (playingState === PLAYER.READY) {
    return (
      <ApolloConsumer>
        {(client) => {
          return (
            <Wrapper>
              <div className="vjs-big-play-buttons">
                <div
                  className="vjs-icon-placeholders"
                  onClick={() => {
                    client.writeData({
                      data: {
                        player: {
                          __typename: 'Player',
                          playingState: 'PLAY'
                        }
                      }
                    });
                    console.log('Clicked');
                    player.play();
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
export default ReadyScreen;
