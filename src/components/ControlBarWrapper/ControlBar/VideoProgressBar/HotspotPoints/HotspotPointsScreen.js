import React, { useEffect, useState } from 'react';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import HotspotPoint from './HotspotPoint/HotspotPoint';
import { getVideoJs } from '../../../../../hooks/VideoJsHook';
import { getProdLinkId } from '../../../../../hooks/ProdLinkHook';

const GET_HOTSPOTS = gql`
  query getHotspotsForHotspotScreen($prodLinkId: Int!) {
    prodLink(prodLinkId: $prodLinkId) {
      id
      hotSpots {
        id
        in
        out
        product {
          id
          name
          image {
            id
            imageUrl
          }
        }
      }
    }
  }
`;

const HotspotPoints = ({ client }) => {
  const [hotSpots, setHotSpots] = useState(null);
  const videoPlayer = getVideoJs();
  const prodLinkId = getProdLinkId();
  useEffect(() => {
    client
      .query({
        query: GET_HOTSPOTS,
        variables: { prodLinkId }
      })
      .then(
        ({ data: { prodLink } }) => prodLink && setHotSpots(prodLink.hotSpots)
      );
  }, []);

  const hotspotPointHandler = (time) => {
    if (videoPlayer && videoPlayer.duration() > 0) {
      return (time * 100) / videoPlayer.duration();
    }
    return 0;
  };
  // console.log(hotSpots);
  return (
    <>
      {hotSpots &&
        hotSpots.map((item) => (
          <HotspotPoint
            position={hotspotPointHandler(parseInt(item.in, 10))}
            key={item.id}
          />
        ))}
      <HotspotPoint position={hotspotPointHandler(50)} />
    </>
  );
};

export default withApollo(HotspotPoints);
