/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import SettingQuality from './SettingQuality';
import SettingsPlayerSpeed from './SettingsPlayerSpeed';

const SettingsPoper = ({
  qualityMenuToggle,
  setqualityMenuToggle,
  setSelectQuality,
  selectQuality,
  client,
  videoPlayer,
  videoSpeedIsOpen,
  setVideoSpeedIsOpen,
  setVideoPlayerSpeed,
  playBackSpeedHandler
}) => {
  // console.log(videoSpeedIsOpen);
  const renderManager = () => {
    const HOTSPOT_SHOWING = gql`
      query hotSpotShowing {
        player @client {
          hotSpotShowing
          playbackSpeed
        }
      }
    `;

    const {
      player: { hotSpotShowing, playbackSpeed }
    } = client.readQuery({ query: HOTSPOT_SHOWING });

    const [showProdlink, setShowProdlink] = useState(hotSpotShowing);

    const changeHotspot = () => {
      if (showProdlink === false) {
        changeHotpotTrue();
      }
      if (showProdlink === true) {
        changeHotpotFalse();
      }
    };

    const changeHotpotFalse = () => {
      client.writeData({
        data: {
          player: {
            __typename: 'Player',
            hotSpotShowing: false
          }
        }
      });
    };

    const changeHotpotTrue = () => {
      client.writeData({
        data: {
          player: {
            __typename: 'Player',
            hotSpotShowing: true
          }
        }
      });
    };

    const CONTROLBAR = gql`
      query isControlbarOpen {
        player @client {
          selectedQuality
        }
      }
    `;
    if (videoSpeedIsOpen) {
      return (
        <SettingsPlayerSpeed
          setVideoSpeedIsOpen={setVideoSpeedIsOpen}
          playBackSpeedHandler={playBackSpeedHandler}
          client={client}
        />
      );
    }
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
          style={{ position: 'absolute', top: -165, right: -77 }}>
          {/* <div className="Settings--panel">
            <label className="Settings--panel--label">Prodlink</label>
            <div className="Settings--panel--switchBtn">
              <input
                defaultChecked={hotSpotShowing}
                type="checkbox"
                className="Settings--panel--switchBtn--checkbox"
                onClick={() => {
                  setShowProdlink(!showProdlink);
                  changeHotspot();
                }}
              />
              <div className="Settings--panel--switchBtn--knobs"></div>
              <div className="Settings--panel--switchBtn--layer"></div>
            </div>
          </div> */}
          <div
            className="Settings--panel"
            onClick={() => setVideoSpeedIsOpen(!videoSpeedIsOpen)}>
            <label className="Settings--panel--label">Playback Speed</label>
            <p className="Settings--panel--p">
              {playbackSpeed === 1 ? 'Normal' : playbackSpeed}
            </p>
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
    return null;
  };
  return <>{renderManager()}</>;
};

export default SettingsPoper;
