import React, { useCallback, useEffect } from 'react';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { PLAYER } from '../../../../../../common/constants';
import { HotspotPointWrapper } from './HotspotPoints.style';
import { httpToHttps } from '../../../../../../utils/httpTohttps';
import NoImageSmall from '../../../../../../assets/images/NoImageSmall.png';

const StyledComponent = styled.div`
  .HotspotPoint {
    display: ${(props) => (props.hotspotShowing ? 'none' : 'block')};
  }
`;

const HotspotPoint = ({ position, product, client, item, timeChanger }) => {
  useEffect(() => {}, [hotSpotShowing]);

  const { image, name, id } = product;
  // console.log(item);

  const HOTSPOT_SHOWING = gql`
    query hotSpotShowing {
      player @client {
        hotSpotShowing
      }
    }
  `;

  const {
    player: { hotSpotShowing }
  } = client.readQuery({ query: HOTSPOT_SHOWING });

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
  if (hotSpotShowing === true) {
    return (
      <StyledComponent hotSpotShowing={hotSpotShowing}>
        <HotspotPointWrapper position={position}>
          <div className="HotspotPoint" onClick={() => timeChanger(item.in)}>
            <div className="hotspot--image-container">
              <div className="hotspot--image">
                <img
                  src={
                    (image && httpToHttps(image && image.imageUrl)) ||
                    NoImageSmall
                  }
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
      </StyledComponent>
    );
  }
  return null;
};

export default HotspotPoint;
