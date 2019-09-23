import React from 'react';
import Flickity from 'react-flickity-component';
import 'flickity-imagesloaded';

import EmptyWatchList from './EmptyWatchList';
import WatchListCard from './WatchListCard';

import BaseQueryHoc from '../../components/HOCS/Grapqhl/BaseQueryHoc';
import { GET_CONSUMER_WATCHLIST } from '../../Queries/WatchList/WatchListQueries';
// import WachtListContentLoader from '../../components/ContentLoader/WachtListContentLoader';
const FETCPOLICY = 'network-only';

const WatchListScreen = ({ data }) => {
  // TODO: ADD THE UPDATE CACHE METHOD
  const { consumer } = data;
  if (!consumer) {
    return <div>You need to log-in to see your watchList.</div>;
  }
  const { watchList } = consumer;
  const favorites = consumer.favorites ? consumer.favorites : null;
  const { prodLinks } = favorites && favorites;
  // {
  /* console.log(prodLinks); */
  // }
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
    percentPosition: false,
    pageDots: false,
    wrapAround: false,
    freeScroll: false,
    groupCells: true,
    arrowShape: {
      x0: 10,
      x1: 35,
      y1: 80,
      x2: 40,
      y2: 90,
      x3: 15
    }
  };
  if (watchList === null) return <EmptyWatchList />;
  return (
    <Flickity
      className="VideoPlayerContainer watchlistContainer"
      reloadOnUpdate={true}
      options={flickityOptions}>
      {watchList.length !== 0 ? (
        watchList.map((item, key) => (
          <WatchListCard
            item={item}
            key={item.id}
            LikedProdLinksIds={LikedProdLinksId}
            uniqueId={LikedProdLinksId[key]}
          />
        ))
      ) : (
        <EmptyWatchList />
      )}
    </Flickity>
  );
};

export default BaseQueryHoc(
  WatchListScreen,
  GET_CONSUMER_WATCHLIST,
  FETCPOLICY
);
