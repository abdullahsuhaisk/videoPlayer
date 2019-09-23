/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useEffect, useState } from 'react';
import { ApolloConsumer } from 'react-apollo';
import videoJs from 'video.js';

// import { ADD_WATCHED_LIST } from '../../features/Watchlist/WatchListQueries';
// import { IS_LOGGED_IN } from '../../features/ShoppingCart/shoppingCartQueries';
import { Wrapper } from './ScreenReady.style';

const ScreenReadyComponent = ({ children }) => {
  const [videoPlayer, setVideoPlayer] = useState(null); // Which videoPlayer should be renderer
  useEffect(() => {
    // Which video player logic
    const videoPlayerJs = videoJs.getPlayer('vjs_video_3');
    setVideoPlayer(videoPlayerJs);
    // Set video Player
  }, [videoPlayer]);

  // const updateCache = () => {};

  // const addToWatchList = async (client, addProdLinkToWatchList) => {
  // const { isLoggedIn } = client.readQuery({
  //   query: IS_LOGGED_IN
  // });
  // if (isLoggedIn) {
  //   await addProdLinkToWatchList({ variables:  {PRODLINK_ID}  });
  //   // client.writeData({
  //   //   data: { productIdInDetails: null, navigationDialogShowing: true }
  //   // });
  // } else {
  //   // client.writeData({ data: { isLoginFormShowing: true } });
  //   return null;
  // }
  //   await addProdLinkToWatchList({ variables: { prodLinkId: PRODLINK_ID } });
  //   client.writeData({
  //     data: {
  //       player: {
  //         __typename: 'Player',
  //         playingState: 'PLAY'
  //       }
  //     }
  //   });
  // };

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
          </Wrapper>
        );
      }}
    </ApolloConsumer>
  );
};

export default ScreenReadyComponent;

// {
/* <Mutation
      mutation={ADD_WATCHED_LIST}
      // variables={{ prodLinkId: PRODLINK_ID }}
      // update={(cache, { data }) => updateCache(cache, data)}
    >
      {(addProdLinkToWatchList, { client }) => {
        return (
          <Wrapper>
            <div className="container-ready-screen">
              <div
                role="button"
                className="container-button"
                onClick={() => {
                  videoPlayer.play();
                  addToWatchList(client, addProdLinkToWatchList);
                }}
              />
            </div>
          </Wrapper>
        );
      }}
    </Mutation> */
// }

/* <ApolloConsumer>
      {(client) => {
        return (
          <>
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
          </>
        );
      }}
    </ApolloConsumer> */
