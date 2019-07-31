import React from 'react';
import { Query } from 'react-apollo';

import EmptyWishList from './EmptyWishList';
import WishListGroup from './WishListGroup';
// import ProductWishList from './ProductWishList/ProductWishList';
import ShowConsumersWishList from './PreComponent/showConsumersWishList';
import AddNewWishList from './PreComponent/addNewWishList';
import { GET_CONSUMER_WISHLIST } from './wishListQueries';
import WishlistCollection from '../../components/Zak/VideoPause/Components/WishlistCollection/WishlistCollection';

const NewWishList = () => (
  <div className="VideoPlayerContainer flex-row">
    <div className="WishlistCollection">
      <div className="WishlistCollection--gallery">
        <figure className="gallery--item gallery--item-1">
          <img src="/images/wishlist/whishlist1.jpg" className="gallery--img" />
        </figure>
        <figure className="gallery--item gallery--item-2">
          <img src="/images/wishlist/whishlist2.jpg" className="gallery--img" />
        </figure>
        <figure className="gallery--item gallery--item-3">
          <img src="/images/wishlist/whishlist3.jpg" className="gallery--img" />
        </figure>
        <figure className="gallery--item gallery--item-4">
          <img src="/images/wishlist/whishlist4.jpg" className="gallery--img" />
        </figure>
        <figure className="gallery--item gallery--item-5">
          <img src="/images/wishlist/whishlist5.jpg" className="gallery--img" />
        </figure>
        <figure className="gallery--item gallery--item-6">
          <img src="/images/wishlist/whishlist6.jpg" className="gallery--img" />
        </figure>
      </div>
      <div className="WishlistCollection--collection">
        <h2 className="WishlistCollection--collection-h2">
          ZARA | Men Campaign Spring Summer 2019
        </h2>
        <span className="WishlistCollection--collection-span">18 pieces</span>
      </div>
    </div>
  </div>
);

const WishlistScreen = () => {
  return (
    // <Query query={GET_CONSUMER_WISHLIST}>
    //   {({ loading, error, data }) => {
    //     if (loading || error) {
    //       return null;
    //     }
    //     const { consumer } = data;
    //     const { whisLists } = consumer;
    //     if (whisLists.length === 0) {
    //       // TODO: TRY EMPTYWİSHLİST Case
    //       // return <EmptyWishList />;
    //     }
    //     return <WishlistCollection />;
    //   }}
    // </Query>
    <NewWishList />
  );
};

export default WishlistScreen;

/* <div style={{ width: '100%', height: '500px', overflow: 'scroll' }}>
            <div style={{ margin: '10px' }}>
              {whisLists.map((wishList, index) => (
                <WishListGroup wishList={wishList} key={index} />
              ))}
            </div>
            <AddNewWishList />
            <ShowConsumersWishList />
          </div> */

/*
  return (
    <div style={{ width: '100%', height: '500px', overflow: 'scroll' }}>
      <div style={{ margin: '10px' }}>
        {data.map((product) => (
          <WishListCardItem product={product} />
        ))}
      </div>
      <EmptyWishList />
      <div style={{ margin: '10px' }}>
        <WishListGroup />
      </div>
      <WishListGroupItem />
    </div>
  );
*/
