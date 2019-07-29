import React, { useState } from 'react';
import { Query, Mutation } from 'react-apollo';
import { DELETE_WISH_LIST, GET_CONSUMER_WISHLIST } from '../wishListQueries';
import DeleteWishlistComponent from './deleteWishlistComponent';

const showConsumersWishList = () => {
  const [wishList, setWishLists] = useState('null');
  return (
    <>
      <Query query={GET_CONSUMER_WISHLIST} fetchPolicy="cache-first">
        {({ data, error, loading }) => {
          if (loading || error) {
            return null;
          }
          const { consumer } = data;
          const { whisLists } = consumer;
          console.log(whisLists);
          const whisListsCount = whisLists.length;
          if (whisLists) {
            setWishLists(whisLists);
          }
          return (
            // TODO: DELETE MUTATİON ERROR TURN BACK
            <div>
              {whisLists &&
                whisLists.map((item) => {
                  return (
                    <Mutation mutation={DELETE_WISH_LIST} key={item.id}>
                      {(deleteConsumerWishList, attrs = {}) => (
                        <div className="wishlistdelete">
                          <span>{item.name}</span>
                          <button
                            style={{ marginLeft: 30 }}
                            onClick={() =>
                              deleteConsumerWishList({
                                variables: { whisListId: item.id }
                              })
                            }>
                            <span>{attrs.loading ? 'loading' : 'X'} </span>
                            <span>
                              {attrs.error ? console.log(attrs.error) : null}
                            </span>
                          </button>
                        </div>
                      )}
                    </Mutation>
                  );
                })}
              {loading && <p>Loading...</p>}
              {error && <p>Error :(</p>}
            </div>
          );
        }}
      </Query>
    </>
  );
};

export default showConsumersWishList;
