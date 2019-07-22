import React from 'react';
import './Header.styles.css';

import dp from '../../assets/dp.png';

const Header = () => {
  return (
    <React.Fragment>
      <div className="Header">
        <div className="mainMenu--brandInfo">
          <h1 className="company--name">Zara</h1>
          <h5 className="campaign--name">Spring- Summer 2019 Best Creation</h5>
        </div>

        <div className="mainMenu--profileInfo">
          <h6 className="profile--name">Brandon Lee</h6>
          <img className="profile--image" src={dp} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
