import React from 'react';
import './Submenu.styles.css';

import fav from '../../assets/fav.png';
import like from '../../assets/like.png';
import share from '../../assets/share.png';

const Submenu = () => {
  return (
    <React.Fragment>
      <div className="mainMenu--subMenu">
        <div className="subMenu--linksWrapper">
          <a className="subMenu--link">Products in this Scene</a>
          <a className="subMenu--link subMenu--link--active">All Products</a>
          <a className="subMenu--link">Suggested Products</a>
        </div>
        <div className="subMenu--statsWrapper">
          <div className="stats--content">
            <img src={like} />
            <p>123</p>
          </div>
          <div className="stats--content">
            <img src={fav} />
            <p>123</p>
          </div>
          <div className="stats--content">
            <img src={share} />
            <p>123</p>
          </div>
        </div>
      </div>
      <div className="subMenu--underline"></div>
    </React.Fragment>
  );
};

export default Submenu;
