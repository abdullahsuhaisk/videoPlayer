import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo';
// import { CartWrapper } from './Cart.style';
import { getVideoJs } from '../../../../hooks/VideoJsHook';
import VibuyIcon3 from '../../../../assets/icons/Vibuy-Glphy.svg';
import VibuyIcon2 from '../../../../assets/icons/Vibuy-Line.svg';
import { getParams } from '../../../../hooks/ProdLinkHook';

const VibuyIcon = ({ client }) => {
  const HOTSPOT_SHOWING = gql`
    query hotSpotShowing {
      player @client {
        hotSpotShowing
      }
    }
  `;
  useEffect(() => {
    const isTrueSet = getParams('vibuy') === 'true';
    client.writeData({
      data: {
        player: {
          __typename: 'Player',
          playingState: 'PLAYING',
          hotSpotShowing: isTrueSet,
          isSettingMenuOpen: false
        }
      }
    });
  }, []);

  const {
    player: { hotSpotShowing }
  } = client.readQuery({ query: HOTSPOT_SHOWING });

  // console.log(hotSpotShowing);

  const onChange = () => {
    client.writeData({
      data: {
        player: {
          __typename: 'Player',
          playingState: 'PLAYING',
          hotSpotShowing: !hotSpotShowing,
          isSettingMenuOpen: false
        }
      }
    });
  };
  return (
    <div className="controlbar--vibuyicon-wrapper" onClick={onChange}>
      <img
        src={hotSpotShowing === true ? VibuyIcon3 : VibuyIcon2}
        alt="Vibuy Icon"
        className="controlbar--vibuyicon"
      />
    </div>
  );
};

export default withApollo(VibuyIcon);
