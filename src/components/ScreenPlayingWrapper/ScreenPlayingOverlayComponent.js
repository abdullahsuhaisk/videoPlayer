/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styled from 'styled-components';
import ControlBarHoc from '../ControlBarWrapper/ControlBar/ControlBarHoc';
import { PAUSE } from '../../Queries/Player/PlayerMutations';

const StyledComponent = styled.div`
  .VideoPlay--playBtn-shadow {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -55px;
    margin-left: -55px;
    -webkit-animation-name: playscale; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 0.25s; /* Safari 4.0 - 8.0 */
    animation-name: playscale;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
    /* 
    @-webkit-keyframes playscale {
      from {
        transform: scale(1);
        display: ;
      }
      to {
        transform: scale(1.3);
      }
    } */

    @keyframes playscale {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      99% {
        transform: scale(1.5);
        opacity: 0.1;
      }
      100% {
        transform: scale(0);
        opacity: 0;
      }
    }
  }
`;

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
        style={{ pointerEvents: 'auto' }}>
        <StyledComponent>
          <div className="VideoPlay--playBtn-shadow">
            <div className="VideoPlay--playBtn"></div>
          </div>
        </StyledComponent>
      </div>
    </React.Fragment>
  );
};

export default ControlBarHoc(ScreenPlayingOverlayComponent);
