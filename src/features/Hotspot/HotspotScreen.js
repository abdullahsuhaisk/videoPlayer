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

const HotspotScreen = ({
  playing,
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

  return playing && <HotspotCardList hotspotProducts={hotspotProducts} />;
};

HotspotScreen.propTypes = {
  playing: PropTypes.bool.isRequired,
  hotspots: PropTypes.object.isRequired,
  setActiveHotspotIds: PropTypes.func.isRequired,
  currentTime: PropTypes.number.isRequired,
  products: PropTypes.object.isRequired
};

export default compose(
  InjectPlayerProps({
    selectProps: ({ playing, currentTime }) => ({ playing, currentTime })
  }),
  InjectHotspotProps({
    selectActions: ({ setActiveHotspotIds }) => ({ setActiveHotspotIds }),
    selectProps: ({ hotspots }) => ({
      hotspots
    })
  }),
  InjectProductProps()
)(HotspotScreen);
