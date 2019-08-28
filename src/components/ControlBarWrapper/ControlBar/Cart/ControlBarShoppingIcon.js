import React from 'react';
// import { CartWrapper } from './Cart.style';

const ControlBarShoppingIcon = () => {
  const cartHandler = () => {
    // TODO: Add Cart handler
    return;
  };
  return (
    <div>
      <button
        className="cartBtn"
        onClick={() => {
          cartHandler();
        }}></button>
    </div>
  );
};

export default ControlBarShoppingIcon;
