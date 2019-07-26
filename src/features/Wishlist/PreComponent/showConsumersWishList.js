import React from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const GET_CONSUMERS_WISHLIST = gql`
  query getConsumerWishList {
    consumer {
      id
      whisLists {
        id
        name
        isPrivate
        products {
          id
          name
          image {
            id
            name
          }
        }
      }
    }
  }
`;

const DELETE_WISH_LIST = gql`
  mutation deleteWishList($whisListId: Int!) {
    deleteConsumerWishList(wishListId: $whisListId) {
      id
      name
      isPrivate
    }
  }
`;

const showConsumersWishList = () => {
  return (
    <>
      <Query query={GET_CONSUMERS_WISHLIST}>
        {({ data, error, loading }) => {
          if (loading || error) {
            return null;
          }
          console.log(data);
          const { consumer } = data;
          const { whisLists } = consumer;
          const whisListsCount = whisLists.length;
          console.log(whisListsCount);
          return (
            // TODO: DELETE MUTATİON ERROR TURN BACK
            <div>
              {whisLists &&
                whisLists.map((item) => {
                  return (
                    <Mutation mutation={DELETE_WISH_LIST} key={item.id}>
                      {(deleteConsumerWishList) => (
                        <div className="wishlistdelete">
                          <span>{item.name}</span>
                          <button
                            onClick={() =>
                              deleteConsumerWishList({
                                variables: { wishListId: item.id }
                              })
                            }>
                            X
                          </button>
                          <span></span>
                          {loading && <p>Loading...</p>}
                          {error && <p>Error :</p>}
                        </div>
                      )}
                    </Mutation>
                  );
                })}
            </div>
          );
        }}
      </Query>
    </>
  );
};

export default showConsumersWishList;
