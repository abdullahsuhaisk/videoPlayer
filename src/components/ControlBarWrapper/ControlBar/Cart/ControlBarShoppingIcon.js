import React from 'react';
import { withApollo } from 'react-apollo';
// import { CartWrapper } from './Cart.style';
import { getVideoJs } from '../../../../hooks/VideoJsHook';

const ControlBarShoppingIcon = ({ client }) => {
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
  const shoppingCartItemsCount =
    JSON.parse(localStorage.getItem('guestCart')) &&
    JSON.parse(localStorage.getItem('guestCart')).length;
  return (
    <div>
      {shoppingCartItemsCount !== null ? (
        <div className="addtocart-counter">{shoppingCartItemsCount}</div>
      ) : null}
      <button
        className="cartBtn"
        onClick={() => {
          cartHandler();
        }}></button>
    </div>
  );
};

export default withApollo(ControlBarShoppingIcon);
