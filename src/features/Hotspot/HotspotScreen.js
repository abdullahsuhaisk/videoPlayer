import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import {
  InjectHotspotProps,
  InjectPlayerProps,
  InjectProductProps
} from '../../store/redux/providers';
import useTimeRange from '../../hooks/useTimeRange';
import HotspotCardList from './HotspotCardList';
import { playingState } from '../../store/redux/player/playerActions';

const HotspotScreen = ({
  playerPlayingState,
  hotspots,
  setActiveHotspotIds,
  currentTime,
  products
}) => {
  const [hotspotProducts, setHotspotProducts] = useState({});
  const currentActiveHotspotIds = useTimeRange(hotspots, currentTime);

  useEffect(() => {
    setActiveHotspotIds(currentActiveHotspotIds);
    const currentHotspotProducts = currentActiveHotspotIds.reduce((acc, id) => {
      const { productId } = hotspots[id];
      acc[productId] = products[productId];
      return acc;
    }, {});
    setHotspotProducts(currentHotspotProducts);
  }, [currentActiveHotspotIds]);

  return (
    (playerPlayingState === playingState.PLAYING ||
      playerPlayingState === playingState.SCRUBBING) && (
      <HotspotCardList hotspotProducts={hotspotProducts} />
    )
  );
};

HotspotScreen.propTypes = {
  playerPlayingState: PropTypes.string.isRequired,
  hotspots: PropTypes.object.isRequired,
  setActiveHotspotIds: PropTypes.func.isRequired,
  currentTime: PropTypes.number.isRequired,
  products: PropTypes.object.isRequired
};

export default compose(
  InjectPlayerProps({
    selectProps: ({ playerPlayingState, currentTime }) => ({
      playerPlayingState,
      currentTime
    })
  }),
  InjectHotspotProps({
    selectActions: ({ setActiveHotspotIds }) => ({ setActiveHotspotIds }),
    selectProps: ({ hotspots }) => ({
      hotspots
    })
  }),
  InjectProductProps()
)(HotspotScreen);
