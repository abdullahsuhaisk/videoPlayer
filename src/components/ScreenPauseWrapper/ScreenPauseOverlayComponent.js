/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import gql from 'graphql-tag';
import styled from 'styled-components';
import ControlBarHoc from '../ControlBarWrapper/ControlBar/ControlBarHoc';
import { PLAY } from '../../Queries/Player/PlayerMutations';

const StyledComponent = styled.div`
  .VideoPlay--pauseBtn-shadow {
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

const ScreenPauseOverlayComponent = ({ videoPlayer, client }) => {
  useEffect(() => {
    document.addEventListener('keypress', (e) => {
      KeyHandler(e);
      console.log('pause overlay');
      return () => {
        document.removeEventListener('keypress', KeyHandler);
        console.log('removed');
      };
    });
  }, []);

  const KeyHandler = (e) => {
    if (e.code === 'Space') {
      client.mutate({
        mutation: PLAY
      });

      return videoPlayer.paused() ? videoPlayer.play() : null;
    }
  };

  const OverlayClickHandler = () => {
    client.mutate({
      mutation: PLAY
    });
    videoPlayer.play();
  };

  return (
    <React.Fragment>
      <div
        className="Overlay"
        onClick={() => OverlayClickHandler()}
        style={{ pointerEvents: 'auto' }}>
        <StyledComponent>
          <div className="VideoPlay--pauseBtn-shadow">
            <div className="VideoPlay--pauseBtn"></div>
          </div>
        </StyledComponent>
      </div>
    </React.Fragment>
  );
};

export default ControlBarHoc(ScreenPauseOverlayComponent);
