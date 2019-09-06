import React from 'react';

import FlickityProductCard from '../../components/Flickity/FlickityProductCard';

const WishListInside = ({ whichWishList, whisLists, setWhichWishList }) => {
  const whish = whisLists[whichWishList];
  console.log(whish);
  const wishListId = whish.id;
  const { name, totalProduct } = whish;
  const { products } = whisLists[whichWishList];

  // console.log(whisLists[whichWishList]);

  const containerClasses =
    products && products.length > 1 ? ' swipeGradient' : 'VideoPlayerContainer';

  return (
    <>
      <FlickityProductCard
        products={products}
        key={products.id}
        addedWishList
      />
      {/* <Flickity
        className={containerClasses}
        reloadOnUpdate={true}
        options={flickityOptions}>
        {products &&
          products.map((product) => (
            <AddedWishListProductCard
              product={product}
              key={product.id}
              wishListId={wishListId}
            />
          ))}
      </Flickity> */}
      <div
        className="backToWishlist"
        onClick={() => {
          setWhichWishList(null);
        }}>
        <div className="backToWishlist--collection--title">
          <h2 className="backToWishlist--collection-h2">{name}</h2>
        </div>
        <span className="backToWishlist--collection-span">
          {products.length} pieces
        </span>
      </div>
    </>
  );
};

export default WishListInside;
