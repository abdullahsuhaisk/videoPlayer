import React, { useCallback } from 'react';
import styled from 'styled-components';
import { withApollo } from 'react-apollo';
// import HotspotButtonScreen from './HotspotButtonScreen';
import HotspotImageButton from './HotspotImageButton';

// 0: {sec: 4.897, x: 0.464, y: 0.437, __typename: "HotSpotDynamicPositionType"}
// 1: {sec: 4.907, x: 0.465, y: 0.436, __typename: "HotSpotDynamicPositionType"}
// 2: {sec: 4.918, x: 0.465, y: 0.435, __typename: "HotSpotDyna

const HotSpotDynamicContainer = ({ hotspots, client, currentTime }) => {
  // console.log(hotspots);
  const setProductIdForDetail = useCallback((productId) => {
    client.writeData({
      data: { productIdInDetails: productId, isShoppingCartShowing: false }
    });
  }, []);
  if (hotspots) {
    return hotspots.map((hotSpot, key) => (
      <HotspotImageButton
        hotSpot={hotSpot}
        key={key}
        setProductIdForDetail={setProductIdForDetail}
        currentTime={currentTime}
      />
    ));
  }

  return null;
};

export default withApollo(HotSpotDynamicContainer);
