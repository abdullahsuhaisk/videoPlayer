import React from 'react';

const ProductPauseWrapper = ({ children }) => {
  return <div style={{ pointerEvents: 'auto' }}>{children}</div>;
};

export default ProductPauseWrapper;
