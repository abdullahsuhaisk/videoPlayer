import React from 'react';

const WishlistCollection = () => {
  return (
    <React.Fragment>
      <div className="VideoPlayerContainer flex-row">
        <div className="WishlistCollection">
          <div className="WishlistCollection--gallery">
            <figure className="gallery--item gallery--item-1">
              <img
                src="/images/wishlist/whishlist1.jpg"
                className="gallery--img"
              />
            </figure>
            <figure className="gallery--item gallery--item-2">
              <img
                src="/images/wishlist/whishlist2.jpg"
                className="gallery--img"
              />
            </figure>
            <figure className="gallery--item gallery--item-3">
              <img
                src="/images/wishlist/whishlist3.jpg"
                className="gallery--img"
              />
            </figure>
            <figure className="gallery--item gallery--item-4">
              <img
                src="/images/wishlist/whishlist4.jpg"
                className="gallery--img"
              />
            </figure>
            <figure className="gallery--item gallery--item-5">
              <img
                src="/images/wishlist/whishlist5.jpg"
                className="gallery--img"
              />
            </figure>
            <figure className="gallery--item gallery--item-6">
              <img
                src="/images/wishlist/whishlist6.jpg"
                className="gallery--img"
              />
            </figure>
          </div>
          <div className="WishlistCollection--collection">
            <h2 className="WishlistCollection--collection-h2">
              ZARA | Men Campaign Spring Summer 2019
            </h2>
            <span className="WishlistCollection--collection-span">
              18 pieces
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WishlistCollection;
