import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { getProdLinkUniqueId } from '../../../../hooks/ProdLinkHook';
import { GET_PLAYER } from '../../../Base/AppQueries';
import ControlBarHoc from '../ControlBarHoc';
import JumpLeft from '../../../../assets/icons/JumpToProductLeft.svg';
import { GET_HOTSPOTS } from '../../../../Queries/HotSpots/HotspotQuery';

const JumpToProductLeft = ({ client, videoPlayer }) => {
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

  const jumpToProductHandlerLeft = () => {
    if (!hotSpots) return null;
    let i = hotSpots.length - 1;
    while (i >= 0) {
      if (!hotSpots[i]) {
        break;
      }
      if (hotSpots[i].in < videoPlayerPosition) {
        videoPlayer.currentTime(parseInt(hotSpots[i].in, 10) - 1);
        break;
      }
      if (hotSpots[i].in > videoPlayerPosition) {
        i -= 1;
      }
    }
  };
  if (hotSpotShowing === true) {
    return (
      <div
        className="jumpToProductBtnLeft-wrapper"
        onClick={() => jumpToProductHandlerLeft()}>
        <img src={JumpLeft} alt="Jump Left" className="jumpToProductBtnLeft" />
      </div>
    );
  }
  return null;
};

export default ControlBarHoc(JumpToProductLeft);
