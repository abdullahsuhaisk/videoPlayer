/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import {
  GET_CONSUMER_WATCH_LISTID,
  ADD_WATCH_LIST,
  DELETE_WATCHED_LIST
} from '../../../features/Watchlist/WatchListQueries';
import { getProdLinkIdApollo } from '../../../hooks/ProdLinkHook';

const GET_NUMBER_OF_VIDEOTHINGS = gql`
  query prodLinkIsLikedByCustomer($prodLinkId: Int!) {
    prodLink(prodLinkId: $prodLinkId) {
      id
      # isLiked
      numberOfLikes
      numberOfViews
      numberOfShares
    }
  }
`;

function desider(List, item) {
  const listArray = [];
  List && List.map((i) => listArray.push(i.id));
  // console.log(listArray && listArray.includes(item));
  return listArray && listArray.includes(item);
}

const WatchListButton = ({ client }) => {
  const PRODLINK_ID = parseInt(getProdLinkIdApollo(client), 10);
  const [watchlist, setWatchlist] = React.useState(null);
  const [watchListButtonManager, setWatchListButtonManager] = React.useState(
    false
  );
  const [watchListCounter, setWatchListCounter] = React.useState(null);
  React.useEffect(() => {
    setWatchListButtonManager(desider(watchlist, PRODLINK_ID));
  }, [watchlist]);

  React.useEffect(() => {
    client
      .query({
        query: GET_NUMBER_OF_VIDEOTHINGS,
        variables: { prodLinkId: PRODLINK_ID }
      })
      .then(({ data }) => {
        setWatchListCounter(data.prodLink.numberOfViews);
      });
  }, []);
  return (
    <Query query={GET_CONSUMER_WATCH_LISTID}>
      {({ data: { consumer }, loading, error }) => {
        if (loading || error) return null;
        setWatchlist(consumer ? consumer.watchList : null);
        //  watchlist && watchlist.filter((item) => item === PRODLINK_ID);
        return watchListButtonManager === true ? (
          <DeleteWatchList
            PRODLINK_ID={PRODLINK_ID}
            watchListCounter={watchListCounter}
          />
        ) : (
          <AddWatchList
            PRODLINK_ID={PRODLINK_ID}
            watchListCounter={watchListCounter}
          />
        );
      }}
    </Query>
  );
};

export default WatchListButton;

const AddWatchList = ({ PRODLINK_ID, watchListCounter }) => {
  // console.log('add');
  return (
    <Mutation
      mutation={ADD_WATCH_LIST}
      variables={{ prodLinkId: PRODLINK_ID }}
      refetchQueries={() => {
        return [
          {
            query: GET_CONSUMER_WATCH_LISTID
          }
        ];
      }}>
      {(addProdLinkToWatchList, { data, error, loading }) => {
        if (loading || error) return null;
        {
          /* console.log(data); */
        }
        return (
          <div
            className="stats--content"
            onClick={() => {
              addProdLinkToWatchList();
            }}>
            {/* add 'loved' class name beside 'watchlist--heartIcon' class to display red heart */}
            <i className="stats--content--starIcon  "></i> {watchListCounter}
          </div>
        );
      }}
    </Mutation>
  );
};

const DeleteWatchList = ({ PRODLINK_ID, watchListCounter }) => {
  // console.log('delete');
  return (
    <Mutation
      mutation={DELETE_WATCHED_LIST}
      variables={{ prodLinkId: PRODLINK_ID }}
      refetchQueries={() => {
        return [
          {
            query: GET_CONSUMER_WATCH_LISTID
          }
        ];
      }}>
      {(deleteProdLinkFromWatchList, { data, error, loading }) => {
        if (loading || error) return null;
        {
          /* console.log(data); */
        }
        return (
          <div
            className="stats--content"
            onClick={() => {
              deleteProdLinkFromWatchList();
            }}>
            <i className="stats--content--starIcon favorites"></i>{' '}
            {watchListCounter}
          </div>
        );
      }}
    </Mutation>
  );
};
