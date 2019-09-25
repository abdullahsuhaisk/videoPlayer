import React, { useCallback } from 'react';
import { Query } from 'react-apollo';
import HotspotButtonScreen from './HotspotButtonScreen';
import withQueryProdLink from '../HOCS/Grapqhl/ProdLinkQueryHoc';
import { GET_HOTSPOTS } from '../../Queries/HotSpots/HotspotQuery';
import { GET_PLAYER } from '../../Queries/Player/PlayerQueries';

// import withQueryProdLink from '../../../HOCS/Grapqhl/ProdLinkQueryHoc';

const HotSpotsPointerContainer = ({ data, client }) => {
  const setProductIdForDetail = useCallback((productId) => {
    client.writeData({
      data: { productIdInDetails: productId }
    });
  }, []);
  console.log(data);
  const hotSpots = data.prodLink && data.prodLink.hotSpots;
  return (
    <Query query={GET_PLAYER}>
      {({
        data: {
          player: { currentTime }
        }
      }) => {
        const activeHotSpots = hotSpots.filter(
          (hotSpot) =>
            currentTime >= hotSpot.in - 1 && currentTime <= hotSpot.out + 1
        );
        return (
          <HotspotButtonScreen
            hotspots={activeHotSpots}
            setProductIdForDetail={setProductIdForDetail}
          />
        );
      }}
    </Query>
  );
};

export default withQueryProdLink(HotSpotsPointerContainer, GET_HOTSPOTS);
