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
import { getParams } from '../../hooks/ProdLinkHook';
// import { Wrapper } from './HotspotCardList.style';

const HotspotContainer = ({ data, type }) => {
  const hotSpots = data && data.prodLink && data.prodLink.hotSpots;
  const [staticHotSpots, setStaticHotSpots] = React.useState();
  const [dynamicHotSpots, setDynamicHotSpots] = React.useState();
  const [fixedHotSpots, setFixedHotSpots] = React.useState();
  // const [showCandB, setShowCandB] = React.useState(false);
  const [showingOnPlay, setShowinOnPlay] = React.useState(false);

  // console.log(dynamicHotSpots);
  // React.useEffect(() => {
  //   const isTrueSet = getParams('cbshow') === 'true';
  //   // console.log(getParams('cbshow'));
  //   setShowCandB(isTrueSet);
  // }, []);
  React.useEffect(() => {
    const isTrueSet = getParams('playingHotspots') === 'true';
    // console.log(getParams('sonplay'));
    setShowinOnPlay(isTrueSet);
  }, []);
  console.log(showingOnPlay);
  React.useEffect(() => {
    const staticHotSpotss = [];
    const dynamicHotSpotss = [];
    const fixedHotSpotss = [];
    // console.log(hotSpots);
    hotSpots &&
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
  if (hotSpots)
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
            if (
              playingState === PLAYER.PLAYING &&
              hotSpotShowing === true &&
              showingOnPlay === false &&
              (type === hotSpotsType.STATIC || type === hotSpotsType.DYNAMIC)
            )
              return (
                hotSpotShowing === true &&
                hotSpots.filter(
                  (hotSpot) =>
                    currentTime >= hotSpot.in && currentTime <= hotSpot.out
                ).length !== 0 && (
                  <div className="vb--hotspot-card-list-header">
                    <span>Click & Buy</span>
                  </div>
                )
              );
            return (
              <>
                {/* {showCandB === true && */
                hotSpotShowing === true &&
                  hotSpots.filter(
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
  return null;
};

export default withQueryProdLink(HotspotContainer, GET_HOTSPOTS);
