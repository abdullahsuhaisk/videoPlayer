import React, { useEffect, useState } from 'react';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import HotspotPoint from './HotspotPoint/HotspotPoint';
import { getVideoJs } from '../../../../../hooks/VideoJsHook';
import { getProdLinkUniqueId } from '../../../../../hooks/ProdLinkHook';

const GET_HOTSPOTS = gql`
  query getHotspotsForHotspotScreen(
    $prodLinkId: Int
    $prodLinkUniqueId: String
  ) {
    prodLink(prodLinkId: $prodLinkId, prodLinkUniqueId: $prodLinkUniqueId) {
      id
      uniqueId
      hotSpots {
        id
        in
        out
        product {
          id
          image {
            id
            thumbnailUrl
          }
        }
      }
    }
  }
`;

const HotspotPoints = ({ client }) => {
  const [hotSpots, setHotSpots] = useState(null);
  const videoPlayer = getVideoJs();
  const prodLinkUniqueId = getProdLinkUniqueId();
  useEffect(() => {
    client
      .query({
        query: GET_HOTSPOTS,
        variables: { prodLinkUniqueId }
      })
      .then(({ data }) => {
        console.log(data);
        return data && data.prodLink && setHotSpots(data.prodLink.hotSpots);
      })
      .catch((err) => console.log(err));
  }, []);

  const hotspotPointHandler = (time) => {
    if (videoPlayer && videoPlayer.duration() > 0) {
      return (time * 100) / videoPlayer.duration();
    }
    return 0;
  };
  const timeChanger = (time) => {
    videoPlayer.currentTime(parseInt(time, 10));
  };
  return (
    <>
      {hotSpots &&
        hotSpots.map((item) => (
          <HotspotPoint
            position={hotspotPointHandler(parseInt(item.in, 10))}
            key={item.id}
            product={item.product}
            client={client}
            timeChanger={timeChanger}
            item={item}
          />
        ))}
    </>
  );
};

export default withApollo(HotspotPoints);
