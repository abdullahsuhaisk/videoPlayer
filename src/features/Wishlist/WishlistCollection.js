import React from 'react';
import { Mutation } from 'react-apollo';
// import PropTypes from 'prop-types';
import { DELETE_WISH_LIST, GET_CONSUMER_WISHLIST } from './wishListQueries';

const WishlistCollection = ({ whisList, name, id, setWhichWishList }) => {
  // TODO: Needs Refactor
  // console.log(whisList);
  const { products } = whisList;
  const totalProduct = products ? products.length : null;
  let productRender = [];
  productRender =
    products &&
    products.map((item, key) => (
      <div
        className={`gallery--item gallery--item-${key + 1}`}
        style={{
          backgroundImage: `url(${item.image && item.image.thumbnailUrl})`
        }}
        key={item.id}>
        {/* <img
          src={
            item.image
              ? item.image.thumbnailUrl
              : '/images/wishlist/whishlist3.jpg'
          }
          alt={item.name}
          className="gallery--img"
        /> */}
      </div>
    ));
  if (products) {
    for (let i = products.length + 1; i <= 6; i++) {
      productRender.push(
        <div
          className={`gallery--item gallery--item-${i} gallery--img-placeholder`}
          key={'placeHolder' + i}>
          {/* <img
            src="/images/wishlist/whishlist3.jpg"
            alt="placeHolder"
            className="gallery--img"
          /> */}
        </div>
      );
    }
  }

  return (
    <Mutation
      mutation={DELETE_WISH_LIST}
      refetchQueries={() => {
        return [
          {
            query: GET_CONSUMER_WISHLIST
          }
        ];
      }}>
      {(deleteConsumerWishList) => {
        return (
          <div
            className="WishlistCollection"
            onClick={() => setWhichWishList(id)}
            style={{ position: 'relative' }}>
            <div className="WishlistCollection--gallery">{productRender}</div>
            <div className="WishlistCollection--collection">
              <div className="WishlistCollection--collection--title">
                <h2 className="WishlistCollection--collection-h2">{name}</h2>
                <i
                  className="WishlistCollection--collection-delete"
                  onClick={() =>
                    deleteConsumerWishList({
                      variables: {
                        whisListId: parseInt(whisList.id, 10)
                      }
                    })
                  }></i>
              </div>

              <span className="WishlistCollection--collection-span">
                {totalProduct} pieces
              </span>
            </div>
          </div>
        );
      }}
    </Mutation>
  );
};

WishlistCollection.propTypes = {};

WishlistCollection.defaultProps = {
  styles: {},
  imageUrl: '/images/wishListGroup.jpg',
  price: '38.90$'
};

export default WishlistCollection;
