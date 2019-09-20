import React from 'react';
import { Query } from 'react-apollo';

import EmptyWishList from './EmptyWishList';
import WishListGroup from './WishListGroup';
import { GET_CONSUMER_WISHLIST } from './wishListQueries';
import WishListInside from './WishListInside';

const WishlistScreen = () => {
  const [whichWishList, setWhichWishList] = React.useState(null);
  // const [wishList, setWishList] = React.useState(null);
  // console.log(whichWishList);
  return (
    <>
      <Query query={GET_CONSUMER_WISHLIST}>
        {({ loading, error, data }) => {
          if (loading) {
            return null;
          }
          if (error) {
            return null;
          }
          const { consumer } = data;
          const { whisLists } = consumer;
          // {
          /* console.log(whisLists); */
          // }
          if (whisLists.length === 0) {
            // TODO: TRY EMPTYWİSHLİST Case
            return <EmptyWishList />;
          }
          return (
            <>
              {whichWishList !== null ? (
                <WishListInside
                  whichWishList={whichWishList}
                  setWhichWishList={setWhichWishList}
                  whisLists={whisLists}
                />
              ) : (
                <WishListGroup
                  whisLists={whisLists}
                  setWhichWishList={setWhichWishList}
                />
              )}
              {/* <ShowConsumersWishList />
              <AddNewWishList />  */}
            </>
          );
        }}
      </Query>
    </>
  );
};

export default WishlistScreen;
