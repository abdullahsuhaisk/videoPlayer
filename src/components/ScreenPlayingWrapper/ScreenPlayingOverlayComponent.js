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
    margin-top: -55px;
    margin-left: -55px;
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

  const CONTROLBAR_SHOWING = gql`
    query controlbarShowing {
      player @client {
        controlbarShowing
      }
    }
  `;
  const [mouseMove, setMouseMove] = useState(true);

  let timeout;

  const mouseMoveHandler = () => {
    setMouseMove(false);
    clearTimeout(timeout);
    timeout = setTimeout(() => setMouseMove(false), 5000);
    const {
      player: { controlbarShowing }
    } = client.readQuery({ query: CONTROLBAR_SHOWING });
    if (controlbarShowing !== mouseMove) {
      console.log(controlbarShowing);
      client.writeData({
        data: {
          player: {
            __typename: 'Player',
            controlbarShowing: mouseMove
          }
        }
      });
    }
    return null;
  };
  const mouseEnterHandler = () => {
    client.writeData({
      data: {
        player: {
          __typename: 'Player',
          controlbarShowing: true
        }
      }
    });
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

  useEffect(() => {}, [mouseMove]);

  // CODE FOR MOUSE MOVE ENDS HERE

  // useEffect(() => {
  //   document.addEventListener('keypress', (e) => {
  //     PauseKeyHandler(e);
  //     console.log('play overlay');
  //   });
  //   return () => {
  //     document.removeEventListener('keypress', PauseKeyHandler);
  //     console.log('removed');
  //   };
  // }, []);

  // const PauseKeyHandler = (e) => {
  //   if (e.code === 'Space') {
  //     if (!videoPlayer.paused()) {
  //       client.mutate({
  //         mutation: PAUSE
  //       });
  //       videoPlayer.pause();
  //     }
  //     if (videoPlayer.pause())
  //       client.mutate({
  //         mutation: PLAY
  //       });
  //     videoPlayer.play();
  //   }
  // };

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
          <div className="VideoPlay--playBtn-shadow">
            <div className="VideoPlay--playBtn"></div>
          </div>
        </StyledComponent>
      </div>
    </React.Fragment>
  );
};

export default ControlBarHoc(ScreenPlayingOverlayComponent);
