/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import BaseQueryHoc from '../../../components/HOCS/Grapqhl/BaseQueryHoc';
import { GET_PLAYER } from '../../../Queries/Player/PlayerQueries';
import { PLAYER } from '../../../common/constants';

const ProductDetailWrapper = ({ children, client, data }) => {
  const { player, productIdInDetails } = data;
  if (!player || !productIdInDetails) {
    return null;
  }
  if (player.isStarted && player.playingState === PLAYER.PAUSED) {
    return (
      <div className="darkOverlay">
        <i
          className="modal--close"
          onClick={() =>
            client.writeData({
              data: { productIdInDetails: null }
            })
          }></i>
        <div className="ProductDetail">{children}</div>
      </div>
    );
  }
  return console.log('Someting wrong in Product Detail');
};

export default BaseQueryHoc(ProductDetailWrapper, GET_PLAYER);
