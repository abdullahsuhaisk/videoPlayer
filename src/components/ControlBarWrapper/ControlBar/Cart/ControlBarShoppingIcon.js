import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo';
// import { CartWrapper } from './Cart.style';
import { getVideoJs } from '../../../../hooks/VideoJsHook';
import AddToCartIcon from '../../../../assets/icons/AddToCartIcon.svg';

const ControlBarShoppingIcon = ({ client }) => {
  const [shoppingCartItemsCount, setShoppingCartItemsCount] = useState(
    JSON.parse(localStorage.getItem('guestCart')) &&
      JSON.parse(localStorage.getItem('guestCart')).length
  );
  useEffect(() => {
    setShoppingCartItemsCount(
      JSON.parse(localStorage.getItem('guestCart')) &&
        JSON.parse(localStorage.getItem('guestCart')).length
    );
  }, [JSON.parse(localStorage.getItem('guestCart'))]);
  const videoPlayer = getVideoJs();
  const cartHandler = () => {
    // TODO: Add Cart handler
    // client.writeData({
    //   data: { whichTabItemIsRendering: 'ShoppingCartScreen' }
    // });
    // eslint-disable-next-line no-unused-expressions
    videoPlayer.paused()
      ? client.writeData({
          data: {
            isLoginFormShowing: false,
            isProfileOpen: false,
            whichTabItemIsRendering: 'ShoppingCartScreen',
            isShoppingCartShowing: true
          }
        })
      : client.writeData({
          data: {
            player: {
              __typename: 'Player',
              playingState: 'PAUSE'
            },
            isLoginFormShowing: false,
            isProfileOpen: false,
            whichTabItemIsRendering: 'ShoppingCartScreen',
            isShoppingCartShowing: true
          }
        });
    videoPlayer.pause();
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

  if (hotSpotShowing === true) {
    return (
      <div
        className="cartBtn-wrapper"
        onClick={() => {
          cartHandler();
        }}>
        {shoppingCartItemsCount !== null ? (
          <div className="addtocart-counter">{shoppingCartItemsCount}</div>
        ) : null}

        <img src={AddToCartIcon} alt="Shopping Cart" className="cartBtn" />
      </div>
    );
  }
  return null;
};

export default withApollo(ControlBarShoppingIcon);
