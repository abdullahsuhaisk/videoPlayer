import React from 'react';
import { Wrapper } from './ScreenPause.style';
// import template from './template.json';

const ScreenPauseWrapper = ({ styles, children }) => {
  // console.log(playingState);
  return <Wrapper styles={styles}>{children}</Wrapper>;
};

export default ScreenPauseWrapper;
