/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import SettingQuality from './SettingQuality';

const CONTROLBAR = gql`
  query isControlbarOpen {
    player @client {
      selectedQuality
    }
  }
`;

const SettingsPoper = ({
  qualityMenuToggle,
  setqualityMenuToggle,
  setSelectQuality,
  selectQuality,
  client,
  videoPlayer
}) => {
  const renderManager = () => {
    if (qualityMenuToggle)
      return (
        <SettingQuality
          setqualityMenuToggle={setqualityMenuToggle}
          setSelectQuality={setSelectQuality}
          selectQuality={selectQuality}
          client={client}
          videoPlayer={videoPlayer}
        />
      );
    if (qualityMenuToggle === false)
      return (
        <div
          className="Settings spacing"
          style={{ position: 'absolute', top: -230, right: -73 }}>
          <div className="Settings--panel">
            <label className="Settings--panel--label">Prodlink</label>
            <div className="Settings--panel--switchBtn">
              <input
                type="checkbox"
                className="Settings--panel--switchBtn--checkbox"
              />
              <div className="Settings--panel--switchBtn--knobs"></div>
              <div className="Settings--panel--switchBtn--layer"></div>
            </div>
          </div>
          <div className="Settings--panel">
            <label className="Settings--panel--label">Playback Speed</label>
            <p className="Settings--panel--p">Normal</p>
          </div>
          <div
            className="Settings--panel"
            onClick={() => setqualityMenuToggle(true)}>
            <label className="Settings--panel--label">Quality</label>
            <Query query={CONTROLBAR}>
              {({ data: { player } }) => {
                return (
                  <p className="Settings--panel--p">
                    {player.selectedQuality}
                    {player.selectedQuality === '1080' ? (
                      <i className="Settings--panel--p--i">HD</i>
                    ) : null}
                  </p>
                );
              }}
            </Query>
          </div>
        </div>
      );
  };
  return <>{renderManager()}</>;
};

export default SettingsPoper;
