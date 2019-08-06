import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import { CREATE_NEW_WISHLIST, GET_CONSUMER_WISHLIST } from '../wishListQueries';

/* const updateCache = (cache, { data: { createConsumerWishList } }) => {
  const { consumer } = cache.readQuery({ query: GET_CONSUMER_WISHLIST });
  consumer.whisLists = consumer.whisLists.concat(createConsumerWishList);
  // console.log(consumer.whisLists);
  console.log({
    data: {
      consumer
    }
  });
  cache.writeQuery({
    query: GET_CONSUMER_WISHLIST,
    data: {
      consumer
    }
  });
};
*/
const addNewWishList = ({
  client,
  classNames,
  setWishListName,
  wishListName,
  title
}) => {
  // console.log(client);
  //
  // console.log(classNames);
  return (
    <Mutation
      mutation={CREATE_NEW_WISHLIST}
      variables={{ name: wishListName }}
      refetchQueries={() => {
        // console.log('refetchQueries');
        return [
          {
            query: GET_CONSUMER_WISHLIST
          }
        ];
      }}>
      {(createConsumerWishList, error, loading) => (
        <>
          {/* {loading ? console.log(loading) : null} */}
          <input
            onChange={(e) => setWishListName(e.target.value)}
            value={wishListName}
          />
          <button
            onClick={async (e) => {
              e.preventDefault();
              await createConsumerWishList();
              setWishListName('');
            }}
            className={classNames}>
            {title}
          </button>
        </>
      )}
    </Mutation>
  );
};

export default addNewWishList;
