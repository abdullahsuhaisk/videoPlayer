import React from 'react';
import './overlay.styles.css';

const Overlay = () => {
  return (
    <React.Fragment>
      <div className="mainMenu--background"></div>
      <div className="mainMenu--overlay"></div>
    </React.Fragment>
  );
};

export default Overlay;
