import React from 'react';
import EmptyWishList from './EmptyWishList';
import WishListGroup from './WishListGroup';
import { GET_CONSUMER_WISHLIST } from '../../Queries/WishList/WishlistQueries';
import WishListInside from './WishListInside';
import BaseQueryHoc from '../../components/HOCS/Grapqhl/BaseQueryHoc';

const WishlistScreen = ({ data }) => {
  const [whichWishList, setWhichWishList] = React.useState(null);
  const { consumer } = data;
  const { whisLists } = consumer;

  if (whisLists.length === 0) {
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
    </>
  );
};

export default BaseQueryHoc(WishlistScreen, GET_CONSUMER_WISHLIST);
