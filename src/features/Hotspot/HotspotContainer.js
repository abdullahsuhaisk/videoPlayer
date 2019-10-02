/* eslint-disable no-nested-ternary */
import React from 'react';
import { Query } from 'react-apollo';
import HotspotCardList from './HotspotCardList';
import { PLAYER } from '../../common/constants';
import { GET_HOTSPOTS } from '../../Queries/HotSpots/HotspotQuery';
import withQueryProdLink from '../../components/HOCS/Grapqhl/ProdLinkQueryHoc';
import { GET_PLAYER } from '../../Queries/Player/PlayerQueries';
import { hotSpotsType } from '../../common/hotSpotTypes';

const HotspotScreen = ({ data }) => {
  const hotSpots = data.prodLink && data.prodLink.hotSpots;
  // const [hotSpots, setHotspots] = React.useState({
  //   staticHotSpots: [],
  //   dynamicHotSpots: [],
  //   fixedHotSpots: []
  // });
  // console.log(hotSpots);

  const staticHotSpots = [];
  const dynamicHotSpots = [];
  const fixedHotSpots = [];

  React.useEffect(() => {
    hotSpots.filter((hotspot) =>
      hotspot.type === hotSpotsType.STATIC
        ? staticHotSpots.push(hotspot)
        : hotspot.type === hotSpotsType.DYNAMIC
        ? dynamicHotSpots.push(hotspot)
        : hotspot.type === hotSpotsType.FIXED
        ? fixedHotSpots.push(hotspot)
        : null
    );
    // console.log(staticHotSpots);
    // console.log(dynamicHotSpots);
    // console.log(fixedHotSpots);
  }, []);

  const selectionHotSpotsType = (type) => {
    return null;
  };
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
