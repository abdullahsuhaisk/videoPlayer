/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Query, Mutation } from 'react-apollo';
import {
  GET_CONSUMER_WATCH_LISTID,
  ADD_WATCH_LIST,
  DELETE_WATCHED_LIST
} from '../../../features/Watchlist/WatchListQueries';
import { PRODLINK_ID } from '../../../common/GrapqlConstant';

const WatchListButton = () => {
  return (
    <Query query={GET_CONSUMER_WATCH_LISTID}>
      {({ data: { consumer }, loading, error }) => {
        if (loading || error) return null;
        const watchlist = consumer ? consumer.watchList : null;
        console.log(watchlist);
        const watchListButtonManager =
          watchlist && watchlist.filter((item) => item === PRODLINK_ID);
        return watchListButtonManager.length > 0 ? (
          <DeleteWatchList PRODLINK_ID={PRODLINK_ID} />
        ) : (
          <AddWatchList PRODLINK_ID={PRODLINK_ID} />
        );
      }}
    </Query>
  );
};

export default WatchListButton;

const AddWatchList = () => {
  console.log('add');
  return (
    <Mutation
      mutation={ADD_WATCH_LIST}
      variables={{ prodLinkId: PRODLINK_ID }}
      refetchQueries={() => {
        console.log('refetchQueries');
        return [
          {
            query: GET_CONSUMER_WATCH_LISTID
          }
        ];
      }}>
      {(addProdLinkToWatchList, { data, error, loading }) => {
        if (loading || error) return null;
        console.log(data);
        return (
          <div
            className="stats--content"
            onClick={() => {
              addProdLinkToWatchList();
            }}>
            {/* add 'loved' class name beside 'watchlist--heartIcon' class to display red heart */}
            <i className="stats--content--starIcon loved"></i> 40
          </div>
        );
      }}
    </Mutation>
  );
};

const DeleteWatchList = () => {
  console.log('delete');
  return (
    <Mutation
      mutation={DELETE_WATCHED_LIST}
      variables={{ prodLinkId: PRODLINK_ID }}
      refetchQueries={() => {
        console.log('refetchQueries');
        return [
          {
            query: GET_CONSUMER_WATCH_LISTID
          }
        ];
      }}>
      {(deleteProdLinkFromWatchList, { data, error, loading }) => {
        if (loading || error) return null;
        console.log(data);
        return (
          <div
            className="stats--content"
            onClick={() => {
              deleteProdLinkFromWatchList();
            }}>
            {/* add 'loved' class name beside 'watchlist--heartIcon' class to display red heart */}
            <i className="stats--content--starIcon loved"></i> 40
          </div>
        );
      }}
    </Mutation>
  );
};
