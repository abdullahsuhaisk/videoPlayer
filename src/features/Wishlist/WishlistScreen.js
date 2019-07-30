import React from 'react';
import { Query } from 'react-apollo';

import EmptyWishList from './EmptyWishList';
import WishListGroup from './WishListGroup';
// import ProductWishList from './ProductWishList/ProductWishList';
import ShowConsumersWishList from './PreComponent/showConsumersWishList';
import AddNewWishList from './PreComponent/addNewWishList';
import { GET_CONSUMER_WISHLIST } from './wishListQueries';

const WishlistScreen = () => {
  return (
    <Query query={GET_CONSUMER_WISHLIST}>
      {({ loading, error, data }) => {
        if (loading || error) {
          return null;
        }
        const { consumer } = data;
        const { whisLists } = consumer;
        {
          /* console.log(whisLists); */
        }
        if (whisLists.length === 0) {
          // TODO: TRY EMPTYWİSHLİST Case
          // return <EmptyWishList />;
        }
        return (
          <div style={{ width: '100%', height: '500px', overflow: 'scroll' }}>
            <div style={{ margin: '10px' }}>
              {whisLists.map((wishList, index) => (
                <WishListGroup wishList={wishList} key={index} />
              ))}
            </div>
            <AddNewWishList />
            <ShowConsumersWishList />
          </div>
        );
      }}
    </Query>
  );
};

export default WishlistScreen;

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
