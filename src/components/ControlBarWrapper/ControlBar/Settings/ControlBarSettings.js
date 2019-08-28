import React from 'react';
import { SettingsWrapper } from './Settings.style';

const ControlBarSettings = () => {
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

export default ControlBarSettings;
