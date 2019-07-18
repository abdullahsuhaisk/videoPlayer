import React from 'react';
import PropTypes from 'prop-types';
import { StyledComponent } from '../../VideoPauseMenu.style';

const Header = (props) => {
  return (
    <React.Fragment>
      <StyledComponent>
        <div className="mainMenu--header">
          <div className="BrandInfo">
            <h1>Zara</h1>
            <h5>Spring- Summer 2019 Best Creation</h5>
          </div>

          <div className="profileInfo">
            <h6>Brandon Lee</h6>
            <img src={props.profileImage} />
          </div>
        </div>
      </StyledComponent>
    </React.Fragment>
  );
};

export default Header;
