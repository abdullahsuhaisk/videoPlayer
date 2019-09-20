import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import {
  CREATE_NEW_WISHLIST,
  GET_CONSUMER_WISHLIST
} from '../../../../features/Wishlist/wishListQueries';

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
const addNewWishList = ({ setAddNewWishlist }) => {
  const [newWishListName, setNewWishListName] = useState('');
  const createWishList = async (e, createConsumerWishList) => {
    if (e.keyCode === 13) {
      await createConsumerWishList();
      setAddNewWishlist(false);
      setNewWishListName('');
    }
  };

  return (
    <Mutation
      mutation={CREATE_NEW_WISHLIST}
      variables={{ name: newWishListName }}
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
          {/* <input
            onChange={(e) => setWishListName(e.target.value)}
            value={wishListName}
          /> */}
          {/* <button
            onClick={async (e) => {
              e.preventDefault();
              await createConsumerWishList();
              setWishListName('');
            }}
            className={classNames}>
            {title}
          </button> */}
          <div className="AddToWishlist--information--wishlistItem">
            <figure className="AddToWishlist--information--wishlistItem--figure"></figure>
            <div className="AddToWishlist--information--wishlistItem--titleItems">
              <input
                type="text"
                className="AddToWishlist--information--wishlistItem--titleInput"
                onChange={(e) => setNewWishListName(e.target.value)}
                value={newWishListName}
                onKeyUp={(e) => {
                  createWishList(e, createConsumerWishList);
                }}
                placeholder="New Wish List Name"
              />
            </div>
          </div>
        </>
      )}
    </Mutation>
  );
};

export default addNewWishList;
