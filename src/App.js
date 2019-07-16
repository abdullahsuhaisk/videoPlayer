import React, { Suspense } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Player from './features/Player/Player';
import './i18n/i18n';
import OverlayContainer from './features/Overlay/OverlayContainer';
import OverlayScreen from './features/Overlay/OverlayScreen';

const GET_VIDEO = gql`
  query getVideoForApp($prodLinkId: Int!) {
    prodLink(prodLinkId: $prodLinkId) {
      id
      video {
        id
        videoUrl
        videoType
        image {
          id
          imageUrl
        }
      }
    }
  }
`;

const GET_PLAYER = gql`
  query getPlayerForOverlayScreen {
    player @client {
      playingState
      currentTime
    }
  }
`;

const App = () => {
  return (
    <div className="vibuy--container" style={{ width: '100%', height: '100%' }}>
      <Query query={GET_VIDEO} variables={{ prodLinkId: 1 }}>
        {({ loading, error, data }) => {
          if (loading || error) return null;

          const { video } = data.prodLink;
          const poster = video.image.imageUrl;
          const src = video.videoUrl;
          const type = video.videoType;

          return (
            <Suspense fallback={<></>}>
              <Player poster={poster} sources={[{ src, type }]} />
            </Suspense>
          );
        }}
      </Query>
      <OverlayContainer>
        <Query query={GET_PLAYER}>
          {({
            data: {
              player: { playingState }
            }
          }) => {
            return <OverlayScreen playingState={playingState} />;
          }}
        </Query>
      </OverlayContainer>
    </div>
  );
};

export default App;
