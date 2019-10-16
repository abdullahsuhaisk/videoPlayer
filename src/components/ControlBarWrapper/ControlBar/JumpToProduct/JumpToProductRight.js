import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { getProdLinkUniqueId } from '../../../../hooks/ProdLinkHook';
import { GET_PLAYER } from '../../../Base/AppQueries';
import ControlBarHoc from '../ControlBarHoc';

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

const JumpToProductRight = ({ client, videoPlayer }) => {
  const prodLinkUniqueId = getProdLinkUniqueId();
  const [hotSpots, setHotSpots] = useState([]);
  const [videoPlayerPosition, setVideoPlayerPosition] = useState(0);
  useEffect(() => {
    client
      .query({
        query: GET_HOTSPOTS,
        variables: { prodLinkUniqueId }
      })
      .then(
        ({ data: { prodLink } }) =>
          prodLink &&
          setHotSpots(
            prodLink.hotSpots.sort(
              (a, b) => parseFloat(a.in) - parseFloat(b.in)
            )
          )
      );
  }, []);
  useEffect(() => {
    client
      .query({
        query: GET_PLAYER,
        variables: {}
      })
      .then(({ data: { player } }) =>
        setVideoPlayerPosition(player.currentTime)
      );
  }, [videoPlayer.currentTime()]);

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

  const jumpToProductHandlerRight = () => {
    if (!hotSpots) return null;
    let i = 0;
    while (i <= hotSpots.length) {
      if (!hotSpots[i]) {
        break;
      }
      if (hotSpots[i].in > videoPlayerPosition) {
        videoPlayer.currentTime(parseInt(hotSpots[i].in, 10) + 1);
        break;
      }
      if (hotSpots[i].in < videoPlayerPosition) {
        i += 1;
      }
    }
  };
  if (hotSpotShowing) {
    return (
      <button
        className="jumpToProductBtnRight"
        onClick={() => jumpToProductHandlerRight()}></button>
    );
  }
  return null;
};

export default ControlBarHoc(JumpToProductRight);
