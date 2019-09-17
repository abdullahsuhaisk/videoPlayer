import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { DELETE_WISH_LIST, GET_CONSUMER_WISHLIST } from '../wishListQueries';
// import DeleteWishlistComponent from './deleteWishlistComponent';

const showConsumersWishList = () => {
  // TODO: UPDATE CASHE IT MUST BE
  /*  const updateCashe = async (cache, { data: { deleteConsumerWishList } }) => {
    const { consumer } = cache.readQuery({ query: GET_CONSUMER_WISHLIST });
    // console.log(consumer.whisLists);
    const { whisLists } = consumer;
    consumer.whisLists = whisLists.filter(
      (item) => item.id !== deleteConsumerWishList.id
    );
    console.log({
      data: { consumer: { whisLists } }
    });
    console.log(whisLists);
    console.log(consumer);
    await cache.writeQuery({
      query: GET_CONSUMER_WISHLIST,
      data: { consumer }
    });
  };
  */

  return (
    <>
      <Query query={GET_CONSUMER_WISHLIST} fetchPolicy="cache-first">
        {({ data, error, loading }) => {
          if (loading || error) {
            return null;
          }
          const { consumer } = data;
          const { whisLists } = consumer;
          // const whisListsCount = whisLists && whisLists.length;
          console.log('render show consumer wishlist', whisLists);

          return (
            // TODO: DELETE MUTATION ERROR TURN BACK
            <div>
              {consumer.whisLists &&
                consumer.whisLists.map((item) => {
                  return (
                    <Mutation
                      refetchQueries={() => {
                        console.log('refetchQueries');
                        return [
                          {
                            query: GET_CONSUMER_WISHLIST
                          }
                        ];
                      }}
                      mutation={DELETE_WISH_LIST}
                      key={item.id}>
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
