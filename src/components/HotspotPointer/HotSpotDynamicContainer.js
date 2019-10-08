import React from 'react';
import { withApollo } from 'react-apollo';
// import HotspotButtonScreen from './HotspotButtonScreen';
import HotspotImageButton from './HotspotImageButton';
import { PLAYER } from '../../common/constants';
import { getVideoJs } from '../../hooks/VideoJsHook';

// 0: {sec: 4.897, x: 0.464, y: 0.437, __typename: "HotSpotDynamicPositionType"}
// 1: {sec: 4.907, x: 0.465, y: 0.436, __typename: "HotSpotDynamicPositionType"}
// 2: {sec: 4.918, x: 0.465, y: 0.435, __typename: "HotSpotDyna

const HotSpotDynamicContainer = ({ hotspots, client, currentTime }) => {
  // console.log(hotspots);
  const videoPlayer = getVideoJs();
  const setProductIdForDetail = (productId) => {
    client.writeData({
      data: {
        player: {
          __typename: 'Player',
          playingState: PLAYER.PAUSED
        },
        productIdInDetails: productId,
        isShoppingCartShowing: false
      }
    });
    videoPlayer.pause();
  };
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
