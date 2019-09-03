import React, { useState, useEffect } from 'react';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import { getVideoJs } from '../../../../hooks/VideoJsHook';
import { getProdLinkId } from '../../../../hooks/ProdLinkHook';
import { GET_PLAYER } from '../../../Base/AppQueries';

const GET_HOTSPOTS = gql`
  query getHotspotsForHotspotScreen($prodLinkId: Int!) {
    prodLink(prodLinkId: $prodLinkId) {
      id
      hotSpots {
        id
        in
        out
      }
    }
  }
`;

const JumpToProduct = ({ client }) => {
  const videoPlayer = getVideoJs();
  const prodLinkId = getProdLinkId();
  const [hotSpots, setHotSpots] = useState([]);
  const [currentHotSpot, setCurrenHotSpot] = useState(0);
  const [currentTime, setCurrentTime] = useState(null);

  useEffect(() => {
    client
      .query({
        query: GET_HOTSPOTS,
        variables: { prodLinkId }
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
      .then(({ data: { player } }) => console.log(player));
  }, []);
  console.log(currentTime);
  console.log(hotSpots);

  const hotSpotCounts = hotSpots.length;

  const jumpToProductHandler = (value, callback) => {
    if (value < hotSpotCounts) {
      const time = hotSpots && hotSpots[value].in;
      videoPlayer.currentTime(parseInt(time, 10));
      callback(value + 1);
    }
    // videoPlayer.currentTime(120);
  };
  return (
    <div>
      <button
        className="jumpToProductBtn"
        onClick={() => {
          jumpToProductHandler(currentHotSpot, setCurrenHotSpot);
        }}></button>
    </div>
  );
};

export default withApollo(JumpToProduct);
