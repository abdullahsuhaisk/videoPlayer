import React, { useCallback } from 'react';
import HotspotButtonScreen from './HotspotButtonScreen';
import withQueryProdLink from '../HOCS/Grapqhl/ProdLinkQueryHoc';
import { GET_HOTSPOTS } from '../../Queries/HotSpots/HotspotQuery';

// import withQueryProdLink from '../../../HOCS/Grapqhl/ProdLinkQueryHoc';

const HotSpotsPointerContainer = ({ hotspots, client }) => {
  console.log(hotspots);
  const setProductIdForDetail = useCallback((productId) => {
    client.writeData({
      data: { productIdInDetails: productId, isShoppingCartShowing: false }
    });
  }, []);
  // console.log(data);
  return (
    <HotspotButtonScreen
      hotspots={hotspots}
      setProductIdForDetail={setProductIdForDetail}
    />
  );
};

export default withQueryProdLink(HotSpotsPointerContainer, GET_HOTSPOTS);
