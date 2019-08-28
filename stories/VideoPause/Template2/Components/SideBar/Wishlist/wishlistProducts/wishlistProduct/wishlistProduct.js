import React from 'react';

const wishlistProduct = () => {
  return (
    <div className="SideBar--wishlistProduct--product">
      <i className="SideBar--wishlistProduct--product--close"></i>
      <figure className="SideBar--wishlistProduct--product--figure">
        <img src ="/images/product2.jpg" className="SideBar--wishlistProduct--product--figure--img" />
      </figure>
      <div className="SideBar--wishlistProduct--product-info">
        <h3 className="SideBar--wishlistProduct--product-name">Soundblaster  Best Headphone Rosepink</h3>
        <div className="SideBar--wishlistProduct--product-seller">
          <label className="SideBar--wishlistProduct--product-seller-label">
            Seller :
          </label>
          <span className="SideBar--wishlistProduct--product-seller-name">
            Adidas Inc.
          </span>
        </div>
      </div>
      <div className="SideBar--wishlistProduct--priceContainer">
        <span className="SideBar--wishlistProduct--price">$ 205,00</span>
      </div>
    </div>
  );
};

export default wishlistProduct;