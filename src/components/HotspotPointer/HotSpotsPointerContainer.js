import React, { useCallback } from 'react';
import { withApollo } from 'react-apollo';

import HotspotButtonScreen from './HotspotButtonScreen';

// import withQueryProdLink from '../../../HOCS/Grapqhl/ProdLinkQueryHoc';

const HotSpotsPointerContainer = ({ hotspots, client }) => {
  // console.log(hotspots);
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

export default withApollo(HotSpotsPointerContainer);
