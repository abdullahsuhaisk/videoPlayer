import React from 'react';

const WishlistCard = () => {
  return (
    <div className="SideBar--wishlist--collection">
      <i className="SideBar--wishlist--collection--close"></i>
      <div className="SideBar--wishlist--info">
        <h2 className="SideBar--wishlist--collection--info--h2">
          NIKE | Men Campaign Spring Summer 2019
        </h2>
        <span className="SideBar--wishlist--collection--info--span">18 pieces</span>
      </div>
      <div className="SideBar--wishlist--collection--gallery">
        <figure className="SideBar--wishlist--collection--SideBar--wishlist--collection--galleryitem gallery--item-1">
          <img
            src="/images/wishlist/whishlist1.jpg"
            className="SideBar--wishlist--collection--galleryimg"
          />
        </figure>
        <figure className="SideBar--wishlist--collection--galleryitem gallery--item-2">
          <img
            src="/images/wishlist/whishlist2.jpg"
            className="SideBar--wishlist--collection--galleryimg"
          />
        </figure>
        <figure className="SideBar--wishlist--collection--galleryitem gallery--item-3">
          <img
            src="/images/wishlist/whishlist3.jpg"
            className="SideBar--wishlist--collection--galleryimg"
          />
        </figure>
        <figure className="SideBar--wishlist--collection--galleryitem gallery--item-4">
          <img
            src="/images/wishlist/whishlist4.jpg"
            className="SideBar--wishlist--collection--galleryimg"
          />
        </figure>
        <figure className="SideBar--wishlist--collection--galleryitem gallery--item-5">
          <img
            src="/images/wishlist/whishlist5.jpg"
            className="SideBar--wishlist--collection--galleryimg"
          />
        </figure>
        <figure className="SideBar--wishlist--collection--galleryitem gallery--item-6">
          <img
            src="/images/wishlist/whishlist6.jpg"
            className="SideBar--wishlist--collection--galleryimg"
          />
        </figure>
        <figure className="SideBar--wishlist--collection--galleryitem gallery--item-7">
          <img
            src="/images/wishlist/whishlist3.jpg"
            className="SideBar--wishlist--collection--galleryimg"
          />
        </figure>
      </div>
    </div>
  );
};

export default WishlistCard;