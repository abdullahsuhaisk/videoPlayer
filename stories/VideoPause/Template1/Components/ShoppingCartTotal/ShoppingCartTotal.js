import React from 'react';
// import '../../assets/css/template1/ShoppingCartTotal.css';

const ShoppingCartTotal = () => {
  return (
    <React.Fragment>
      <div className="ShoppingCartTotal">
        <div className="ShoppingCartTotalContainer">
          <div className="ShoppingCartTotalContainer--content">
            <label className="ShoppingCartTotal--total-label">TOTAL</label>
            <span className="ShoppingCartTotal--total-price">$ 886,72</span>
            <a className="ShoppingCartTotal--next">Next</a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShoppingCartTotal;
