import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo';
// import { CartWrapper } from './Cart.style';
import { getVideoJs } from '../../../../hooks/VideoJsHook';
import VibuyIcon2 from '../../../../assets/icons/VibuyIcon.svg';

const VibuyIcon = ({ client }) => {
  const [toggle, setToggle] = useState(false);

  const videoPlayer = getVideoJs();

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

  const onChange = () => {
    client.writeData({
      data: {
        player: {
          __typename: 'Player',
          playingState: 'PLAYING',
          hotSpotShowing: !hotSpotShowing
        }
      }
    });
  };
  return (
    <div>
      <img
        src={VibuyIcon2}
        alt="VibuyIcon"
        onClick={onChange}
        className="controlbar--vibuyicon"
      />
    </div>
  );
};

export default withApollo(VibuyIcon);
