import React from 'react';
import EmptyWishList from './EmptyWishList';
import WishListGroup from './WishListGroup';
import { GET_CONSUMER_WISHLIST } from '../../Queries/WishList/WishlistQueries';
import WishListInside from './WishListInside';
import BaseQueryHoc from '../../components/HOCS/Grapqhl/BaseQueryHoc';

const WishlistScreen = ({ data }) => {
  const [whichWishList, setWhichWishList] = React.useState(null);
  const consumer = data && data.consumer;
  const { wishLists } = consumer && consumer;

  if (wishLists.length === 0) {
    return <EmptyWishList />;
  }
  return (
    <>
      {whichWishList !== null ? (
        <WishListInside
          whichWishList={whichWishList}
          setWhichWishList={setWhichWishList}
          whisLists={wishLists}
        />
      ) : (
        <WishListGroup
          whisLists={wishLists}
          setWhichWishList={setWhichWishList}
        />
      )}
    </>
  );
};

export default BaseQueryHoc(WishlistScreen, GET_CONSUMER_WISHLIST);
