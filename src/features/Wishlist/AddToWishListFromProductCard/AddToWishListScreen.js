import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import AddToWishListFromProduct from './AddToWishListFromProduct';

const GET_ADD_WISHLIST_OPEN = gql`
  {
    isAddWishListOpen @client
  }
`;

const AddToWishListScreen = () => {
  return (
    <div className="VideoPlayerContainer" style={{ pointerEvents: 'auto' }}>
      <Query query={GET_ADD_WISHLIST_OPEN}>
        {({ data: { isAddWishListOpen } }) => {
          return isAddWishListOpen === true ? (
            <AddToWishListFromProduct />
          ) : null;
        }}
      </Query>
    </div>
  );
};

export default AddToWishListScreen;
