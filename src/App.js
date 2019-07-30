import React, { Suspense } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Player from './features/Player/Player';
import './i18n/i18n';
import OverlayContainer from './features/Overlay/OverlayContainer';
import OverlayScreen from './features/Overlay/OverlayScreen';
import { PRODLINK_ID } from './common/GrapqlConstant';

const GET_VIDEO = gql`
  query getVideoForApp($prodLinkId: Int!) {
    prodLink(prodLinkId: $prodLinkId) {
      id
      name
      header
      description
      creationTime
      numberOfViews
      numberOfLikes
      numberOfShares
      numberOfComments
      numberOfProducts
      videoId
      companyId
      campaignId
      brands {
        id
        name
        header
        description
        logo {
          id
          name
          header
          thumbnailUrl
          imageUrl
        }
      }
      company {
        id
        name
        header
        description
        logo {
          id
          imageUrl
          thumbnailUrl
        }
      }
      campaign {
        id
        name
        header
        description
        creationTime
      }
      video {
        id
        name
        header
        description
        qualities {
          id
          url
        }
      }
      image {
        id
        imageUrl
        thumbnailUrl
        name
        header
        description
        type
        creationTime
      }
      hotSpots {
        id
        product {
          id
          name
          brand {
            id
            name
          }
          image {
            id
            thumbnailUrl
          }
          price
          discount
          stockCount
          currency {
            id
            name
            code
            symbol
          }
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
      <Query query={GET_VIDEO} variables={{ prodLinkId: PRODLINK_ID }}>
        {({ loading, error, data }) => {
          if (loading || error) return null;
          // console.log(data)
          const { video } = data.prodLink;
          const { image } = data.prodLink;
          const poster = image.imageUrl;
          {
            /* const poster =
            'https://ngatapuwae.govt.nz/sites/default/files/infographic/somme-1918.jpg'; */
          }
          const src = video.qualities[2].url;
          const { type } = video.qualities[2];

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
