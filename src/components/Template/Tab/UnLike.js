/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Mutation } from 'react-apollo';

import { IS_LOGGED_IN } from '../../../features/ShoppingCart/shoppingCartQueries';
import { PRODLINK_ID } from '../../../common/GrapqlConstant';
import {
  DELETE_WATCHED_LIST,
  GET_CONSUMER_WATCHLIST
} from '../../../features/Watchlist/WatchListQueries';

const updateCache = () => {};

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
        console.log('refetchQueries');
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

export default UnLike;
