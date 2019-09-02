import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import AddItemToWishListFromProductCard from './AddItemToWishListFromProductCard';

const GET_ADD_WISHLIST_OPEN = gql`
  {
    isAddWishListOpen @client
  }
`;

const AddToWishListScreen = () => {
  return (
    <Query query={GET_ADD_WISHLIST_OPEN}>
      {({ data: { isAddWishListOpen } }) => {
        return isAddWishListOpen === true ? (
          <AddItemToWishListFromProductCard />
        ) : null;
      }}
    </Query>
  );
};

export default AddToWishListScreen;
