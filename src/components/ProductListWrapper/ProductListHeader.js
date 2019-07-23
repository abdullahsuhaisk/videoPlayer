import React from 'react';
import './Header.styles.css';

import dp from './assets/dp.png';

const ProductListHeader = ({
  companyName,
  campaingName,
  profileImage,
  profileName
}) => {
  return (
    <React.Fragment>
      <div className="Header">
        <div className="mainMenu--brandInfo">
          <h1 className="company--name">{companyName}</h1>
          <h5 className="campaign--name">{campaingName}</h5>
        </div>
        <div className="mainMenu--profileInfo">
          <h6 className="profile--name">{profileName}</h6>
          <img
            className="profile--image"
            src={profileImage}
            alt="profileImage"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

ProductListHeader.defaultProps = {
  companyName: 'Zara',
  campaingName: 'Spring- Summer 2019 Best Creation',
  profileImage: dp,
  profileName: 'Brandon Lee'
};

export default ProductListHeader;
