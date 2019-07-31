import React from 'react';
import EmptyWatchList from './EmptyWatchList';

const WatchlistNew = () => {
  return (
    <React.Fragment>
      <div className="VideoPlayerContainer flex-row">
        <div className="watchlist">
          <div className="watchlist--videoContainer">
            <figure class="watchlist--thumbnail">
              <img
                src="/images/watchlist1.png"
                class="watchlist--thumbnail--img"
              />
            </figure>
            <div className="watchlist--brand">
              <img src="/images/inditex.png" class="watchlist--brand-img" />
              <span className="watchlist--brand-span">Inditex</span>
            </div>
            <div className="watchlist--videoTime">
              <span className="watchlist--videoTimeValue">3:19</span>
            </div>
          </div>
          <div className="watchlist--infoContainer">
            <div className="watchlist--brands">
              <img
                src="/images/addidas-brand.png"
                class="watchlist--brands-icon"
              />
              <img
                src="/images/nike-brand.png"
                class="watchlist--brands-icon"
              />
            </div>
            <h2 className="watchlist--infoContainer--h2">
              Sunglasses Girl in Rainbow Coat Standing Against Railings
            </h2>
            <p className="watchlist--infoContainer--p">
              Women Red Glasses working in the house for more depend on the
              video we like you
            </p>
          </div>
          <hr className="watchlist--hr" />
          <div className="watchlist--viewsInfoContainer">
            <div className="watchlist--iconCintainer">
              <i className="watchlist--tagsIcon"></i> 24
            </div>
            {/* add 'loved' class name beside 'watchlist--heartIcon' class to display red heart */}
            <div className="watchlist--iconCintainer">
              <i className="watchlist--heartIcon"></i> 40
            </div>
            <div className="watchlist--iconCintainer">
              <i className="watchlist--eyeIcon"></i> 325
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const WatchListScreen = () => {
  // TODO: The other screen will be came
  return <WatchlistNew />;
};

export default WatchListScreen;
