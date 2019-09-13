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
import FavoriteLottie from '../../Lottie/Favorites/FavoriteLottie';

export const GET_CONSUMER = gql`
  query getConsumerWhatchList {
    consumer @client {
      id
    }
  }
`;

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
    // setAnimate(!desider(watchlist, PRODLINK_ID));
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
      {({ data, loading, error, refetch }) => {
        if (loading) return <FavoriteLottie animate={false} />;
        if (error) return null;
        const consumer = data.consumer ? data.consumer : null;
        setWatchlist(consumer ? consumer.watchList : null);
        if (!consumer) return null;
        return watchListButtonManager !== true ? (
          <AddToWatchlist
            PRODLINK_ID={PRODLINK_ID}
            watchListCounter={watchListCounter}
            refetch={refetch}
            setWatchListButtonManager={setWatchListButtonManager}
            watchListButtonManager={watchListButtonManager}
          />
        ) : (
          <DeleteFromWatchlist
            PRODLINK_ID={PRODLINK_ID}
            watchListCounter={watchListCounter}
            refetch={refetch}
            setWatchListButtonManager={setWatchListButtonManager}
            watchListButtonManager={watchListButtonManager}
          />
        );
      }}
    </Query>
  );
};
export default WatchListButton;

const AddToWatchlist = ({
  PRODLINK_ID,
  watchListCounter,
  refetch,
  setWatchListButtonManager,
  watchListButtonManager
}) => {
  const [animate, setAnimate] = React.useState(true);
  return (
    <Mutation
      mutation={ADD_WATCH_LIST}
      variables={{ prodLinkId: PRODLINK_ID }}
      update={() => refetch()}>
      {(updateProdLinkFromWatchList, { data, error, loading }) => {
        if (loading || error) return null;
        const updateHandler = () => {
          updateProdLinkFromWatchList();
          setWatchListButtonManager(!watchListButtonManager);
        };
        return (
          <div
            className="stats--content favorite"
            onClick={() => setAnimate(false)}>
            <FavoriteLottie animate={animate} switcher={updateHandler} />{' '}
            {watchListCounter}
          </div>
        );
      }}
    </Mutation>
  );
};

const DeleteFromWatchlist = ({
  PRODLINK_ID,
  watchListCounter,
  refetch,
  setWatchListButtonManager,
  watchListButtonManager
}) => {
  return (
    <Mutation
      mutation={DELETE_WATCHED_LIST}
      variables={{ prodLinkId: PRODLINK_ID }}
      update={() => refetch()}>
      {(updateProdLinkFromWatchList, { data, error, loading }) => {
        if (loading || error) return null;
        const updateHandler = () => {
          updateProdLinkFromWatchList();
          setWatchListButtonManager(!watchListButtonManager);
        };
        return (
          <div
            className="stats--content favorite"
            onClick={() => updateHandler()}>
            <i className="stats--content--starIcon"></i> {watchListCounter}
          </div>
        );
      }}
    </Mutation>
  );
};
