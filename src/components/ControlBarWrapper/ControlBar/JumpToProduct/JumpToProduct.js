import React, { useState, useEffect } from 'react';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import { getVideoJs } from '../../../../hooks/VideoJsHook';
import { getProdLinkUniqueId } from '../../../../hooks/ProdLinkHook';
// import { GET_PLAYER } from '../../../Base/AppQueries';

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

const JumpToProduct = ({ client }) => {
  const videoPlayer = getVideoJs();
  const prodLinkUniqueId = getProdLinkUniqueId();
  const [hotSpots, setHotSpots] = useState([]);
  const [currentHotSpot, setCurrenHotSpot] = useState(0);
  // const [currentTime, setCurrentTime] = useState(null);

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

  // useEffect(() => {
  //   client
  //     .query({
  //       query: GET_PLAYER,
  //       variables: {}
  //     })
  //     .then(({ data: { player } }) => setCurrentTime(player.currentTime));
  // }, []);
  // console.log(currentTime);
  // console.log(hotSpots);

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
