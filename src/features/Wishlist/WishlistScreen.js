import React from 'react';
import { Query } from 'react-apollo';

import EmptyWishList from './EmptyWishList';
import WishListGroup from './WishListGroup';
// import ProductWishList from './ProductWishList/ProductWishList';
// import ShowConsumersWishList from './PreComponent/showConsumersWishList';
// import AddNewWishList from './PreComponent/addNewWishList';
import { GET_CONSUMER_WISHLIST } from './wishListQueries';
import WishListInside from './WishListInside';
// import WishLisContentloader from '../../components/ContentLoader/WishLisContentloader';

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
