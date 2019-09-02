import React from 'react';
import { getVideoJs } from '../../../../hooks/VideoJsHook';

const JumpToProduct = () => {
  const videoPlayer = getVideoJs();
  const jumpToProductHandler = () => {
    // TODO: Add jumpToProduct handler
    return;
  };
  return (
    <div>
      <button
        className="jumpToProductBtn"
        onClick={() => {
          jumpToProductHandler();
        }}></button>
    </div>
  );
};

export default JumpToProduct;
