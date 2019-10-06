import React, { useCallback } from 'react';
import { PLAYER } from '../../../../../../common/constants';
import { HotspotPointWrapper } from './HotspotPoints.style';

const HotspotPoint = ({ position, product, client }) => {
  const setProductIdForDetail = useCallback((productId) => {
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
  }, []);
  return (
    <HotspotPointWrapper position={position}>
      <div className="HotspotPoint">
        <div className="hotspot--image-container">
          <div className="hotspot--image">
            <img
              src={product.image.imageUrl}
              alt={product.name}
              onClick={() => setProductIdForDetail(product.id)}
            />
            <div
              className="hotspot--image-overlay"
              onClick={() => setProductIdForDetail(product.id)}
            />
            <div className="hotspot--hover-delay" />
          </div>
        </div>
      </div>
    </HotspotPointWrapper>
  );
};

export default HotspotPoint;
