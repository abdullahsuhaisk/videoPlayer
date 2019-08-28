import React from 'react';
import WishlistProduct from './wishlistProduct/wishlistProduct';

const wishlistProducts = () => {
  return (
    <div className="SideBar--wishlist">
      <div className="SideBar--wishlistProduct--products scroll">
        <WishlistProduct />
        <WishlistProduct />
        <WishlistProduct />
        <WishlistProduct />
      </div>
      <div className="SideBar--wishlistProduct--back">
        <p className="SideBar--wishlistProduct--back-p">
          <i className="SideBar--wishlist--create-p-icon"></i>
          Back
        </p>
      </div>
    </div>
  );
};

export default wishlistProducts;