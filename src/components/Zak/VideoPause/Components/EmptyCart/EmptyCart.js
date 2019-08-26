import React from 'react';

const EmptyCart = (props) => {
  return (
    <React.Fragment>
      <div className="EmptyCart">
        <i className="EmptyCart--icon"></i>
        <p className="EmptyCart--p-bold">THERE IS NOTHING IN YOUR CART</p>
        <p className="EmptyCart--p-light">Explore around to add items in it.</p>
      </div>
    </React.Fragment>
  );
};

export default EmptyCart;
