import React, { useEffect, useState, useCallback } from 'react';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import HotspotPoint from './HotspotPoint/HotspotPoint';
import { getVideoJs } from '../../../../../hooks/VideoJsHook';
import {
  getProdLinkUniqueId,
  getParams
} from '../../../../../hooks/ProdLinkHook';

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
  const [showDots, setShowDots] = useState(false);
  const videoPlayer = getVideoJs();
  const prodLinkUniqueId = getProdLinkUniqueId();
  useEffect(() => {
    client
      .query({
        query: GET_HOTSPOTS,
        variables: { prodLinkUniqueId }
      })
      .then(({ data }) => {
        return data && data.prodLink && setHotSpots(data.prodLink.hotSpots);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const isTrueSet = getParams('showDots') === 'true';
    setShowDots(isTrueSet);
  }, []);

  const hotspotPointHandler = useCallback((time) => {
    if (videoPlayer && videoPlayer.duration() > 0) {
      return (time * 100) / videoPlayer.duration();
    }
    return 0;
  });
  const timeChanger = (time) => {
    videoPlayer.currentTime(parseInt(time, 10));
  };

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

  if (hotSpotShowing && showDots === true) {
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
  }
  return null;
};

export default withApollo(HotspotPoints);
