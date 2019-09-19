import React, { useState, useEffect } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import SettingsPoper from './SettingsPoper';
import ControlBarHoc from '../ControlBarHoc';

const CONTROLBAR = gql`
  query isControlbarOpen {
    player @client {
      isSettingMenuOpen
    }
  }
`;

const ControlBarSettings = ({ client, videoPlayer }) => {
  const [qualityMenuToggle, setqualityMenuToggle] = useState(false);
  // Abow the code probably will entegrate with apollo
  const [selectQuality, setSelectQuality] = useState(null);
  const settingsHandler = () => {
    const {
      player: { isSettingMenuOpen }
    } = client.readQuery({ query: CONTROLBAR });
    client.writeData({
      data: {
        player: {
          __typename: 'Player',
          isSettingMenuOpen: !isSettingMenuOpen
        }
      }
    });
    setqualityMenuToggle(false);
  };

  // useEffect(() => {
  //   setVideoQuality();
  // }, [selectQuality]);

  // const setVideoQuality = () => {
  //   if (selectQuality) {
  //     client.writeData({
  //       data: {
  //         player: {
  //           __typename: 'Player',
  //           currentQuality: selectQuality
  //         }
  //       }
  //     });
  //   }
  // };

  return (
    <div style={{ position: 'relative' }}>
      <Query query={CONTROLBAR}>
        {({ data: { player } }) => {
          if (player.isSettingMenuOpen)
            return (
              <SettingsPoper
                qualityMenuToggle={qualityMenuToggle}
                setqualityMenuToggle={setqualityMenuToggle}
                setSelectQuality={setSelectQuality}
                client={client}
                videoPlayer={videoPlayer}
                selectQuality={selectQuality}
              />
            );
          return null;
        }}
      </Query>
      <button
        className="settingsBtn"
        onClick={() => {
          settingsHandler();
        }}></button>
    </div>
  );
};

export default ControlBarHoc(ControlBarSettings);
