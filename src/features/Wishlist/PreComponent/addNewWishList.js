import React, { useState } from 'react';
import { ApolloConsumer, Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const CREATE_NEW_WISHLIST = gql`
  mutation addNewConsumersWishList($name: String!) {
    createConsumerWishList(name: $name) {
      id
      name
    }
  }
`;

const addNewWishList = () => {
  const [wishListName, setWishListName] = useState('Empty Name');
  console.log(wishListName);
  return (
    <ApolloConsumer>
      {(client) => (
        <Mutation
          mutation={CREATE_NEW_WISHLIST}
          variables={{ name: wishListName }}>
          {(createConsumerWishList, { data }) => (
            <>
              <label>Please Enter Wist list name</label>
              <input onChange={(e) => setWishListName(e.target.value)} />
              <button
                onClick={() => {
                  createConsumerWishList();
                }}>
                Add wishList
              </button>
            </>
          )}
        </Mutation>
      )}
    </ApolloConsumer>
  );
};

export default addNewWishList;
