/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Fade from 'react-reveal/Fade';
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
      <Fade right delay={0} duration={300}>
        <div className="darkOverlay">
          {/* props must be given for this, it is only needed in template 2 */}
          {/* <i
            className="modal--close"
            onClick={() =>
              client.writeData({
                data: { productIdInDetails: null }
              })
            }></i> */}
          <div className="ProductDetail">
            <div className="modal-close-container">
              <i
                className="modal--close"
                onClick={() =>
                  client.writeData({
                    data: { productIdInDetails: null }
                  })
                }></i>
            </div>
            {children}
          </div>
        </div>
      </Fade>
    );
  }
  return console.log('Someting wrong in Product Detail');
};

export default BaseQueryHoc(ProductDetailWrapper, GET_PLAYER);
