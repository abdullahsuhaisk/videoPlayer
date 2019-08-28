import React from 'react';

const ControlBarSettings = () => {
  const settingsHandler = () => {
    // TODO: Add Settings handler
    return;
  };
  return (
    <div>
      <button
        className="settingsBtn"
        onClick={() => {
          settingsHandler();
        }}></button>
    </div>
  );
};

export default ControlBarSettings;
