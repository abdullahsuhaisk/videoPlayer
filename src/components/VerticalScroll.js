import React from 'react';

const VerticalScroll = ({ children }) => {
  return (
    <div className="scroll" style={{ overflow: 'hidden' }}>
      {children}
    </div>
  );
};

export default VerticalScroll;
