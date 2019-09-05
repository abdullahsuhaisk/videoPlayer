import React from 'react';
import { Query } from 'react-apollo';
import Flickity from 'react-flickity-component';
import 'flickity-imagesloaded';

import EmptyWatchList from './EmptyWatchList';
import WatchListCard from './WatchListCard';
import { GET_CONSUMER_WATCHLIST } from './WatchListQueries';
import WachtListContentLoader from '../../components/ContentLoader/WachtListContentLoader';

const WatchListScreen = () => {
  // TODO: ADD THE UPDATE CACHE METHOD

  return (
    <>
      <Query query={GET_CONSUMER_WATCHLIST}>
        {({ loading, error, data }) => {
          if (loading) {
            return <WachtListContentLoader />;
          }
          if (error) {
            return null;
          }
          const { consumer } = data;
          if (!consumer) {
            return <div>You need to log-in to see your watchList.</div>;
          }
          const { watchList } = consumer;
          const favorites = consumer.favorites ? consumer.favorites : null;
          const { prodLinks } = favorites;
          const LikedProdLinksId = [];
          prodLinks &&
            prodLinks[0] &&
            prodLinks.map((item) => LikedProdLinksId.push(item.id));
          // TODO: Missing isliked properties from backend!
          // console.log(favorites);
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
                  key > 3 ? null : (
                    <WatchListCard
                      item={item}
                      key={item.id}
                      LikedProdLinksIds={LikedProdLinksId}
                    />
                  )
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
