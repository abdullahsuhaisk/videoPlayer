/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';

import { IS_LOGGED_IN } from '../../../features/ShoppingCart/shoppingCartQueries';
import { PRODLINK_ID } from '../../../common/GrapqlConstant';
import {
  ADD_WATCH_LIST,
  GET_CONSUMER_WATCHLIST,
  DELETE_WATCHED_LIST
} from '../../../features/Watchlist/WatchListQueries';

const updateCache = () => {};

const addToWatchList = async (client, addProdLinkToWatchList) => {
  // const { isLoggedIn } = client.readQuery({
  //   query: IS_LOGGED_IN
  // });
  // if (isLoggedIn) {
  //   await addProdLinkToWatchList({ variables:  {PRODLINK_ID}  });

  // } else {
  //   // client.writeData({ data: { isLoginFormShowing: true } });
  //   return null;
  // }
  await addProdLinkToWatchList({ variables: { prodLinkId: PRODLINK_ID } });
};

const GET_LIKED = gql`
  query prodLinkIsLikedByCustomer($prodLinId: Int!) {
    prodLinkId(prodLinkId: $prodLinId) {
      id
      isLiked
    }
  }
`;

const Like = ({ setIsLiked }) => {
  console.log('liked Component');
  return (
    <Mutation
      mutation={ADD_WATCH_LIST}
      variables={{ prodLinkId: PRODLINK_ID }}
      refetchQueries={() => {
        return [
          {
            query: GET_CONSUMER_WATCHLIST
          }
        ];
      }}>
      {(addProdLinkToWatchList, { client, loading, error }) => {
        if (loading || error) {
          console.log(error);
          return 'loading';
        }
        return (
          <div className="stats--content stats--content--heart">
            <i
              className={`stats--content--heartIcon`}
              onClick={() => {
                addToWatchList(client, addProdLinkToWatchList);
                // setIsLiked(true);
              }}></i>
            24
          </div>
        );
      }}
    </Mutation>
  );
};

const deleteToWatchList = async (client, addProdLinkToWatchList) => {
  // const { isLoggedIn } = client.readQuery({
  //   query: IS_LOGGED_IN
  // });
  // if (isLoggedIn) {
  //   await addProdLinkToWatchList({ variables:  {PRODLINK_ID}  });

  // } else {
  //   // client.writeData({ data: { isLoginFormShowing: true } });
  //   return null;
  // }
  await addProdLinkToWatchList({ variables: { prodLinkId: PRODLINK_ID } });
};

const UnLike = ({ setIsLiked }) => {
  console.log('unliked Component');
  return (
    <Mutation
      mutation={DELETE_WATCHED_LIST}
      variables={{ prodLinkId: PRODLINK_ID }}
      refetchQueries={() => {
        return [
          {
            query: GET_CONSUMER_WATCHLIST
          }
        ];
      }}>
      {(deleteProdLinkFromWatchList, { client, loading, error }) => {
        if (loading || error) {
          console.log(error);
          return 'loading';
        }
        return (
          <div className="stats--content stats--content--heart loved">
            <i
              className={`stats--content--heartIcon`}
              onClick={() => {
                deleteToWatchList(client, deleteProdLinkFromWatchList);
                setIsLiked(false);
              }}></i>
            24
          </div>
        );
      }}
    </Mutation>
  );
};

const LikeButtonScreen = () => {
  return (
    <Query query={GET_LIKED} variables={{ prodLinkId: PRODLINK_ID }}>
      {({ data, error, loading }) => {
        if (loading || error) return <Like />;
        const isLiked = data.isLiked ? data.isLiked : null;
        return isLiked ? isLiked === true ? <UnLike /> : <Like /> : <Like />;
      }}
    </Query>
  );
};

export default LikeButtonScreen;
