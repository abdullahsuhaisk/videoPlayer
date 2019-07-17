import React from 'react';
import PropTypes from 'prop-types';
import { StyledComponent } from '../../VideoPauseMenu.style';

const Overlay = (props) => {
  return (
    <React.Fragment>
      <StyledComponent>
        <div className="mainMenu--background"></div>
        <div className="mainMenu--overlay"></div>
      </StyledComponent>
    </React.Fragment>
  );
};

export default Overlay;
