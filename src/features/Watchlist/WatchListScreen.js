import React from 'react';
import { Query } from 'react-apollo';

import EmptyWatchList from './EmptyWatchList';
import WatchListCard from './WatchListCard';
import { GET_CONSUMER_WATCHLIST } from './WatchListQueries';
import Flickity from 'react-flickity-component';
import 'flickity-imagesloaded';

const WatchListScreen = () => {
  // TODO: ADD THE UPDATE CACHE METHOD
  return (
    <>
      <Query query={GET_CONSUMER_WATCHLIST}>
        {({ loading, error, data: { consumer } }) => {
          if (loading || error) {
            return null;
          }
          const { watchList } = consumer;
          // console.log(watchList.length);
          const flickityOptions = {
            cellAlign: 'left',
            contain: true,
            resize: false,
            imagesLoaded: true,
            lazyLoad: true,
            percentPosition: false
          };
          return (
            <Flickity
              className="VideoPlayerContainer"
              reloadOnUpdate={true}
              options={flickityOptions}>
              {watchList.length !== 0 ? (
                watchList.map((item, key) =>
                  key > 3 ? null : <WatchListCard item={item} key={item.id} />
                )
              ) : (
                <EmptyWatchList />
              )}
            </Flickity>
          );
        }}
      </Query>
    </>
  );
};

export default WatchListScreen;
