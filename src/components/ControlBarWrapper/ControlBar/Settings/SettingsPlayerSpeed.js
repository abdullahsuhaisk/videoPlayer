/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { playbackRates } from '../../../../common/playBackRates';

const SettingsPlayerSpeed = ({
  setVideoSpeedIsOpen,
  playBackSpeedHandler,
  client
}) => {
  const PLAYER_SPEED = gql`
    query playerSpeed {
      player @client {
        playbackSpeed
      }
    }
  `;
  const [selectedSpeed, setSelectedSpeed] = useState(null);
  useEffect(() => {
    const {
      player: { playbackSpeed }
    } = client.readQuery({ query: PLAYER_SPEED });
    setSelectedSpeed(playbackSpeed);
  }, []);

  const classNames =
    'Settings--info--options--p Settings--info--options--selected';

  return (
    <div
      className="Settings spacing"
      style={{
        position: 'absolute',
        top: -525,
        right: -73,
        backgroundColor: 'rgba(0, 1, 16, 0.8)'
      }}>
      <div className="Settings--info">
        <div className="Settings--info--head">
          <p className="Settings--info--head--p">Play Back Speed</p>
        </div>
        <div className="Settings--info--options">
          {playbackRates.map((item, key) => (
            <p
              className={
                item === selectedSpeed
                  ? classNames
                  : 'Settings--info--options--p'
              }
              onClick={() => {
                playBackSpeedHandler(item);
                setSelectedSpeed(item);
              }}
              key={key}>
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SettingsPlayerSpeed;
