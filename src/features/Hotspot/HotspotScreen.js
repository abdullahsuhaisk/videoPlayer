import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import HotspotCardList from './HotspotCardList';
import { PLAYER } from '../../common/constants';

const GET_PLAYER = gql`
  query getPlayerForHotspotScreen {
    player @client {
      playingState
      currentTime
    }
  }
`;

const GET_HOTSPOTS = gql`
  query getHotspotsForHotspotScreen($prodLinkId: Int!) {
    prodLink(prodLinkId: $prodLinkId) {
      id
      hotSpots {
        id
        in
        out
        product {
          id
          name
          image {
            id
            imageUrl
          }
        }
      }
    }
  }
`;

const HotspotScreen = () => {
  return (
    <Query query={GET_HOTSPOTS} variables={{ prodLinkId: 1 }}>
      {({ loading, error, data }) => {
        if (loading || error) {
          return null;
        }
        // console.log(data);
        const { hotSpots } = data.prodLink;

        return (
          <Query query={GET_PLAYER}>
            {({
              data: {
                player: { playingState, currentTime }
              }
            }) => {
              if (
                playingState === PLAYER.PLAYING ||
                playingState === PLAYER.SCRUBBING
              ) {
                const activeHotSpots = hotSpots.filter(
                  (hotSpot) =>
                    currentTime >= hotSpot.in && currentTime <= hotSpot.out
                );

                return <HotspotCardList hotspots={activeHotSpots} />;
              }

              return null;
            }}
          </Query>
        );
      }}
    </Query>
  );
};

export default HotspotScreen;
