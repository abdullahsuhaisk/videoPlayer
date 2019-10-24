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
import HotSpotDynamicContainer from '../../components/HotspotPointer/HotSpotDynamicContainer';
// import { Wrapper } from './HotspotCardList.style';

const HotspotContainer = ({ data, type }) => {
  const hotSpots = data.prodLink && data.prodLink.hotSpots;
  const [staticHotSpots, setStaticHotSpots] = React.useState();
  const [dynamicHotSpots, setDynamicHotSpots] = React.useState();
  const [fixedHotSpots, setFixedHotSpots] = React.useState();

  // console.log(dynamicHotSpots);

  React.useEffect(() => {
    const staticHotSpotss = [];
    const dynamicHotSpotss = [];
    const fixedHotSpotss = [];
    // console.log(hotSpots);
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

  const selectionHotSpotsType = (activeHotSpots, currentTime) => {
    switch (type) {
      case hotSpotsType.STATIC:
        return <HotspotCardList hotspots={activeHotSpots} />;
      case hotSpotsType.FIXED:
        return <HotSpotsPointerContainer hotspots={activeHotSpots} />;
      case hotSpotsType.DYNAMIC:
        return (
          <HotSpotDynamicContainer
            hotspots={activeHotSpots}
            currentTime={currentTime}
          />
        );
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
  // console.log(type);
  return (
    <Query query={GET_PLAYER}>
      {({
        data: {
          player: { playingState, currentTime, hotSpotShowing }
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
                currentTime >= hotSpot.in && currentTime <= hotSpot.out
            );
          // console.log(activeHotSpots);
          if (
            playingState === PLAYER.PLAYING &&
            hotSpotShowing === false &&
            (type === hotSpotsType.STATIC || type === hotSpotsType.DYNAMIC)
          )
            return null;
          return (
            <>
              {hotSpots.filter(
                (hotSpot) =>
                  currentTime >= hotSpot.in && currentTime <= hotSpot.out
              ).length !== 0 && (
                <div className="vb--hotspot-card-list-header">
                  <span>Click & Buy</span>
                </div>
              )}
              {hotSpotShowing === true
                ? selectionHotSpotsType(activeHotSpots, currentTime)
                : null}
            </>
          );
        }
        return null;
      }}
    </Query>
  );
};

export default withQueryProdLink(HotspotContainer, GET_HOTSPOTS);
