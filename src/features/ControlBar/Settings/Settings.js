import React from 'react';
import { SettingsWrapper } from './Settings.style';

const Settings = () => {
  const settingsHandler = () => {
    // TODO: Add Settings handler
    return;
  };
  return (
    <SettingsWrapper>
      <button
        className="settingsBtn"
        onClick={() => {
          settingsHandler();
        }}></button>
    </SettingsWrapper>
  );
};

export default Settings;
