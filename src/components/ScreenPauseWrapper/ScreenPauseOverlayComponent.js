/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import ControlBarHoc from '../ControlBarWrapper/ControlBar/ControlBarHoc';
import { PLAYER } from '../../common/constants';

const ScreenPauseOverlayComponent = ({ videoPlayer, client }) => {
  const OverlayClickHandler = () => {
    client.writeData({
      data: {
        player: {
          __typename: 'Player',
          playingState: PLAYER.PLAYING
        }
      }
    });
    videoPlayer.play();
  };
  return (
    <React.Fragment>
      <div
        className="Overlay"
        onClick={() => OverlayClickHandler()}
        style={{ pointerEvents: 'auto' }}></div>
    </React.Fragment>
  );
};

export default ControlBarHoc(ScreenPauseOverlayComponent);
