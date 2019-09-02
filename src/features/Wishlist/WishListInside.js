import React from 'react';
import Flickity from 'react-flickity-component';
import AddedWishListProductCard from '../Product/ProductList/addedWishListProductCard';

const FlickityClassName = 'VideoPlayerContainer';
const flickityOptions = {
  cellAlign: 'left',
  contain: true,
  resize: false,
  imagesLoaded: true,
  lazyLoad: true,
  percentPosition: false
};

const WishListInside = ({ whichWishList, whisLists, setWhichWishList }) => {
  const whish = whisLists[whichWishList];
  const wishListId = whish.id;
  const { name } = whish;
  const { products } = whisLists[whichWishList];

  console.log(whisLists[whichWishList]);

  const containerClasses =
    products && products.length > 1 ? ' swipeGradient' : 'VideoPlayerContainer';

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: 670,
          overflowY: 'auto',
          position: 'relative'
        }}>
        <Flickity
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
        </Flickity>
        <div>
          <button
            style={{
              height: '70px',
              width: '70px',
              zIndex: 3,
              position: 'absolute',
              left: 150
            }}
            onClick={() => {
              setWhichWishList(null);
            }}>
            {`<` + name}
          </button>
        </div>
      </div>
    </>
  );
};

export default WishListInside;
