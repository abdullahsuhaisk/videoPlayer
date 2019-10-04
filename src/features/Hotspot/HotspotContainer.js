/* eslint-disable no-nested-ternary */
import React from 'react';
import { Query } from 'react-apollo';
import HotspotCardList from './HotspotCardList';
import { PLAYER } from '../../common/constants';
import { GET_HOTSPOTS } from '../../Queries/HotSpots/HotspotQuery';
import withQueryProdLink from '../../components/HOCS/Grapqhl/ProdLinkQueryHoc';
import { GET_PLAYER } from '../../Queries/Player/PlayerQueries';
import { hotSpotsType } from '../../common/hotSpotTypes';
import HotSpotsPointerContainer from '../../components/HotspotPointer/HotSpotsPointerContainer';

const HotspotContainer = ({ data, type }) => {
  const hotSpots = data.prodLink && data.prodLink.hotSpots;
  const [staticHotSpots, setStaticHotSpots] = React.useState();
  const [dynamicHotSpots, setDynamicHotSpots] = React.useState();
  const [fixedHotSpots, setFixedHotSpots] = React.useState();
  console.log(fixedHotSpots);

  React.useEffect(() => {
    const staticHotSpotss = [];
    const dynamicHotSpotss = [];
    const fixedHotSpotss = [];

    hotSpots.filter((hotspot) =>
      hotspot.type === hotSpotsType.STATIC
        ? staticHotSpotss.push(hotspot)
        : hotspot.type === hotSpotsType.DYNAMIC
        ? dynamicHotSpotss.push(hotspot)
        : hotspot.type === hotSpotsType.FIXED
        ? fixedHotSpotss.push(hotspot)
        : null
    );
    setStaticHotSpots(staticHotSpotss);
    setDynamicHotSpots(dynamicHotSpotss);
    setFixedHotSpots(fixedHotSpotss);
  }, []);

  const selectionHotSpotsType = (activeHotSpots) => {
    console.log(activeHotSpots);
    switch (type) {
      case hotSpotsType.STATIC:
        return <HotspotCardList hotspots={activeHotSpots} />;
      case hotSpotsType.FIXED:
        return <HotSpotsPointerContainer hotspots={activeHotSpots} />;
      case hotSpotsType.DYNAMIC:
        return <HotspotCardList hotspots={activeHotSpots} />;
      default:
        return null;
    }
  };

  const selectActiveHotSpot = () => {
    switch (type) {
      case hotSpotsType.STATIC:
        return staticHotSpots;
      case hotSpotsType.FIXED:
        return fixedHotSpots;
      case hotSpotsType.DYNAMIC:
        return dynamicHotSpots;
      default:
        return null;
    }
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
          playingState === PLAYER.PAUSED ||
          playingState === PLAYER.SCRUBBING
        ) {
          const activeHotSpots =
            selectActiveHotSpot() &&
            selectActiveHotSpot().filter(
              (hotSpot) =>
                currentTime >= hotSpot.in - 1 && currentTime <= hotSpot.out + 1
            );
          // console.log(activeHotSpots);
          return selectionHotSpotsType(activeHotSpots);
        }
        return null;
      }}
    </Query>
  );
};

export default withQueryProdLink(HotspotContainer, GET_HOTSPOTS);
