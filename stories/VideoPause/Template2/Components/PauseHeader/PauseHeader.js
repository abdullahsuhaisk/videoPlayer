import React from 'react';

const PauseHeader = () => {
  return (
    <div className="PauseHeader">
      <div className="PauseHeader--company">
        <p className="PauseHeader--company--name">Inditex</p>
      </div>
      <div className="PauseHeader--icons">
        <i className="PauseHeader--icons--like"></i>
        <i className="PauseHeader--icons--fav"></i>
        <i className="PauseHeader--icons--share"></i>
        <i className="PauseHeader--icons--menu"></i>
      </div>
    </div>
  );
};

export default PauseHeader;