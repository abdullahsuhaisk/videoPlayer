/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import styled from 'styled-components';
import ControlBarHoc from '../ControlBarWrapper/ControlBar/ControlBarHoc';
import { PAUSE, PLAY } from '../../Queries/Player/PlayerMutations';

const StyledComponent = styled.div`
  .VideoPlay--playBtn-shadow {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-animation-name: playscale; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 0.3s; /* Safari 4.0 - 8.0 */
    animation-name: playscale;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;

    @-webkit-keyframes playscale {
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
  // CODE FOR MOUSE MOVE STARTS HERE
  let timeout;
  const mouseMoveHandler = React.useCallback(() => {
    console.log(false);
    mouseEnterHandler();
    clearTimeout(timeout);
    timeout = setTimeout(() => mouseLeaveHandler(), 4000);
  });

  const mouseEnterHandler = () => {
    client.writeData({
      data: {
        player: {
          __typename: 'Player',
          controlbarShowing: true
        }
      }
    });
    // When full screen is must be close !
  };
  const mouseLeaveHandler = () => {
    client.writeData({
      data: {
        player: {
          __typename: 'Player',
          controlbarShowing: false
        }
      }
    });
  };

  const OverlayClickHandler = () => {
    client.mutate({
      mutation: PAUSE
    });
    videoPlayer.pause();
  };
  // console.log(mouseMove);

  return (
    <React.Fragment>
      <div
        className="Overlay--playing"
        onClick={() => OverlayClickHandler()}
        // onMouseMove={() => mouseMoveHandler()}
        onMouseEnter={() => mouseEnterHandler()}
        onMouseLeave={() => mouseLeaveHandler()}
        style={{ pointerEvents: 'auto' }}>
        <StyledComponent>
          <div className="VideoPlay">
            <div className="VideoPlay--playBtn-shadow">
              <div className="VideoPlay--playBtn"></div>
            </div>
          </div>
        </StyledComponent>
      </div>
    </React.Fragment>
  );
};

export default ControlBarHoc(ScreenPlayingOverlayComponent);
