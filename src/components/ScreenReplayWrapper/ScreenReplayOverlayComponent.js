/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import ControlBarHoc from '../ControlBarWrapper/ControlBar/ControlBarHoc';

const ScreenReplayOverlayComponent = ({ videoPlayer, client }) => {
  const Data = [
    // {
    //   img:
    //     'https://images.unsplash.com/photo-1550548151-ef91bf4b5467?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    // },
    // {
    //   img:
    //     'https://images.unsplash.com/photo-1550548151-ef91bf4b5467?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    // },
    // {
    //   img:
    //     'https://images.unsplash.com/photo-1550548151-ef91bf4b5467?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    // },
    // {
    //   img:
    //     'https://images.unsplash.com/photo-1550548151-ef91bf4b5467?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    // },
    // {
    //   img:
    //     'https://images.unsplash.com/photo-1550548151-ef91bf4b5467?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    // },
    // {
    //   img:
    //     'https://images.unsplash.com/photo-1550548151-ef91bf4b5467?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    // }
  ];

  return (
    <React.Fragment>
      <div className="VideoPlay" style={{ pointerEvents: 'auto' }}>
        <div className="VideoPlay--playBtn-shadow">
          <div
            className="VideoPlay--playBtn"
            onClick={() => {
              client.writeData({
                data: {
                  player: {
                    __typename: 'Player',
                    playingState: 'PLAY'
                  }
                }
              });
              videoPlayer.play();
            }}></div>
        </div>
      </div>
      <p className="replay-text">Replay</p>
      <div className="replay--container">
        {Data.map((item, index) => {
          if (index < 4) {
            if (item.img) {
              return (
                <div className="next--video">
                  <div className="VideoPlay" style={{ pointerEvents: 'auto' }}>
                    <div className="VideoPlay--playBtn-shadow">
                      <div className="VideoPlay--playBtn"></div>
                    </div>
                  </div>
                  <img src={item.img} alt="" />
                </div>
              );
            }
          }
        })}
      </div>
    </React.Fragment>
  );
};

export default ControlBarHoc(ScreenReplayOverlayComponent);
