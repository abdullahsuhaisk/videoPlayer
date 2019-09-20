import React from 'react';

const EmptyList = () => {
  return (
    <div className="EmptyCart">
      <i className="EmptyCart--icon"></i>
      <p className="EmptyCart--p-bold">THERE IS NOTHING IN YOUR CART</p>
      <p className="EmptyCart--p-light">Explore around to add items in it.</p>
    </div>
  );
};

export default EmptyList;
