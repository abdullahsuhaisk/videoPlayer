import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import HotspotCardList from './HotspotCardList';
import { PLAYER } from '../../common/constants';
import { getProdLinkId } from '../../hooks/ProdLinkHook';

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
  const PRODLINK_ID = getProdLinkId();
  return (
    <Query query={GET_HOTSPOTS} variables={{ prodLinkId: PRODLINK_ID }}>
      {({ loading, error, data }) => {
        if (loading || error) {
          return null;
        }
        // console.log(data);
        const { hotSpots } = data.prodLink;
        // console.log(hotSpots);

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
                    currentTime >= hotSpot.in - 3 &&
                    currentTime <= hotSpot.out + 3
                );
                // console.log(activeHotSpots);
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
