import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import HotspotCardList from './HotspotCardList';
import { PLAYER } from '../../common/constants';
import { GET_HOTSPOTS } from '../../Queries/HotSpots/HotspotQuery';
import withQueryProdLink from '../../components/HOCS/Grapqhl/ProdLinkQueryHoc';

const GET_PLAYER = gql`
  query getPlayerForHotspotScreen {
    player @client {
      playingState
      currentTime
    }
  }
`;

const HotspotScreen = ({ data }) => {
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
              currentTime >= hotSpot.in - 3 && currentTime <= hotSpot.out + 3
          );
          // console.log(activeHotSpots);
          return <HotspotCardList hotspots={activeHotSpots} />;
        }

        return null;
      }}
    </Query>
  );
};

export default withQueryProdLink(HotspotScreen, GET_HOTSPOTS);
