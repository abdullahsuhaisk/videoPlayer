import React from 'react';
import { Query } from 'react-apollo';

import EmptyWatchList from './EmptyWatchList';
import WatchListCard from './WatchListCard';
import { GET_CONSUMER_WATCHLIST } from './WatchListQueries';

const WatchListScreen = () => {
  return (
    <>
      <Query query={GET_CONSUMER_WATCHLIST}>
        {({ loading, error, data: { consumer } }) => {
          if (loading || error) {
            return null;
          }
          const { watchList } = consumer;
          return (
            <div className="VideoPlayerContainer flex-row">
              {watchList.map((item, key) =>
                key > 3 ? null : <WatchListCard item={item} key={item.id} />
              )}
            </div>
          );
        }}
      </Query>
    </>
  );
};

export default WatchListScreen;
