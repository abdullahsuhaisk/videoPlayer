import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const WishlistCollection = ({ whisList, name, id }) => {
  const { products } = whisList;
  const totalProduct = products.length;
  return (
    <div className="WishlistCollection">
      <div className="WishlistCollection--gallery">
        {products.map((item, key) => (
          <figure
            className={`gallery--item gallery--item-${key}`}
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
        ))}
      </div>
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
