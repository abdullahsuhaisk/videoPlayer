import React from 'react';
// import '../../assets/css/template1/Watchlist.css';

const Watchlist = () => {
  return (
    <React.Fragment>
      <div className="watchlist">
        <div className="watchlist--videoContainer">
          <figure className="watchlist--thumbnail">
            <img
              src="/images/watchlist1.png"
              className="watchlist--thumbnail--img"
            />
          </figure>
          <div className="watchlist--brand">
            <img src="/images/inditex.png" className="watchlist--brand-img" />
            <span className="watchlist--brand-span">Inditex</span>
          </div>
          <div className="watchlist--videoTime">
            <span className="watchlist--videoTimeValue">3:19</span>
          </div>
        </div>
        <div className="watchlist--infoContainer">
          <i className="watchlist--settingsSwitch"></i>
          <div className="watchlist--settings">
            <p className="watchlist--settings--delete">Delete</p>
            <p className="watchlist--settings--share">Share</p>
          </div>
          <div className="watchlist--brands">
            <img
              src="/images/addidas-brand.png"
              className="watchlist--brands-icon"
            />
            <img
              src="/images/nike-brand.png"
              className="watchlist--brands-icon"
            />
          </div>
          <h2 className="watchlist--infoContainer--h2">
            Sunglasses Girl in Rainbow Coat Standing Against Railings
          </h2>
          <p className="watchlist--infoContainer--p">
            Women Red Glasses working in the house for more depend on the video
            we like you
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
    </React.Fragment>
  );
};

export default Watchlist;
