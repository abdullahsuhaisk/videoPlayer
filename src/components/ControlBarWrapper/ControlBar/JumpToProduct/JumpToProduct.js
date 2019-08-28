import React from 'react';
import { JumpToProductWrapper } from './JumpToProduct.style';

const JumpToProduct = () => {
  const jumpToProductHandler = () => {
    // TODO: Add jumpToProduct handler
    return;
  };
  return (
    <JumpToProductWrapper>
      <button
        className="jumpToProductBtn"
        onClick={() => {
          jumpToProductHandler();
        }}></button>
    </JumpToProductWrapper>
  );
};

export default JumpToProduct;
