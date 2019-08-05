import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const WishlistCollection = ({ whisList, name, id }) => {
  // TODO: Needs Refactor
  const { products } = whisList;
  const totalProduct = products ? products.length : null;
  let productRender = [];
  productRender =
    products &&
    products.map((item, key) => (
      <figure
        className={`gallery--item gallery--item-${key + 1}`}
        key={item.id}>
        <img
          src={
            item.image
              ? item.image.thumbnailUrl
              : '/images/wishlist/whishlist3.jpg'
          }
          alt={item.name}
          className="gallery--img"
        />
      </figure>
    ));
  if (products) {
    for (let i = products.length + 1; i <= 6; i++) {
      productRender.push(
        <figure
          className={`gallery--item gallery--item-${i} gallery--img-placeholder`}
          key={'placeHolder' + i}>
          <img
            src="/images/wishlist/whishlist3.jpg"
            alt="placeHolder"
            className="gallery--img"
          />
        </figure>
      );
    }
  }

  return (
    <div className="WishlistCollection">
      <div className="WishlistCollection--gallery">{productRender}</div>
      <div className="WishlistCollection--collection">
        <h2 className="WishlistCollection--collection-h2">{name}</h2>
        <span className="WishlistCollection--collection-span">
          {totalProduct} pieces
        </span>
      </div>
    </div>
  );
};

WishlistCollection.propTypes = {};

WishlistCollection.defaultProps = {
  styles: {},
  imageUrl: '/images/wishListGroup.jpg',
  price: '38.90$'
};

export default WishlistCollection;
