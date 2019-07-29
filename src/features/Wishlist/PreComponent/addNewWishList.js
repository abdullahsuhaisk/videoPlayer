import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import { CREATE_NEW_WISHLIST, GET_CONSUMER_WISHLIST } from '../wishListQueries';

const updateCache = (cache, { data: { createConsumerWishList } }) => {
  const { consumer } = cache.readQuery({ query: GET_CONSUMER_WISHLIST });

  // console.log(consumer.whisLists);
  // console.log(createConsumerWishList);
  // console.log(consumer);

  consumer.whisLists = consumer.whisLists.concat(createConsumerWishList);
  // console.log(consumer.whisLists);
  // console.log(consumer);
  cache.writeQuery({
    query: GET_CONSUMER_WISHLIST,
    data: {
      consumer
    }
  });
};

const addNewWishList = ({ client }) => {
  console.log(client);
  const [wishListName, setWishListName] = useState(
    'Please write a wishlist name'
  );
  return (
    <Mutation
      mutation={CREATE_NEW_WISHLIST}
      variables={{ name: wishListName }}
      update={updateCache}>
      {(createConsumerWishList) => (
        <>
          <label>Please Enter Wist list name</label>
          <input
            onChange={(e) => setWishListName(e.target.value)}
            value={wishListName}
          />
          <button
            onClick={async (e) => {
              e.preventDefault();
              await createConsumerWishList();
              setWishListName('');
            }}>
            Add wishList
          </button>
        </>
      )}
    </Mutation>
  );
};

export default addNewWishList;
