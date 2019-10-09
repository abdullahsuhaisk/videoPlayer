/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import ControlBarHoc from '../ControlBarWrapper/ControlBar/ControlBarHoc';
import { PAUSE } from '../../Queries/Player/PlayerMutations';

const ScreenPlayingOverlayComponent = ({ videoPlayer, client }) => {
  const OverlayClickHandler = () => {
    client.mutate({
      mutation: PAUSE
    });
    videoPlayer.pause();
  };
  return (
    <React.Fragment>
      <div
        className="Overlay--playing"
        onClick={() => OverlayClickHandler()}
        style={{ pointerEvents: 'auto' }}></div>
    </React.Fragment>
  );
};

export default ControlBarHoc(ScreenPlayingOverlayComponent);
