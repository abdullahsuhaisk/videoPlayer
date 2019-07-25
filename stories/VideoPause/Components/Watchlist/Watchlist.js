import React from 'react';
import './Watchlist.styles.css';
const Watchlist = () => {
    return (
        <React.Fragment>
            <div className="watchlist">
                <figure class="watchlist--thumbnail">
                    <img src="/images/watchlist1.png" class="watchlist--thumbnail--img"/>
                </figure>
                <div className="watchlist--infoContainer">
                    <div className="watchlist--brands">
                        <img src="/images/addidas-brand.png" class="watchlist--brands-icon"/>
                        <img src="/images/nike-brand.png" class="watchlist--brands-icon"/>
                    </div>
                    <h2 className="watchlist--infoContainer--h2">Sunglasses Girl in Rainbow Coat Standing Against Railings</h2>
                    <p className="watchlist--infoContainer--p">Women Red Glasses working in the house for more depend on the video we like you</p>
                </div>
                <hr className="watchlist--hr" />
                <div className="watchlist--viewsInfoContainer">
                    <div className="watchlist--iconCintainer"><i className="watchlist--tagsIcon"></i> 24</div>
                    <div className="watchlist--iconCintainer"><i className="watchlist--heartIcon"></i> 40</div>
                    <div className="watchlist--iconCintainer"><i className="watchlist--eyeIcon"></i> 325</div>
                </div>
            </div>
        </React.Fragment>
    );
}; 

export default Watchlist;