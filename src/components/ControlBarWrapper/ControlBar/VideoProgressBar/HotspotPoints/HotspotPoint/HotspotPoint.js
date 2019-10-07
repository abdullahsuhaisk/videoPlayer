import React, { useCallback } from 'react';
import { PLAYER } from '../../../../../../common/constants';
import { HotspotPointWrapper } from './HotspotPoints.style';
import { httpToHttps } from '../../../../../../utils/httpTohttps';

const HotspotPoint = ({ position, product, client }) => {
  const { image, name, id } = product;
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
              src={image && httpToHttps(image && image.imageUrl)}
              alt={name}
              onClick={() => setProductIdForDetail(id)}
            />
            <div
              className="hotspot--image-overlay"
              onClick={() => setProductIdForDetail(id)}
            />
            <div className="hotspot--hover-delay" />
          </div>
        </div>
      </div>
    </HotspotPointWrapper>
  );
};

export default HotspotPoint;
